# Deploying SupaNet Docs to Railway

This is a standard Next.js (Fumadocs) server app. Railway builds it with Nixpacks
and runs `next start`. The `railway.json` in this repo sets the build and start
commands; `.nvmrc` and the `engines` field pin Node 22.

## One-time setup

1. **Push the repo to GitHub** (e.g. `alnutile/supanet-docs`).
2. In Railway, **New Project → Deploy from GitHub repo** and pick this repo.
3. Railway reads `railway.json`:
   - Build: `npm run build`
   - Start: `npm run start`
   No environment variables are required - the docs site has no secrets.
4. The first deploy gives you a `*.up.railway.app` URL. Confirm the site loads.

> `next start` binds to `0.0.0.0` and respects Railway's `$PORT` automatically, so
> no port config is needed.

## Custom domain: supanet-docs.dailyai.studio

1. In Railway: **your service → Settings → Networking → Custom Domain**.
2. Enter `supanet-docs.dailyai.studio`. Railway shows a target host (a
   `*.up.railway.app` CNAME target).
3. In your DNS for **dailyai.studio**, add a record:
   - Type: `CNAME`
   - Name/Host: `supanet-docs`
   - Value/Target: the host Railway gave you
   - Proxy: if using Cloudflare, set to **DNS only** (grey cloud) for the first
     verification, then you can re-enable proxy once it is live.
4. Wait for DNS to propagate and Railway to issue the TLS cert (usually minutes).
   The domain flips to "Active" when ready.

## Redeploys

Trunk-based: push to `main` and Railway auto-deploys. Run `npm run build` locally
first to catch typecheck/MDX errors before pushing.

## Notes

- `node_modules`, `.next`, and `.source` are gitignored and regenerated on build.
- If a build fails on Node version, confirm Railway picked up `.nvmrc` (Node 22+).
