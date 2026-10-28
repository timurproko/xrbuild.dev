import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  catalogEndpoints,
  currentPublicationSlug,
  descriptionFromHtml,
  loadCatalog,
  loadWorkspaceCatalog,
  normalizeInventory,
  titleFromHtml,
  titleFromSlug,
} from '../src/catalog.js';

test('inventory validation sorts newest publications first', () => {
  assert.deepEqual(normalizeInventory({ version: 1, publications: [
    { id: 'one', slug: 'first-app', publishedMs: 10 },
    { id: 'two', slug: 'second-app', publishedMs: 20 },
  ]}).map((item) => item.slug), ['second-app', 'first-app']);
  assert.throws(() => normalizeInventory({ version: 2, publications: [] }), /unsupported format/);
  assert.throws(() => normalizeInventory({ version: 1, publications: [
    { id: 'one', slug: 'same', publishedMs: 10 },
    { id: 'two', slug: 'same', publishedMs: 20 },
  ]}), /duplicate/);
});

test('catalog paths stay at the publication origin', () => {
  const endpoints = catalogEndpoints('https://example.test/apps/launcher/');
  assert.equal(endpoints.inventory.href, 'https://example.test/.xrb-publications.json');
  assert.equal(endpoints.apps.href, 'https://example.test/apps/');
  assert.equal(currentPublicationSlug('/apps/launcher/'), 'launcher');
  assert.equal(currentPublicationSlug('/'), null);
});

test('titles are readable with or without publication metadata', () => {
  assert.equal(titleFromSlug('hello-xr-world'), 'Hello Xr World');
  assert.equal(titleFromHtml('<title>Control &amp; Status</title>'), 'Control & Status');
  assert.equal(titleFromHtml('<main>No title</main>'), null);
  assert.equal(descriptionFromHtml('<meta name="description" content="Spatial controls &amp; tools.">'), 'Spatial controls & tools.');
  assert.equal(descriptionFromHtml('<main>No description</main>'), null);
});

test('panel preview lists the workspace apps a publisher reports published, without contacting the production inventory', async () => {
  const requests = [];
  const status = (state) => ({ publicationStandalone: { status: { state } } });
  const fetchImpl = async (input) => {
    requests.push(new URL(input).pathname);
    return Response.json({ projects: [
      { id: 'launcher', ...status('published'), manifest: { kind: 'app', name: 'Launcher', target: 'webxr', publication: { enabled: true, slug: 'launcher' }, scripts: { build: 'build' } } },
      { id: 'ui-kit', entryExists: true, ...status('published'), manifest: { kind: 'app', name: 'UI Kit', target: 'webxr', platform: 'headset', publication: { enabled: true, id: 'one', slug: 'ui-kit' } } },
      { id: 'offline', entryExists: true, ...status('failed'), manifest: { kind: 'app', name: 'Offline', target: 'webxr', publication: { enabled: true, slug: 'offline' } } },
      { id: 'globe', entryExists: true, ...status('unpublished'), manifest: { kind: 'app', name: 'Globe', target: 'webxr', publication: { enabled: true, slug: 'globe' } } },
      { id: 'desktop', entryExists: true, manifest: { kind: 'app', name: 'Desktop' } },
      { id: 'not-built', ...status('published'), manifest: { kind: 'app', name: 'Not Built', target: 'webxr', publication: { enabled: true } } },
      { id: 'rig-check', entryExists: true, ...status('published'), manifest: { kind: 'test', name: 'Rig Check', publication: { enabled: true } } },
    ] });
  };
  const apps = await loadWorkspaceCatalog({ fetchImpl, baseHref: 'http://127.0.0.1:5180/preview/launcher/' });
  assert.deepEqual(requests, ['/api/projects']);
  assert.deepEqual(apps.map(({ title, slug }) => [title, slug]), [['Launcher', 'launcher'], ['UI Kit', 'ui-kit']],
    'published and live, whatever the current platform; not one the site does not serve, nor a set-up but unpublished, unbuilt or test one');
  assert.equal(apps[1].launchUrl, 'http://127.0.0.1:5180/preview/ui-kit/?xrb-xr=enter');
  assert.equal(apps[1].iconUrl, 'http://127.0.0.1:5180/api/projects/ui-kit/icon');
  await assert.rejects(loadWorkspaceCatalog({ fetchImpl: async () => new Response('', { status: 404 }), baseHref: 'http://127.0.0.1:5180/' }), /workspace apps \(404\)/);
});

test('panel preview asks again while publishers are still checking', async () => {
  let calls = 0;
  const fetchImpl = async () => Response.json({ projects: [{ id: 'globe', entryExists: true,
    publicationStandalone: { status: { state: ++calls < 3 ? 'checking' : 'published' } }, manifest: { kind: 'app', name: 'Globe' } }] });
  const apps = await loadWorkspaceCatalog({ fetchImpl, baseHref: 'http://127.0.0.1:5180/preview/launcher/', retryMs: 1 });
  assert.equal(calls, 3);
  assert.deepEqual(apps.map((app) => app.title), ['Globe']);
});

test('catalog enriches inventory with same-origin app metadata and immersive launch URLs', async () => {
  const requests = [];
  const fetchImpl = async (input) => {
    const url = new URL(input);
    requests.push(url);
    if (url.pathname === '/.xrb-publications.json') return Response.json({ version: 1, publications: [
      { id: 'one', slug: 'ui-kit', publishedMs: 20 },
      { id: 'two', slug: 'plain-app', publishedMs: 10 },
    ] });
    if (url.pathname === '/apps/ui-kit/manifest.webmanifest') return Response.json({
      name: 'XRBuild',
      description: 'Shared spatial controls.',
      icons: [{ src: './art/icon.png' }],
    });
    if (url.pathname === '/apps/ui-kit/') return new Response('<title>UI Kit</title>');
    if (url.pathname === '/apps/plain-app/manifest.webmanifest') return new Response('', { status: 404 });
    if (url.pathname === '/apps/plain-app/') return new Response('<main>Untitled</main>');
    return new Response('', { status: 404 });
  };

  const apps = await loadCatalog({ fetchImpl, baseHref: 'https://example.test/apps/launcher/', token: 'test' });
  assert.deepEqual(apps.map(({ title, slug }) => ({ title, slug })), [
    { title: 'UI Kit', slug: 'ui-kit' },
    { title: 'Plain App', slug: 'plain-app' },
  ]);
  assert.equal(apps[0].description, 'Shared spatial controls.');
  assert.equal(apps[1].description, 'Published XR experience.');
  assert.equal(apps[0].iconUrl, 'https://example.test/apps/ui-kit/art/icon.png');
  assert.equal(apps[0].launchUrl, 'https://example.test/apps/ui-kit/?xrb-xr=enter');
  assert.ok(requests.every((url) => url.searchParams.get('xrb-launcher') === 'test'));
});
