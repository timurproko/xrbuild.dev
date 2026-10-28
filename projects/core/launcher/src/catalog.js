const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const GENERIC_TITLES = new Set(['xrbuild', 'xr build', 'app']);
const FALLBACK_DESCRIPTIONS = {
  'ui-kit': 'Library of spatial UI controls.',
};

function assertString(value, message) {
  if (typeof value !== 'string' || !value) throw new Error(message);
  return value;
}

export function titleFromSlug(slug) {
  return slug.split('-').map((word) => word ? word[0].toUpperCase() + word.slice(1) : '').join(' ');
}

export function normalizeInventory(value) {
  if (value?.version !== 1 || !Array.isArray(value.publications)) throw new Error('The publication inventory has an unsupported format.');
  const seenIds = new Set();
  const seenSlugs = new Set();
  const publications = value.publications.map((item) => {
    const id = assertString(item?.id, 'A publication has no ID.');
    const slug = assertString(item?.slug, 'A publication has no route.');
    if (!SLUG.test(slug)) throw new Error(`The publication route "${slug}" is invalid.`);
    if (seenIds.has(id) || seenSlugs.has(slug)) throw new Error('The publication inventory contains duplicate entries.');
    if (!Number.isFinite(item.publishedMs)) throw new Error(`The publication "${slug}" has no publish date.`);
    seenIds.add(id);
    seenSlugs.add(slug);
    return { id, slug, publishedMs: item.publishedMs };
  });
  return publications.sort((a, b) => b.publishedMs - a.publishedMs || a.slug.localeCompare(b.slug));
}

export function currentPublicationSlug(pathname) {
  return pathname.match(/\/apps\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?(?:$|[?#])/)?.[1] ?? null;
}

export function catalogEndpoints(baseHref) {
  const base = new URL(baseHref);
  return {
    inventory: new URL('/.xrb-publications.json', base),
    apps: new URL('/apps/', base),
  };
}

function cacheBusted(url, token) {
  const result = new URL(url);
  result.searchParams.set('xrb-launcher', token);
  return result;
}

function decodeHtml(value) {
  const named = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|apos|gt|lt|quot);/gi, (_, entity) => {
    if (entity[0] !== '#') return named[entity.toLowerCase()] ?? _;
    const hex = entity[1].toLowerCase() === 'x';
    const code = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
    return Number.isFinite(code) ? String.fromCodePoint(code) : _;
  });
}

export function titleFromHtml(html) {
  const title = html.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)?.[1];
  return title ? decodeHtml(title.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()) : null;
}

export function descriptionFromHtml(html) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const attributes = Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1].toLowerCase(), match[2]]));
    if ((attributes.name ?? attributes.property)?.toLowerCase() === 'description') return decodeHtml(attributes.content ?? '').trim() || null;
  }
  return null;
}

async function optionalJson(fetchImpl, url, signal) {
  try {
    const response = await fetchImpl(url, { signal });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    if (error?.name === 'AbortError') throw error;
    return null;
  }
}

async function optionalText(fetchImpl, url, signal) {
  try {
    const response = await fetchImpl(url, { signal });
    if (!response.ok) return null;
    return await response.text();
  } catch (error) {
    if (error?.name === 'AbortError') throw error;
    return null;
  }
}

function safeIcon(route, manifest) {
  const source = manifest?.icons?.find((icon) => typeof icon?.src === 'string' && icon.src)?.src;
  if (!source) return new URL('icon.png', route).href;
  const icon = new URL(source, route);
  return icon.origin === route.origin ? icon.href : new URL('icon.png', route).href;
}

async function enrichPublication(publication, appsRoot, fetchImpl, signal, token) {
  const route = new URL(`${publication.slug}/`, appsRoot);
  const [manifest, html] = await Promise.all([
    optionalJson(fetchImpl, cacheBusted(new URL('manifest.webmanifest', route), token), signal),
    optionalText(fetchImpl, cacheBusted(route, token), signal),
  ]);
  const manifestTitle = typeof manifest?.name === 'string' ? manifest.name.trim() : '';
  const documentTitle = html ? titleFromHtml(html) : null;
  const manifestDescription = typeof manifest?.description === 'string' ? manifest.description.trim() : '';
  const documentDescription = html ? descriptionFromHtml(html) : null;
  const genericManifest = GENERIC_TITLES.has(manifestTitle.toLowerCase());
  const title = (documentTitle && (!manifestTitle || genericManifest) ? documentTitle : manifestTitle)
    || documentTitle
    || titleFromSlug(publication.slug);
  const launch = new URL(route);
  launch.searchParams.set('xrb-xr', 'enter');
  return {
    ...publication,
    title,
    description: manifestDescription || documentDescription || FALLBACK_DESCRIPTIONS[publication.slug] || 'Published XR experience.',
    route: route.href,
    launchUrl: launch.href,
    iconUrl: safeIcon(route, manifest),
  };
}

/** A publisher reports the app published and live; one recorded but not reachable ("failed") is not shown. */
const PUBLISHED = new Set(['published']);
export function isPublished(project) {
  const states = [project.publicationStandalone?.status?.state, project.publication?.status?.state,
    ...Object.values(project.publicationDestinations ?? {}).map((destination) => destination?.status?.state)];
  return states.some((state) => PUBLISHED.has(state));
}
const isChecking = (project) => [project.publicationStandalone?.status?.state, ...Object.values(project.publicationDestinations ?? {}).map((d) => d?.status?.state)]
  .includes('checking');

/**
 * The workspace's published apps, as the panel reports them. Right after the panel starts, publishers may still be
 * "checking": the list is asked again a few times before it is shown.
 */
export async function loadWorkspaceCatalog({ fetchImpl = fetch, baseHref, signal, retries = 8, retryMs = 750 }) {
  const base = new URL(baseHref);
  let projects;
  for (let attempt = 0; ; attempt++) {
    const response = await fetchImpl(new URL('/api/projects', base), { signal });
    if (!response.ok) throw new Error(`Could not load workspace apps (${response.status}).`);
    ({ projects } = await response.json());
    if (!Array.isArray(projects)) throw new Error('The panel returned an invalid project list.');
    if (attempt >= retries || !projects.some(isChecking)) break;
    await new Promise((resolve) => setTimeout(resolve, retryMs));
  }
  // Only apps a publisher reports published, like the site's own list; built or buildable here to open them.
  return projects.filter((project) => project.manifest?.kind === 'app' && isPublished(project)
    && (project.entryExists || project.manifest.scripts?.build))
    .map((project) => {
      const route = new URL(`/preview/${encodeURIComponent(project.id)}/`, base);
      const launch = new URL(route);
      launch.searchParams.set('xrb-xr', 'enter');
      return {
        id: project.manifest.publication?.id ?? project.id,
        slug: project.manifest.publication?.slug ?? project.id,
        title: project.manifest.name,
        description: project.manifest.description || FALLBACK_DESCRIPTIONS[project.id] || 'Workspace XR experience.',
        route: route.href,
        launchUrl: launch.href,
        iconUrl: new URL(`/api/projects/${encodeURIComponent(project.id)}/icon`, base).href,
        publishedMs: 0,
      };
    });
}

export async function loadCatalog({ fetchImpl = fetch, baseHref, signal, token = String(Date.now()) }) {
  const endpoints = catalogEndpoints(baseHref);
  const response = await fetchImpl(cacheBusted(endpoints.inventory, token), { signal });
  if (!response.ok) throw new Error(`Could not load the app library (${response.status}).`);
  const publications = normalizeInventory(await response.json());
  return Promise.all(publications.map((publication) => enrichPublication(publication, endpoints.apps, fetchImpl, signal, token)));
}
