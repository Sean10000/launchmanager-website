# LaunchManager Website

Static landing page for [LaunchManager](https://github.com/Sean10000/LaunchManager), deployable on [Vercel](https://vercel.com).

## Deploy to Vercel

### Build (i18n + sitemap)

English pages live at `/`; Chinese pages are generated under `/zh/` at build time:

```bash
npm install
npm run build
```

Vercel runs `npm run build` automatically (`vercel.json` → `buildCommand`). After editing English HTML or translations in `assets/js/i18n-data.js` / `assets/js/i18n-seo.js`, run `npm run build` before committing.

### Option A — GitHub (recommended)

1. Push this folder to a repo (e.g. `Sean10000/launchmanager-website` or add a `website/` directory in the main repo).
2. In [Vercel Dashboard](https://vercel.com/new) → **Add New Project** → import the repo.
3. Framework preset: **Other** (static HTML; build step generates `/zh/` pages).
4. Root directory: `.` (or `website` if nested).
5. Deploy.

### Option B — Vercel CLI

```bash
cd LaunchManager-website
npx vercel
# follow prompts; use `npx vercel --prod` for production
```

## Custom domain

In Vercel project **Settings → Domains**, add e.g. `launchmanager.dev` and set DNS per Vercel’s instructions. Update `og:url` in `index.html` to match your live domain.

## Assets

All images under `/assets/images/` are **not** bundled in the Vercel deployment (see `.vercelignore`). At runtime, `vercel.json` rewrites those requests to the [LaunchManager](https://github.com/Sean10000/LaunchManager) repo on GitHub:

`/assets/images/foo.png` → `raw.githubusercontent.com/Sean10000/LaunchManager/main/assets/foo.png`

This keeps image traffic on your Vercel domain (edge cache) instead of clients hitting GitHub directly, which helps access from mainland China.

**Add or update an image**

1. Put the file in `LaunchManager` → `assets/` on the `main` branch.
2. Optionally copy it to `assets/images/` here for local preview (`python -m http.server`).
3. Reference it in HTML as `/assets/images/<filename>`.

**Local dev:** `assets/images/` stays in this repo for `python -m http.server`. Use `npx vercel dev` to test the production rewrite locally.

## Link from the app repo

Set GitHub repo **About → Website** to your Vercel URL so visitors find the landing page from the main project page.
