# Nested Object Deep Copy

Recursively deep-copies a nested object, guarding against **circular
references**: the code deliberately makes the object point back at itself
(`object.selectColour = object`, etc.), and `objectCopy` tracks already-visited
objects in an array so it returns `"circular reference"` instead of recursing
forever.

**Practises:** recursion over object graphs, `typeof x === "object"`,
`for…in`, detecting cycles, nested methods and `this`.

**Why it matters:** Walking a nested object recursively while guarding against
cycles is exactly what deep-clone and serialization routines have to handle.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve statically; the console output is mirrored into the panel on the
page.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/4-nested-object-methods?view=preview)
