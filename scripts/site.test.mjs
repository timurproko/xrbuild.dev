import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { checkSite, updateLanding } from './site.mjs';

const source = path.resolve(import.meta.dirname, '..');
const landing = '<!doctype html><title>fixture landing</title>';

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'published-site-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const docs = path.join(root, 'docs');
  await fs.cp(path.join(source, 'docs'), docs, { recursive: true });
  await fs.mkdir(path.join(root, 'site'), { recursive: true });
  await fs.copyFile(path.join(source, 'site', 'landing-output.json'), path.join(root, 'site', 'landing-output.json'));
  const dist = path.join(root, 'site', 'dist');
  await fs.mkdir(path.join(dist, 'assets', 'landing'), { recursive: true });
  await fs.writeFile(path.join(dist, 'index.html'), landing);
  await fs.writeFile(path.join(dist, 'assets', 'landing', 'index.js'), 'console.log("landing")');
  const id = randomUUID(), slug = `fixture-${id.slice(0, 8)}`, index = '<html>fixture route</html>';
  const record = { id, slug, contentHash: 'a'.repeat(64), indexHash: createHash('sha256').update(index).digest('hex'), publishedMs: Date.now() };
  const route = path.join(docs, 'apps', slug);
  await fs.mkdir(route, { recursive: true });
  await fs.writeFile(path.join(route, 'index.html'), index);
  await fs.writeFile(path.join(route, '.xrb-publication.json'), JSON.stringify({ version: 1, ...record }));
  const inventoryFile = path.join(docs, '.xrb-publications.json'), inventory = JSON.parse(await fs.readFile(inventoryFile, 'utf8'));
  inventory.publications.push(record); await fs.writeFile(inventoryFile, JSON.stringify(inventory));
  return { root, docs, dist, slug };
}

test('repository commits the complete branch-served site and keeps landing source separate', async () => {
  await fs.access(path.join(source, 'docs', 'index.html'));
  await fs.access(path.join(source, 'site', 'landing-output.json'));
  await fs.access(path.join(source, 'site', 'src', 'index.html'));
  await assert.rejects(fs.access(path.join(source, 'projects')));
  const manifest = JSON.parse(await fs.readFile(path.join(source, 'site', 'landing-output.json'), 'utf8'));
  assert.equal(manifest.version, 1); assert.ok(manifest.files.includes('index.html'));
  for (const file of manifest.files) assert.ok(await fs.stat(path.join(source, 'docs', ...file.split('/'))));
});

test('landing update replaces only recorded output and preserves publication state', async (t) => {
  const { root, docs, slug } = await fixture(t);
  await updateLanding(root);
  assert.equal(await fs.readFile(path.join(docs, 'index.html'), 'utf8'), landing);
  await fs.access(path.join(docs, 'assets', 'landing', 'index.js'));
  await fs.access(path.join(docs, 'apps', slug, 'index.html'));
  await fs.access(path.join(docs, 'CNAME'));
  assert.equal((await checkSite(docs)).site, docs);
});

test('landing update rejects reserved output and unowned collisions', async (t) => {
  const { root, docs, dist } = await fixture(t);
  await fs.writeFile(path.join(dist, 'CNAME'), 'other.example');
  await assert.rejects(updateLanding(root), /may not provide CNAME/);
  await fs.rm(path.join(dist, 'CNAME'));
  await fs.writeFile(path.join(docs, 'unowned.txt'), 'publication-owned');
  await fs.writeFile(path.join(dist, 'unowned.txt'), 'landing');
  await assert.rejects(updateLanding(root), /collides with docs\/unowned.txt/);
});

test('directly served site validates route identity, domain and associations', async (t) => {
  const { root, docs, slug } = await fixture(t);
  await updateLanding(root);
  const marker = path.join(docs, 'apps', slug, '.xrb-publication.json'), original = await fs.readFile(marker);
  const altered = JSON.parse(original); altered.id = randomUUID();
  await fs.writeFile(marker, JSON.stringify(altered));
  await assert.rejects(checkSite(docs), /route marker mismatch/);
  await fs.writeFile(marker, original);
  await fs.writeFile(path.join(docs, 'CNAME'), 'other.example');
  await assert.rejects(checkSite(docs), /domain mismatch/);
});
