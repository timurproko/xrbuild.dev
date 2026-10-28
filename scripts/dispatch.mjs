import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { buildFiles, checkSite, project, update } from './site.mjs';

const root = path.resolve(import.meta.dirname, '..');
const [command, operation, key] = process.argv.slice(2);
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const sha = (body) => createHash('sha256').update(body).digest('hex');
const output = async (key, value) => { if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `${key}=${value}\n`); };

async function pagesReady() {
  const response = await fetch('https://api.github.com/repos/timurproko/xrbuild.dev/pages', {
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}`, accept: 'application/vnd.github+json' },
  });
  if (!response.ok) throw new Error(`Pages configuration unavailable (${response.status})`);
  const pages = await response.json();
  if (pages.build_type !== 'workflow' || pages.cname !== 'xrbuild.dev' || !pages.https_enforced || new URL(pages.html_url).origin !== 'https://xrbuild.dev')
    throw new Error('Pages must serve xrbuild.dev with Actions and enforced HTTPS before publication');
}

async function verify() {
  await pagesReady();
  const { site, inventory } = await checkSite(root);
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
  for (const [relative, body] of expected) if (sha(await request(relative)) !== sha(body)) throw new Error(`deployed ${relative || 'root'} differs from committed docs`);
  for (const item of inventory.publications) {
    const marker = JSON.parse((await request(`apps/${item.slug}/.xrb-publication.json`)).toString('utf8'));
    if (marker.id !== item.id || marker.slug !== item.slug || marker.contentHash !== item.contentHash) throw new Error(`deployed marker differs: ${item.slug}`);
    if (sha(await request(`apps/${item.slug}/`)) !== item.indexHash) throw new Error(`deployed route differs: ${item.slug}`);
  }
  if (process.env.REMOVED_SLUG) {
    const response = await fetch(`https://xrbuild.dev/apps/${process.env.REMOVED_SLUG}/.xrb-publication.json?xrb=${Date.now()}`, { cache: 'no-store' });
    if (response.status !== 404) throw new Error(`retired route ${process.env.REMOVED_SLUG} is still served (${response.status})`);
  }
  console.log(`Verified root, inventory, associations and ${inventory.publications.length} published route(s) at xrbuild.dev`);
}

async function stage() {
  await pagesReady();
  const selected = operation === 'redeploy' ? null : await project(root, key);
  const built = process.env.BUILD_SHA;
  const entry = process.env.APP_ENTRY;
  for (let attempt = 1; attempt <= 3; attempt++) {
    git('fetch', 'origin', 'main');
    git('checkout', '-B', 'publication-attempt', 'origin/main');
    if (selected && built) {
      try { git('diff', '--quiet', built, 'HEAD', '--', selected.relative, 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'package.json', 'scripts', '.github/workflows/publish-app.yml'); }
      catch { throw new Error('project source changed after Build; rerun the workflow'); }
    }
    const updated = selected ? await update(root, key, operation, entry) : null;
    if (!selected) await checkSite(root);
    if (selected) {
      git('add', '-A', '--', 'docs');
      const staged = git('diff', '--cached', '--name-only').split('\n').filter(Boolean);
      if (!staged.length || staged.some((name) => !name.startsWith('docs/'))) throw new Error('no safe site-only update to deploy');
      git('config', 'user.name', 'XR Build Publication');
      git('config', 'user.email', 'publisher@xrbuild.local');
      git('commit', '-m', `${operation} apps/${selected.slug}`);
      try { git('push', 'origin', 'HEAD:main'); }
      catch (error) {
        if (attempt === 3 || !/non-fast-forward|fetch first|failed to push some refs|rejected/i.test(String(error.stderr ?? error.message))) throw error;
        continue;
      }
    }
    await output('commit', git('rev-parse', 'HEAD'));
    if (updated?.current && (operation === 'unpublish' || updated.current.slug !== updated.slug)) await output('removed', updated.current.slug);
    return;
  }
  throw new Error('site kept changing; no publication was pushed');
}

async function rollback() {
  const attempted = process.env.ATTEMPTED_COMMIT;
  if (!/^[0-9a-f]{40}$/.test(attempted ?? '')) throw new Error('missing site commit to revert');
  git('fetch', 'origin', 'main');
  if (git('rev-parse', 'origin/main') !== attempted) throw new Error('main advanced; refusing an unsafe automatic rollback');
  git('checkout', '-B', 'publication-rollback', 'origin/main');
  git('config', 'user.name', 'XR Build Publication');
  git('config', 'user.email', 'publisher@xrbuild.local');
  git('revert', '--no-edit', attempted);
  git('push', 'origin', 'HEAD:main');
  await checkSite(root);
  console.log('Reverted site update; deploy and verify the previous complete docs tree');
}

try {
  if (command === 'validate') {
    if (!['publish', 'unpublish', 'redeploy', 'rehearse'].includes(operation)) throw new Error('unknown workflow operation');
    if (operation !== 'redeploy') await project(root, key);
    if (operation === 'unpublish' && process.env.CONFIRM_REMOVAL !== 'true') throw new Error('Unpublish requires explicit confirmation');
    await checkSite(root);
  } else if (command === 'check-build') {
    await buildFiles(process.env.APP_ENTRY);
  } else if (command === 'rehearse') {
    await buildFiles(process.env.APP_ENTRY);
    await update(root, key, 'publish', process.env.APP_ENTRY);
    await checkSite(root);
    console.log('Rehearsal validated the built app and site tree; no push or deployment');
  } else if (command === 'stage' && ['publish', 'unpublish', 'redeploy'].includes(operation)) await stage();
  else if (command === 'verify') {
    for (let i = 0; i < 30; i++) {
      try { await verify(); process.exit(0); } catch (error) { if (i === 29) throw error; await new Promise((resolve) => setTimeout(resolve, 10000)); }
    }
  } else if (command === 'rollback') await rollback();
  else throw new Error('unknown publication command');
} catch (error) { console.error(error.message); process.exitCode = 1; }
