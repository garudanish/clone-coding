function changeHeaderBG() {
  const HEADER_TOP = "header--top";
  const header = document.querySelector(".header");
  if (window.pageYOffset < 200) {
    header.classList.add(HEADER_TOP);
  } else {
    header.classList.remove(HEADER_TOP);
  }
}

function handleHeaderBG(event) {
  window.addEventListener("scroll", changeHeaderBG);
}

function init() {
  handleHeaderBG();
}

init();
