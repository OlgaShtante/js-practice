# Prototype Chain

Builds a three-level prototype chain, `Language` → `ForeignLanguage` →
`SlovenianLanguage`, with `Object.create(Parent.prototype)` and resets each
`constructor` reference. Instead of asking you to open devtools, the page walks
the **live** chain from the instance up to `Object.prototype` and renders each
level, the names it owns, and its `__proto__` link. A "method lookup" section
resolves `learn()`, `isForeign()` and `describe()` at runtime; clicking a row
highlights the levels the lookup traverses up to the prototype that answers it.

**Practises:** `Object.create`, the `prototype` vs. `__proto__` distinction,
restoring `constructor`, `Object.getPrototypeOf` / `getOwnPropertyNames` /
`hasOwnProperty` to discover the chain, and how method lookup climbs it.

**Why it matters:** Every property lookup in JavaScript walks the prototype
chain, so seeing how the chain is built is what demystifies inheritance and
`this`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve statically; the chain and lookups render on the page (no devtools needed).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/4-prototype-chain?view=preview)
