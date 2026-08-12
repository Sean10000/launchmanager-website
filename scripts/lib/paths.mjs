export function prefixHref(href) {
  if (!href) return href;
  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("/assets/") ||
    href.startsWith("/_vercel") ||
    href.startsWith("/zh")
  ) {
    return href;
  }
  if (href.startsWith("/#")) return `/zh${href.slice(1)}`;
  if (href === "/") return "/zh";
  if (href.startsWith("#")) return href;
  return `/zh${href}`;
}

export function shouldLocalizeHref(href) {
  if (!href || !href.startsWith("/")) return false;
  if (href.startsWith("/assets/") || href.startsWith("/_vercel") || href.startsWith("/zh")) {
    return false;
  }
  return true;
}

export function zhOutputPath(file) {
  if (file === "index.html") return "zh/index.html";
  return `zh/${file}`;
}

export function getMetaKeys(page) {
  if (page === "home") {
    return { title: "meta.title", desc: "meta.description" };
  }
  return { title: `${page}.meta.title`, desc: `${page}.meta.description` };
}
