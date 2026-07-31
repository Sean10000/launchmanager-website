window.LM_I18N_EXTRA = {
  en: {
    "help.desc":
      "Getting started with background service management — launchd, ports, Docker, and Login Items on your Mac.",
    "help.meta.description":
      "Help guide for LaunchManager — manage macOS background services, launchd jobs, ports, and Docker containers.",

    "port-manager.meta.title": "Port Manager for macOS — LaunchManager",
    "port-manager.meta.description":
      "Find listening ports, identify port conflicts, and see which process uses each port on your Mac. Free GUI alternative to lsof.",
    "port-manager.title": "Port Manager for macOS",
    "port-manager.lead":
      "See every TCP listener on localhost, match ports to processes, and fix conflicts — without memorizing lsof flags.",
    "port-manager.body":
      '<h2>The problem</h2><p>You start a dev server and get <code>EADDRINUSE</code>. Something is already on port 3000, 5173, or 8080 — but Activity Monitor does not show ports, and <code>lsof</code> output is hard to scan.</p><h2>Terminal approach</h2><pre><code># List what listens on port 3000\nlsof -nP -iTCP:3000 -sTCP:LISTEN\n\n# Or see all listening TCP ports\nlsof -nP -iTCP -sTCP:LISTEN</code></pre><p>To free a port, find the PID in the <code>lsof</code> output and run <code>kill &lt;PID&gt;</code>. If it is a Docker proxy, stop the container instead of killing the proxy process.</p><h2>GUI approach with LaunchManager</h2><p>Open <strong>Services</strong> in the sidebar. LaunchManager refreshes local TCP listeners every 3 seconds, shows process names and PIDs, and labels Docker containers with image and Compose project names. Rename any row for quick recognition — labels persist across restarts.</p><p>Related: <a href="/kill-port">kill port on Mac</a> · <a href="/docker-ports">Docker ports</a></p>',

    "startup-manager.meta.title": "Startup Manager for Mac — LaunchManager",
    "startup-manager.meta.description":
      "Find apps that launch at login, manage Login Items, and control launchd startup jobs on macOS.",
    "startup-manager.title": "Startup Manager for Mac",
    "startup-manager.lead":
      "Answer \"why does this app open every time I log in?\" by inspecting Login Items and launchd RunAtLoad jobs in one place.",
    "startup-manager.body":
      '<h2>The problem</h2><p>Macs accumulate startup entries over time — Login Items, LaunchAgents with <code>RunAtLoad</code>, and background helpers you forgot you installed. System Settings only shows part of the picture.</p><h2>What to check</h2><ul><li><strong>Login Items</strong> — apps that open when you sign in (System Settings → General → Login Items).</li><li><strong>LaunchAgents</strong> — per-user plist jobs in <code>~/Library/LaunchAgents</code> that can start at load.</li><li><strong>LaunchDaemons</strong> — system-wide jobs (require admin to change).</li></ul><h2>GUI approach with LaunchManager</h2><p>Use the <strong>Login Items</strong> view to see configured login apps alongside your launchd jobs. Browse User Agents to find <code>RunAtLoad</code> entries and unload or disable them without editing XML by hand.</p><p>Related: <a href="/launchd-manager">launchd manager</a> · <a href="/blog/launchagent-vs-login-items">LaunchAgent vs Login Items</a></p>',

    "launchd-manager.meta.title": "launchd Manager & launchctl GUI — LaunchManager",
    "launchd-manager.meta.description":
      "Browse, create, edit, and control LaunchAgents and LaunchDaemons on macOS. Free launchctl GUI alternative.",
    "launchd-manager.title": "launchd Manager for macOS",
    "launchd-manager.lead":
      "A native GUI for launchctl — browse User Agents, System Agents, and System Daemons, then load, start, stop, or edit plist jobs.",
    "launchd-manager.body":
      '<h2>The problem</h2><p><code>launchctl</code> is powerful but opaque. Finding the right plist, fixing a broken job, or creating a new LaunchAgent means XML files, domain targets, and easy-to-mistype commands.</p><h2>Terminal basics</h2><pre><code># List loaded user agents\nlaunchctl list\n\n# Load a plist\nlaunchctl load ~/Library/LaunchAgents/com.example.job.plist\n\n# Unload\nlaunchctl unload ~/Library/LaunchAgents/com.example.job.plist</code></pre><h2>GUI approach with LaunchManager</h2><p>Pick a scope in the sidebar — <strong>User Agents</strong>, <strong>System Agents</strong>, or <strong>System Daemons</strong>. Create jobs with a guided form, edit plist fields, view logs inline, and load/start/stop from the list. Invalid plists are flagged with one-click delete.</p><p>Related: <a href="/startup-manager">startup manager</a> · <a href="/port-manager">port manager</a></p>',

    "kill-port.meta.title": "Kill Port on Mac — Find & Free Blocked Ports",
    "kill-port.meta.description":
      "How to kill a process using a port on macOS. Find the PID with lsof and free port 3000, 8080, 5173, and more.",
    "kill-port.title": "Kill Port on Mac",
    "kill-port.lead":
      "When a port is already in use, find the owning process and stop it safely — including Docker containers.",
    "kill-port.body":
      '<h2>Quick fix (replace PORT)</h2><pre><code>lsof -nP -iTCP:PORT -sTCP:LISTEN\nkill &lt;PID&gt;</code></pre><p>Use <code>kill -9</code> only if the process ignores a normal terminate signal.</p><h2>Common cases</h2><ul><li><strong>Orphaned Node/Vite server</strong> — kill the node process shown by lsof.</li><li><strong>Docker</strong> — the listener may be <code>com.docker.backend</code>; run <code>docker ps</code> and <code>docker stop</code> the container instead.</li><li><strong>launchd job</strong> — unload the LaunchAgent/Daemon in LaunchManager rather than killing a child that restarts.</li></ul><h2>Visual workflow</h2><p>In LaunchManager <strong>Services</strong>, sort by port, see the process name, PID, and whether Docker owns the listener. Stop containers from context without guessing PIDs.</p><p>Read also: <a href="/blog/kill-port-3000-mac">kill port 3000 on Mac</a> · <a href="/blog/fix-eaddrinuse-mac">fix EADDRINUSE</a></p>',

    "docker-ports.meta.title": "Docker Ports on Mac — LaunchManager",
    "docker-ports.meta.description":
      "See Docker container port mappings on localhost, find which container uses port 3000 or 5432, and stop conflicts.",
    "docker-ports.title": "Docker Ports on Mac",
    "docker-ports.lead":
      "Docker binds host ports through proxy processes — map containers to localhost ports and resolve dev-server conflicts.",
    "docker-ports.body":
      '<h2>The problem</h2><p><code>docker ps</code> shows port mappings, but when port 5432 or 3000 is busy it is not always obvious which container — or stale proxy — holds the socket.</p><h2>Terminal approach</h2><pre><code>docker ps --format "table {{.Names}}\\t{{.Ports}}"\nlsof -nP -iTCP:5432 -sTCP:LISTEN</code></pre><h2>GUI approach with LaunchManager</h2><p>The <strong>Services</strong> scanner is Docker-aware: container rows show name, image, and Compose project. Rename rows for your stack (e.g. \"postgres-dev\") and stop containers with <code>docker stop</code> instead of killing Docker proxy PIDs.</p><p>Related: <a href="/port-manager">port manager</a> · <a href="/blog/docker-port-5432">why Docker keeps port 5432</a></p>',

    "blog.meta.title": "LaunchManager Blog — macOS Background Services",
    "blog.meta.description":
      "How-to guides for ports, launchd, startup items, and Docker on macOS — with visual workflows in LaunchManager.",
    "blog.title": "Blog",
    "blog.lead": "Practical fixes for real Mac problems — ports, startup apps, launchd, and Docker.",
    "blog.post.kill-port-3000.title": "How to kill a process using port 3000 on macOS",
    "blog.post.kill-port-3000.excerpt":
      "Find what blocks port 3000 with lsof, stop it safely, and avoid killing Docker proxies by mistake.",
    "blog.post.fix-eaddrinuse.title": "Fix EADDRINUSE on macOS",
    "blog.post.fix-eaddrinuse.excerpt":
      "When your dev server cannot bind to a port, trace the conflict from error message to process or container.",
    "blog.post.launchagent-vs-login.title": "LaunchAgent vs Login Items",
    "blog.post.launchagent-vs-login.excerpt":
      "Two different startup mechanisms on macOS — when each runs and how to inspect both.",
    "blog.post.docker-5432.title": "Why Docker keeps occupying port 5432",
    "blog.post.docker-5432.excerpt":
      "Postgres containers, stale proxies, and how to see Docker port mappings on localhost.",

    "blog-kill-port-3000-mac.meta.title": "Kill Port 3000 on Mac — LaunchManager Blog",
    "blog-kill-port-3000-mac.meta.description":
      "Step-by-step: find which process uses port 3000 on macOS and free it without breaking Docker.",
    "blog-kill-port-3000-mac.title": "How to kill a process using port 3000 on macOS",
    "blog-kill-port-3000-mac.lead": "Port 3000 is the default for React, Next.js, and many API servers — here's how to unblock it.",
    "blog-kill-port-3000-mac.body":
      '<p>You run <code>npm run dev</code> and see <code>Error: listen EADDRINUSE: address already in use :::3000</code>. Something is already listening on localhost:3000.</p><h2>Step 1: Find the process</h2><pre><code>lsof -nP -iTCP:3000 -sTCP:LISTEN</code></pre><p>Note the <code>PID</code> and <code>COMMAND</code> columns. Common culprits: a previous <code>node</code> process, another framework dev server, or Docker Desktop forwarding port 3000.</p><h2>Step 2: Stop it safely</h2><pre><code>kill &lt;PID&gt;</code></pre><p>If the command is <code>com.docker</code> or <code>vpnkit</code>, use <code>docker ps</code> to find the container and <code>docker stop &lt;name&gt;</code> instead.</p><h2>Step 3: Prevent repeats</h2><p>If a launchd job respawns the process, unload the LaunchAgent in LaunchManager instead of killing the child each time.</p><h2>Do it visually</h2><p>Open LaunchManager → <strong>Services</strong>, filter mentally for port 3000, see PID and Docker labels, then stop the right target. <a href="/port-manager">Port manager guide →</a></p>',

    "blog-fix-eaddrinuse-mac.meta.title": "Fix EADDRINUSE on macOS — LaunchManager Blog",
    "blog-fix-eaddrinuse-mac.meta.description":
      "Resolve \"address already in use\" errors on Mac — find the blocking process or Docker container.",
    "blog-fix-eaddrinuse-mac.title": "Fix EADDRINUSE on macOS",
    "blog-fix-eaddrinuse-mac.lead": "EADDRINUSE means another process already bound to that address:port — here's the fix path.",
    "blog-fix-eaddrinuse-mac.body":
      '<p>The error includes a port number (e.g. 3000, 5173, 8080). That is your starting point.</p><h2>1. Identify the port</h2><p>From the error: <code>:::5173</code> → port <strong>5173</strong>.</p><h2>2. Find the listener</h2><pre><code>lsof -nP -iTCP:5173 -sTCP:LISTEN</code></pre><h2>3. Decide: process, Docker, or launchd</h2><ul><li><strong>Regular app</strong> — <code>kill PID</code></li><li><strong>Docker</strong> — <code>docker stop</code> the container</li><li><strong>launchd</strong> — unload the job so it does not respawn</li></ul><h2>4. Verify</h2><pre><code>lsof -nP -iTCP:5173 -sTCP:LISTEN</code></pre><p>No output means the port is free. Retry your dev server.</p><p>LaunchManager Services refreshes every 3 seconds so you can confirm the port cleared without re-running lsof. <a href="/kill-port">Kill port guide →</a></p>',

    "blog-launchagent-vs-login-items.meta.title": "LaunchAgent vs Login Items — LaunchManager Blog",
    "blog-launchagent-vs-login-items.meta.description":
      "Compare Login Items and LaunchAgents on macOS — what starts at login and how to inspect each.",
    "blog-launchagent-vs-login-items.title": "LaunchAgent vs Login Items",
    "blog-launchagent-vs-login-items.lead": "Both can make software run at login — but they work differently and live in different places.",
    "blog-launchagent-vs-login-items.body":
      '<h2>Login Items</h2><p>User-facing apps you (or an installer) added to open at login. Listed in <strong>System Settings → General → Login Items</strong>. Easy to remove from Settings, but not everything that auto-starts appears here.</p><h2>LaunchAgents</h2><p>Background jobs defined by XML plists, usually in <code>~/Library/LaunchAgents</code> or <code>/Library/LaunchAgents</code>. Controlled by <code>launchd</code>. Can run scripts, daemons, or helpers — not always visible as an app icon.</p><h2>When to use which</h2><ul><li><strong>Login Items</strong> — GUI apps you want in the Dock/session.</li><li><strong>LaunchAgents</strong> — scripts, servers, sync tools, dev services that should start in the background.</li></ul><h2>Inspect both in LaunchManager</h2><p><strong>Login Items</strong> view for login apps; <strong>User Agents</strong> for launchd plists with <code>RunAtLoad</code>. <a href="/startup-manager">Startup manager guide →</a></p>',

    "blog-docker-port-5432.meta.title": "Why Docker Keeps Port 5432 — LaunchManager Blog",
    "blog-docker-port-5432.meta.description":
      "Postgres and other containers binding 5432 on Mac — find the container and free the port.",
    "blog-docker-port-5432.title": "Why Docker keeps occupying port 5432",
    "blog-docker-port-5432.lead": "Port 5432 is the default Postgres port — Docker Compose stacks often leave it bound after you stop coding.",
    "blog-docker-port-5432.body":
      '<p>You try to run local Postgres or a app on 5432 and get a conflict. Often a <code>postgres</code> container from an old <code>docker compose up</code> is still running.</p><h2>Find the container</h2><pre><code>docker ps --filter "publish=5432"\ndocker ps -a | grep 5432</code></pre><h2>Stop it</h2><pre><code>docker stop &lt;container_name&gt;</code></pre><h2>If lsof shows Docker proxy</h2><p>macOS may show <code>com.docker.backend</code> as the listener. Killing that PID is the wrong move — stop the container instead.</p><p>LaunchManager labels Docker rows with container name and image so you can match port 5432 to the right stack. <a href="/docker-ports">Docker ports guide →</a></p>',
  },

  zh: {
    "help.desc":
      "macOS 后台服务管理入门——launchd、端口、Docker 与 Login Items。",
    "help.meta.description":
      "LaunchManager 帮助文档——管理 macOS 后台服务、launchd 任务、端口与 Docker 容器。",

    "port-manager.meta.title": "macOS 端口管理工具 — LaunchManager",
    "port-manager.meta.description":
      "查看 Mac 监听端口、定位端口冲突、找出占用端口的进程。免费的 lsof 图形化替代方案。",
    "port-manager.title": "macOS 端口管理",
    "port-manager.lead":
      "查看本机所有 TCP 监听、匹配端口与进程、解决冲突——无需死记 lsof 参数。",
    "port-manager.body":
      '<h2>常见问题</h2><p>启动开发服务器时出现 <code>EADDRINUSE</code>。3000、5173 或 8080 端口已被占用——但活动监视器不显示端口，<code>lsof</code> 输出又难读。</p><h2>终端做法</h2><pre><code># 查看 3000 端口\nlsof -nP -iTCP:3000 -sTCP:LISTEN\n\n# 所有 TCP 监听\nlsof -nP -iTCP -sTCP:LISTEN</code></pre><p>在输出中找到 PID，执行 <code>kill &lt;PID&gt;</code>。若是 Docker 代理进程，应停止容器而非误杀代理。</p><h2>LaunchManager 图形界面</h2><p>打开侧边栏 <strong>Services</strong>。每 3 秒刷新本地 TCP 监听，显示进程名、PID，并为 Docker 容器标注镜像与 Compose 项目。可重命名任意行，标签重启后保留。</p><p>相关：<a href="/kill-port">释放 Mac 端口</a> · <a href="/docker-ports">Docker 端口</a></p>',

    "startup-manager.meta.title": "Mac 启动项管理 — LaunchManager",
    "startup-manager.meta.description":
      "查找登录时自动打开的应用、管理 Login Items 与 launchd 启动任务。",
    "startup-manager.title": "Mac 启动项管理",
    "startup-manager.lead":
      "回答「为什么每次登录都会打开这个应用？」——在同一处查看 Login Items 与 launchd RunAtLoad 任务。",
    "startup-manager.body":
      '<h2>常见问题</h2><p>Mac 会积累各类启动项——Login Items、带 <code>RunAtLoad</code> 的 LaunchAgents、以及被遗忘的后台助手。系统设置只能看到其中一部分。</p><h2>需要检查什么</h2><ul><li><strong>Login Items</strong> — 登录时打开的应用（系统设置 → 通用 → 登录项）。</li><li><strong>LaunchAgents</strong> — <code>~/Library/LaunchAgents</code> 中的用户级 plist 任务。</li><li><strong>LaunchDaemons</strong> — 系统级任务（修改需管理员权限）。</li></ul><h2>LaunchManager 图形界面</h2><p>在 <strong>Login Items</strong> 视图查看登录应用，与用户级 launchd 任务并列浏览。在 <strong>User Agents</strong> 中查找 <code>RunAtLoad</code> 条目并卸载或禁用，无需手写 XML。</p><p>相关：<a href="/launchd-manager">launchd 管理</a> · <a href="/blog/launchagent-vs-login-items">LaunchAgent 与 Login Items 区别</a></p>',

    "launchd-manager.meta.title": "launchd 管理工具 / launchctl GUI — LaunchManager",
    "launchd-manager.meta.description":
      "浏览、创建、编辑并控制 macOS LaunchAgents 与 LaunchDaemons。免费的 launchctl 图形界面。",
    "launchd-manager.title": "macOS launchd 管理",
    "launchd-manager.lead":
      "launchctl 的原生 GUI——浏览用户代理、系统代理与系统守护进程，加载、启动、停止或编辑 plist 任务。",
    "launchd-manager.body":
      '<h2>常见问题</h2><p><code>launchctl</code> 功能强大但不直观。查找 plist、修复损坏任务或新建 LaunchAgent 都涉及 XML、domain 与易输错的命令。</p><h2>终端基础</h2><pre><code>launchctl list\nlaunchctl load ~/Library/LaunchAgents/com.example.job.plist\nlaunchctl unload ~/Library/LaunchAgents/com.example.job.plist</code></pre><h2>LaunchManager 图形界面</h2><p>在侧边栏选择 <strong>用户代理</strong>、<strong>系统代理</strong> 或 <strong>系统守护进程</strong>。用引导表单创建任务、编辑 plist、行内查看日志，并在列表中加载/启动/停止。无效 plist 会行内提示并支持一键删除。</p><p>相关：<a href="/startup-manager">启动项管理</a> · <a href="/port-manager">端口管理</a></p>',

    "kill-port.meta.title": "Mac 释放端口 — 查找并释放被占用端口",
    "kill-port.meta.description":
      "如何在 macOS 上结束占用端口的进程。用 lsof 查找 PID，释放 3000、8080、5173 等端口。",
    "kill-port.title": "Mac 释放端口",
    "kill-port.lead":
      "端口已被占用时，安全找到所属进程并停止——包括 Docker 容器。",
    "kill-port.body":
      '<h2>快速修复（将 PORT 换成实际端口）</h2><pre><code>lsof -nP -iTCP:PORT -sTCP:LISTEN\nkill &lt;PID&gt;</code></pre><p>仅在进程不响应正常终止信号时使用 <code>kill -9</code>。</p><h2>常见情况</h2><ul><li><strong>残留的 Node/Vite 进程</strong> — 结束 lsof 显示的 node 进程。</li><li><strong>Docker</strong> — 监听可能是 <code>com.docker.backend</code>；用 <code>docker stop</code> 停止容器。</li><li><strong>launchd 任务</strong> — 在 LaunchManager 中卸载 LaunchAgent/Daemon，避免子进程被反复拉起。</li></ul><h2>图形化流程</h2><p>在 LaunchManager <strong>Services</strong> 中按端口查看进程名、PID 及是否由 Docker 占用，无需猜测 PID。</p><p>延伸阅读：<a href="/blog/kill-port-3000-mac">释放 3000 端口</a> · <a href="/blog/fix-eaddrinuse-mac">修复 EADDRINUSE</a></p>',

    "docker-ports.meta.title": "Mac Docker 端口 — LaunchManager",
    "docker-ports.meta.description":
      "查看 Docker 容器在 localhost 的端口映射，找出占用 3000 或 5432 的容器并解决冲突。",
    "docker-ports.title": "Mac Docker 端口",
    "docker-ports.lead":
      "Docker 通过代理进程绑定主机端口——将容器映射到 localhost 并解决与开发服务的冲突。",
    "docker-ports.body":
      '<h2>常见问题</h2><p><code>docker ps</code> 能看到端口映射，但当 5432 或 3000 被占用时，不一定清楚是哪个容器或残留代理占用了套接字。</p><h2>终端做法</h2><pre><code>docker ps --format "table {{.Names}}\\t{{.Ports}}"\nlsof -nP -iTCP:5432 -sTCP:LISTEN</code></pre><h2>LaunchManager 图形界面</h2><p><strong>Services</strong> 扫描器支持 Docker 感知：容器行显示名称、镜像与 Compose 项目。可为技术栈重命名行（如「postgres-dev」），用 <code>docker stop</code> 停止容器，避免误杀 Docker 代理 PID。</p><p>相关：<a href="/port-manager">端口管理</a> · <a href="/blog/docker-port-5432">Docker 占用 5432 端口</a></p>',

    "blog.meta.title": "LaunchManager 博客 — macOS 后台服务",
    "blog.meta.description":
      "端口、launchd、启动项与 Docker 的 macOS 实操指南——配合 LaunchManager 图形化工作流。",
    "blog.title": "博客",
    "blog.lead": "解决真实 Mac 问题——端口、启动应用、launchd 与 Docker。",
    "blog.post.kill-port-3000.title": "如何在 macOS 上结束占用 3000 端口的进程",
    "blog.post.kill-port-3000.excerpt":
      "用 lsof 找出占用 3000 端口的进程，安全停止，避免误杀 Docker 代理。",
    "blog.post.fix-eaddrinuse.title": "在 macOS 上修复 EADDRINUSE",
    "blog.post.fix-eaddrinuse.excerpt":
      "开发服务器无法绑定端口时，从错误信息追踪到进程或容器。",
    "blog.post.launchagent-vs-login.title": "LaunchAgent 与 Login Items 的区别",
    "blog.post.launchagent-vs-login.excerpt":
      "macOS 上两种不同启动机制——何时运行、如何分别查看。",
    "blog.post.docker-5432.title": "为什么 Docker 一直占用 5432 端口",
    "blog.post.docker-5432.excerpt":
      "Postgres 容器、残留代理，以及如何在 localhost 查看 Docker 端口映射。",

    "blog-kill-port-3000-mac.meta.title": "Mac 释放 3000 端口 — LaunchManager 博客",
    "blog-kill-port-3000-mac.meta.description":
      "分步说明：在 macOS 上找出占用 3000 端口的进程并释放，且不影响 Docker。",
    "blog-kill-port-3000-mac.title": "如何在 macOS 上结束占用 3000 端口的进程",
    "blog-kill-port-3000-mac.lead": "3000 是 React、Next.js 等常用开发端口——这样释放它。",
    "blog-kill-port-3000-mac.body":
      '<p>运行 <code>npm run dev</code> 时出现 <code>Error: listen EADDRINUSE: address already in use :::3000</code>，说明 localhost:3000 已被监听。</p><h2>步骤 1：查找进程</h2><pre><code>lsof -nP -iTCP:3000 -sTCP:LISTEN</code></pre><p>注意 <code>PID</code> 与 <code>COMMAND</code>。常见原因：残留的 <code>node</code>、其他开发服务器，或 Docker 转发 3000 端口。</p><h2>步骤 2：安全停止</h2><pre><code>kill &lt;PID&gt;</code></pre><p>若命令为 <code>com.docker</code>，请用 <code>docker stop</code> 停止容器。</p><h2>步骤 3：避免反复出现</h2><p>若 launchd 会重新拉起进程，请在 LaunchManager 中卸载对应 LaunchAgent。</p><h2>图形化操作</h2><p>LaunchManager → <strong>Services</strong>，找到 3000 端口，查看 PID 与 Docker 标签。<a href="/port-manager">端口管理指南 →</a></p>',

    "blog-fix-eaddrinuse-mac.meta.title": "修复 macOS EADDRINUSE — LaunchManager 博客",
    "blog-fix-eaddrinuse-mac.meta.description":
      "解决 Mac 上「address already in use」——找到阻塞进程或 Docker 容器。",
    "blog-fix-eaddrinuse-mac.title": "在 macOS 上修复 EADDRINUSE",
    "blog-fix-eaddrinuse-mac.lead": "EADDRINUSE 表示该地址:端口已被其他进程绑定——按此路径排查。",
    "blog-fix-eaddrinuse-mac.body":
      '<p>错误信息中包含端口号（如 3000、5173、8080），从这里开始。</p><h2>1. 确认端口</h2><p>例如 <code>:::5173</code> → 端口 <strong>5173</strong>。</p><h2>2. 查找监听进程</h2><pre><code>lsof -nP -iTCP:5173 -sTCP:LISTEN</code></pre><h2>3. 判断类型：普通进程、Docker 或 launchd</h2><ul><li><strong>普通应用</strong> — <code>kill PID</code></li><li><strong>Docker</strong> — <code>docker stop</code></li><li><strong>launchd</strong> — 卸载任务，避免反复重启</li></ul><h2>4. 验证</h2><pre><code>lsof -nP -iTCP:5173 -sTCP:LISTEN</code></pre><p>无输出表示端口已释放。</p><p>LaunchManager Services 每 3 秒刷新，无需反复运行 lsof。<a href="/kill-port">释放端口指南 →</a></p>',

    "blog-launchagent-vs-login-items.meta.title": "LaunchAgent 与 Login Items — LaunchManager 博客",
    "blog-launchagent-vs-login-items.meta.description":
      "对比 macOS Login Items 与 LaunchAgents——登录时启动什么、如何分别查看。",
    "blog-launchagent-vs-login-items.title": "LaunchAgent 与 Login Items 的区别",
    "blog-launchagent-vs-login-items.lead": "两者都能让软件在登录时运行——但机制与存放位置不同。",
    "blog-launchagent-vs-login-items.body":
      '<h2>Login Items</h2><p>用户可见、登录时打开的应用，在<strong>系统设置 → 通用 → 登录项</strong>中管理。并非所有自动启动项都会出现在这里。</p><h2>LaunchAgents</h2><p>由 XML plist 定义、由 <code>launchd</code> 管理的后台任务，通常在 <code>~/Library/LaunchAgents</code>。可运行脚本、守护进程或助手——不一定显示为应用图标。</p><h2>何时用哪种</h2><ul><li><strong>Login Items</strong> — 需要在会话中打开的 GUI 应用。</li><li><strong>LaunchAgents</strong> — 应在后台运行的脚本、服务器、同步或开发服务。</li></ul><h2>在 LaunchManager 中一并查看</h2><p><strong>Login Items</strong> 视图看登录应用；<strong>User Agents</strong> 查看带 <code>RunAtLoad</code> 的 plist。<a href="/startup-manager">启动项管理指南 →</a></p>',

    "blog-docker-port-5432.meta.title": "Docker 占用 5432 端口 — LaunchManager 博客",
    "blog-docker-port-5432.meta.description":
      "Postgres 等容器在 Mac 上绑定 5432——找到容器并释放端口。",
    "blog-docker-port-5432.title": "为什么 Docker 一直占用 5432 端口",
    "blog-docker-port-5432.lead": "5432 是 Postgres 默认端口——旧的 docker compose 栈常会一直占用。",
    "blog-docker-port-5432.body":
      '<p>在 5432 上运行本地 Postgres 或应用时发生冲突，往往是旧的 <code>postgres</code> 容器仍在运行。</p><h2>查找容器</h2><pre><code>docker ps --filter "publish=5432"\ndocker ps -a | grep 5432</code></pre><h2>停止容器</h2><pre><code>docker stop &lt;container_name&gt;</code></pre><h2>若 lsof 显示 Docker 代理</h2><p>监听进程可能是 <code>com.docker.backend</code>。应停止容器，不要结束该 PID。</p><p>LaunchManager 为 Docker 行标注容器名与镜像，便于将 5432 对应到正确技术栈。<a href="/docker-ports">Docker 端口指南 →</a></p>',
  },
};
