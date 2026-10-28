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
  await fs.writeFile(path.join(repo, 'source.txt'), 'source stays private');
  git(repo, 'add', '.'); git(repo, 'commit', '-m', 'baseline');
  const original = git(repo, 'rev-parse', 'HEAD');
  const request = '33333333-3333-4333-8333-333333333333';
  const run = (command, env = {}) => execFileSync(process.execPath, [
    '--import', pathToFileURL(path.join(source, 'scripts/mock-pages.mjs')).href,
    path.join(repo, 'scripts/dispatch.mjs'), command,
  ], { cwd: repo, encoding: 'utf8', windowsHide: true,
    env: { ...process.env, GITHUB_TOKEN: 'fixture', EXPECTED_COMMIT: original, REQUEST_ID: request, MOCK_VERIFY_DELAY: '1', ...env } });
  return { repo, original, run };
}

test('redeploy accepts only the exact reviewed site commit and a bounded request ID', async (t) => {
  const f = await fixture(t);
  assert.match(f.run('validate'), /Validated complete site/);
  assert.throws(() => f.run('validate', { EXPECTED_COMMIT: 'f'.repeat(40) }), /Command failed/);
  assert.throws(() => f.run('validate', { REQUEST_ID: 'injection; echo danger' }), /Command failed/);
  assert.throws(() => f.run('stage'), /Command failed/);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD'), f.original);
});

test('redeploy checks complete public site but never mutates source or site', async (t) => {
  const f = await fixture(t);
  assert.match(f.run('verify'), /Verified root, inventory, associations/);
  assert.throws(() => f.run('verify', { MOCK_FAIL_ROUTE: 'apps/ui-kit/index.html' }), /Command failed/);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD'), f.original);
  assert.equal(git(f.repo, 'status', '--porcelain'), '');
});

test('workflow only deploys a pinned complete docs tree and has no source builder or private key', async () => {
  const workflow = await fs.readFile(path.join(source, '.github/workflows/publish-app.yml'), 'utf8');
  assert.match(workflow, /XRB_REDEPLOY_ONLY_V1/);
  assert.match(workflow, /path: docs\//);
  assert.match(workflow, /EXPECTED_COMMIT: \$\{\{ inputs.expected_commit \}\}/);
  assert.doesNotMatch(workflow, /create-github-app-token|private-core|pnpm|inputs\.project|contents: write|operation:/);
});
