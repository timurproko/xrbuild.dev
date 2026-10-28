# XR Build Launcher

Spatial catalog for the apps published at `https://xrbuild.dev/apps/`. It reads the publisher-owned `/.xrb-publications.json` inventory, then resolves each app's web manifest or page title and icon.

The launcher is an XR Build scene rather than a separate website UI:

- `@xr-build/sdk` supplies the browser, 3D-display and headset runtime, mouse binding, hand interaction and WebXR session.
- `@xr-build/ui-kit` supplies the shared buttons, labels, glass edges, geometry, materials, sound and interaction behaviour.
- A regular browser sees the scene front-on as a flatter 2D interface and drives the same controls with the mouse.
- A headset anchors the same scene as a spatial panel and drives the same controls with hand poke and pinch input.

The UI Kit project under `projects/core/ui-kit` is the interactive showcase and test application. The reusable API is the core package `@xr-build/ui-kit`; applications should import it rather than importing files from the showcase project.

Selecting an app opens its canonical route with `?xrb-xr=enter`, allowing the destination to enter its headset session from the launch action. It also passes `xrb-return=<launcher URL>` so experiences can provide a spatial Back control without hardcoding where the launcher is hosted. The same Vite build is published as the website and used by the headset packager. `public/manifest.webmanifest` and `public/icon.png` must remain in the publication.

## Development

The XR Build panel supplies `XRB_CORE`. Outside the panel, run:

```sh
XRB_CORE=/d/Git/xrbuild corepack pnpm dev
```

A browser preview opened by the control panel lists runnable apps from that panel's selected workspace and links to their local previews, even before the production inventory exists. A separate Vite dev server still reads the production catalog; set `VITE_CATALOG_ORIGIN` to use another publication origin. Published launcher builds also use the production catalog.

Before installing the first headset package, build it to create the signing identity, then register the package ID and SHA-256 certificate fingerprint in `plugins/publisher-production-web/associations.json`. Keep `%LOCALAPPDATA%\XRBuild\signing\com.xrbuild.launcher\` backed up; updates require the same key.
