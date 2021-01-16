const HEADER_TOP = "header--top";
const MOBILE_CLICKED = "mobile--clicked";
const SHOWING = "showing";

const header = document.querySelector(".header");
const userMenu = document.querySelector(".header__user");
const navMenu = document.querySelector(".header__nav");
const mobileMenu = document.querySelector(".header__logo-con--hamberger");
const hamberger = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const depth1Menu = document.querySelector(
  ".header__nav__depth1 li:nth-child(3)"
);
const subMenu = document.querySelector(".header__nav__depth2");

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
    userMenu.classList.remove(MOBILE_CLICKED);
    navMenu.classList.remove(MOBILE_CLICKED);
  } else {
    header.classList.add(MOBILE_CLICKED);
    userMenu.classList.add(MOBILE_CLICKED);
    navMenu.classList.add(MOBILE_CLICKED);
  }
}

function handleMenu() {
  mobileMenu.addEventListener("click", toggleMenu);
}

handleMenu();

function paintSubMenu() {
  subMenu.classList.add(SHOWING);
}

function handleSubMenu() {
  depth1Menu.addEventListener("mouseenter", function () {
    subMenu.classList.add(SHOWING);
  });
  depth1Menu.addEventListener("mouseleave", function () {
    subMenu.classList.remove(SHOWING);
  });
}

handleSubMenu();
