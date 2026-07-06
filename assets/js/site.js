document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("nav-links")?.classList.toggle("open");
});

document.querySelectorAll(".nav-dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = btn.closest(".nav-dropdown");
    const isOpen = parent?.classList.contains("open");
    document.querySelectorAll(".nav-dropdown.open").forEach((el) => el.classList.remove("open"));
    if (!isOpen) parent?.classList.add("open");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".nav-dropdown.open").forEach((el) => el.classList.remove("open"));
});
