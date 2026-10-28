# xrbuild.dev

Published website output for [xrbuild.dev](https://xrbuild.dev) is under `docs/`. Local projects now belong in the private development workspace; the source tree below is a temporary snapshot pending a separately reviewed removal.

- `projects/core/launcher`: the application catalog and launcher
- `projects/core/ui-kit`: the XR Build UI kit showcase
- `projects/apps/control-room`: the Control Room experience

Install with the pinned pnpm version:

```sh
corepack pnpm install --frozen-lockfile
```

The launcher and UI kit consume SDK sources from an XR Build core checkout. Build them through the XR Build panel, or set `XRB_CORE` to that checkout before running the root build or test command.

The complete generated website is publisher-owned under `docs/` and deployed by GitHub Actions. Publish from the private local control panel; the public workflow only redeploys the exact committed site. See [PUBLISHING.md](PUBLISHING.md). This repository intentionally contains no private XR Build plugins, credentials, signing material, or dependency binaries.

## License

No open-source license is granted. All rights are reserved unless a file says otherwise. Third-party assets retain the terms documented beside those assets.
