# Parse URL Params

Extracts the query-string parameters from a URL into an object by splitting on
`?`, then `&`, then `=`, and logs them per topic.

**Practises:** `String.split`, building an object from key/value pairs,
`forEach`.

**Why it matters:** Query strings carry the parameters behind almost every web
request, so splitting one into usable values is a basic, constant need.

**Source:** [`src/modules/urlParams.js`](src/modules/urlParams.js),
[`src/modules/main.js`](src/modules/main.js)

> Compare with [`url-parser-class`](../1-url-parser-class), which does the same in
> an ES class and adds a regular-expression approach.

**Run:** serve statically; the output appears in the panel on the page (also mirrored to the console).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/5-urls-and-rest/0-parse-url-params?view=preview)
