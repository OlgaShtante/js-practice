import log from "./logger.js";

// `before` is captured here and the setTimeout callback closes over it, so when
// the callback fires later it can still measure the elapsed time.
function runSetTimeOut(name, milliseconds) {
  const before = Date.now();

  setTimeout(() => {
    const after = Date.now();
    log(name, before, after, `scheduled for ${milliseconds} ms`);
  }, milliseconds);
}

export { runSetTimeOut };
