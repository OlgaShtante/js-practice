// Image carousel: auto-advances every 3s; hovering pauses it and reveals the
// arrows to step manually. One index drives both, so they never fall out of sync.
const area = document.getElementById("carousel-area");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const slides = document.getElementsByClassName("slide");

let index = 0;
let timer = null;

function show(next) {
  index = (next + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function play() {
  stop();
  timer = setInterval(() => show(index + 1), 3000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function setArrows(visible) {
  const value = visible ? "inline-block" : "none";
  leftArrow.style.display = value;
  rightArrow.style.display = value;
}

show(0);
setArrows(false);
play();

area.addEventListener("mouseover", () => {
  stop();
  setArrows(true);
});
area.addEventListener("mouseleave", () => {
  setArrows(false);
  play();
});
leftArrow.addEventListener("click", () => show(index - 1));
rightArrow.addEventListener("click", () => show(index + 1));
