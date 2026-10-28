import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inProject = (file) => path.join(root, file);

test('the production build contains website and headset launch assets', async () => {
  const [index, manifestText, sourceManifest, icon, sourceIcon, projectText, main, overlay, viteConfig] = await Promise.all([
    readFile(inProject('dist/index.html'), 'utf8'),
    readFile(inProject('dist/manifest.webmanifest'), 'utf8'),
    readFile(inProject('public/manifest.webmanifest'), 'utf8'),
    readFile(inProject('dist/icon.png')),
    readFile(inProject('icon.png')),
    readFile(inProject('xrb-project.json'), 'utf8'),
    readFile(inProject('src/main.js'), 'utf8'),
    readFile(inProject('src/return-overlay.js'), 'utf8'),
    readFile(inProject('vite.config.js'), 'utf8'),
  ]);
  const manifest = JSON.parse(manifestText);
  const project = JSON.parse(projectText);
  assert.match(index, /<link\s+rel="manifest"\s+href="\.\/manifest\.webmanifest">/);
  assert.equal(manifestText, sourceManifest);
  assert.equal(manifest.name, project.plugins.headset.title);
  assert.equal(manifest.start_url, './?xrb-xr=enter');
  assert.equal(manifest.scope, './');
  assert.equal(manifest.icons[0].src, 'icon.png');
  assert.deepEqual(icon, sourceIcon);
  assert.ok(project.target === undefined || project.target === 'webxr');
  assert.equal(project.publication.enabled, true);
  assert.match(main, /from '@xr-build\/sdk'/);
  assert.match(main, /from '@xr-build\/ui-kit'/);
  assert.match(main, /xrb\.setAnimationLoop/);
  assert.match(main, /xrb\.enterXR/);
  assert.match(main, /xrb-return/);
  assert.match(overlay, /Back to launcher/);
  assert.match(viteConfig, /launcher-return-overlay|return-overlay\.js/);
});
