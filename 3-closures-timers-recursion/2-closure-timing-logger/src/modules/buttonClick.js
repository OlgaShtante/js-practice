import log from "./logger.js";

// The click handler closes over `before`, captured when the page loaded, so on
// click it can report how long you waited before pressing the button.
function watchButtonClick(name) {
  const before = Date.now();
  const button = document.querySelector("#btn");

  button.addEventListener("click", () => {
    const after = Date.now();
    log(name, before, after, "button clicked");
  });
}

export { watchButtonClick };
