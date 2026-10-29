import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const json = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const sha = (body) => createHash('sha256').update(body).digest('hex');

/** Root entries that belong to committed `docs/` only; the landing build may never provide them. */
export const reserved = ['CNAME', '.nojekyll', '.xrb-publications.json', '.well-known', 'apps', 'uikit'];

async function rejectLinks(dir) {
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    if (item.isSymbolicLink()) throw new Error(`site contains a link: ${item.name}`);
    if (item.isDirectory()) await rejectLinks(path.join(dir, item.name));
  }
}

/**
 * Composes the complete site: the committed `docs/` tree (published app routes
 * and site metadata) plus the landing built into `site/dist/`. The landing may
 * only add files; any path that `docs/` already holds, or a reserved root
 * entry, is refused so a landing change can never alter a published route.
 */
export async function composeSite(root, out) {
  const docs = path.join(root, 'docs'), dist = path.join(root, 'site', 'dist');
  if (!(await fs.lstat(docs)).isDirectory()) throw new Error('docs/ must be a directory');
  await fs.access(path.join(dist, 'index.html')).catch(() => { throw new Error('landing not built: site/dist/index.html missing'); });
  await rejectLinks(docs); await rejectLinks(dist);
  await fs.rm(out, { recursive: true, force: true });
  await fs.cp(docs, out, { recursive: true });
  for (const entry of await fs.readdir(dist)) if (reserved.includes(entry)) throw new Error(`landing output may not provide ${entry}`);
  async function overlay(from, to, relative) {
    for (const item of await fs.readdir(from, { withFileTypes: true })) {
      const rel = relative ? `${relative}/${item.name}` : item.name;
      const target = path.join(to, item.name);
      const existing = await fs.lstat(target).catch(() => null);
      if (item.isDirectory()) {
        if (existing && !existing.isDirectory()) throw new Error(`landing output collides with docs/${rel}`);
        await fs.mkdir(target, { recursive: true });
        await overlay(path.join(from, item.name), target, rel);
      } else {
        if (existing) throw new Error(`landing output collides with docs/${rel}`);
        await fs.copyFile(path.join(from, item.name), target);
      }
    }
  }
  await overlay(dist, out, '');
  return out;
}

/** Checks a complete composed site tree: root files, domain, inventory, route markers and associations. */
export async function checkSite(site) {
  if (!(await fs.lstat(site)).isDirectory()) throw new Error('site root must be a directory');
  await rejectLinks(site);
  for (const relative of ['CNAME', 'index.html', '.nojekyll', '.xrb-publications.json', '.well-known/assetlinks.json'])
    await fs.access(path.join(site, relative));
  if ((await fs.readFile(path.join(site, 'CNAME'), 'utf8')).trim() !== 'xrbuild.dev') throw new Error('site domain mismatch');
  const inventory = await json(path.join(site, '.xrb-publications.json'));
  if (inventory.version !== 1 || !Array.isArray(inventory.publications) || new Set(inventory.publications.map((p) => p.id)).size !== inventory.publications.length || new Set(inventory.publications.map((p) => p.slug)).size !== inventory.publications.length)
    throw new Error('invalid publication inventory');
  for (const item of inventory.publications) {
    if (!uuid.test(item.id) || !slugPattern.test(item.slug) || !/^[a-f0-9]{64}$/.test(item.contentHash) || !/^[a-f0-9]{64}$/.test(item.indexHash) || !Number.isFinite(item.publishedMs)) throw new Error('invalid publication record');
    const marker = await json(path.join(site, 'apps', item.slug, '.xrb-publication.json'));
    if (marker.id !== item.id || marker.slug !== item.slug || marker.contentHash !== item.contentHash || marker.indexHash !== item.indexHash) throw new Error(`route marker mismatch: ${item.slug}`);
    if (sha(await fs.readFile(path.join(site, 'apps', item.slug, 'index.html'))) !== item.indexHash) throw new Error(`route index mismatch: ${item.slug}`);
  }
  if (!Array.isArray(await json(path.join(site, '.well-known/assetlinks.json')))) throw new Error('invalid association document');
  return { site, inventory };
}
