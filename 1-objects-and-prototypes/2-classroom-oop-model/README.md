# Classroom OOP Model (ES modules)

The classroom domain again, this time split across **ES modules** — one
constructor per file (`teacher`, `students`, `furniture`, `techEquip`,
`constructEquip`, `decElements`) composed by `Room` in [`room.js`](src/modules/room.js)
and assembled in [`main.js`](src/modules/main.js). `Room` mixes instance methods
set in the constructor with a `Room.prototype.orginizeClasses` method, and runs
some logic at construction time.

**Practises:** ES module `import`/`export`, module scope, constructor
functions across files, instance vs. prototype methods, object composition.

**Source:** [`src/modules/`](src/modules/)

> This is the most structured version of the classroom exercise. Compare with
> [`nested-function-scope`](../1-nested-function-scope) (single-file constructors),
> [`classroom-object-literals`](../0-classroom-object-literals) (object literals),
> and [`prototype-inheritance`](../3-prototype-inheritance) (prototype methods).

**Run:** serve statically (see the
[repo README](../../README.md#running-a-task)); output is in the console.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/2-classroom-oop-model?view=preview)
