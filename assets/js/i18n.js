(function () {
  const STORAGE_KEY = "lm-lang";

  const i18n = {
    en: {
      "meta.title": "LaunchManager — Free macOS launchd Manager",
      "meta.description":
        "Native macOS app to browse, create, edit, and control LaunchAgents and LaunchDaemons. Free, open source, MIT.",

      "nav.features": "Features",
      "nav.scheduling": "Scheduling",
      "nav.install": "Install",
      "nav.compare": "Compare",
      "nav.faq": "FAQ",
      "nav.download": "Download",
      "nav.lang": "中文",

      "hero.badge.macos": "macOS 14+",
      "hero.badge.swift": "Swift 5.10",
      "hero.badge.mit": "MIT License",
      "hero.badge.oss": "Open Source",
      "hero.title": "Manage launchd jobs<br />on your Mac",
      "hero.lead":
        "LaunchManager is a native macOS app to browse, create, edit, and control LaunchAgents and LaunchDaemons — without editing XML by hand.",
      "hero.cta.download": "Download",
      "hero.cta.github": "View on GitHub",
      "hero.value":
        "launchd runs the background jobs on every Mac. LaunchManager gives you a clean UI to see what is loaded, fix broken plists, and control jobs with load, start, and stop — free and open source.",

      "features.title": "Everything for everyday launchd management",
      "features.desc":
        "Built for developers and power users who work with LaunchAgents and LaunchDaemons regularly.",
      "features.browse.title": "Browse all scopes",
      "features.browse.desc":
        "User Agents, System Agents, and System Daemons in one sidebar.",
      "features.edit.title": "Create & edit jobs",
      "features.edit.desc":
        "Form-based editing for program path, arguments, and plist fields.",
      "features.control.title": "Load, start, stop",
      "features.control.desc":
        "Control jobs from the list. Admin prompt when system scope needs it.",
      "features.logs.title": "Log viewer",
      "features.logs.desc":
        "File logs and system log output, without leaving the app.",
      "features.invalid.title": "Invalid plist handling",
      "features.invalid.desc":
        "Broken or empty plists show inline, with a one-click delete.",
      "features.oss.title": "Open source",
      "features.oss.desc":
        "MIT licensed. Inspect the code on GitHub or build with Xcode.",

      "screenshots.title": "See it in action",
      "screenshots.desc": "A focused UI for the jobs that keep your Mac running.",
      "screenshots.cap1": "Browse agents and daemons by scope",
      "screenshots.cap2": "Create and edit jobs with a guided form",

      "scheduling.title": "Schedule jobs when you need them",
      "scheduling.desc":
        "launchd can run jobs on a timer or at login. LaunchManager lets you set those options in the same form — no separate scheduler app required for basic use.",
      "scheduling.interval.title": "Intervals",
      "scheduling.interval.desc": "Run a script every N seconds.",
      "scheduling.calendar.title": "Calendar",
      "scheduling.calendar.desc": "Run at a set time, like a simple cron job.",
      "scheduling.login.title": "At login / keep alive",
      "scheduling.login.desc": "Start on boot or restart if a process exits.",
      "scheduling.note":
        "For most users, this covers everyday scheduling without a paid launchd GUI.",

      "install.title": "Get LaunchManager",
      "install.desc": "macOS 14 Sonoma or later.",
      "install.brew.tag": "Recommended",
      "install.brew.title": "Homebrew",
      "install.brew.desc": "Fast updates via tap. Best for developers already on Homebrew.",
      "install.dmg.tag": "Direct",
      "install.dmg.title": "Download DMG",
      "install.dmg.desc":
        "Grab the latest release, drag to Applications. Right-click → Open on first launch (not notarized).",
      "install.dmg.btn": "Download DMG",
      "install.src.tag": "Developers",
      "install.src.title": "Build from source",
      "install.src.desc": "Clone the repo and open in Xcode 16. Build and run with ⌘R.",

      "usage.title": "Quick start",
      "usage.desc": "Four steps to take control of your launchd jobs.",
      "usage.step1":
        "Pick a scope: <strong>User Agents</strong>, <strong>System Agents</strong>, or <strong>System Daemons</strong>.",
      "usage.step2": "Click <strong>+</strong> to create a job, or the pencil to edit.",
      "usage.step3": "Use row actions to <strong>load</strong>, <strong>start</strong>, or <strong>stop</strong>.",
      "usage.step4": "Expand a row to see details and logs.",

      "compare.title": "How it compares",
      "compare.desc":
        "A free option for everyday launchd management. Paid tools add extras like AI or an XML editor.",
      "compare.note":
        'Power users needing an AI assistant or expert XML editor may prefer <a href="https://www.soma-zone.com/LaunchControl/" target="_blank" rel="noopener">LaunchControl</a>.',
      "compare.row.price": "Price",
      "compare.row.browse": "Browse agents & daemons",
      "compare.row.gui": "Create & edit (GUI)",
      "compare.row.schedule": "Interval & calendar scheduling",
      "compare.row.keepalive": "Run at load / keep alive",
      "compare.row.system": "System Agent / Daemon support",
      "compare.row.logs": "Log viewer",
      "compare.row.invalid": "Invalid plist detection",
      "compare.row.running": "App must stay running",
      "compare.row.ai": "AI assistant",
      "compare.row.oss": "Open source",
      "compare.lm.price": "Free & OSS",
      "compare.lm.logs": "File + system log",
      "compare.lm.invalid": "✓ inline + delete",
      "compare.lm.running": "Not required",
      "compare.lc.logs": "Advanced",
      "compare.lc.ai": "7 LLM providers",
      "compare.lingon.system": "✓ (Pro)",
      "compare.lingon.running": "Required",
      "compare.ldts.system": "Limited",
      "compare.ldts.keepalive": "Limited",

      "faq.title": "Frequently asked questions",
      "faq.desc": "Common questions about LaunchManager.",
      "faq.q1": "What is LaunchManager?",
      "faq.a1":
        "A native macOS app to manage LaunchAgents and LaunchDaemons with a GUI instead of hand-editing plists.",
      "faq.q2": "Do jobs keep running after I quit the app?",
      "faq.a2":
        "Yes. launchd runs loaded jobs. LaunchManager is only for setup and control.",
      "faq.q3": "Can I manage system-level jobs?",
      "faq.a3": "Yes, with admin approval when needed.",
      "faq.q4": "What do I need to run it?",
      "faq.a4":
        "macOS 14+, via Homebrew, DMG, or build from source.",

      "support.title": "Support the project",
      "support.desc":
        "If LaunchManager saved you time, feel free to buy me a coffee. Americano is better. ☕",

      "footer.github": "GitHub",
      "footer.releases": "Releases",
      "footer.license": "MIT License",
      "footer.issues": "Issues",
      "footer.built":
        'Built with Swift & SwiftUI · Acknowledgements to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> for AI pair programming',
      "footer.copy": "© Sean10000 · LaunchManager is not affiliated with Apple Inc.",
    },

    zh: {
      "meta.title": "LaunchManager — 免费 macOS launchd 管理工具",
      "meta.description":
        "原生 macOS 应用，用于浏览、创建、编辑和控制 LaunchAgents 与 LaunchDaemons。免费开源，MIT 许可。",

      "nav.features": "功能",
      "nav.scheduling": "调度",
      "nav.install": "安装",
      "nav.compare": "对比",
      "nav.faq": "常见问题",
      "nav.download": "下载",
      "nav.lang": "EN",

      "hero.badge.macos": "macOS 14+",
      "hero.badge.swift": "Swift 5.10",
      "hero.badge.mit": "MIT 许可",
      "hero.badge.oss": "开源",
      "hero.title": "在 Mac 上管理<br />launchd 任务",
      "hero.lead":
        "LaunchManager 是一款原生 macOS 应用，用于浏览、创建、编辑和控制 LaunchAgents 与 LaunchDaemons——无需手写 XML。",
      "hero.cta.download": "下载",
      "hero.cta.github": "在 GitHub 查看",
      "hero.value":
        "launchd 负责 Mac 上所有后台任务。LaunchManager 提供清晰界面，查看已加载任务、修复损坏的 plist，并通过加载、启动、停止进行操作——免费开源。",

      "features.title": "日常 launchd 管理，一应俱全",
      "features.desc": "为经常使用 LaunchAgents 和 LaunchDaemons 的开发者和进阶用户打造。",
      "features.browse.title": "浏览所有范围",
      "features.browse.desc": "侧边栏统一查看用户代理、系统代理和系统守护进程。",
      "features.edit.title": "创建与编辑任务",
      "features.edit.desc": "表单化编辑程序路径、启动参数和 plist 字段。",
      "features.control.title": "加载、启动、停止",
      "features.control.desc": "在列表中直接控制任务；系统级操作需要时会提示管理员权限。",
      "features.logs.title": "日志查看",
      "features.logs.desc": "查看文件日志和系统日志，无需离开应用。",
      "features.invalid.title": "无效 plist 处理",
      "features.invalid.desc": "损坏或空的 plist 行内提示，支持一键删除。",
      "features.oss.title": "开源",
      "features.oss.desc": "MIT 许可，可在 GitHub 查看源码或用 Xcode 自行编译。",

      "screenshots.title": "一睹真容",
      "screenshots.desc": "专注于让 Mac 持续运行的那些后台任务。",
      "screenshots.cap1": "按范围浏览代理与守护进程",
      "screenshots.cap2": "通过引导表单创建和编辑任务",

      "scheduling.title": "需要时再配置调度",
      "scheduling.desc":
        "launchd 支持按时间或登录时运行任务。LaunchManager 在同一表单中即可设置这些选项——基础调度无需另装付费工具。",
      "scheduling.interval.title": "间隔执行",
      "scheduling.interval.desc": "每隔 N 秒运行一次脚本。",
      "scheduling.calendar.title": "日历调度",
      "scheduling.calendar.desc": "在指定时间运行，类似简单的 cron 任务。",
      "scheduling.login.title": "登录启动 / 保活",
      "scheduling.login.desc": "开机启动，或在进程退出后自动重启。",
      "scheduling.note": "对大多数用户来说，这已足够满足日常调度，无需付费 launchd 图形工具。",

      "install.title": "获取 LaunchManager",
      "install.desc": "需要 macOS 14 Sonoma 或更高版本。",
      "install.brew.tag": "推荐",
      "install.brew.title": "Homebrew",
      "install.brew.desc": "通过 tap 快速更新，适合已使用 Homebrew 的开发者。",
      "install.dmg.tag": "直接下载",
      "install.dmg.title": "下载 DMG",
      "install.dmg.desc":
        "下载最新版本，拖入应用程序文件夹。首次启动请右键 → 打开（尚未公证）。",
      "install.dmg.btn": "下载 DMG",
      "install.src.tag": "开发者",
      "install.src.title": "从源码构建",
      "install.src.desc": "克隆仓库，用 Xcode 16 打开，按 ⌘R 构建运行。",

      "usage.title": "快速上手",
      "usage.desc": "四步即可掌控 launchd 任务。",
      "usage.step1":
        "在侧边栏选择范围：<strong>用户代理</strong>、<strong>系统代理</strong>或<strong>系统守护进程</strong>。",
      "usage.step2": "点击 <strong>+</strong> 创建任务，或点击铅笔图标编辑。",
      "usage.step3": "使用行内按钮<strong>加载</strong>、<strong>启动</strong>或<strong>停止</strong>任务。",
      "usage.step4": "展开行查看详情和日志输出。",

      "compare.title": "与其他工具对比",
      "compare.desc":
        "日常 launchd 管理的免费选择。付费工具通常额外提供 AI 或 XML 专家编辑等功能。",
      "compare.note":
        '需要 AI 助手或 XML 专家编辑的进阶用户，可考虑 <a href="https://www.soma-zone.com/LaunchControl/" target="_blank" rel="noopener">LaunchControl</a>。',
      "compare.row.price": "价格",
      "compare.row.browse": "浏览代理与守护进程",
      "compare.row.gui": "图形界面创建与编辑",
      "compare.row.schedule": "间隔与日历调度",
      "compare.row.keepalive": "登录启动 / 保活",
      "compare.row.system": "系统代理 / 守护进程支持",
      "compare.row.logs": "日志查看",
      "compare.row.invalid": "无效 plist 检测",
      "compare.row.running": "应用需保持运行",
      "compare.row.ai": "AI 助手",
      "compare.row.oss": "开源",
      "compare.lm.price": "免费开源",
      "compare.lm.logs": "文件 + 系统日志",
      "compare.lm.invalid": "✓ 行内提示 + 删除",
      "compare.lm.running": "不需要",
      "compare.lc.logs": "高级",
      "compare.lc.ai": "7 种 LLM",
      "compare.lingon.system": "✓（Pro）",
      "compare.lingon.running": "需要",
      "compare.ldts.system": "有限",
      "compare.ldts.keepalive": "有限",

      "faq.title": "常见问题",
      "faq.desc": "关于 LaunchManager 的常见问题。",
      "faq.q1": "LaunchManager 是什么？",
      "faq.a1":
        "一款原生 macOS 应用，通过图形界面管理 LaunchAgents 和 LaunchDaemons，无需手写 plist。",
      "faq.q2": "退出应用后，任务还会继续运行吗？",
      "faq.a2": "会。已加载的任务由 launchd 负责运行，LaunchManager 仅用于配置和控制。",
      "faq.q3": "可以管理系统级任务吗？",
      "faq.a3": "可以，在需要时会提示输入管理员密码。",
      "faq.q4": "运行需要什么环境？",
      "faq.a4": "macOS 14 及以上，可通过 Homebrew、DMG 或从源码构建安装。",

      "support.title": "支持项目",
      "support.desc": "如果 LaunchManager 帮你节省了时间，欢迎请我喝杯咖啡。美式更好。☕",

      "footer.github": "GitHub",
      "footer.releases": "发布页",
      "footer.license": "MIT 许可",
      "footer.issues": "问题反馈",
      "footer.built":
        '使用 Swift & SwiftUI 构建 · 感谢 <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> 协助编程',
      "footer.copy": "© Sean10000 · LaunchManager 与 Apple Inc. 无关联。",
    },
  };

  function prefersChinese() {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
    return langs.some((l) => String(l).toLowerCase().startsWith("zh"));
  }

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && i18n[saved]) return saved;
    return prefersChinese() ? "zh" : "en";
  }

  function applyLang(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    const title = dict["meta.title"];
    const desc = dict["meta.description"];
    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && desc) metaDesc.setAttribute("content", desc);

    localStorage.setItem(STORAGE_KEY, lang);
    applyReleaseLabels(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  let latestTag = null;

  function applyReleaseLabels(lang) {
    const dict = i18n[lang || localStorage.getItem(STORAGE_KEY) || detectLang()];
    const base = dict?.["hero.cta.download"];
    if (!base) return;
    const text = latestTag ? `${base} ${latestTag}` : base;
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

  function toggleLang() {
    const current = localStorage.getItem(STORAGE_KEY) || detectLang();
    applyLang(current === "zh" ? "en" : "zh");
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectLang());
    fetchLatestRelease();
    document.getElementById("lang-toggle")?.addEventListener("click", toggleLang);
  });

  window.LaunchManagerI18n = { applyLang, toggleLang, detectLang };
})();
