# Landing page source

The single-screen XR Build hero: text-only wordmark, headline and subtitle, a licensed eyewear visual under studio light, a slight ambient rotation and a gentle lean toward the pointer. It is a plain static site with no dependency on the private tooling that publishes apps.

## Layout

- `src/` — page, styles, renderer, studio environment loader and the initials mark.
- `src/assets/` — pinned licensed eyewear mesh, studio HDR and the source/attribution notice.
- `public/` — locally served fonts with their licenses, the generated favicon family, same-scene stills and social images. These are committed; regenerate them with `npm run assets` after a visual change.
- `scripts/` — offline asset rendering and the local browser helper.
- `test/` — output/identity assertions and production-build browser checks.
- `dist/` — ignored build output.

## Commands

```
npm ci                 # once
npm run dev            # 127.0.0.1:5190
npm run build          # dist/
npm test               # output and identity checks (needs dist/)
npm run test:browser   # production-build checks in a headless browser
npm run assets         # regenerate icons, stills and social images
```

Browser checks and asset generation use the pinned Playwright. They prefer its Chromium, fall back to an installed Chrome, or honor `BROWSER_CHANNEL`. Nothing here deploys.

## How it reaches the site

The workflow in `.github/workflows/publish-app.yml` builds this package on every push to `main`, runs its checks, composes `dist/` on top of the committed `docs/` tree and deploys the result to Pages. The landing may only add files: anything `docs/` already holds, including the app routes the control panel publishes, is never replaced, and a collision fails the build.

## Assets and licenses

`src/assets/model-license.txt` records sources, revisions, hashes, authors, licenses and material changes; its built copy and the fonts' full notices ship with the output. The eyewear is illustrative, not an XR Build hardware product. Attribution is in the accessible document.
