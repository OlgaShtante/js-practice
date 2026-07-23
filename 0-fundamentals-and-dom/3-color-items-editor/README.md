# Colour Items Editor

Renders a list of `{ color, bgColor }` items as clickable cards; supports adding
(with per-field validation and duplicate detection), selecting a card to apply
its colours to the page, and deleting cards. The list re-renders from the
`items` array after each change.

**Practises:** rendering from data, `createElement`/`appendChild`,
`event.stopPropagation`, `Array.from` + `indexOf`, `splice`, focus-out
validation.

**Why it matters:** Rendering a list from a data array and re-rendering it after
every change is the core pattern behind every data-driven interface.

**Source:** [`main.js`](main.js)

> Builds on [`color-list-manager`](../2-color-list-manager).

**Run:** open [`index.html`](index.html) directly in a browser.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/3-color-items-editor?view=preview)
