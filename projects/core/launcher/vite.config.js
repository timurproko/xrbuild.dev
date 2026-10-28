import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, normalizePath, searchForWorkspaceRoot } from 'vite';

// XR Build apps consume the SDK and UI kit directly from the core source tree. The control panel
// supplies XRB_CORE; set it manually only when starting Vite outside the panel.
const core = process.env.XRB_CORE;
if (!core) throw new Error('XRB_CORE is not set: run this app from the XR Build panel, or set XRB_CORE to the XR Build core repo');
const source = (pkg) => path.join(core, 'packages', pkg, 'src', 'index.ts');

function localPublicationProjects() {
  const entries = {};
  const projects = path.resolve(process.cwd(), '../..');
  for (const section of fs.readdirSync(projects, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
    const sectionPath = path.join(projects, section.name);
    for (const folder of fs.readdirSync(sectionPath, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
      const projectPath = path.join(sectionPath, folder.name);
      try {
        const manifest = JSON.parse(fs.readFileSync(path.join(projectPath, 'xrb-project.json'), 'utf8'));
        const slug = manifest.publication?.enabled && manifest.publication?.slug;
        const dist = path.join(projectPath, manifest.entry ?? 'dist');
        if (slug && fs.existsSync(path.join(dist, 'index.html'))) entries[slug] = { dist: normalizePath(dist), url: `/__xrb-local/${slug}/` };
      } catch {
        // Not every folder under projects is an XR Build project.
      }
    }
  }
  return entries;
}

function localExperiencePlugin(projects) {
  return {
    name: 'launcher-local-experiences',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url ?? '/', 'http://localhost');
        const match = url.pathname.match(/^\/__xrb-local\/([a-z0-9]+(?:-[a-z0-9]+)*)\/(.*)$/);
        const project = match && projects[match[1]];
        if (!project) return next();
        const relative = match[2] || 'index.html';
        if (relative !== 'index.html') {
          request.url = `/@fs/${project.dist}/${relative}${url.search}`;
          return next();
        }
        try {
          let html = fs.readFileSync(path.join(project.dist, 'index.html'), 'utf8');
          const root = `/@fs/${project.dist}/`;
          html = html.replaceAll('="./', `="${root}`).replaceAll("='./", `='${root}`);
          html = await server.transformIndexHtml(url.pathname, html);
          response.statusCode = 200;
          response.setHeader('content-type', 'text/html; charset=utf-8');
          response.end(html);
        } catch (error) {
          next(error);
        }
      });
    },
    transformIndexHtml() {
      return [{ tag: 'script', attrs: { type: 'module', src: '/src/return-overlay.js' }, injectTo: 'body' }];
    },
  };
}

// The app icon (icon.png, set in the panel's icon menu) ships as dist/icon.png for the web manifest; one copy.
// Without one (the panel's default icon) there is nothing to ship.
const appIcon = { name: 'app-icon', generateBundle() { if (fs.existsSync('icon.png')) this.emitFile({ type: 'asset', fileName: 'icon.png', source: fs.readFileSync('icon.png') }); } };

export default defineConfig(({ command }) => {
  const localProjects = command === 'serve' ? localPublicationProjects() : {};
  const localUrls = Object.fromEntries(Object.entries(localProjects).map(([slug, project]) => [slug, project.url]));
  return {
    base: './',
    plugins: command === 'serve' ? [localExperiencePlugin(localProjects)] : [appIcon],
    define: {
      'import.meta.env.VITE_XRB_LOCAL_PUBLICATIONS': JSON.stringify(localUrls),
    },
    server: { fs: { allow: [searchForWorkspaceRoot(process.cwd()), core] } },
    resolve: {
      alias: {
        '@xr-build/sdk': source('sdk'),
        '@xr-build/ui-kit': source('ui-kit'),
      },
      dedupe: ['three'],
    },
    build: {
      rollupOptions: {
        // The 3D icon is a second entry, emitted as dist/icon.js with its export kept, so a launcher can import it.
        // The return overlay is a third: an app opened from this launcher (?xrb-return=) loads it through the SDK.
        input: { main: 'index.html', icon: 'src/icon.js', 'return-overlay': 'src/return-overlay.js' },
        preserveEntrySignatures: 'exports-only',
        output: { entryFileNames: (chunk) => (chunk.name === 'icon' || chunk.name === 'return-overlay' ? `${chunk.name}.js` : 'assets/[name]-[hash].js') },
      },
    },
  };
});
