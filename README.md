# xrbuild.dev

Source projects for the public applications published at [xrbuild.dev](https://xrbuild.dev).

- `projects/core/launcher`: the application catalog and launcher
- `projects/core/ui-kit`: the XR Build UI kit showcase
- `projects/apps/control-room`: the Control Room experience

Install with the pinned pnpm version:

```sh
corepack pnpm install --frozen-lockfile
```

The launcher and UI kit consume SDK sources from an XR Build core checkout. Build them through the XR Build panel, or set `XRB_CORE` to that checkout before running the root build or test command.

The generated website is publisher-owned under `docs/`. For no-clone publication through the GitHub Actions UI, see [PUBLISHING.md](PUBLISHING.md); the existing branch-based Pages site remains active until the maintainer completes the verified Actions cutover. This repository intentionally contains no private XR Build plugins, credentials, signing material, or dependency binaries.

## License

No open-source license is granted. All rights are reserved unless a file says otherwise. Third-party assets retain the terms documented beside those assets.
