import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

export function loadTranslations(rootDir) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(
    fs.readFileSync(path.join(rootDir, "assets/js/i18n-data.js"), "utf8"),
    sandbox
  );
  vm.runInContext(
    fs.readFileSync(path.join(rootDir, "assets/js/i18n-seo.js"), "utf8"),
    sandbox
  );
  const base = sandbox.window.LM_I18N || { en: {}, zh: {} };
  const extra = sandbox.window.LM_I18N_EXTRA || { en: {}, zh: {} };
  return {
    en: { ...base.en, ...extra.en },
    zh: { ...base.zh, ...extra.zh },
  };
}
