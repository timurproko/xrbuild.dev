# Publish without a local app checkout

The maintainer runs **Actions → Publish app to Pages → Run workflow** in this repository. Choose `main`, an approved project (`ui-kit` or `control-room`) and an operation:

- `rehearse`: build and check the complete site locally in CI; no push or production deployment. Run this before any Pages cutover.
- `redeploy`: deploy the current committed `docs/` tree without rebuilding or changing source. Use this as the first run after switching Pages to Actions.
- `publish`: build the committed project, update only its owned `docs/apps/<slug>/` route and the inventory, deploy and verify the complete site.
- `unpublish`: explicitly confirm route removal; update only its owned route, inventory and associated package link, deploy and verify.

Only dispatch on `main` is allowed. The published project ID and slug come from its committed manifest, not workflow input. The launcher is not enabled for production publication until its manifest and target are reviewed. Source edits require normal reviewed commits. Local control-panel development still requires a checkout; **publishing through Actions does not**.

## Private build dependency

These apps import SDK and UI-kit source from the private XR Build core. Before running `publish` or `rehearse`, create a **dedicated** GitHub App installed only on the private core repository with **Contents: read** and no other repository permissions. On this public repository set Actions variable `XRB_CORE_READ_APP_ID` to its App ID and Actions secret `XRB_CORE_READ_APP_KEY` to its private key. Do not commit the key or put it in a workflow input. The job requests a short-lived token, checks out the private core without saving credentials, and runs the build. `unpublish` and `redeploy` do not request private access. Never enable this secret for pull-request workflows. Review changes to the public workflow, publication scripts and app build scripts before merging: trusted `main` build scripts run in the credentialed job.

Workflow permissions must permit `GITHUB_TOKEN` to write the selected `docs/` commit on public `main` (which blocks force-push/deletion), and Pages deployments must be permitted for the `github-pages` environment. Configure the `github-pages` environment to allow deployments from `main` only, and require trusted review of public app source and workflow changes before merging. The deployment job receives `contents: write`, `pages: write`, `id-token: write`; the build job is read-only.

## Cutover (maintainer only, separately authorized)

1. While Pages still deploys from branch `main /docs`, review both repository PRs. Run a `rehearse` dispatch after the public workflow merges. Confirm it builds without leaking private files and does not change `main` or the live site. Do **not** choose `publish` yet.
2. Check the committed `docs/` root, inventory, routes, `.well-known/assetlinks.json`, `.nojekyll` and `CNAME` against the live site. Pause local production publication. In this repository's Settings → Pages, change **Source** from **Deploy from a branch** to **GitHub Actions**. Preserve the custom domain `xrbuild.dev` and Enforce HTTPS.
3. Dispatch `redeploy` on `main`, then verify root, inventory, every recorded route and Digital Asset Links over `https://xrbuild.dev`. Only then enable `publish` and `unpublish` Actions runs. The local publisher will refuse writes in Actions mode.
4. If Pages cannot serve/verify the first Actions deployment, switch Settings → Pages back to **Deploy from a branch**, branch **main**, folder **/docs**. The committed `docs/` tree remains available; do not change DNS or delete the domain. Investigate before trying the cutover again.

The workflow uses serialized non-force site-only commits, deploys the exact full `docs/` tree and checks public marker/index hashes. On a failed publish or unpublish it tries to revert its own site commit, redeploy and verify the previous complete tree. If `main` changed concurrently or restoration cannot be verified, it fails loudly rather than force-pushing. Do not retry until the site and inventory are inspected.
