# Promise-Returning Function

Two `delay` variants that return a `Promise` and resolve it with a **value that
is itself a function** (or a bound function). The `.then` handler then either
calls the received function or logs the passed message, showing that a promise
can resolve with any value, functions included.

**Practises:** returning promises, `Promise.resolve().then(...)`, resolving with
non-trivial values, `Function.prototype.bind`.

**Why it matters:** A promise can resolve with any value, so returning promises
from your own functions is how you make asynchronous APIs composable with
`.then` and `await`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve statically; the output appears in the panel on the page (also mirrored to the console).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/1-promise-returning-function?view=preview)
