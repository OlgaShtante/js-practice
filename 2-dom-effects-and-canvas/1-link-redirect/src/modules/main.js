// The link points at tut.by, but the click is intercepted: preventDefault stops
// the navigation, we report what happened, and open the real target in a new tab
// so the demo page stays put.
const link = document.querySelector(".myLink");
const log = document.getElementById("redirect-log");
const target = "https://google.com";

link.addEventListener("click", (event) => {
  event.preventDefault();
  const original = link.getAttribute("href");
  log.textContent = `intercepted click to ${original}, opening ${target} in a new tab`;
  log.hidden = false;
  window.open(target, "_blank", "noopener");
});
