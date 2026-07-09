# Nested Object Deep Copy

Recursively deep-copies a nested object, guarding against **circular
references**: the code deliberately makes the object point back at itself
(`object.selectColour = object`, etc.), and `objectCopy` tracks already-visited
objects in an array so it returns `"circular reference"` instead of recursing
forever.

**Practises:** recursion over object graphs, `typeof x === "object"`,
`for…in`, detecting cycles, nested methods and `this`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** open in StackBlitz or serve statically; output is in the console.
