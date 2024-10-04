const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});
