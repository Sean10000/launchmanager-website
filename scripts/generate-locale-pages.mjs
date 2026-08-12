import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import routes from "./routes.json" with { type: "json" };
import { loadTranslations } from "./lib/load-translations.mjs";
import { hreflangTags, localeUrls, switchHref } from "./lib/seo.mjs";
import {
  getMetaKeys,
  prefixHref,
  shouldLocalizeHref,
  zhOutputPath,
} from "./lib/paths.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const translations = loadTranslations(root);

function ensureScripts($) {
  const hasData = $("script[src]")
    .toArray()
    .some((el) => $(el).attr("src")?.includes("i18n-data.js"));
  if (hasData) return;

  const anchor = $("script[src]")
    .toArray()
    .find((el) => {
      const src = $(el).attr("src") || "";
      return src.includes("i18n-seo.js") || src.includes("i18n.js");
    });

  if (anchor) {
    $(anchor).before('<script src="/assets/js/i18n-data.js"></script>\n  ');
  }
}

function applyHead($, route, locale, dict) {
  const { en, zh } = localeUrls(route.slug);
  const canonical = locale === "zh" ? zh : en;
  const keys = getMetaKeys(route.page);
  const title = dict[keys.title] || dict["meta.title"];
  const desc = dict[keys.desc] || dict["meta.description"];

  $("html").attr("lang", locale === "zh" ? "zh-CN" : "en");
  $("title").text(title);
  $('meta[name="description"]').attr("content", desc);
  $('meta[property="og:title"]').attr("content", title);
  $('meta[property="og:description"]').attr("content", desc);
  $('meta[property="og:url"]').attr("content", canonical);
  $('link[rel="canonical"]').attr("href", canonical);

  $('meta[property="og:locale"]').remove();
  $('meta[property="og:locale:alternate"]').remove();
  if (locale === "zh") {
  $('head').append(
    '\n  <meta property="og:locale" content="zh_CN" />\n  <meta property="og:locale:alternate" content="en_US" />'
  );
  }

  $('link[rel="alternate"][hreflang]').remove();
  const tags = hreflangTags(route.slug);
  if ($('link[rel="canonical"]').length) {
    $('link[rel="canonical"]').after(`\n  ${tags}`);
  } else {
    $("head").append(`\n  ${tags}`);
  }
}

function applyLangSwitcher($, route, locale, dict) {
  const href = switchHref(route.slug, locale);
  const label = locale === "zh" ? "EN" : dict["nav.lang"] || "中文";
  const hreflang = locale === "zh" ? "en" : "zh-Hans";
  $("#lang-toggle, a.lang-toggle, a#lang-switch").replaceWith(
    `<a class="lang-toggle" id="lang-switch" href="${href}" hreflang="${hreflang}" rel="alternate">${label}</a>`
  );
}

function applyChineseContent($, dict) {
  $("[data-i18n]").each((_, el) => {
    const key = $(el).attr("data-i18n");
    if (dict[key] !== undefined) $(el).text(dict[key]);
  });

  $("[data-i18n-html]").each((_, el) => {
    const key = $(el).attr("data-i18n-html");
    if (dict[key] === undefined) return;
    const content = dict[key].replace(/href="(\/[^"]*)"/g, (_, href) => {
      return `href="${prefixHref(href)}"`;
    });
    $(el).html(content);
  });

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (shouldLocalizeHref(href)) {
      $(el).attr("href", prefixHref(href));
    }
  });
}

function processPage(route, locale) {
  const srcPath = path.join(root, route.file);
  const html = fs.readFileSync(srcPath, "utf8");
  const $ = cheerio.load(html, { decodeEntities: false });
  const dict = translations[locale];

  applyHead($, route, locale, dict);
  ensureScripts($);

  if (locale === "zh") {
    applyChineseContent($, dict);
  }

  applyLangSwitcher($, route, locale, dict);

  return $.html();
}

for (const route of routes) {
  const enHtml = processPage(route, "en");
  fs.writeFileSync(path.join(root, route.file), enHtml);

  const zhHtml = processPage(route, "zh");
  const out = path.join(root, zhOutputPath(route.file));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, zhHtml);
}

console.log(`Generated ${routes.length} English pages and ${routes.length} Chinese pages.`);
