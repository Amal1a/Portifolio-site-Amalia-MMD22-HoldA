let menu = document.querySelector(".burger-menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("mobile-menu");
  navbar.classList.toggle("open");
};
