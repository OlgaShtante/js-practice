// Shared logger. Each timing task passes its own before/after timestamps
// (captured in a closure) and this prints when it started, finished, and how
// long it took. before/after are Date.now() numbers, so wrap them in a Date to
// format a real clock time.
function formatTime(ms) {
  return new Date(ms).toLocaleTimeString("en-GB"); // HH:MM:SS
}

function log(name, before, after, comment = "") {
  console.log(
    `${name}:\n` +
      `    start:      ${formatTime(before)}\n` +
      `    finish:     ${formatTime(after)}\n` +
      `    difference: ${after - before} ms` +
      (comment ? `\n    ${comment}` : "")
  );
}

export default log;
