# Prototype Inheritance

The classroom domain built with constructor functions where each behaviour lives
on the **prototype** rather than on the instance: `Teacher.prototype.teaches`,
`Students.prototype.study`, `Furniture.prototype.arrange`,
`TechEquipment.prototype.use`, etc. Runs on `window`'s `load` event.

**Practises:** `Constructor.prototype.method`, the difference between instance
state and shared prototype methods, `this` binding.

**Source:** [`main.js`](main.js)

> Compare with [`nested-function-scope`](../1-nested-function-scope) (no prototype
> methods) and [`prototype-chain`](../4-prototype-chain) (multi-level chain).

**Run:** open [`index.html`](index.html); output is in the console.
