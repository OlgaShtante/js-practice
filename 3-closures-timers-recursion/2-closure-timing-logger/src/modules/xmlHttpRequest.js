import log from "./logger.js";

// `before` is captured before the request is sent; the onload handler closes
// over it, so when the response arrives it can report the round-trip time.
function runXhr(name, url) {
  const before = Date.now();

  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    const after = Date.now();
    log(name, before, after, "response received");
  };
  request.send();
}

export default runXhr;
