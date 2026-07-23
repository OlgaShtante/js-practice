// Topic cards that auto-advance every 3 seconds.
const slides = document.getElementsByClassName("slide");
let index = 0;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
  index = (index + 1) % slides.length;
  setTimeout(showSlides, 3000);
}

showSlides();
