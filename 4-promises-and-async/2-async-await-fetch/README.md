# Async / Await / Fetch — Comparison

The capstone async exercise: runs the *same* "measure how long an operation
takes and log it" task through **seven** different mechanisms and compares them
against synchronous code. Each mechanism is its own module exposing a `.run()`
that resolves with a shared `Logger`:

- `Xhr1` — `XMLHttpRequest` wrapped in a Promise
- `Promise1` — a resolved-promise microtask chain
- `Promise2` — XHR wrapped in a Promise
- `AsyncAwait1` — `async`/`await` over `Promise2`
- `SetTimeOut1` — `setTimeout` (as an ES class)
- `ButtonClick1` — resolves on a user click
- `Fetch1` — `fetch(url)`
- `SyncDelay1` — a blocking busy-loop, for contrast

`main.js` runs the async constructors and the sync one, so the console output
makes the sync-vs-async ordering visible.

**Practises:** `Promise`, `async`/`await`, `fetch`, `XMLHttpRequest`,
microtasks vs. macrotasks, event-loop ordering, a reusable `Logger` abstraction.

**Source:** [`src/modules/`](src/modules/)

**Run:** open in [StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/2-async-await-fetch?view=preview) or serve statically; watch the console and click the
button when prompted.
