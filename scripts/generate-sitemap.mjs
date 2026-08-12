import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import routes from "./routes.json" with { type: "json" };
import { localeUrls } from "./lib/seo.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const urls = routes.flatMap((route) => {
  const { en, zh } = localeUrls(route.slug);
  return [
    { loc: en, changefreq: route.changefreq, priority: route.priority },
    { loc: zh, changefreq: route.changefreq, priority: Math.round(route.priority * 0.95 * 100) / 100 },
  ];
});

const body = urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
console.log(`Wrote sitemap.xml with ${urls.length} URLs.`);
