# UI Kit

The basic controls of the UI kit on one board, with a checklist of what
to try. Use it to tune how controls react to hands on a 3D display. The mouse drives the same
controls in a browser (`pnpm --filter @xr-build/ui-kit-app dev`).

This project is the showcase and interaction test app, not the library boundary. Reusable controls are exported by the core's `@xr-build/ui-kit` package (`Button`, `Label`, `Dialog`, `GlassEdge`, `Segmented`, `Slider`, `Switch`, `Dial`, `Trackball`, theme helpers and sound). Workspace apps consume that package through the `XRB_CORE` Vite alias, so they share the same rendering and hand/mouse behaviour without importing from this project.

For the headset publication, Vite copies `public/manifest.webmanifest` and `public/icon.png`
into `dist/`, and `index.html` links the manifest. Keep these files in the build before
republishing: the publisher replaces the entire app route with `dist/`. The private
`plugins/publisher-production-web/associations.json` registers the headset package ID
and signing-certificate fingerprint for the origin. Keep the signing key when building
updates; a different key requires a newly verified association. Run the project's
`test` script with `XRB_CORE` set to check the generated site.

The scene is in metres: the origin is the centre of the glass, +z toward the viewer
(`mapping: world, scale 1`). Controls stand 1–2 cm in front of the glass so a fingertip can
reach them. The SDK's pointer emulation is off: hands act on the controls directly.

| control | hand | file |
|---|---|---|
| Button (pill, round) | poke with the index fingertip; clicks at 60 % of the travel, releases below 30 % | `src/kit/button.ts` |
| Switch | poke to flip | `src/kit/switch.ts` |
| Slider, stepped slider | touch-drag the handle (lift the finger to let go) or pinch near it and move | `src/kit/slider.ts` |
| Dial | pinch at the knob's edge and circle around it; 270°, detent every 5 % | `src/kit/dial.ts` |
| Segmented control | poke a segment; one stays selected | `src/kit/segmented.ts` |
| Trackball | reach into the dotted sphere and move; Full or locked to X / Y / Z | `src/kit/trackball.ts` |
| Interactable | switch off: every other control dims and ignores input | `src/main.ts` |

Shared behaviour (`src/kit/control.ts`):

- Only a fingertip arriving from the front arms a pokeable surface; sliding in from the side or
  reaching through from behind does nothing.
- Hover feedback starts 5 cm in front of a surface: the surface tints, and a ring (touch cursor)
  under the fingertip tightens as it nears.
- Pushed surfaces follow the finger 1:1 and ease back on release.
- Every action has a short synthesized sound (`src/kit/sound.ts`).

All distances and thresholds are in `TUNING` in `src/kit/theme.ts`.
