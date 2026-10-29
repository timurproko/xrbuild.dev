import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { test } from 'node:test';
import { BoxGeometry } from 'three';
import { createCoating, addCoatingCoordinates } from '../src/coating.js';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const pngSize = bytes => {
  assert.equal(bytes.subarray(1, 4).toString(), 'PNG');
  return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
};

test('standard XR favicon family and manifest agree on size and identity', async () => {
  for (const [file, size] of [['favicon-16x16.png', 16], ['favicon-32x32.png', 32], ['apple-touch-icon.png', 180], ['android-chrome-192x192.png', 192], ['android-chrome-512x512.png', 512]])
    assert.deepEqual(pngSize(await fs.readFile(path.join(dist, file))), [size, size]);
  const ico = await fs.readFile(path.join(dist, 'favicon.ico'));
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  for (const [i, size] of [16, 32, 48].entries()) {
    const entry = 6 + i * 16;
    assert.equal(ico[entry], size);
    const offset = ico.readUInt32LE(entry + 12), length = ico.readUInt32LE(entry + 8);
    assert.deepEqual(pngSize(ico.subarray(offset, offset + length)), [size, size]);
  }
  const manifest = JSON.parse(await fs.readFile(path.join(dist, 'site.webmanifest')));
  assert.equal(manifest.short_name, 'XR');
  for (const icon of manifest.icons) {
    const size = Number(icon.sizes.split('x')[0]);
    assert.deepEqual(pngSize(await fs.readFile(path.join(dist, icon.src))), [size, size]);
  }
  assert.match(await fs.readFile(path.join(root, 'src/mark.svg'), 'utf8'), /aria-label="XR"/);
});

test('social metadata references actual, correctly sized images and local fonts', async () => {
  const html = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
  assert.match(html, /rel="canonical" href="https:\/\/xrbuild.dev\/"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /property="og:image:width" content="2400"/);
  assert.match(html, /property="og:image:height" content="1260"/);
  assert.deepEqual(pngSize(await fs.readFile(path.join(dist, 'assets/social/landing-wide.png'))), [2400, 1260]);
  assert.deepEqual(pngSize(await fs.readFile(path.join(dist, 'assets/social/landing-square.png'))), [1080, 1080]);
  assert.doesNotMatch(html, /fonts\.googleapis|fonts\.gstatic|<script[^>]+src="https?:/);
  for (const file of ['space-grotesk-variable.ttf', 'archivo-black.ttf']) assert.ok((await fs.stat(path.join(dist, 'assets/landing/fonts', file))).size > 50000);
});

test('downloaded assets match pinned provenance and retain their notices', async () => {
  for (const [file, expected] of [
    ['optical-glasses.glb', '25d72dd0869c99f94a3c0d6dfe0707714eca056e531f6ff77e7545719c86ab8c'],
    ['studio-small.hdr', 'f6a989f89432eb4eee3191364a9c1ceed195c4ec3544173a3c04fd96cb91d0ba'],
  ]) assert.equal(createHash('sha256').update(await fs.readFile(path.join(root, 'src/assets', file))).digest('hex'), expected);
  const notice = await fs.readFile(path.join(dist, 'assets/landing/model-license.txt'), 'utf8');
  assert.match(notice, /Eric Chadwick/); assert.match(notice, /CC BY 4.0/); assert.match(notice, /CC0 1.0/);
  for (const file of ['OFL.txt', 'archivo-black-OFL.txt']) assert.match(await fs.readFile(path.join(dist, 'assets/landing/fonts', file), 'utf8'), /SIL OPEN FONT LICENSE/i);
});

test('optical coating is smooth, periodic and uses finite geometry coordinates', () => {
  const texture = createCoating();
  const { data, width, height } = texture.image;
  for (let i = 0; i < data.length; i += 4) {
    assert.ok(data[i] > 0 && data[i] < 255);
    assert.equal(data[i], data[i + 1]); assert.equal(data[i], data[i + 2]); assert.equal(data[i + 3], 255);
  }
  for (let y = 0; y < height; y++) assert.ok(Math.abs(data[(y * width) * 4] - data[(y * width + width - 1) * 4]) < 9);
  for (let x = 0; x < width; x++) assert.ok(Math.abs(data[x * 4] - data[((height - 1) * width + x) * 4]) < 9);
  const geometry = new BoxGeometry(4, 2, .1);
  addCoatingCoordinates(geometry);
  for (const value of geometry.attributes.uv.array) assert.ok(Number.isFinite(value) && value >= 0 && value <= 1);
  texture.dispose(); geometry.dispose();
});

test('build owns only landing output, never existing publication state or source', async () => {
  const files = [];
  async function walk(dir, prefix = '') {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const relative = prefix + entry.name;
      assert.equal(entry.isSymbolicLink(), false);
      if (entry.isDirectory()) await walk(path.join(dir, entry.name), relative + '/');
      else files.push(relative);
    }
  }
  await walk(dist);
  const rootFiles = /^(index\.html|favicon\.ico|favicon-(16x16|32x32)\.png|apple-touch-icon\.png|android-chrome-(192x192|512x512)\.png|site\.webmanifest)$/;
  for (const file of files) assert.ok(rootFiles.test(file) || file.startsWith('assets/landing/') || /^assets\/social\/landing-(wide|square)\.png$/.test(file), `Unexpected output: ${file}`);
  assert.equal(files.some(file => /(^|\/)(package\.json|README\.md|CNAME|\.xrb-publications\.json)|\.map$/.test(file)), false);
  const source = await fs.readFile(path.join(root, 'src/index.html'), 'utf8');
  for (const removed of ['PHYSICAL FORM. DIGITAL POSSIBILITY.', 'Explore the study', 'Look a little closer', 'Find your way', 'Stay with the work', 'Set the mood', 'Asset credits', 'Explore the live UI Kit']) assert.equal(source.includes(removed), false, removed);
  assert.match(source, /title-line-inner">Build beyond<\/span>/);
  assert.match(source, /title-line-inner">the screen<\/span>/);
  assert.doesNotMatch(source, /the screen\.<\/span>/);
  const subtitle = source.match(/<p>(.*?)<\/p>/)?.[1];
  assert.equal(subtitle, 'Create and publish interactive experiences for screens and headsets.');
  assert.doesNotMatch(subtitle, /3d/i);
  assert.doesNotMatch(source, /<section|<h2|type="range"|<footer/);
  await assert.rejects(fs.access(path.join(root, 'xrb-project.json')));
});
