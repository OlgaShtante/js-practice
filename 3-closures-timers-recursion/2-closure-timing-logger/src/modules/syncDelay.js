import log from "./logger.js";

// A synchronous (blocking) delay: this loop holds the main thread for `ms`, so
// nothing else can run until it finishes. Kept short so the page is not frozen
// for long. `before` and `after` are captured in this scope and closed over by
// the log call.
function makeSyncDelay(name, ms) {
  const before = Date.now();
  while (Date.now() - before < ms) {
    // busy-wait, deliberately blocking the thread
  }
  const after = Date.now();
  log(name, before, after, `blocked synchronously for ${ms} ms`);
}

export { makeSyncDelay };
