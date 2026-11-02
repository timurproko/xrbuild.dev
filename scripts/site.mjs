import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const json = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const sha = (body) => createHash('sha256').update(body).digest('hex');
const manifestName = 'landing-output.json';

/** Root entries owned by publication state; landing output may never provide them. */
export const reserved = new Set(['CNAME', '.nojekyll', '.xrb-publications.json', '.well-known', 'apps', 'uikit']);

async function rejectLinks(dir) {
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    if (item.isSymbolicLink()) throw new Error(`site contains a link: ${item.name}`);
    if (item.isDirectory()) await rejectLinks(path.join(dir, item.name));
  }
}

function safeRelative(value) {
  return typeof value === 'string' && value.length > 0 && value.length <= 240 && !value.includes('\\') &&
    value.split('/').every((part) => part && part !== '.' && part !== '..') && !path.isAbsolute(value);
}

async function filesIn(root) {
  const files = [];
  async function visit(dir, prefix = '') {
    for (const item of await fs.readdir(dir, { withFileTypes: true })) {
      const relative = prefix ? `${prefix}/${item.name}` : item.name;
      if (item.isSymbolicLink()) throw new Error(`landing output contains a link: ${relative}`);
      if (item.isDirectory()) await visit(path.join(dir, item.name), relative);
      else if (item.isFile()) files.push(relative);
      else throw new Error(`landing output contains an unsupported entry: ${relative}`);
    }
  }
  await visit(root);
  return files.sort();
}

async function removeEmptyParents(file, stop) {
  let dir = path.dirname(file);
  while (dir !== stop && path.relative(stop, dir) && !path.relative(stop, dir).startsWith(`..${path.sep}`)) {
    if ((await fs.readdir(dir).catch(() => ['not-empty'])).length) return;
    await fs.rmdir(dir);
    dir = path.dirname(dir);
  }
}

/** Safely replaces only files previously recorded as landing output, preserving every publication-owned path. */
export async function updateLanding(root) {
  const docs = path.join(root, 'docs'), dist = path.join(root, 'site', 'dist'), manifestFile = path.join(root, 'site', manifestName);
  if (!(await fs.lstat(docs)).isDirectory() || !(await fs.lstat(dist)).isDirectory()) throw new Error('docs/ and site/dist/ must be directories');
  await rejectLinks(docs); await rejectLinks(dist);
  const files = await filesIn(dist);
  if (!files.includes('index.html')) throw new Error('landing not built: site/dist/index.html missing');
  for (const relative of files) if (!safeRelative(relative) || reserved.has(relative.split('/')[0])) throw new Error(`landing output may not provide ${relative}`);
  const previous = await json(manifestFile).catch((error) => {
    if (error.code === 'ENOENT') return { version: 1, files: [] };
    throw error;
  });
  if (previous.version !== 1 || !Array.isArray(previous.files) || previous.files.some((file) => !safeRelative(file) || reserved.has(file.split('/')[0])) || new Set(previous.files).size !== previous.files.length)
    throw new Error('landing output manifest is invalid');
  const old = new Set(previous.files), next = new Set(files);
  for (const relative of files) {
    const target = path.join(docs, ...relative.split('/'));
    if (!old.has(relative) && await fs.lstat(target).catch(() => null)) throw new Error(`landing output collides with docs/${relative}`);
  }
  for (const relative of previous.files) if (!next.has(relative)) {
    const target = path.join(docs, ...relative.split('/'));
    await fs.rm(target, { force: true });
    await removeEmptyParents(target, docs);
  }
  for (const relative of files) {
    const target = path.join(docs, ...relative.split('/'));
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.copyFile(path.join(dist, ...relative.split('/')), target);
  }
  await fs.writeFile(manifestFile, JSON.stringify({ version: 1, files }, null, 2) + '\n');
  await checkSite(docs);
  return files;
}

/** Checks the directly served docs tree: root files, domain, inventory, route markers and associations. */
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

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  updateLanding(path.resolve(import.meta.dirname, '..')).then((files) => console.log(`Updated ${files.length} landing file(s) in docs/`), (error) => { console.error(error.message); process.exitCode = 1; });
}
