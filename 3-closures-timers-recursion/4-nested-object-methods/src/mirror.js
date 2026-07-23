// mirror console.log to the on-page #out panel so console-only tasks show
// their output without opening devtools; runs before the module, and still
// logs to the real console
(function () {
  const original = console.log.bind(console);
  console.log = function (...args) {
    original(...args);
    const out = document.getElementById("out");
    if (!out) return;
    out.textContent +=
      args
        .map((a) =>
          typeof a === "object" && a !== null
            ? JSON.stringify(a, null, 2)
            : String(a),
        )
        .join(" ") + "\n";
  };
})();
