window.LM_I18N = {
    en: {
      "meta.title": "LaunchManager — macOS Background Services Control Center",
      "meta.description":
        "Manage startup items, launchd jobs, network ports, and Docker containers on your Mac. One native GUI for everything running in the background. Free, open source.",

      "nav.features": "Features",
      "nav.topics": "Topics",
      "nav.blog": "Blog",
      "nav.topic.startup": "Startup & Login Items",
      "nav.topic.launchd": "launchd Manager",
      "nav.topic.ports": "Port Manager",
      "nav.topic.docker": "Docker Ports",
      "nav.screenshots": "Screenshots",
      "nav.templates": "Templates",
      "nav.help": "Help",
      "nav.scheduling": "Scheduling",
      "nav.install": "Install",
      "nav.compare": "Compare",
      "nav.download": "Download",
      "nav.lang": "中文",

      "hero.badge.macos": "macOS 14+",
      "hero.badge.swift": "Swift 5.10",
      "hero.badge.mit": "MIT License",
      "hero.badge.oss": "Open Source",
      "hero.title": "Manage every background service<br />on your Mac",
      "hero.lead":
        "LaunchManager is the control center for macOS background services — startup items, launchd jobs, network ports, and Docker containers — without editing XML or digging through lsof.",
      "hero.cta.download": "Download",
      "hero.cta.screenshots": "View screenshots",
      "hero.cta.github": "View on GitHub",
      "hero.value":
        "From \"why is port 3000 in use?\" to \"where is this LaunchAgent?\" — see what's running, control services, and fix conflicts in one native app. Free and open source.",

      "capabilities.title": "One place for background service management",
      "capabilities.desc": "Launchd is one feature. LaunchManager covers the full picture of what runs on your Mac.",
      "capabilities.launchagents": "LaunchAgents",
      "capabilities.launchdaemons": "LaunchDaemons",
      "capabilities.loginitems": "Login Items",
      "capabilities.background": "Background Services",
      "capabilities.ports": "Network Ports",
      "capabilities.scheduled": "Scheduled Tasks",
      "capabilities.docker": "Docker Containers",

      "pillars.title": "Guides by topic",
      "pillars.desc": "Practical answers for startup apps, launchd, ports, and Docker on macOS.",
      "pillars.startup.title": "Startup Manager",
      "pillars.startup.desc": "Find and control apps that launch at login or boot.",
      "pillars.launchd.title": "launchd Manager",
      "pillars.launchd.desc": "Browse, edit, and control LaunchAgents and LaunchDaemons.",
      "pillars.ports.title": "Port Manager",
      "pillars.ports.desc": "See what's listening, find port conflicts, and free blocked ports.",
      "pillars.docker.title": "Docker Ports",
      "pillars.docker.desc": "Map container ports to localhost and stop conflicts with dev servers.",

      "features.title": "An operations console for your Mac",
      "features.desc":
        "Unlike single-purpose tools, LaunchManager combines launchd management, port scanning, and Docker awareness in one window.",
      "features.services.title": "Services scanner",
      "features.services.desc":
        "Scan local TCP listeners every 3 seconds. Docker-aware, with smart labels and persistent custom names.",
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
      "features.loginitems.title": "Login Items",
      "features.loginitems.desc":
        "Review apps set to open at login alongside your launchd jobs.",
      "features.helpLink": "Need a walkthrough? Open the Help guide →",

      "screenshots.title": "See it in action",
      "screenshots.desc": "LaunchManager UI for launchd jobs, local services, and login items.",
      "screenshots.cap.home": "Home — launchd scopes and Services in one window",
      "screenshots.cap.services": "Services — local TCP port listeners, refreshed every 3 seconds",
      "screenshots.cap.rename": "Services — rename any listener; custom labels persist across restarts",
      "screenshots.cap.create": "Launchd — create a new job with a guided form",
      "screenshots.cap.edit": "Launchd — edit job fields and plist values",
      "screenshots.cap.loginitems": "Login Items — apps configured to open at login",
      "screenshots.helpLink": "Read the Help guide →",

      "help.title": "LaunchManager Help",
      "help.desc": "Getting started, everyday tasks, and answers to common questions.",
      "help.topics.title": "Topics",
      "help.launchd.title": "Launchd jobs",
      "help.launchd.desc":
        "Browse User Agents, System Agents, and System Daemons from the sidebar. Create jobs with a guided form or edit plist fields directly. Load, start, and stop from the list — system-level changes prompt for admin approval when needed.",
      "help.services.title": "Services (TCP listeners)",
      "help.services.desc":
        "Open Services in the sidebar to scan local TCP listeners (refreshes every 3 seconds). Docker containers show name, image, and Compose project. Rename any row to a custom label — it persists across restarts. Stop Docker containers with docker stop instead of killing proxy processes.",
      "help.scheduling.title": "Scheduling",
      "help.scheduling.desc":
        "When creating or editing a job, set interval, calendar, run-at-load, or keep-alive options in the same form. This covers most everyday scheduling without a separate tool.",
      "help.loginitems.title": "Login Items",
      "help.loginitems.desc":
        "Use the Login Items view to see which apps are configured to open at login, alongside the launchd jobs you manage.",
      "help.troubleshoot.title": "Troubleshooting",
      "help.troubleshoot.item1":
        "Broken or empty plists appear inline in the list — delete them with one click.",
      "help.troubleshoot.item2":
        "If Docker actions fail, ensure Docker Desktop or Colima is running. The app searches common install paths and falls back to your PATH.",
      "help.troubleshoot.item3":
        "Loaded jobs keep running after you quit LaunchManager — only setup and control happen in the app.",
      "help.screenshotsLink": "See annotated screenshots →",
      "help.templatesLink": "Browse plist templates →",
      "help.issuesLink": "Report a bug on GitHub →",

      "help.meta.title": "LaunchManager Help",
      "help.meta.description":
        "Help guide for LaunchManager — manage launchd jobs, scan local services, and control Docker containers on macOS.",

      "screenshots.meta.title": "LaunchManager Screenshots",
      "screenshots.meta.description":
        "Screenshots of LaunchManager — launchd management, Services port scanning, and Login Items on macOS.",

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
        "Most tools cover one layer — launchd, ports, or processes. LaunchManager combines them in a free operations console.",
      "compare.note":
        'Power users needing an AI assistant or expert XML editor may prefer <a href="https://www.soma-zone.com/LaunchControl/" target="_blank" rel="noopener">LaunchControl</a>.',
      "compare.row.price": "Price",
      "compare.row.browse": "Browse agents & daemons",
      "compare.row.gui": "Create & edit (GUI)",
      "compare.row.schedule": "Interval & calendar scheduling",
      "compare.row.keepalive": "Run at load / keep alive",
      "compare.row.system": "System Agent / Daemon support",
      "compare.row.services": "Local TCP / port monitoring",
      "compare.row.logs": "Log viewer",
      "compare.row.invalid": "Invalid plist detection",
      "compare.row.running": "App must stay running",
      "compare.row.ai": "AI assistant",
      "compare.row.oss": "Open source",
      "compare.lm.price": "Free & OSS",
      "compare.lm.services": "✓ Docker-aware",
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
        "A native macOS control center for background services — manage LaunchAgents, LaunchDaemons, Login Items, local TCP ports, and Docker containers from one GUI instead of hand-editing plists or running lsof.",
      "faq.q5": "How is this different from LaunchControl or Lingon?",
      "faq.a5":
        "Those tools focus on launchd. LaunchManager also scans listening ports (Docker-aware), shows Login Items, and helps answer \"what's running on my Mac?\" in one place — for free.",
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
      "support.wechat.hint": "Open WeChat and use Scan to scan the code",

      "templates.meta.title": "LaunchManager Plist Templates",
      "templates.meta.description":
        "Ready-to-use launchd plist templates for macOS — download or copy XML for LaunchAgents and LaunchDaemons.",
      "templates.title": "Plist templates",
      "templates.desc":
        "Starter LaunchAgent plists for common patterns. Download a file or copy the XML, then edit paths and Label before loading.",
      "templates.note":
        "User Agents: save to ~/Library/LaunchAgents/ and run launchctl load ~/Library/LaunchAgents/your.plist. Change com.example.* to your own reverse-DNS label.",
      "templates.download": "Download",
      "templates.copy": "Copy XML",
      "templates.helpLink": "Load and manage jobs in LaunchManager →",
      "templates.t1.title": "Run script at login",
      "templates.t1.meta": "User Agent · RunAtLoad",
      "templates.t1.desc":
        "Runs once when the agent is loaded — typical for login-time setup scripts that exit when finished.",
      "templates.t2.title": "Daily schedule",
      "templates.t2.meta": "User Agent · StartCalendarInterval",
      "templates.t2.desc":
        "Runs every day at 09:00. Adjust Hour and Minute, or add Weekday for weekly jobs.",
      "templates.t3.title": "Interval job",
      "templates.t3.meta": "User Agent · StartInterval",
      "templates.t3.desc":
        "Runs every 3600 seconds (1 hour). Also runs once at load when RunAtLoad is true.",
      "templates.t4.title": "Keep-alive process",
      "templates.t4.meta": "User Agent · KeepAlive",
      "templates.t4.desc":
        "Keeps a long-running process alive — dev servers, workers, or local APIs. launchd restarts it if it exits.",
      "templates.t5.title": "Watch path",
      "templates.t5.meta": "User Agent · WatchPaths",
      "templates.t5.desc":
        "Runs your script when files change in a watched directory — useful for config reloads or simple file triggers.",

      "footer.github": "GitHub",
      "footer.help": "Help",
      "footer.templates": "Templates",
      "footer.blog": "Blog",
      "footer.guides": "Guides",
      "footer.screenshots": "Screenshots",
      "footer.releases": "Releases",
      "footer.license": "MIT License",
      "footer.issues": "Issues",
      "footer.built":
        'Built with Swift & SwiftUI · Acknowledgements to <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> for AI pair programming',
      "footer.copy": "© Sean10000 · LaunchManager is not affiliated with Apple Inc.",

      "seo.cta.title": "Do it visually in LaunchManager",
      "seo.cta.desc": "Browse startup items, launchd jobs, ports, and Docker — then load, stop, or fix conflicts from one native app.",
      "seo.cta.btn": "Download LaunchManager",
      "seo.related": "Related guides",
    },

    zh: {
      "meta.title": "LaunchManager — macOS 后台服务控制中心",
      "meta.description":
        "管理 Mac 启动项、launchd 任务、网络端口与 Docker 容器。一个原生 GUI 掌控所有后台服务。免费开源。",

      "nav.features": "功能",
      "nav.topics": "主题",
      "nav.blog": "博客",
      "nav.topic.startup": "启动项与 Login Items",
      "nav.topic.launchd": "launchd 管理",
      "nav.topic.ports": "端口管理",
      "nav.topic.docker": "Docker 端口",
      "nav.screenshots": "截图",
      "nav.templates": "模板",
      "nav.help": "帮助",
      "nav.scheduling": "调度",
      "nav.install": "安装",
      "nav.compare": "对比",
      "nav.download": "下载",
      "nav.lang": "EN",

      "hero.badge.macos": "macOS 14+",
      "hero.badge.swift": "Swift 5.10",
      "hero.badge.mit": "MIT 许可",
      "hero.badge.oss": "开源",
      "hero.title": "管理 Mac 上<br />所有后台服务",
      "hero.lead":
        "LaunchManager 是 macOS 后台服务控制中心——启动项、launchd 任务、网络端口与 Docker 容器，无需手写 XML 或翻查 lsof。",
      "hero.cta.download": "下载",
      "hero.cta.screenshots": "查看截图",
      "hero.cta.github": "在 GitHub 查看",
      "hero.value":
        "从「3000 端口被谁占了？」到「这个 LaunchAgent 在哪？」——在一个原生应用里查看运行状态、控制服务、解决冲突。免费开源。",

      "capabilities.title": "后台服务管理，一站搞定",
      "capabilities.desc": "launchd 只是其中一环。LaunchManager 覆盖 Mac 上后台运行的全貌。",
      "capabilities.launchagents": "LaunchAgents",
      "capabilities.launchdaemons": "LaunchDaemons",
      "capabilities.loginitems": "Login Items",
      "capabilities.background": "后台服务",
      "capabilities.ports": "网络端口",
      "capabilities.scheduled": "定时任务",
      "capabilities.docker": "Docker 容器",

      "pillars.title": "按主题查看指南",
      "pillars.desc": "启动项、launchd、端口与 Docker 的实用解答。",
      "pillars.startup.title": "启动项管理",
      "pillars.startup.desc": "查找并控制登录或开机时自动启动的应用。",
      "pillars.launchd.title": "launchd 管理",
      "pillars.launchd.desc": "浏览、编辑并控制 LaunchAgents 与 LaunchDaemons。",
      "pillars.ports.title": "端口管理",
      "pillars.ports.desc": "查看监听端口、定位冲突并释放被占用的端口。",
      "pillars.docker.title": "Docker 端口",
      "pillars.docker.desc": "查看容器端口映射，避免与本地开发服务冲突。",

      "features.title": "Mac 后台运维控制台",
      "features.desc": "不同于单一用途工具，LaunchManager 将 launchd 管理、端口扫描与 Docker 感知整合在同一窗口。",
      "features.services.title": "Services 扫描",
      "features.services.desc": "每 3 秒扫描本地 TCP 监听，Docker 感知，智能标注，自定义名称持久保存。",
      "features.browse.title": "浏览所有范围",
      "features.browse.desc": "侧边栏统一查看用户代理、系统代理和系统守护进程。",
      "features.edit.title": "创建与编辑任务",
      "features.edit.desc": "表单化编辑程序路径、启动参数和 plist 字段。",
      "features.control.title": "加载、启动、停止",
      "features.control.desc": "在列表中直接控制任务；系统级操作需要时会提示管理员权限。",
      "features.logs.title": "日志查看",
      "features.logs.desc": "查看文件日志和系统日志，无需离开应用。",
      "features.loginitems.title": "Login Items",
      "features.loginitems.desc": "查看登录时自动打开的应用，与 launchd 任务一并管理。",
      "features.helpLink": "需要操作指引？打开帮助文档 →",

      "screenshots.title": "一睹真容",
      "screenshots.desc": "LaunchManager 的 launchd 任务、本地服务与 Login Items 界面。",
      "screenshots.cap.home": "主界面 — launchd 范围与 Services 同屏展示",
      "screenshots.cap.services": "Services — 本地 TCP 端口监听，每 3 秒刷新",
      "screenshots.cap.rename": "Services — 重命名任意监听，自定义标签重启后保留",
      "screenshots.cap.create": "Launchd — 通过引导表单新建任务",
      "screenshots.cap.edit": "Launchd — 编辑任务字段与 plist",
      "screenshots.cap.loginitems": "Login Items — 登录时自动打开的应用",
      "screenshots.helpLink": "阅读帮助文档 →",

      "help.title": "LaunchManager 帮助",
      "help.desc": "快速上手、日常操作说明与常见问题解答。",
      "help.topics.title": "主题",
      "help.launchd.title": "Launchd 任务",
      "help.launchd.desc":
        "在侧边栏浏览用户代理、系统代理和系统守护进程。通过引导表单创建任务，或直接编辑 plist 字段。在列表中加载、启动、停止——系统级操作需要时会提示管理员权限。",
      "help.services.title": "Services（TCP 监听）",
      "help.services.desc":
        "在侧边栏打开 Services，扫描本地 TCP 监听（每 3 秒刷新）。Docker 容器显示名称、镜像和 Compose 项目。任意行可重命名为自定义标签，重启后保留。使用 docker stop 停止容器，避免误杀代理进程。",
      "help.scheduling.title": "调度",
      "help.scheduling.desc":
        "创建或编辑任务时，在同一表单中设置间隔、日历、登录启动或保活选项，满足大多数日常调度需求。",
      "help.loginitems.title": "Login Items",
      "help.loginitems.desc":
        "在 Login Items 视图中查看配置为登录时打开的应用，与 launchd 任务一并浏览。",
      "help.troubleshoot.title": "故障排除",
      "help.troubleshoot.item1": "损坏或空的 plist 会在列表中行内提示，支持一键删除。",
      "help.troubleshoot.item2": "若 Docker 操作失败，请确认 Docker Desktop 或 Colima 正在运行。应用会搜索常见安装路径并回退到 PATH。",
      "help.troubleshoot.item3": "已加载的任务在退出 LaunchManager 后仍由 launchd 运行——应用仅用于配置和控制。",
      "help.screenshotsLink": "查看标注截图 →",
      "help.templatesLink": "浏览 plist 模板 →",
      "help.issuesLink": "在 GitHub 反馈问题 →",

      "help.meta.title": "LaunchManager 帮助",
      "help.meta.description":
        "LaunchManager 帮助文档——在 macOS 上管理 launchd 任务、扫描本地服务并控制 Docker 容器。",

      "screenshots.meta.title": "LaunchManager 截图",
      "screenshots.meta.description":
        "LaunchManager 界面截图——launchd 管理、Services 端口扫描与 Login Items。",

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
        "多数工具只覆盖一层——launchd、端口或进程。LaunchManager 在免费的运维控制台中把它们整合在一起。",
      "compare.note":
        '需要 AI 助手或 XML 专家编辑的进阶用户，可考虑 <a href="https://www.soma-zone.com/LaunchControl/" target="_blank" rel="noopener">LaunchControl</a>。',
      "compare.row.price": "价格",
      "compare.row.browse": "浏览代理与守护进程",
      "compare.row.gui": "图形界面创建与编辑",
      "compare.row.schedule": "间隔与日历调度",
      "compare.row.keepalive": "登录启动 / 保活",
      "compare.row.system": "系统代理 / 守护进程支持",
      "compare.row.services": "本地 TCP / 端口监控",
      "compare.row.logs": "日志查看",
      "compare.row.invalid": "无效 plist 检测",
      "compare.row.running": "应用需保持运行",
      "compare.row.ai": "AI 助手",
      "compare.row.oss": "开源",
      "compare.lm.price": "免费开源",
      "compare.lm.services": "✓ Docker 感知",
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
        "一款原生 macOS 后台服务控制中心——在同一 GUI 中管理 LaunchAgents、LaunchDaemons、Login Items、本地 TCP 端口与 Docker 容器，无需手写 plist 或运行 lsof。",
      "faq.q5": "和 LaunchControl、Lingon 有什么不同？",
      "faq.a5":
        "那些工具专注 launchd。LaunchManager 还扫描监听端口（Docker 感知）、显示 Login Items，免费帮你回答「Mac 上到底在跑什么？」。",
      "faq.q2": "退出应用后，任务还会继续运行吗？",
      "faq.a2": "会。已加载的任务由 launchd 负责运行，LaunchManager 仅用于配置和控制。",
      "faq.q3": "可以管理系统级任务吗？",
      "faq.a3": "可以，在需要时会提示输入管理员密码。",
      "faq.q4": "运行需要什么环境？",
      "faq.a4": "macOS 14 及以上，可通过 Homebrew、DMG 或从源码构建安装。",

      "support.title": "支持项目",
      "support.desc": "如果 LaunchManager 帮你节省了时间，欢迎请我喝杯咖啡。美式更好。☕",
      "support.wechat.hint": "请打开微信，使用「扫一扫」扫描赞赏码",

      "templates.meta.title": "LaunchManager Plist 模板",
      "templates.meta.description":
        "开箱即用的 macOS launchd plist 模板——可下载或复制 XML，用于 LaunchAgent 与 LaunchDaemon。",
      "templates.title": "Plist 模板",
      "templates.desc":
        "常用场景的 LaunchAgent 起步模板。下载 plist 或复制 XML，修改路径和 Label 后再加载。",
      "templates.note":
        "用户代理（User Agent）：保存到 ~/Library/LaunchAgents/，执行 launchctl load ~/Library/LaunchAgents/your.plist。请将 com.example.* 改为你自己的反向 DNS 标识。",
      "templates.download": "下载",
      "templates.copy": "复制 XML",
      "templates.helpLink": "在 LaunchManager 中加载和管理任务 →",
      "templates.t1.title": "登录时运行脚本",
      "templates.t1.meta": "User Agent · RunAtLoad",
      "templates.t1.desc": "加载代理时运行一次——适合登录时执行并退出的初始化脚本。",
      "templates.t2.title": "每日定时",
      "templates.t2.meta": "User Agent · StartCalendarInterval",
      "templates.t2.desc": "每天 09:00 运行。可调整 Hour、Minute，或添加 Weekday 实现每周任务。",
      "templates.t3.title": "间隔执行",
      "templates.t3.meta": "User Agent · StartInterval",
      "templates.t3.desc": "每 3600 秒（1 小时）运行一次。RunAtLoad 为 true 时加载后也会立即执行一次。",
      "templates.t4.title": "常驻进程",
      "templates.t4.meta": "User Agent · KeepAlive",
      "templates.t4.desc": "保持长驻进程运行——开发服务器、worker 或本地 API。进程退出后 launchd 会自动重启。",
      "templates.t5.title": "监听路径",
      "templates.t5.meta": "User Agent · WatchPaths",
      "templates.t5.desc": "当监听目录中的文件发生变化时运行脚本——适用于配置热重载或简单文件触发。",

      "footer.github": "GitHub",
      "footer.help": "帮助",
      "footer.templates": "模板",
      "footer.blog": "博客",
      "footer.guides": "指南",
      "footer.screenshots": "截图",
      "footer.releases": "发布页",
      "footer.license": "MIT 许可",
      "footer.issues": "问题反馈",
      "footer.built":
        '使用 Swift & SwiftUI 构建 · 感谢 <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> 协助编程',
      "footer.copy": "© Sean10000 · LaunchManager 与 Apple Inc. 无关联。",

      "seo.cta.title": "在 LaunchManager 里可视化完成",
      "seo.cta.desc": "浏览启动项、launchd 任务、端口与 Docker，在同一原生应用中加载、停止或解决冲突。",
      "seo.cta.btn": "下载 LaunchManager",
      "seo.related": "相关指南",
    },
  };;
