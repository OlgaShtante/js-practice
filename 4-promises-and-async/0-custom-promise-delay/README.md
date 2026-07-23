# Custom Promise Delay

A hand-written `delay(ms)` that wraps `setTimeout` in a `Promise`, then chains
several `.then` callbacks (including nested delays) to sequence console messages
with 1 s / 3 s / 1 s gaps.

**Practises:** constructing a `Promise`, resolving from `setTimeout`, chaining
and nesting `.then`.

**Why it matters:** Building a promise around `setTimeout` shows what
`async`/`await` is really doing underneath, which is what makes asynchronous
code stop feeling like magic.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve statically; the timed messages appear in the panel on the page (also mirrored to the console).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/0-custom-promise-delay?view=preview)
