# LaunchManager Website

Static landing page for [LaunchManager](https://github.com/Sean10000/LaunchManager), deployable on [Vercel](https://vercel.com).

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Push this folder to a repo (e.g. `Sean10000/launchmanager-website` or add a `website/` directory in the main repo).
2. In [Vercel Dashboard](https://vercel.com/new) → **Add New Project** → import the repo.
3. Framework preset: **Other** (static HTML, no build step).
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

Screenshots and logo load from GitHub raw URLs (`raw.githubusercontent.com/Sean10000/LaunchManager/main/assets/...`). To avoid external dependency, copy `assets/` from the app repo into this project and change image `src` paths to `/assets/...`.

## Link from the app repo

Set GitHub repo **About → Website** to your Vercel URL so visitors find the landing page from the main project page.
