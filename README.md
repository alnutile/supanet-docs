# SupaNet Docs

The documentation site for **SupaNet** - a private AI workspace built on
Supabase. Built with [Fumadocs](https://fumadocs.dev) (Next.js).

The docs are split for two audiences:

- **Using SupaNet** (`content/docs/using`) - for everyone. What it does and how
  to get value out of it. No code.
- **Building on SupaNet** (`content/docs/building`) - for builders. How it works
  and how to run and extend it.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typechecks + generates pages)
```

> Note: install `node_modules` locally - they are gitignored and are not checked
> in. Node 22+ is required.

## Where things live

| Path | What |
| --- | --- |
| `content/docs/` | All the doc pages (`.mdx`) and section ordering (`meta.json`) |
| `app/(home)/page.tsx` | The landing page |
| `app/docs/` | The docs layout and dynamic page route |
| `lib/shared.ts` | App name + GitHub repo config |
| `lib/layout.shared.tsx` | Shared layout options (nav, GitHub link) |
| `source.config.ts` | Fumadocs MDX config (frontmatter / meta schemas) |

## Editing content

Add a `.mdx` file under `content/docs/using` or `content/docs/building`, then add
its slug to that folder's `meta.json` to place it in the nav. Frontmatter needs a
`title` and `description`.

## Feeding the docs back into SupaNet

This build also emits machine-readable copies of every page:

- `/<page>` - the human page
- `/llms.txt` and `/llms-full.txt` - LLM-friendly summaries of the whole site
- `/llms.mdx/docs/<page>/content.md` - the raw markdown of a single page

These make it easy to push the docs into SupaNet's own knowledge base so the
in-app assistant can answer from them. See the page **Building → Teach SupaNet
about itself** for the three ways to do it (PDF upload, artifact publish, or MCP
push).
