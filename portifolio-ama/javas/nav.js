// var burgerMenu = document.querySelector(".burger-menu");
// var navLinks = document.querySelector("#nav-active");

// burgerMenu.addEventListener("click", () => {
//   navLinks.classList.toggle(".nav-links");
// });

const menuHamburger = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
