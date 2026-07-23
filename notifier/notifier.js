// Reusable "why this practice matters" notifier (see README.md in this folder).
// Include once per task page, near the end of <body>:
//   <script src="../../notifier/notifier.js" data-why="...the note..."></script>
// It injects a "?" badge in the top-right corner; notifier.css animates the
// ribbon (slides out on load, holds ~7s, retracts; hover/focus to re-reveal).
(function () {
  var script = document.currentScript;
  if (!script) return;
  var why = script.dataset.why;
  if (!why) return;
  var label = script.dataset.label || "why this practice matters";

  var badge = document.createElement("aside");
  badge.className = "notifier";
  badge.tabIndex = 0;
  badge.setAttribute("aria-label", label);

  var ribbon = document.createElement("div");
  ribbon.className = "notifier__ribbon";

  var labelEl = document.createElement("span");
  labelEl.className = "notifier__label";
  labelEl.textContent = label + ":";

  var textEl = document.createElement("p");
  textEl.className = "notifier__text";
  var track = document.createElement("span");
  track.className = "notifier__track";
  var copy = document.createElement("span");
  copy.className = "notifier__copy";
  copy.textContent = why;
  track.appendChild(copy);
  textEl.appendChild(track);

  ribbon.appendChild(labelEl);
  ribbon.appendChild(textEl);

  var mark = document.createElement("span");
  mark.className = "notifier__mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "?";

  badge.appendChild(mark);
  badge.appendChild(ribbon);
  document.body.appendChild(badge);

  // --- marquee ------------------------------------------------------------
  // Driven in JS (rAF) so it runs regardless of CSS animation support or the OS
  // reduce-motion setting. When the message overflows, a second copy trails the
  // first by a full viewport width, so the next copy enters from the right only
  // as the last word leaves the left. The loop (re)starts from the beginning
  // whenever the tape is shown (intro, hover, or focus) and resets when hidden.
  var SPEED = 55; // px/s, slow enough to read comfortably
  var START_DELAY = 1000; // ms held at the start so the beginning is readable
  var rafId = null;
  var startTimer = null;
  var dupe = null;
  var loopDist = 0;
  var loopDur = 0;
  var needsRun = false;

  function measure() {
    var single = copy.getBoundingClientRect().width;
    var view = textEl.clientWidth;
    needsRun = single - view > 4;
    if (!needsRun) {
      if (dupe) {
        dupe.remove();
        dupe = null;
      }
      return;
    }
    if (!dupe) {
      dupe = copy.cloneNode(true);
      dupe.setAttribute("aria-hidden", "true");
      track.appendChild(dupe);
    }
    var gap = view; // enter from the right as the last word leaves the left
    dupe.style.marginLeft = gap + "px";
    loopDist = single + gap;
    loopDur = (loopDist / SPEED) * 1000;
  }

  function stopRun() {
    if (rafId) cancelAnimationFrame(rafId);
    if (startTimer) clearTimeout(startTimer);
    rafId = null;
    startTimer = null;
    track.style.transform = "translateX(0px)"; // back to the initial position
  }

  function startRun() {
    stopRun(); // always (re)start from the beginning
    if (!needsRun) return;
    // hold at the start for a moment so the first words can be read, then loop
    startTimer = setTimeout(function () {
      var begin = null;
      function frame(ts) {
        if (begin === null) begin = ts;
        var p = ((ts - begin) % loopDur) / loopDur;
        track.style.transform = "translateX(" + -loopDist * p + "px)";
        rafId = requestAnimationFrame(frame);
      }
      rafId = requestAnimationFrame(frame);
    }, START_DELAY);
  }

  var mouseIn = false;
  var focusIn = false;
  var introActive = false;
  function shown() {
    return mouseIn || focusIn || introActive;
  }
  function refresh() {
    measure();
    if (shown()) startRun();
    else stopRun();
  }

  badge.addEventListener("mouseenter", function () {
    mouseIn = true;
    refresh();
  });
  badge.addEventListener("mouseleave", function () {
    mouseIn = false;
    refresh();
  });
  badge.addEventListener("focusin", function () {
    focusIn = true;
    refresh();
  });
  badge.addEventListener("focusout", function () {
    focusIn = false;
    refresh();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refresh);
  }
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refresh, 150);
  });

  // intro: roll the tape out once on load, run the marquee during it, then
  // reset (unless the user is already hovering/focusing by then)
  requestAnimationFrame(function () {
    badge.classList.add("is-intro");
    introActive = true;
    refresh();
  });
  var endIntro = function () {
    if (!introActive) return;
    introActive = false;
    badge.classList.remove("is-intro");
    if (!shown()) stopRun();
  };
  ribbon.addEventListener("animationend", endIntro, { once: true });
  setTimeout(endIntro, 8600);
})();
