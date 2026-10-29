import fs from 'node:fs/promises';
import path from 'node:path';
import { launchBrowser } from './browser.mjs';
import { createServer } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const publicDir = path.join(root, 'public');
const output = path.join(publicDir, 'assets', 'landing');
const mark = await fs.readFile(path.join(root, 'src', 'mark.svg'), 'utf8');
const dataUrl = `data:image/svg+xml;base64,${Buffer.from(mark).toString('base64')}`;

function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, bytes }, i) => {
    const entry = 6 + i * 16;
    header.writeUInt8(size, entry); header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(bytes.length, entry + 8); header.writeUInt32LE(offset, entry + 12);
    offset += bytes.length;
  });
  return Buffer.concat([header, ...images.map(({ bytes }) => bytes)]);
}

async function main() {
  await fs.mkdir(output, { recursive: true });
  await fs.mkdir(path.join(publicDir, 'assets', 'social'), { recursive: true });
  await fs.copyFile(path.join(root, 'src', 'assets', 'model-license.txt'), path.join(output, 'model-license.txt'));
  let browser, server;
  try {
    browser = await launchBrowser();
    const icons = new Map();
    for (const size of [16, 32, 48, 180, 192, 512]) {
      const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
      await page.setContent(`<html><body style="margin:0"><img src="${dataUrl}" width="${size}" height="${size}"></body></html>`);
      await page.locator('img').evaluate(img => img.decode());
      icons.set(size, await page.screenshot({ type: 'png', omitBackground: true }));
      await page.close();
    }
    for (const [size, filename] of [[16, 'favicon-16x16.png'], [32, 'favicon-32x32.png'], [180, 'apple-touch-icon.png'], [192, 'android-chrome-192x192.png'], [512, 'android-chrome-512x512.png']])
      await fs.writeFile(path.join(publicDir, filename), icons.get(size));
    await fs.writeFile(path.join(publicDir, 'favicon.ico'), ico([16, 32, 48].map(size => ({ size, bytes: icons.get(size) }))));
    await fs.writeFile(path.join(publicDir, 'site.webmanifest'), JSON.stringify({
      name: 'XR Build', short_name: 'XR',
      icons: [192, 512].map(size => ({ src: `/android-chrome-${size}x${size}.png`, sizes: `${size}x${size}`, type: 'image/png' })),
      theme_color: '#0b0c0e', background_color: '#0b0c0e', display: 'browser',
    }, null, 2) + '\n');

    server = await createServer({ configFile: path.join(root, 'vite.config.mjs'), server: { host: '127.0.0.1', port: 0, strictPort: false }, logLevel: 'error' });
    await server.listen();
    const origin = `http://127.0.0.1:${server.httpServer.address().port}`;
    for (const spec of [
      { width: 1440, height: 900, scale: 1, file: path.join(output, 'still-desktop.png'), canvas: true },
      { width: 390, height: 844, scale: 1, file: path.join(output, 'still-mobile.png'), canvas: true },
      { width: 1200, height: 630, scale: 2, file: path.join(publicDir, 'assets/social/landing-wide.png') },
      { width: 1080, height: 1080, scale: 1, file: path.join(publicDir, 'assets/social/landing-square.png') },
    ]) {
      const page = await browser.newPage({ viewport: { width: spec.width, height: spec.height }, deviceScaleFactor: spec.scale, reducedMotion: 'reduce' });
      // Block runtime network assets: a missing local dependency must not silently
      // become a CDN fetch during asset generation.
      await page.route('**/*', route => {
        const url = route.request().url();
        return url.startsWith(origin) || url.startsWith('data:') ? route.continue() : route.abort();
      });
      await page.goto(`${origin}/?capture=1`, { waitUntil: 'networkidle' });
      await page.waitForSelector('.scene-stage[data-state="ready"]', { timeout: 45000 });
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      if (spec.canvas) {
        const png = await page.locator('canvas').evaluate(canvas => canvas.toDataURL('image/png').split(',')[1]);
        await fs.writeFile(spec.file, Buffer.from(png, 'base64'));
      } else {
        await page.addStyleTag({ content: '.hero { min-height: 100svh; }' });
        await page.screenshot({ path: spec.file, type: 'png' });
      }
      await page.close();
      console.log(`Generated ${path.relative(publicDir, spec.file)}`);
    }
    console.log('Generated XR icon set, manifest, matching 3D fallback stills and social previews.');
  } finally {
    await browser?.close();
    await server?.close();
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
