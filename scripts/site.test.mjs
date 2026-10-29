import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { checkSite, composeSite } from './site.mjs';

const source = path.resolve(import.meta.dirname, '..');
const landing = '<!doctype html><title>fixture landing</title>';

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'published-site-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const site = path.join(root, 'docs');
  await fs.cp(path.join(source, 'docs'), site, { recursive: true });
  const dist = path.join(root, 'site', 'dist');
  await fs.mkdir(path.join(dist, 'assets', 'landing'), { recursive: true });
  await fs.writeFile(path.join(dist, 'index.html'), landing);
  await fs.writeFile(path.join(dist, 'assets', 'landing', 'index.js'), 'console.log("landing")');
  const id = randomUUID();
  const slug = `fixture-${id.slice(0, 8)}`;
  const index = '<html>fixture route</html>';
  const record = { id, slug, contentHash: 'a'.repeat(64), indexHash: createHash('sha256').update(index).digest('hex'), publishedMs: Date.now() };
  const route = path.join(site, 'apps', slug);
  await fs.mkdir(route, { recursive: true });
  await fs.writeFile(path.join(route, 'index.html'), index);
  await fs.writeFile(path.join(route, '.xrb-publication.json'), JSON.stringify({ version: 1, ...record }));
  const inventoryFile = path.join(site, '.xrb-publications.json');
  const inventory = JSON.parse(await fs.readFile(inventoryFile, 'utf8'));
  inventory.publications.push(record);
  await fs.writeFile(inventoryFile, JSON.stringify(inventory));
  return { root, out: path.join(root, '_site'), dist, slug };
}

test('public repository holds committed app output and the landing source, never app sources', async () => {
  await assert.rejects(fs.access(path.join(source, 'projects')));
  await assert.rejects(fs.access(path.join(source, 'README.md')));
  await assert.rejects(fs.access(path.join(source, 'PUBLISHING.md')));
  await assert.rejects(fs.access(path.join(source, 'docs', 'index.html')), 'the root page is built from site/, not committed');
  await fs.access(path.join(source, 'site', 'src', 'index.html'));
  await fs.access(path.join(source, 'site', 'package-lock.json'));
  const scripts = JSON.parse(await fs.readFile(path.join(source, 'site', 'package.json'), 'utf8')).scripts;
  assert.equal(scripts.build, 'vite build');
  for (const value of Object.values(scripts)) assert.doesNotMatch(value, /pnpm|XRB_CORE|deploy|gh /);
});

test('composed site keeps committed routes and adds the built landing', async (t) => {
  const { root, out, slug } = await fixture(t);
  await composeSite(root, out);
  const { site, inventory } = await checkSite(out);
  assert.equal(site, out);
  assert.equal(await fs.readFile(path.join(out, 'index.html'), 'utf8'), landing);
  await fs.access(path.join(out, 'assets', 'landing', 'index.js'));
  assert.ok(inventory.publications.some((item) => item.slug === slug));
  assert.equal(await fs.readFile(path.join(out, 'CNAME'), 'utf8'), await fs.readFile(path.join(root, 'docs', 'CNAME'), 'utf8'));
  // Composing again starts from a clean tree.
  await fs.writeFile(path.join(out, 'stale.txt'), 'stale');
  await composeSite(root, out);
  await assert.rejects(fs.access(path.join(out, 'stale.txt')));
});

test('landing output can never replace committed site content', async (t) => {
  const { root, out, dist } = await fixture(t);
  await fs.mkdir(path.join(dist, 'apps', 'other'), { recursive: true });
  await fs.writeFile(path.join(dist, 'apps', 'other', 'index.html'), 'hijack');
  await assert.rejects(composeSite(root, out), /may not provide apps/);
  await fs.rm(path.join(dist, 'apps'), { recursive: true });
  await fs.writeFile(path.join(dist, 'CNAME'), 'other.example');
  await assert.rejects(composeSite(root, out), /may not provide CNAME/);
  await fs.rm(path.join(dist, 'CNAME'));
  await fs.writeFile(path.join(root, 'docs', 'extra.txt'), 'committed');
  await fs.writeFile(path.join(dist, 'extra.txt'), 'built');
  await assert.rejects(composeSite(root, out), /collides with docs\/extra.txt/);
  await fs.rm(path.join(dist, 'extra.txt'));
  await fs.rm(path.join(dist, 'index.html'));
  await assert.rejects(composeSite(root, out), /landing not built/);
});

test('complete site retains root, routes, domain, inventory and associations', async (t) => {
  const { root, out, slug } = await fixture(t);
  await composeSite(root, out);
  const { inventory } = await checkSite(out);
  assert.ok(inventory.publications.some((item) => item.slug === slug));
  await fs.writeFile(path.join(out, 'CNAME'), 'unrelated.example');
  await assert.rejects(checkSite(out), /domain mismatch/);
  await fs.rm(path.join(out, 'index.html'));
  await assert.rejects(checkSite(out));
});

test('route identity and index content must match the inventory', async (t) => {
  const { root, out, slug } = await fixture(t);
  await composeSite(root, out);
  const marker = path.join(out, 'apps', slug, '.xrb-publication.json');
  const original = await fs.readFile(marker);
  const altered = JSON.parse(original);
  altered.id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  await fs.writeFile(marker, JSON.stringify(altered));
  await assert.rejects(checkSite(out), /route marker mismatch/);
  await fs.writeFile(marker, original);
  await fs.writeFile(path.join(out, 'apps', slug, 'index.html'), 'tampered');
  await assert.rejects(checkSite(out), /route index mismatch/);
});

test('inventory, association document and site links are checked', async (t) => {
  const { root, out } = await fixture(t);
  await composeSite(root, out);
  const inventoryFile = path.join(out, '.xrb-publications.json');
  const original = await fs.readFile(inventoryFile);
  const inventory = JSON.parse(original);
  inventory.publications.push(inventory.publications[0]);
  await fs.writeFile(inventoryFile, JSON.stringify(inventory));
  await assert.rejects(checkSite(out), /invalid publication inventory/);
  await fs.writeFile(inventoryFile, original);
  await fs.writeFile(path.join(out, '.well-known', 'assetlinks.json'), '{}');
  await assert.rejects(checkSite(out), /invalid association document/);
  await fs.writeFile(path.join(out, '.well-known', 'assetlinks.json'), '[]');
  try {
    await fs.symlink(out, path.join(out, 'bad-link'), 'junction');
    await assert.rejects(checkSite(out), /site contains a link/);
  } catch (error) { if (error.code !== 'EPERM') throw error; }
});
