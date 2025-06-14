document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  function handleScroll() {
    if (window.scrollY > 700) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
