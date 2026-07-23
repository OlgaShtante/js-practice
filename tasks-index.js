// Shared renderer for the local task indexes (root and per-group pages).
// The root page uses `#list[data-base="./"]` (no data-only) and shows every
// group. A group page uses `#list[data-base="../" data-only="<dir>"]` and shows
// only that group's tasks. Links point through data-base so both depths resolve
// to the same task folders; StackBlitz links run live from GitHub.
// Each group carries a short "why this practice matters" line: the JS foundation
// it builds and where that pays off in test automation.
const REPO = "OlgaShtante/js-practice";
const GROUPS = [
  [
    "fundamentals and dom",
    "0-fundamentals-and-dom",
    [
      "0-simplest-calculator",
      "1-background-color-switcher",
      "2-color-list-manager",
      "3-color-items-editor",
      "4-prompt-form-validation",
    ],
    "Reading, writing, and validating the DOM is the foundation of every web interface, and the exact surface a UI test drives and inspects.",
  ],
  [
    "objects and prototypes",
    "1-objects-and-prototypes",
    [
      "0-classroom-object-literals",
      "1-nested-function-scope",
      "2-classroom-oop-model",
      "3-prototype-inheritance",
      "4-prototype-chain",
    ],
    "Objects and the prototype chain are how JavaScript models data and behaviour; understanding them is what lets you predict how any value will behave.",
  ],
  [
    "dom effects and canvas",
    "2-dom-effects-and-canvas",
    [
      "0-hover-tooltip",
      "1-link-redirect",
      "2-auto-slideshow",
      "3-image-carousel",
      "4-canvas-mouse-drawing",
    ],
    "Driving visual change through DOM events and the Canvas API is how static pages become responsive, animated interfaces.",
  ],
  [
    "closures timers recursion",
    "3-closures-timers-recursion",
    [
      "0-clock-tabs-stopwatch-timer",
      "1-closures-counter-sum",
      "2-closure-timing-logger",
      "3-recursive-password-check",
      "4-nested-object-methods",
    ],
    "Closures, timers, and recursion govern how state and timing work in JavaScript, the mechanics behind counters, debouncing, waits, and retries.",
  ],
  [
    "promises and async",
    "4-promises-and-async",
    [
      "0-custom-promise-delay",
      "1-promise-returning-function",
      "2-async-await-fetch",
      "3-promisified-xhr",
      "4-xhr-json-callback",
    ],
    "Promises and async/await are how JavaScript handles asynchronous work, from a network request to anything that resolves later.",
  ],
  [
    "urls and rest",
    "5-urls-and-rest",
    ["0-parse-url-params", "1-url-parser-class", "2-rest-http-requests"],
    "Parsing URLs and exercising REST APIs is fundamental to web communication, and the basis of fast, stable API-level checks.",
  ],
  [
    "vruslo project pages",
    "6-vruslo-project-pages",
    [
      "0-vruslo-promises-links",
      "1-vruslo-events-links",
      "2-vruslo-url-params-links",
      "3-vruslo-xhr-links",
      "4-vruslo-json-server-links",
      "5-vruslo-peer-review",
    ],
  ],
];

const list = document.getElementById("list");
const base = list.dataset.base || "./";
const only = list.dataset.only;

function makeRow(dir, task) {
  const path = `${dir}/${task}`;
  const li = document.createElement("li");
  li.innerHTML =
    `<span class="name">${task}</span>` +
    `<a class="pill pill--local" href="${base}${path}/">▶ Local</a>` +
    `<a class="pill pill--blitz" target="_blank" rel="noopener" ` +
    `href="https://stackblitz.com/github/${REPO}/tree/main/${path}">StackBlitz ↗</a>`;
  return li;
}

function makeWhy(text) {
  const p = document.createElement("p");
  p.className = "group__why";
  p.innerHTML = `<b>Why this practice matters:</b> ${text}`;
  return p;
}

if (only) {
  const group = GROUPS.find(([, dir]) => dir === only);
  if (group) {
    const [, dir, tasks, why] = group;
    if (why) list.appendChild(makeWhy(why));
    const ul = document.createElement("ul");
    tasks.forEach((t) => ul.appendChild(makeRow(dir, t)));
    list.appendChild(ul);
  }
} else {
  for (const [title, dir, tasks, why] of GROUPS) {
    const section = document.createElement("section");
    section.className = "group";
    const h2 = document.createElement("h2");
    h2.className = "group__title";
    h2.textContent = title;
    section.appendChild(h2);
    if (why) section.appendChild(makeWhy(why));
    const ul = document.createElement("ul");
    tasks.forEach((t) => ul.appendChild(makeRow(dir, t)));
    section.appendChild(ul);
    list.appendChild(section);
  }
}
