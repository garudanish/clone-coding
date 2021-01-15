const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".main__slider--slide:first-child");
const lastSlide = document.querySelector(".main__slider--slide:last-child");
const prevButton = document.querySelector(".fa-chevron-circle-left");
const nextButton = document.querySelector(".fa-chevron-circle-right");

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

slide();
setInterval(slide, 5000);

nextButton.addEventListener("click", slide);

function clickPrevButton() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
  }
}

prevButton.addEventListener("click", clickPrevButton);
