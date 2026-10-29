import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { test } from 'node:test';
import { preview } from 'vite';
import { launchBrowser } from '../scripts/browser.mjs';

const root = path.resolve(import.meta.dirname, '..');
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const rotation = value => value.split(',').map(Number);
const maxDifference = (a, b) => Math.max(...a.map((value, i) => Math.abs(value - b[i])));

test('production hero: local assets, subtle motion and resilient rendering', { timeout: 180000 }, async t => {
  const server = await preview({ configFile: path.join(root, 'vite.config.mjs'), preview: { host: '127.0.0.1', port: 0, strictPort: false }, logLevel: 'error' });
  const origin = `http://127.0.0.1:${server.httpServer.address().port}`;
  const browser = await launchBrowser();
  t.after(async () => { await browser.close(); await new Promise(resolve => server.httpServer.close(resolve)); });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const errors = [], remote = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => { if (/^https?:/.test(request.url()) && !request.url().startsWith(origin)) remote.push(request.url()); });
  await page.goto(origin, { waitUntil: 'networkidle' });
  await page.waitForSelector('.scene-stage[data-state="ready"]', { timeout: 45000 });

  await t.test('selected single-screen content has no discarded narrative or UI', async () => {
    assert.equal(await page.locator('main').count(), 1);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('h2, section, input, footer').count(), 0);
    assert.equal((await page.locator('.hero-copy p').innerText()).includes('3D'), false);
    assert.match(await page.title(), /Build beyond the screen/);
    assert.deepEqual(remote, []); assert.deepEqual(errors, []);
  });

  await t.test('reduced motion remains still with final, stable camera framing', async () => {
    const first = digest(await page.locator('canvas').screenshot());
    const camera = await page.locator('.scene-stage').getAttribute('data-camera');
    await page.waitForTimeout(450);
    assert.equal(digest(await page.locator('canvas').screenshot()), first);
    assert.equal(await page.locator('.scene-stage').getAttribute('data-animating'), 'false');
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForSelector('.scene-stage[data-state="ready"]', { timeout: 45000 });
    assert.equal(await page.locator('.scene-stage').getAttribute('data-camera'), camera);
    assert.equal(await page.locator('canvas').evaluate(element => getComputedStyle(element).transform), 'none');
  });

  await t.test('ambient rotation is slight, frame-bounded and pauses without a resume jump', async () => {
    const normal = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' });
    await normal.goto(origin, { waitUntil: 'networkidle' });
    await normal.waitForSelector('.scene-stage[data-state="ready"]', { timeout: 45000 });
    const stage = normal.locator('.scene-stage');
    const first = rotation(await stage.getAttribute('data-rotation'));
    const firstCoating = await stage.getAttribute('data-coating');
    const camera = await stage.getAttribute('data-camera');
    const frames = Number(await stage.getAttribute('data-render-count'));
    await normal.waitForTimeout(1800);
    const next = rotation(await stage.getAttribute('data-rotation'));
    assert.ok(maxDifference(first, next) > .0005);
    assert.ok(maxDifference(first, next) < .03);
    assert.notEqual(await stage.getAttribute('data-coating'), firstCoating);
    assert.equal(await stage.getAttribute('data-camera'), camera);
    assert.ok(Number(await stage.getAttribute('data-render-count')) - frames <= 65);
    // Deterministic visibility simulation exercises the same handler as a real
    // hidden tab, without relying on headless browser window-focus semantics.
    await normal.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); });
    const pausedRotation = rotation(await stage.getAttribute('data-rotation'));
    const pausedFrames = await stage.getAttribute('data-render-count');
    const pausedCoating = await stage.getAttribute('data-coating');
    await normal.waitForTimeout(600);
    assert.equal(await stage.getAttribute('data-render-count'), pausedFrames);
    assert.equal(await stage.getAttribute('data-coating'), pausedCoating);
    await normal.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => false }); document.dispatchEvent(new Event('visibilitychange')); });
    await normal.waitForTimeout(100);
    assert.ok(maxDifference(pausedRotation, rotation(await stage.getAttribute('data-rotation'))) < .003);
    await normal.emulateMedia({ reducedMotion: 'reduce' });
    await normal.waitForTimeout(80);
    const stopped = await stage.getAttribute('data-render-count');
    await normal.waitForTimeout(300);
    assert.equal(await stage.getAttribute('data-render-count'), stopped);
    await normal.close();
  });

  await t.test('phone and tablet compositions retain copy without horizontal overflow', async () => {
    const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    await phone.goto(origin, { waitUntil: 'networkidle' });
    await phone.waitForSelector('.scene-stage[data-state="ready"]', { timeout: 45000 });
    for (const [width, height] of [[320, 740], [400, 836], [430, 932], [768, 1024], [900, 945], [1024, 768], [1920, 1080]]) {
      await phone.setViewportSize({ width, height });
      await phone.waitForTimeout(100);
      assert.equal(await phone.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width}x${height}`);
      const copy = await phone.locator('.hero-copy').boundingBox();
      assert.ok(copy.x >= 20 && copy.x + copy.width <= width);
      assert.ok(copy.y > 80 && copy.y + copy.height <= Math.max(740, height));
    }
    await phone.close();
  });

  await t.test('no-script and unavailable WebGL show matching static artwork', async () => {
    const staticPage = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await staticPage.goto(origin, { waitUntil: 'networkidle' });
    assert.equal(await staticPage.locator('h1').count(), 1);
    assert.equal(await staticPage.locator('.scene-still img').evaluate(image => image.naturalWidth > 0), true);
    assert.equal(await staticPage.locator('.scene-still').evaluate(element => getComputedStyle(element).display), 'block');
    await staticPage.close();
    const blocked = await browser.newPage({ viewport: { width: 900, height: 700 } });
    await blocked.addInitScript(() => {
      const original = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...args) { return /webgl/i.test(type) ? null : original.call(this, type, ...args); };
    });
    await blocked.goto(origin, { waitUntil: 'networkidle' });
    await blocked.waitForSelector('.scene-stage[data-state="fallback"]');
    assert.equal(await blocked.locator('.scene-still').evaluate(element => getComputedStyle(element).display), 'block');
    await blocked.close();
  });

  await t.test('context loss tears down rendering and reveals the still', async () => {
    const supported = await page.locator('canvas').evaluate(canvas => {
      const extension = canvas.getContext('webgl2')?.getExtension('WEBGL_lose_context');
      if (!extension) return false;
      extension.loseContext(); return true;
    });
    assert.equal(supported, true);
    await page.waitForSelector('.scene-stage[data-state="fallback"]');
    assert.equal(await page.locator('.scene-stage canvas').count(), 0);
    assert.equal(await page.locator('.scene-still').evaluate(element => getComputedStyle(element).display), 'block');
  });
});
