let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? "block" : "none";
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);
