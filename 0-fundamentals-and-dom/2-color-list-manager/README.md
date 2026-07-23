# Colour List Manager

A `<select>` of colours you can add to (with validation against a throwaway
`<div>`), remove by name, or remove the current selection from. Picking an
option applies it via a `--color` CSS variable.

**Practises:** dynamic `<option>` creation/removal, `selectedIndex`, colour
validation, CSS custom properties.

**Why it matters:** Adding and removing `<option>`s while keeping the control in
sync with its underlying data is the essence of managing dynamic form state.

**Source:** [`main.js`](main.js)

**Run:** open [`index.html`](index.html) directly in a browser.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/2-color-list-manager?view=preview)
