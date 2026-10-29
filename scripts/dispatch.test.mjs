import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { test } from 'node:test';

const source = path.resolve(import.meta.dirname, '..');
const git = (cwd, ...args) => execFileSync('git', args, { cwd, encoding: 'utf8', windowsHide: true }).trim();

async function fixture(t) {
  const base = await fs.mkdtemp(path.join(os.tmpdir(), 'site-redeploy-'));
  t.after(() => fs.rm(base, { recursive: true, force: true }));
  const repo = path.join(base, 'repo');
  await fs.mkdir(repo);
  git(repo, 'init', '-b', 'main');
  git(repo, 'config', 'user.name', 'Fixture'); git(repo, 'config', 'user.email', 'fixture@example.invalid');
  await fs.cp(path.join(source, 'docs'), path.join(repo, 'docs'), { recursive: true });
  for (const rel of ['scripts/site.mjs', 'scripts/dispatch.mjs']) {
    await fs.mkdir(path.dirname(path.join(repo, rel)), { recursive: true });
    await fs.copyFile(path.join(source, rel), path.join(repo, rel));
  }
  await fs.writeFile(path.join(repo, 'source.txt'), 'app source stays private');
  await fs.writeFile(path.join(repo, '.gitignore'), 'site/dist/\n');
  git(repo, 'add', '.'); git(repo, 'commit', '-m', 'baseline');
  // The landing build output is never committed; the workflow builds it before validation.
  await fs.mkdir(path.join(repo, 'site', 'dist'), { recursive: true });
  await fs.writeFile(path.join(repo, 'site', 'dist', 'index.html'), '<!doctype html><title>fixture landing</title>');
  const original = git(repo, 'rev-parse', 'HEAD');
  const request = '33333333-3333-4333-8333-333333333333';
  const siteDir = path.join(base, 'composed');
  const run = (command, env = {}) => execFileSync(process.execPath, [
    '--import', pathToFileURL(path.join(source, 'scripts/mock-pages.mjs')).href,
    path.join(repo, 'scripts/dispatch.mjs'), command,
  ], { cwd: repo, encoding: 'utf8', windowsHide: true,
    env: { ...process.env, GITHUB_TOKEN: 'fixture', GITHUB_EVENT_NAME: 'workflow_dispatch', EXPECTED_COMMIT: original, REQUEST_ID: request, SITE_DIR: siteDir, MOCK_VERIFY_DELAY: '1', ...env } });
  return { repo, original, siteDir, run };
}

test('a panel redeploy accepts only the exact reviewed site commit and a bounded request ID', async (t) => {
  const f = await fixture(t);
  assert.match(f.run('validate'), /Validated complete site at [0-9a-f]{40} \(redeploy\)/);
  assert.throws(() => f.run('validate', { EXPECTED_COMMIT: 'f'.repeat(40) }), /Command failed/);
  assert.throws(() => f.run('validate', { REQUEST_ID: 'injection; echo danger' }), /Command failed/);
  assert.throws(() => f.run('validate', { EXPECTED_COMMIT: '', REQUEST_ID: '' }), /Command failed/, 'a dispatch without its inputs is refused');
  assert.throws(() => f.run('stage'), /Command failed/);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD'), f.original);
});

test('a push of main composes the committed routes with the built landing', async (t) => {
  const f = await fixture(t);
  assert.match(f.run('validate', { GITHUB_EVENT_NAME: 'push', EXPECTED_COMMIT: '', REQUEST_ID: '' }), /\(push\)/);
  assert.equal(await fs.readFile(path.join(f.siteDir, 'index.html'), 'utf8'), '<!doctype html><title>fixture landing</title>');
  await fs.access(path.join(f.siteDir, 'apps', 'ui-kit', 'index.html'));
  await fs.rm(path.join(f.repo, 'site', 'dist', 'index.html'));
  assert.throws(() => f.run('validate', { GITHUB_EVENT_NAME: 'push', EXPECTED_COMMIT: '', REQUEST_ID: '' }), /Command failed/, 'no landing build, no site');
  assert.equal(git(f.repo, 'status', '--porcelain'), '');
});

test('verification checks the complete composed site but never mutates source or site', async (t) => {
  const f = await fixture(t);
  f.run('validate');
  assert.match(f.run('verify'), /Verified root, inventory, associations/);
  assert.throws(() => f.run('verify', { MOCK_FAIL_ROUTE: 'apps/ui-kit/index.html' }), /Command failed/);
  assert.throws(() => f.run('verify', { MOCK_FAIL_ROUTE: 'index.html' }), /Command failed/);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD'), f.original);
  assert.equal(git(f.repo, 'status', '--porcelain'), '');
});

test('workflow builds only the landing, deploys the composed tree and keeps the panel redeploy contract', async () => {
  const workflow = await fs.readFile(path.join(source, '.github/workflows/publish-app.yml'), 'utf8');
  assert.match(workflow, /XRB_REDEPLOY_ONLY_V1/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /push:\n\s+branches: \[main\]/);
  assert.match(workflow, /path: _site\//);
  assert.match(workflow, /EXPECTED_COMMIT: \$\{\{ inputs.expected_commit \}\}/);
  assert.match(workflow, /working-directory: site\n\s+run: npm ci/);
  assert.doesNotMatch(workflow, /create-github-app-token|private-core|pnpm|inputs\.project|contents: write|operation:/);
});
