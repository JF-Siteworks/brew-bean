document.addEventListener("DOMContentLoaded", function () {
  const map = document.querySelector(".map");
  const overlay = document.querySelector(".map-overlay");
  if (map && overlay) {
    map.addEventListener("mouseenter", function () {
      overlay.style.transform = "scale(0)";
    });
    map.addEventListener("mouseleave", function () {
      overlay.style.transform = "";
    });
  }

  const hamburger = document.getElementById("hamburgerToggle");
  const sidebar = document.getElementById("mobileSidebar");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
