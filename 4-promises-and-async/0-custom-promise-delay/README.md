# Custom Promise Delay

A hand-written `delay(ms)` that wraps `setTimeout` in a `Promise`, then chains
several `.then` callbacks (including nested delays) to sequence console messages
with 1 s / 3 s / 1 s gaps.

**Practises:** constructing a `Promise`, resolving from `setTimeout`, chaining
and nesting `.then`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** open in [StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/0-custom-promise-delay?view=preview) or serve statically; output is in the console.
