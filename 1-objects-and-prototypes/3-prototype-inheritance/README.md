# Prototype Inheritance

The classroom domain built with constructor functions where each behaviour lives
on the **prototype** rather than on the instance: `Teacher.prototype.teaches`,
`Students.prototype.study`, `Furniture.prototype.arrange`,
`TechEquipment.prototype.use`, etc. Runs on `window`'s `load` event.

**Practises:** `Constructor.prototype.method`, the difference between instance
state and shared prototype methods, `this` binding.

**Why it matters:** Putting shared behaviour on the prototype instead of on each
instance is how JavaScript reuses methods without duplicating them per object.

**Source:** [`main.js`](main.js)

> Compare with [`nested-function-scope`](../1-nested-function-scope) (no prototype
> methods) and [`prototype-chain`](../4-prototype-chain) (multi-level chain).

**Run:** open [`index.html`](index.html); it writes a summary of the graph into
the page on load.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/3-prototype-inheritance?view=preview)
