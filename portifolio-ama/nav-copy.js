const burgerMenu = document.querySelector(".burger_menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle(".mobile-menu");
});
