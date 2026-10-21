window.LM_I18N = {
    en: {
      "meta.title": "LaunchManager — AI creates the jobs. You stay in control.",
      "meta.description":
        "Native macOS app for visually managing launchd tasks, background services, and AI-built automation. Import plists, edit with Form or XML, control what runs. Free and open source.",

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
      "nav.download": "Download",
      "nav.lang": "中文",

      "hero.badge.macos": "macOS 14+",
      "hero.badge.swift": "Swift 5.10",
      "hero.badge.mit": "MIT License",
      "hero.badge.oss": "Open Source",
      "hero.title": "AI creates the jobs.<br />You stay in control.",
      "hero.lead":
        "A native macOS app for visually managing launchd tasks, background services, and the automation you build with AI.",
      "hero.cta.download": "Download",
      "hero.cta.screenshots": "View screenshots",
      "hero.cta.github": "View on GitHub",
      "hero.value":
        "Import a .plist or paste XML from your AI assistant. Inspect what it created, adjust configuration, check logs, and decide what stays active — free and open source.",

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

      "features.title": "Bring AI-generated jobs into view",
      "features.desc":
        "Import or paste what your assistant wrote, then browse, edit, and control LaunchAgents and LaunchDaemons in one native window — plus Services and Login Items.",
      "features.import.title": "Import / Paste",
      "features.import.desc":
        "Bring in a .plist or paste XML from an AI assistant into user or system agent directories.",
      "features.services.title": "Services scanner",
      "features.services.desc":
        "Host TCP listeners and Docker ports published on your Mac. Create a Launch Agent from a running service.",
      "features.browse.title": "Browse & edit",
      "features.browse.desc":
        "One list for User Agents, System Agents, and LaunchDaemons. Edit with Form or XML — extra keys preserved.",
      "features.control.title": "Load, start, stop",
      "features.control.desc":
        "Control jobs from the list. Admin prompt when system scope needs it.",
      "features.logs.title": "Log viewer",
      "features.logs.desc":
        "File stdout/stderr and system log (log show) when something fails.",
      "features.loginitems.title": "Login Items",
      "features.loginitems.desc":
        "See how launchd differs from macOS Login Items, with a shortcut to System Settings.",
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
        "Browse User Agents, System Agents, and LaunchDaemons from the sidebar. Import a .plist or paste XML (including from an AI assistant), or create a job from the New menu. Edit with Form or XML — extra keys are preserved. Load, start, and stop from the list; system-level changes prompt for admin approval when needed.",
      "help.services.title": "Services (TCP listeners)",
      "help.services.desc":
        "Open Services in the sidebar to scan host TCP listeners and Docker ports published on your Mac. Rename entries, open URLs, stop processes or containers, or create a Launch Agent from a running local service.",
      "help.scheduling.title": "Scheduling",
      "help.scheduling.desc":
        "Add daily, weekly, monthly, yearly, interval, and WatchPaths rules in one list. Calendar, interval, and WatchPaths can coexist — each rule applies independently.",
      "help.loginitems.title": "Login Items",
      "help.loginitems.desc":
        "Use the Login Items guide to see how launchd differs from macOS Login Items, with a shortcut to System Settings.",
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

      "scheduling.title": "Multi-trigger editing in one job",
      "scheduling.desc":
        "Calendar, interval, and WatchPaths can coexist. Add daily, weekly, monthly, yearly, interval, and path rules in one list — each rule applies independently.",
      "scheduling.interval.title": "Intervals",
      "scheduling.interval.desc": "Run a script every N seconds.",
      "scheduling.calendar.title": "Calendar",
      "scheduling.calendar.desc": "Daily, weekly, monthly, or yearly at a set time.",
      "scheduling.watch.title": "WatchPaths",
      "scheduling.watch.desc": "Run when files change in a watched directory.",
      "scheduling.note":
        "Form edits apply as a change set so unknown keys and custom calendar entries are kept when possible.",

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
      "usage.desc": "Five steps to take control of your launchd jobs.",
      "usage.step1":
        "Select <strong>Launch Agents</strong>, <strong>Login Items</strong>, or <strong>Services</strong> in the sidebar.",
      "usage.step2":
        "<strong>Import</strong> a .plist or <strong>Paste XML</strong> (or create a new job from the New menu).",
      "usage.step3":
        "Edit with <strong>Form</strong> or <strong>XML</strong>; save and use row actions to <strong>load / start / stop</strong>.",
      "usage.step4": "Expand a row for details and logs; clone from the row menu when needed.",
      "usage.step5":
        "On <strong>Services</strong>, manage local listeners or create a Launch Agent from a running process.",

      "faq.title": "Frequently asked questions",
      "faq.desc": "Common questions about LaunchManager.",
      "faq.q1": "What is LaunchManager?",
      "faq.a1":
        "A native macOS app for visually managing launchd tasks, background services, and the automation you build with AI — import or paste plists, edit with Form or XML, and control what runs.",
      "faq.q5": "Can I import plists from an AI assistant?",
      "faq.a5":
        "Yes. Import a .plist or paste XML from the toolbar, then edit with Form or XML and load/start/stop from the list.",
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
      "meta.title": "LaunchManager — AI 创建任务，你掌握运行。",
      "meta.description":
        "原生 macOS 应用，可视化管理 launchd 任务、后台服务与 AI 创建的自动化。导入 plist、用表单或 XML 编辑、控制运行。免费开源。",

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
      "nav.download": "下载",
      "nav.lang": "EN",

      "hero.badge.macos": "macOS 14+",
      "hero.badge.swift": "Swift 5.10",
      "hero.badge.mit": "MIT 许可",
      "hero.badge.oss": "开源",
      "hero.title": "AI 创建任务。<br />你掌握运行。",
      "hero.lead":
        "原生 macOS 应用，可视化管理 launchd 任务、后台服务，以及你用 AI 搭建的自动化。",
      "hero.cta.download": "下载",
      "hero.cta.screenshots": "查看截图",
      "hero.cta.github": "在 GitHub 查看",
      "hero.value":
        "导入 .plist，或粘贴 AI 助手给出的 XML。查看它创建了什么、调整配置、检查日志，决定哪些继续运行——免费开源。",

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

      "features.title": "把 AI 生成的任务收进视野",
      "features.desc":
        "导入或粘贴助手写出的内容，然后在同一原生窗口中浏览、编辑并控制 LaunchAgents 与 LaunchDaemons——另含 Services 与 Login Items。",
      "features.import.title": "导入 / 粘贴",
      "features.import.desc": "导入 .plist，或粘贴 AI 助手给出的 XML，写入用户或系统 Agent 目录。",
      "features.services.title": "Services 扫描",
      "features.services.desc": "本机 TCP 监听与已发布到 Mac 的 Docker 端口；可从运行中的服务创建 Launch Agent。",
      "features.browse.title": "浏览与编辑",
      "features.browse.desc": "统一查看用户 Agent、系统 Agent 与 LaunchDaemon；用表单或 XML 编辑，额外键会保留。",
      "features.control.title": "加载、启动、停止",
      "features.control.desc": "在列表中直接控制任务；系统级操作需要时会提示管理员权限。",
      "features.logs.title": "日志查看",
      "features.logs.desc": "文件 stdout/stderr 与系统日志（log show），出问题时可查看。",
      "features.loginitems.title": "Login Items",
      "features.loginitems.desc": "说明 launchd 与系统登录项的区别，并提供打开系统设置的快捷入口。",
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
        "在侧边栏浏览用户 Agent、系统 Agent 与 LaunchDaemon。可导入 .plist 或粘贴 XML（含 AI 助手生成的内容），也可从 New 菜单新建。用表单或 XML 编辑——额外键会保留。在列表中加载、启动、停止；系统级操作需要时会提示管理员权限。",
      "help.services.title": "Services（TCP 监听）",
      "help.services.desc":
        "在侧边栏打开 Services，扫描本机 TCP 监听与已发布到 Mac 的 Docker 端口。可重命名、打开 URL、停止进程或容器，或从运行中的本地服务创建 Launch Agent。",
      "help.scheduling.title": "调度",
      "help.scheduling.desc":
        "在同一列表中添加每日、每周、每月、每年、间隔与 WatchPaths 规则。日历、间隔与 WatchPaths 可并存，各规则独立生效。",
      "help.loginitems.title": "Login Items",
      "help.loginitems.desc":
        "通过 Login Items 说明了解 launchd 与系统登录项的区别，并可快捷打开系统设置。",
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

      "scheduling.title": "多触发规则，同一任务",
      "scheduling.desc":
        "日历、间隔与 WatchPaths 可并存。在同一列表中添加每日、每周、每月、每年、间隔与路径规则——各规则独立生效。",
      "scheduling.interval.title": "间隔执行",
      "scheduling.interval.desc": "每隔 N 秒运行一次脚本。",
      "scheduling.calendar.title": "日历调度",
      "scheduling.calendar.desc": "按日、周、月或年在指定时间运行。",
      "scheduling.watch.title": "WatchPaths",
      "scheduling.watch.desc": "当监听目录中的文件发生变化时运行。",
      "scheduling.note": "表单编辑以变更集方式写回，尽量保留未知键与自定义日历条目。",

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
      "usage.desc": "五步即可掌控 launchd 任务。",
      "usage.step1":
        "在侧边栏选择 <strong>Launch Agents</strong>、<strong>Login Items</strong> 或 <strong>Services</strong>。",
      "usage.step2":
        "<strong>导入</strong> .plist 或<strong>粘贴 XML</strong>（也可从 New 菜单新建）。",
      "usage.step3":
        "用<strong>表单</strong>或 <strong>XML</strong> 编辑；保存后用行内操作<strong>加载 / 启动 / 停止</strong>。",
      "usage.step4": "展开行查看详情与日志；需要时从菜单克隆。",
      "usage.step5":
        "在 <strong>Services</strong> 中管理本机监听，或从运行中的进程创建 Launch Agent。",

      "faq.title": "常见问题",
      "faq.desc": "关于 LaunchManager 的常见问题。",
      "faq.q1": "LaunchManager 是什么？",
      "faq.a1":
        "一款原生 macOS 应用，可视化管理 launchd 任务、后台服务以及你用 AI 搭建的自动化——可导入或粘贴 plist，用表单或 XML 编辑，并控制运行。",
      "faq.q5": "可以从 AI 助手导入 plist 吗？",
      "faq.a5":
        "可以。从工具栏导入 .plist 或粘贴 XML，再用表单或 XML 编辑，并在列表中加载/启动/停止。",
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
