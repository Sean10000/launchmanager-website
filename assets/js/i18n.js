(function () {
  const extraEn = window.LM_I18N_EXTRA?.en || {};
  const extraZh = window.LM_I18N_EXTRA?.zh || {};
  const base = window.LM_I18N || { en: {}, zh: {} };
  const i18n = {
    en: { ...base.en, ...extraEn },
    zh: { ...base.zh, ...extraZh },
  };

  function detectLang() {
    return window.location.pathname === "/zh" || window.location.pathname.startsWith("/zh/")
      ? "zh"
      : "en";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    applyReleaseLabels(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  let latestTag = null;

  function applyReleaseLabels(lang) {
    const dict = i18n[lang || detectLang()];
    const baseLabel = dict?.["hero.cta.download"];
    if (!baseLabel) return;
    const text = latestTag ? `${baseLabel} ${latestTag}` : baseLabel;
    document.querySelectorAll("[data-release-download]").forEach((el) => {
      el.textContent = text;
    });
  }

  async function fetchLatestRelease() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/Sean10000/LaunchManager/releases/latest",
        { headers: { Accept: "application/vnd.github+json" } }
      );
      if (!res.ok) return;
      const data = await res.json();
      if (data.tag_name) {
        latestTag = data.tag_name;
        applyReleaseLabels();
      }
    } catch (_) {
      /* keep generic Download label */
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectLang());
    fetchLatestRelease();
  });

  window.LaunchManagerI18n = { applyLang, detectLang };
})();
