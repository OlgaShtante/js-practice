# Change Background Colour: Five Ways

Five separate handlers that set a preview swatch's colour from text and
`<select>` inputs, each using a different technique:

1. inline `body.style.backgroundColor`
2. same, from a second control
3. swapping `body.className` (colour defined in CSS)
4. writing a CSS custom property `--main-color`
5. the same custom-property approach driven by the passed `selectElement`

A shared `resetColour()` clears the previous choice first.

**Practises:** multiple DOM styling strategies: inline styles, class
switching, and CSS variables (`style.setProperty` / `removeProperty`).

**Why it matters:** Inline styles, class swaps, and CSS variables are the three
main ways JavaScript changes how a page looks at runtime, each suited to a
different situation.

**Source:** [`main.js`](main.js)

**Run:** open [`index.html`](index.html) directly in a browser.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/1-background-color-switcher?view=preview)
