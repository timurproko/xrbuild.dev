import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { checkSite, composeSite } from './site.mjs';

const root = path.resolve(import.meta.dirname, '..');
const siteDir = process.env.SITE_DIR ? path.resolve(process.env.SITE_DIR) : path.join(root, '_site');
const sha = (body) => createHash('sha256').update(body).digest('hex');
const commit = () => execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();

async function pagesReady() {
  const response = await fetch('https://api.github.com/repos/timurproko/xrbuild.dev/pages', {
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}`, accept: 'application/vnd.github+json' },
  });
  if (!response.ok) throw new Error(`Pages configuration unavailable (${response.status})`);
  const pages = await response.json();
  if (pages.build_type !== 'workflow' || pages.cname !== 'xrbuild.dev' || !pages.https_enforced || new URL(pages.html_url).origin !== 'https://xrbuild.dev')
    throw new Error('Pages must serve xrbuild.dev with Actions and enforced HTTPS');
}

// A panel redeploy names the exact commit and a request ID; a push of main carries neither.
function checkRequest() {
  const expected = process.env.EXPECTED_COMMIT ?? '', request = process.env.REQUEST_ID ?? '';
  if (!expected && !request) {
    if (process.env.GITHUB_EVENT_NAME && !/^(push|pull_request)$/.test(process.env.GITHUB_EVENT_NAME)) throw new Error('a redeploy request needs the site commit and a panel request identifier');
    return 'push';
  }
  if (!/^[0-9a-f]{40}$/.test(expected) || expected !== commit()) throw new Error('workflow does not match the requested site commit');
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(request)) throw new Error('invalid panel request identifier');
  return 'redeploy';
}

async function verify() {
  await pagesReady();
  const { site, inventory } = await checkSite(siteDir);
  const request = async (relative) => {
    const response = await fetch(`https://xrbuild.dev/${relative}${relative.includes('?') ? '&' : '?'}xrb=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`public route ${relative} returned ${response.status}`);
    return Buffer.from(await response.arrayBuffer());
  };
  const expected = [
    ['', await fs.readFile(path.join(site, 'index.html'))],
    ['.xrb-publications.json', await fs.readFile(path.join(site, '.xrb-publications.json'))],
    ['.well-known/assetlinks.json', await fs.readFile(path.join(site, '.well-known/assetlinks.json'))],
  ];
  for (const [relative, body] of expected) if (sha(await request(relative)) !== sha(body)) throw new Error(`deployed ${relative || 'root'} differs from the composed site`);
  for (const item of inventory.publications) {
    const marker = JSON.parse((await request(`apps/${item.slug}/.xrb-publication.json`)).toString('utf8'));
    if (marker.id !== item.id || marker.slug !== item.slug || marker.contentHash !== item.contentHash || marker.indexHash !== item.indexHash) throw new Error(`deployed marker differs: ${item.slug}`);
    if (sha(await request(`apps/${item.slug}/`)) !== item.indexHash) throw new Error(`deployed route differs: ${item.slug}`);
  }
  console.log(`Verified root, inventory, associations and ${inventory.publications.length} published route(s) at xrbuild.dev`);
}

try {
  if (process.argv[2] === 'validate') {
    const kind = checkRequest();
    await pagesReady();
    await composeSite(root, siteDir);
    await checkSite(siteDir);
    console.log(`Validated complete site at ${commit()} (${kind})`);
  } else if (process.argv[2] === 'verify') {
    for (let i = 0; i < 30; i++) {
      try { await verify(); process.exit(0); } catch (error) { if (i === 29) throw error; await new Promise((resolve) => setTimeout(resolve, process.env.MOCK_VERIFY_DELAY === '1' ? 1 : 10000)); }
    }
  } else throw new Error('only site validation and verification are supported');
} catch (error) { console.error(error.message); process.exitCode = 1; }
