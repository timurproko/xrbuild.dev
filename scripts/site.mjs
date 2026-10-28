import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

export const projects = Object.freeze({ 'ui-kit': 'projects/core/ui-kit', 'control-room': 'projects/apps/control-room' });
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const excluded = new Set(['.env', '.git', '.github']);
const extensions = new Set(['.key', '.map', '.p12', '.pem', '.pfx']);
const json = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const writeJson = (file, value) => fs.writeFile(file, JSON.stringify(value, null, 2) + '\n');
const sha = (body) => createHash('sha256').update(body).digest('hex');

export async function project(root, key) {
  const relative = projects[key];
  if (!relative) throw new Error('project is not approved for production publication');
  const folder = path.join(root, relative);
  const manifest = await json(path.join(folder, 'xrb-project.json'));
  const pub = manifest.publication;
  const slug = pub?.routes?.['production-web'] ?? pub?.slug;
  if (pub?.enabled !== true || pub?.publisher !== 'production-web' || !uuid.test(pub.id) || !slugPattern.test(slug) || slug.length > 63 || slug !== pub.slug || ['assets', 'archive', 'root'].includes(slug))
    throw new Error('approved project publication identity is invalid');
  return { folder, relative, id: pub.id, slug, packageId: manifest.plugins?.headset?.id };
}

export async function buildFiles(folder) {
  const files = [];
  let total = 0;
  async function visit(dir, prefix = '') {
    for (const item of await fs.readdir(dir, { withFileTypes: true })) {
      const relative = prefix ? `${prefix}/${item.name}` : item.name;
      if (item.isSymbolicLink() || excluded.has(item.name.toLowerCase()) || extensions.has(path.extname(item.name).toLowerCase()))
        throw new Error(`unsafe build output: ${relative}`);
      if (item.isDirectory()) await visit(path.join(dir, item.name), relative);
      else if (item.isFile()) {
        const size = (await fs.stat(path.join(dir, item.name))).size;
        total += size;
        files.push(relative);
        if (files.length > 20_000 || total > 500 * 1024 * 1024) throw new Error('build exceeds publication limit');
      } else throw new Error(`unsupported build output: ${relative}`);
    }
  }
  if (!(await fs.lstat(folder)).isDirectory()) throw new Error('build entry must be a directory');
  await visit(folder);
  if (!files.includes('index.html')) throw new Error('build has no index.html');
  return files.sort();
}

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

export async function update(root, key, operation, entry) {
  if (operation !== 'publish' && operation !== 'unpublish') throw new Error('unsupported publication operation');
  const selected = await project(root, key);
  const { site, inventory } = await checkSite(root);
  const current = inventory.publications.find((p) => p.id === selected.id);
  if (inventory.publications.some((p) => p.slug === selected.slug && p.id !== selected.id)) throw new Error('publication route belongs to another ID');
  const route = path.join(site, 'apps', selected.slug);
  if (!current && await fs.access(route).then(() => true, () => false)) throw new Error('route exists without an ownership record');
  if (operation === 'publish') {
    const files = await buildFiles(entry);
    const hash = createHash('sha256');
    const contents = [];
    for (const rel of files) {
      const body = await fs.readFile(path.join(entry, rel));
      contents.push([rel, body]);
      hash.update(rel); hash.update('\0'); hash.update(body); hash.update('\0');
    }
    if (current && current.slug !== selected.slug) await fs.rm(path.join(site, 'apps', current.slug), { recursive: true, force: true });
    await fs.rm(route, { recursive: true, force: true });
    for (const [rel, body] of contents) {
      const dest = path.join(route, rel);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.writeFile(dest, body);
    }
    const record = { id: selected.id, slug: selected.slug, contentHash: hash.digest('hex'), indexHash: sha(await fs.readFile(path.join(route, 'index.html'))), publishedMs: Date.now() };
    await writeJson(path.join(route, '.xrb-publication.json'), { version: 1, ...record });
    inventory.publications = [...inventory.publications.filter((p) => p.id !== selected.id), record].sort((a, b) => a.slug.localeCompare(b.slug));
  } else {
    if (!current) throw new Error('publication is not in the inventory');
    await fs.rm(path.join(site, 'apps', current.slug), { recursive: true, force: true });
    inventory.publications = inventory.publications.filter((p) => p.id !== selected.id);
    const links = await json(path.join(site, '.well-known/assetlinks.json'));
    if (selected.packageId) await writeJson(path.join(site, '.well-known/assetlinks.json'), links.filter((link) => link?.target?.package_name !== selected.packageId));
  }
  await writeJson(path.join(site, '.xrb-publications.json'), inventory);
  return { ...selected, current, inventory };
}
