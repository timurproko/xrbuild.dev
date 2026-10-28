import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { checkSite } from './site.mjs';

const source = path.resolve(import.meta.dirname, '..');

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'published-site-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const site = path.join(root, 'docs');
  await fs.cp(path.join(source, 'docs'), site, { recursive: true });
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
  return { root, slug };
}

test('current public repository needs only committed output, not app sources', async () => {
  await assert.rejects(fs.access(path.join(source, 'projects')));
  await assert.rejects(fs.access(path.join(source, 'README.md')));
  await assert.rejects(fs.access(path.join(source, 'PUBLISHING.md')));
  const { inventory } = await checkSite(source);
  assert.equal(inventory.version, 1);
});

test('complete site retains root, routes, domain, inventory and associations', async (t) => {
  const { root, slug } = await fixture(t);
  const { site, inventory } = await checkSite(root);
  assert.equal(site, path.join(root, 'docs'));
  assert.ok(inventory.publications.some((item) => item.slug === slug));
  await fs.writeFile(path.join(site, 'CNAME'), 'unrelated.example');
  await assert.rejects(checkSite(root), /domain mismatch/);
});

test('route identity and index content must match the inventory', async (t) => {
  const { root, slug } = await fixture(t);
  const site = path.join(root, 'docs');
  const marker = path.join(site, 'apps', slug, '.xrb-publication.json');
  const original = await fs.readFile(marker);
  const altered = JSON.parse(original);
  altered.id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  await fs.writeFile(marker, JSON.stringify(altered));
  await assert.rejects(checkSite(root), /route marker mismatch/);
  await fs.writeFile(marker, original);
  await fs.writeFile(path.join(site, 'apps', slug, 'index.html'), 'tampered');
  await assert.rejects(checkSite(root), /route index mismatch/);
});

test('inventory, association document and site links are checked', async (t) => {
  const { root } = await fixture(t);
  const site = path.join(root, 'docs');
  const inventoryFile = path.join(site, '.xrb-publications.json');
  const original = await fs.readFile(inventoryFile);
  const inventory = JSON.parse(original);
  inventory.publications.push(inventory.publications[0]);
  await fs.writeFile(inventoryFile, JSON.stringify(inventory));
  await assert.rejects(checkSite(root), /invalid publication inventory/);
  await fs.writeFile(inventoryFile, original);
  await fs.writeFile(path.join(site, '.well-known', 'assetlinks.json'), '{}');
  await assert.rejects(checkSite(root), /invalid association document/);
  await fs.writeFile(path.join(site, '.well-known', 'assetlinks.json'), '[]');
  try {
    await fs.symlink(site, path.join(site, 'bad-link'), 'junction');
    await assert.rejects(checkSite(root), /site contains a link/);
  } catch (error) { if (error.code !== 'EPERM') throw error; }
});
