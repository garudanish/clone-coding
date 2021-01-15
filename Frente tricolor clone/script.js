const HEADER_TOP = "header--top";
const MOBILE_CLICKED = "mobile--clicked";

const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const hamberger = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");

function changeHeaderBG() {
  if (window.pageYOffset < 200) {
    header.classList.add(HEADER_TOP);
  } else {
    header.classList.remove(HEADER_TOP);
  }
}

function handleHeaderBG(event) {
  changeHeaderBG();
  window.addEventListener("scroll", changeHeaderBG);
}

handleHeaderBG();

function toggleMenu() {
  if (header.classList.contains(MOBILE_CLICKED)) {
    header.classList.remove(MOBILE_CLICKED);
    menu.classList.remove(MOBILE_CLICKED);
  } else {
    header.classList.add(MOBILE_CLICKED);
    menu.classList.add(MOBILE_CLICKED);
  }
}

function handleMenu() {
  hamberger.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
}

handleMenu();
