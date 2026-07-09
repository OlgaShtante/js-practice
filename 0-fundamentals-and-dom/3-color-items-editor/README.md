# Colour Items Editor

Renders a list of `{ color, bgColor }` items as clickable cards; supports adding
(with per-field validation and duplicate detection), selecting a card to apply
its colours to the page, and deleting cards. The list re-renders from the
`items` array after each change.

**Practises:** rendering from data, `createElement`/`appendChild`,
`event.stopPropagation`, `Array.from` + `indexOf`, `splice`, focus-out
validation.

**Source:** [`main.js`](main.js)

> Builds on [`color-list-manager`](../2-color-list-manager).

**Run:** open [`index.html`](index.html) directly in a browser.
