import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const json = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const sha = (body) => createHash('sha256').update(body).digest('hex');

export async function checkSite(root) {
  const site = path.join(root, 'docs');
  async function rejectLinks(dir) {
    for (const item of await fs.readdir(dir, { withFileTypes: true })) {
      if (item.isSymbolicLink()) throw new Error(`site contains a link: ${item.name}`);
      if (item.isDirectory()) await rejectLinks(path.join(dir, item.name));
    }
  }
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
