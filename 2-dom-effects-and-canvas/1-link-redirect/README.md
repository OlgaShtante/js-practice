# Link Redirect

Intercepts a link click, cancels the default navigation with
`event.preventDefault()`, and redirects to another URL via
`document.location.replace`.

**Practises:** `preventDefault`, programmatic navigation
(`location.replace`).

**Why it matters:** Intercepting a default browser action with `preventDefault`
is what lets JavaScript take over links, forms, and other native behaviour.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve statically (see the
[repo README](../../README.md#running-a-task)).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/1-link-redirect?view=preview)
