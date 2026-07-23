# Promisified XHR

Wraps a callback-based `getJSON(url, callback)` (built on `XMLHttpRequest`) in a
`Promise` via `Data.prototype.getUsefulContents`, so the response can be
consumed with `.then` instead of a callback. Fires on a button click.

**Practises:** "promisifying" a callback API, `XMLHttpRequest`, prototype
methods.

**Why it matters:** Wrapping a callback API in a promise is the standard way to
modernise older asynchronous code so it works with `async`/`await`.

**Source:** [`src/modules/data.js`](src/modules/data.js),
[`src/modules/main.js`](src/modules/main.js)

> Compare with [`xhr-json-callback`](../4-xhr-json-callback), the callback-only
> version of the same idea.

**Run:** serve statically; click the request button and watch the response in the panel on the page (also mirrored to the console).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/3-promisified-xhr?view=preview)
