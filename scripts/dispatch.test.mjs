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
  const base = await fs.mkdtemp(path.join(os.tmpdir(), 'site-dispatch-'));
  t.after(() => fs.rm(base, { recursive: true, force: true }));
  const repo = path.join(base, 'repo'), remote = path.join(base, 'remote.git');
  await fs.mkdir(repo);
  git(base, 'init', '--bare', remote);
  git(repo, 'init', '-b', 'main');
  git(repo, 'config', 'user.name', 'Fixture'); git(repo, 'config', 'user.email', 'fixture@example.invalid');
  await fs.cp(path.join(source, 'docs'), path.join(repo, 'docs'), { recursive: true });
  for (const rel of ['scripts/site.mjs', 'scripts/dispatch.mjs', 'projects/core/ui-kit/xrb-project.json']) {
    await fs.mkdir(path.dirname(path.join(repo, rel)), { recursive: true });
    await fs.copyFile(path.join(source, rel), path.join(repo, rel));
  }
  await fs.writeFile(path.join(repo, 'package.json'), '{"private":true}');
  await fs.writeFile(path.join(repo, 'pnpm-workspace.yaml'), 'packages: []\n');
  await fs.writeFile(path.join(repo, 'pnpm-lock.yaml'), 'lockfileVersion: 9.0\n');
  await fs.writeFile(path.join(repo, 'source.txt'), 'source remains unchanged\n');
  git(repo, 'add', '.'); git(repo, 'commit', '-m', 'baseline');
  git(repo, 'remote', 'add', 'origin', remote); git(repo, 'push', 'origin', 'main');
  const original = git(repo, 'rev-parse', 'HEAD');
  const entry = path.join(base, 'dist');
  await fs.mkdir(entry); await fs.writeFile(path.join(entry, 'index.html'), '<html>new version</html>');
  const output = path.join(base, 'output');
  const run = (...args) => execFileSync(process.execPath, ['--import', pathToFileURL(path.join(source, 'scripts/mock-pages.mjs')).href, path.join(repo, 'scripts/dispatch.mjs'), ...args], {
    cwd: repo, encoding: 'utf8', windowsHide: true,
    env: { ...process.env, GITHUB_TOKEN: 'fixture', GITHUB_OUTPUT: output, BUILD_SHA: original, APP_ENTRY: entry, ATTEMPTED_COMMIT: git(repo, 'rev-parse', 'HEAD') },
  });
  return { repo, remote, original, output, entry, run };
}

test('Actions stage preserves source, unrelated site and can revert its exact commit', async (t) => {
  const f = await fixture(t);
  const sourceBefore = git(f.repo, 'rev-parse', 'HEAD:source.txt');
  const rootBefore = git(f.repo, 'rev-parse', 'HEAD:docs/index.html');
  const otherBefore = git(f.repo, 'rev-parse', 'HEAD:docs/uikit/index.html');
  f.run('stage', 'publish', 'ui-kit');
  const deployed = git(f.repo, 'rev-parse', 'HEAD');
  assert.notEqual(deployed, f.original);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD:source.txt'), sourceBefore);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD:docs/index.html'), rootBefore);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD:docs/uikit/index.html'), otherBefore);
  assert.equal(git(f.repo, 'rev-parse', 'origin/main'), deployed);
  assert.match(await fs.readFile(f.output, 'utf8'), new RegExp(`commit=${deployed}`));
  f.run('verify');
  assert.throws(() => execFileSync(process.execPath, [
    '--import', pathToFileURL(path.join(source, 'scripts/mock-pages.mjs')).href,
    path.join(f.repo, 'scripts/dispatch.mjs'), 'verify',
  ], { cwd: f.repo, encoding: 'utf8', env: { ...process.env, GITHUB_TOKEN: 'fixture', MOCK_FAIL_ROUTE: 'apps/ui-kit/index.html', MOCK_VERIFY_DELAY: '1' } }), /deployed route differs|returned 503|Command failed/);
  execFileSync(process.execPath, [path.join(f.repo, 'scripts/dispatch.mjs'), 'rollback'], {
    cwd: f.repo, encoding: 'utf8', env: { ...process.env, ATTEMPTED_COMMIT: deployed },
  });
  assert.equal(git(f.repo, 'rev-parse', 'HEAD:docs'), git(f.repo, 'rev-parse', `${f.original}:docs`));
  f.run('verify');
});

test('Actions stage refuses changed app source after build', async (t) => {
  const f = await fixture(t);
  await fs.appendFile(path.join(f.repo, 'projects/core/ui-kit/xrb-project.json'), '\n');
  git(f.repo, 'add', '.'); git(f.repo, 'commit', '-m', 'app changed'); git(f.repo, 'push', 'origin', 'main');
  assert.throws(() => f.run('stage', 'publish', 'ui-kit'), /source changed|Command failed/);
  assert.equal(git(f.repo, 'rev-parse', 'HEAD:docs'), git(f.repo, 'rev-parse', `${f.original}:docs`));
});
