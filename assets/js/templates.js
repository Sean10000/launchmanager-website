function copiedLabel() {
  return document.documentElement.lang === "zh-CN" ? "已复制" : "Copied!";
}

document.querySelectorAll("[data-copy-xml]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const pre = btn.closest(".template-card")?.querySelector("pre");
    if (!pre) return;
    const label = btn.textContent;
    try {
      await navigator.clipboard.writeText(pre.textContent);
      btn.textContent = copiedLabel();
      setTimeout(() => {
        btn.textContent = label;
      }, 2000);
    } catch {
      btn.textContent = document.documentElement.lang === "zh-CN" ? "复制失败" : "Failed";
      setTimeout(() => {
        btn.textContent = label;
      }, 2000);
    }
  });
});
