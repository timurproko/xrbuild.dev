import { chromium } from 'playwright';

export async function launchBrowser() {
  if (process.env.BROWSER_CHANNEL) return chromium.launch({ channel: process.env.BROWSER_CHANNEL, headless: true });
  try { return await chromium.launch({ headless: true }); }
  catch {
    try { return await chromium.launch({ channel: 'chrome', headless: true }); }
    catch (cause) { throw new Error('Install the browser with `pnpm exec playwright install chromium`, or set BROWSER_CHANNEL to an installed browser.', { cause }); }
  }
}
