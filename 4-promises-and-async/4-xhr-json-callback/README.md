# XHR JSON Callback

Fetches JSON with `XMLHttpRequest` and delivers the parsed result through a
**callback** (`getUsefulContents(url, callback)`), with `getJSON` handling the
request and `JSON.parse`. Clicking the button also updates the page with a hint
to check the console.

**Practises:** `XMLHttpRequest`, the callback pattern, `JSON.parse`.

**Source:** [`src/modules/data.js`](src/modules/data.js),
[`src/modules/main.js`](src/modules/main.js)

> Compare with [`promisified-xhr`](../3-promisified-xhr), which wraps the same
> idea in a Promise.

**Run:** serve statically; watch the console.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/4-xhr-json-callback?view=preview)
