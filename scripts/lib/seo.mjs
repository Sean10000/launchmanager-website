export const SITE = "https://launchmanager.dev";

export function localeUrls(slug) {
  const enPath = slug ? `/${slug}` : "/";
  const zhPath = slug ? `/zh/${slug}` : "/zh";
  return {
    en: `${SITE}${enPath}`,
    zh: `${SITE}${zhPath}`,
    xDefault: `${SITE}${enPath}`,
  };
}

export function hreflangTags(slug) {
  const { en, zh, xDefault } = localeUrls(slug);
  return [
    `<link rel="alternate" hreflang="en" href="${en}" />`,
    `<link rel="alternate" hreflang="zh-Hans" href="${zh}" />`,
    `<link rel="alternate" hreflang="x-default" href="${xDefault}" />`,
  ].join("\n  ");
}

export function switchHref(slug, locale) {
  if (locale === "zh") {
    return slug ? `/${slug}` : "/";
  }
  return slug ? `/zh/${slug}` : "/zh";
}
