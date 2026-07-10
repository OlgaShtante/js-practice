# Promisified XHR

Wraps a callback-based `getJSON(url, callback)` (built on `XMLHttpRequest`) in a
`Promise` via `Data.prototype.getUsefulContents`, so the response can be
consumed with `.then` instead of a callback. Fires on a button click.

**Practises:** "promisifying" a callback API, `XMLHttpRequest`, prototype
methods.

**Source:** [`src/modules/data.js`](src/modules/data.js),
[`src/modules/main.js`](src/modules/main.js)

> Compare with [`xhr-json-callback`](../4-xhr-json-callback), the callback-only
> version of the same idea.

**Run:** open in [StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/3-promisified-xhr?view=preview) or serve statically; click the request button and
watch the console.
