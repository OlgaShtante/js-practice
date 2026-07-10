# Prototype Chain

Builds a three-level prototype chain — `Language` → `ForeignLanguage` →
`SlovenianLanguage` — with `Object.create(Parent.prototype)` and resets each
`constructor` reference. Creating a `SlovenianLanguage` instance and logging it
lets you inspect the resulting `__proto__` chain in the console. The (Russian)
comments narrate what each step does to the `prototype` / `__proto__` /
`constructor` links.

**Practises:** `Object.create`, the `prototype` vs. `__proto__` distinction,
restoring `constructor`, how the lookup chain is assembled.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** open in [StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/4-prototype-chain?view=preview) or serve statically; inspect the logged object in
the console.
