document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) return;

  // Comprobar modo guardado
  const savedTheme = localStorage.getItem("bitduo-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "0";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "0" : "1";

    // Guardar preferencia
    localStorage.setItem("bitduo-theme", isDark ? "dark" : "light");
  });
});

