import fs from 'node:fs/promises';
import path from 'node:path';

const site = process.env.SITE_DIR ? path.resolve(process.env.SITE_DIR) : path.join(process.cwd(), '_site');

globalThis.fetch = async (input) => {
  const url = new URL(input);
  if (url.hostname === 'api.github.com' && url.pathname.endsWith('/pages'))
    return new Response(JSON.stringify({ build_type: 'workflow', cname: 'xrbuild.dev', https_enforced: true, html_url: 'https://xrbuild.dev/' }), { status: 200 });
  if (url.hostname !== 'xrbuild.dev') throw new Error(`unexpected test fetch: ${url}`);
  let relative = url.pathname.replace(/^\/+/, '');
  if (!relative || relative.endsWith('/')) relative += 'index.html';
  if (process.env.MOCK_FAIL_ROUTE === relative) return new Response('Unavailable', { status: 503 });
  try { return new Response(await fs.readFile(path.join(site, relative)), { status: 200 }); }
  catch { return new Response('Not found', { status: 404 }); }
};
