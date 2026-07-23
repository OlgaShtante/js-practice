# Nested Function Scope

Builds a classroom object graph with constructor functions all declared **inside
a nested function** (`toDisplay` → `roomDescription`), returning the composed
`room` and dumping it into the page with `JSON.stringify`.

**Practises:** lexical/nested scope, constructor functions, object composition,
`JSON.stringify`.

**Why it matters:** Which variables a function can see is decided by where it is
defined, and that lexical scope is the basis for closures and module privacy.

**Source:** [`main.js`](main.js)

**Run:** open [`index.html`](index.html) directly in a browser.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/1-nested-function-scope?view=preview)
