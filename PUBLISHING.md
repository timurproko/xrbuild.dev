# Deploy output from local projects

Projects, drafts and tests live in the private development workspace. A maintainer selects one configured local WebXR app in the local control panel and clicks Publish. The panel builds that app, validates its output and publication identity, and the private production publisher commits **only the app's built route and publisher-owned `docs/` metadata** to public `main`, using the maintainer's OS-backed authentication. It then dispatches the trusted redeploy-only Actions workflow and waits for that exact commit and the live route to verify. No separately managed local checkout of this repository is required; the private publisher may maintain a disposable cache.

The public repository owns the complete published `main:docs/` tree, including the site root, publication inventory, association document, CNAME and unrelated app routes. The workflow never builds public app source, requests private-core credentials or accepts a project name, build path or arbitrary ref. It runs only on public `main`, checks its exact requested site commit, deploys the entire committed `docs/` tree and verifies the live site. Keep Pages on GitHub Actions with the existing HTTPS custom domain. Do not deploy only an individual app directory.

The former public app source is still present on current `main` until a **separate reviewed removal** after local project recovery and publication are verified; it is not the source for the redeploy workflow. Removing it from current `main` does not erase public Git history.

## Recovery

If the panel reports an interrupted or failed publication, inspect the public `docs/` inventory, the workflow run and the live site before retrying. The publisher attempts a route-scoped revert and redeployment when safe; a newer main commit prevents an unsafe automatic rollback. Only the maintainer may authorize a real production dispatch or manual repair. The workflow has no Publish/Unpublish UI operations: a standalone redeploy must be requested through a trusted authenticated caller with the exact committed site SHA and a fresh correlation UUID. Do not change DNS, Pages source, site domain or HTTPS as part of recovery.
