import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, test } from 'node:test';
import { buildFiles, checkSite, project, update } from './site.mjs';

const source = path.resolve(import.meta.dirname, '..');
const roots = [];
afterEach(async () => { await Promise.all(roots.splice(0).map((dir) => fs.rm(dir, { recursive: true, force: true }))); });
async function fixture() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'public-site-'));
  roots.push(dir);
  await fs.cp(path.join(source, 'docs'), path.join(dir, 'docs'), { recursive: true });
  await fs.mkdir(path.join(dir, 'projects', 'core', 'ui-kit'), { recursive: true });
  await fs.copyFile(path.join(source, 'projects', 'core', 'ui-kit', 'xrb-project.json'), path.join(dir, 'projects', 'core', 'ui-kit', 'xrb-project.json'));
  const entry = path.join(dir, 'output');
  await fs.mkdir(entry);
  await fs.writeFile(path.join(entry, 'index.html'), '<html>verified output</html>');
  return { dir, entry };
}
const digest = async (file) => createHash('sha256').update(await fs.readFile(file)).digest('hex');

test('production dispatch is limited to main and never runs on pull requests', async () => {
  const workflow = await fs.readFile(path.join(source, '.github', 'workflows', 'publish-app.yml'), 'utf8');
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /github\.ref == 'refs\/heads\/main'/);
  assert.doesNotMatch(workflow, /pull_request:/);
  assert.match(workflow, /permission-contents: read/);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /inputs\.operation != 'redeploy'/);
});

test('only approved committed project identities may publish', async () => {
  const { dir } = await fixture();
  await assert.rejects(project(dir, '../private'), /not approved/);
  assert.equal((await project(dir, 'ui-kit')).slug, 'ui-kit');
  const manifestFile = path.join(dir, 'projects', 'core', 'ui-kit', 'xrb-project.json');
  const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'));
  manifest.publication.id = 'bad';
  await fs.writeFile(manifestFile, JSON.stringify(manifest));
  await assert.rejects(project(dir, 'ui-kit'), /invalid/);
});

test('publishing changes only one owned route and its inventory', async () => {
  const { dir, entry } = await fixture();
  const site = path.join(dir, 'docs');
  const preserved = ['index.html', 'CNAME', '.well-known/assetlinks.json', 'uikit/index.html'];
  const before = await Promise.all(preserved.map((rel) => digest(path.join(site, rel))));
  const result = await update(dir, 'ui-kit', 'publish', entry);
  assert.equal(result.inventory.publications.length, 1);
  assert.equal(result.inventory.publications[0].id, result.id);
  assert.equal(result.inventory.publications[0].indexHash, await digest(path.join(entry, 'index.html')));
  assert.deepEqual(await Promise.all(preserved.map((rel) => digest(path.join(site, rel)))), before);
  assert.deepEqual((await checkSite(dir)).inventory, result.inventory);
});

test('unpublish preserves unrelated paths and explicitly retires owned association', async () => {
  const { dir } = await fixture();
  const site = path.join(dir, 'docs');
  const rootHash = await digest(path.join(site, 'index.html'));
  await update(dir, 'ui-kit', 'unpublish');
  assert.equal((await checkSite(dir)).inventory.publications.length, 0);
  assert.equal(await digest(path.join(site, 'index.html')), rootHash);
  await assert.rejects(fs.access(path.join(site, 'apps', 'ui-kit', 'index.html')));
  const links = JSON.parse(await fs.readFile(path.join(site, '.well-known/assetlinks.json'), 'utf8'));
  assert.equal(links.some((link) => link?.target?.package_name === 'com.xrbuild.uikit'), false);
});

test('unsafe build and missing index never change the site', async () => {
  const { dir, entry } = await fixture();
  const file = path.join(dir, 'docs', '.xrb-publications.json');
  const before = await digest(file);
  await fs.rm(path.join(entry, 'index.html'));
  await assert.rejects(update(dir, 'ui-kit', 'publish', entry), /no index.html/);
  await fs.writeFile(path.join(entry, 'index.html'), 'ok');
  await fs.writeFile(path.join(entry, '.env.local'), 'secret');
  await assert.rejects(buildFiles(entry), /unsafe/);
  assert.equal(await digest(file), before);
});

test('an oversized app is refused without reading or uploading its bytes', async () => {
  const { entry } = await fixture();
  const file = await fs.open(path.join(entry, 'oversized.bin'), 'w');
  try { await file.truncate(500 * 1024 * 1024 + 1); } finally { await file.close(); }
  await assert.rejects(buildFiles(entry), /exceeds publication limit/);
});

test('collision, foreign route and site links are rejected', async () => {
  const { dir, entry } = await fixture();
  const inventoryFile = path.join(dir, 'docs', '.xrb-publications.json');
  const inventory = JSON.parse(await fs.readFile(inventoryFile, 'utf8'));
  inventory.publications[0].id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  await fs.writeFile(inventoryFile, JSON.stringify(inventory));
  await assert.rejects(update(dir, 'ui-kit', 'publish', entry), /marker mismatch/);
  await fs.writeFile(inventoryFile, await fs.readFile(path.join(source, 'docs', '.xrb-publications.json')));
  try {
    await fs.symlink(path.join(dir, 'projects'), path.join(dir, 'docs', 'bad-link'), 'junction');
    await assert.rejects(checkSite(dir), /link/);
  } catch (error) { if (error.code !== 'EPERM') throw error; }
});
