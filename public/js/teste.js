let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  document.querySelector(".carousel-track").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}
