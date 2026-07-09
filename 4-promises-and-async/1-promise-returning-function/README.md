# Promise-Returning Function

Two `delay` variants that return a `Promise` and resolve it with a **value that
is itself a function** (or a bound function). The `.then` handler then either
calls the received function or logs the passed message — showing that a promise
can resolve with any value, functions included.

**Practises:** returning promises, `Promise.resolve().then(...)`, resolving with
non-trivial values, `Function.prototype.bind`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** open in StackBlitz or serve statically; output is in the console.
