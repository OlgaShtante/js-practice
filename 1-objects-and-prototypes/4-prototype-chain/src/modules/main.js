// A manual prototype chain: Language <- ForeignLanguage <- SlovenianLanguage.
// Each level links to its parent via Object.create(Parent.prototype). Instead of
// dumping the object for devtools, the page walks the live chain and renders it:
// every level, the methods each one owns, and which level answers a given call.

function Language(name) {
  this.name = name;
}
Language.prototype.describe = function () {
  return `${this.name} is a language`;
};

function ForeignLanguage(name) {
  Language.call(this, name);
}
ForeignLanguage.prototype = Object.create(Language.prototype);
ForeignLanguage.prototype.constructor = ForeignLanguage;
ForeignLanguage.prototype.isForeign = function () {
  return `${this.name} is not my native language`;
};

function SlovenianLanguage(read, speak) {
  ForeignLanguage.call(this, "Slovenian");
  this.read = read;
  this.speak = speak;
}
SlovenianLanguage.prototype = Object.create(ForeignLanguage.prototype);
SlovenianLanguage.prototype.constructor = SlovenianLanguage;
SlovenianLanguage.prototype.learn = function () {
  return `to learn ${this.name}: ${this.read}, ${this.speak}`;
};

const learnSlovenian = new SlovenianLanguage(
  "read Slovenian books",
  "talk with native speakers",
);

// ---- walk the live chain into an array of levels ----
// each level: the object itself, a label, and the names it owns (data or methods)
function buildLevels(instance, instanceName) {
  const levels = [
    {
      obj: instance,
      label: instanceName,
      kind: "instance",
      owns: ownNames(instance),
    },
  ];
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    const isObjectProto = proto === Object.prototype;
    const ctor = proto.constructor ? proto.constructor.name : "Object";
    levels.push({
      obj: proto,
      label: isObjectProto ? "Object.prototype" : `${ctor}.prototype`,
      kind: isObjectProto ? "root" : "proto",
      owns: isObjectProto ? [] : ownNames(proto),
    });
    proto = Object.getPrototypeOf(proto);
  }
  return levels;
}

// own property names minus the constructor back-reference we reset by hand
function ownNames(obj) {
  return Object.getOwnPropertyNames(obj).filter(
    (name) => name !== "constructor",
  );
}

// find the first level along the chain that actually owns `name` (the lookup)
function resolveOwner(levels, name) {
  return levels.findIndex((level) =>
    Object.prototype.hasOwnProperty.call(level.obj, name),
  );
}

const levels = buildLevels(learnSlovenian, "learnSlovenian");

// methods to demonstrate resolving, each defined on a different level
const calls = [
  { name: "learn", run: () => learnSlovenian.learn() },
  { name: "isForeign", run: () => learnSlovenian.isForeign() },
  { name: "describe", run: () => learnSlovenian.describe() },
];

// ---- render ----
const chainEl = document.getElementById("chain");
const lookupEl = document.getElementById("lookup");
const levelEls = [];

levels.forEach((level, index) => {
  const el = document.createElement("div");
  el.className = `level level--${level.kind}`;

  const head = document.createElement("div");
  head.className = "level__head";
  head.textContent = level.label;
  el.appendChild(head);

  const body = document.createElement("div");
  body.className = "level__body";
  if (level.kind === "root") {
    body.innerHTML = `<span class="muted">built-in object methods (toString, hasOwnProperty, ...)</span>`;
  } else {
    const kind = level.kind === "instance" ? "own props" : "owns";
    body.innerHTML =
      `<span class="muted">${kind}:</span> ` +
      level.owns.map((n) => `<code>${n}</code>`).join(" ");
  }
  el.appendChild(body);

  if (index < levels.length - 1) {
    const link = document.createElement("div");
    link.className = "level__link";
    link.textContent = "↑ __proto__";
    el.appendChild(link);
  }

  chainEl.appendChild(el);
  levelEls.push(el);
});

calls.forEach(({ name, run }) => {
  const ownerIndex = resolveOwner(levels, name);
  const owner = levels[ownerIndex];

  const row = document.createElement("button");
  row.type = "button";
  row.className = "lookup__row";
  row.innerHTML =
    `<code>${name}()</code>` +
    `<span class="lookup__owner">found on ${owner.label}</span>` +
    `<span class="lookup__result">${run()}</span>`;

  // clicking walks attention up to the level that owns the method
  row.addEventListener("click", () => {
    levelEls.forEach((el) => el.classList.remove("is-hit"));
    lookupEl
      .querySelectorAll(".lookup__row")
      .forEach((el) => el.classList.remove("is-active"));
    for (let i = 0; i <= ownerIndex; i++) {
      levelEls[i].classList.add("is-hit");
    }
    row.classList.add("is-active");
  });

  lookupEl.appendChild(row);
});
