# Simplest Calculator

Reads two numbers from input fields and shows their sum on the page when the
button is clicked. Accepts a dot or a comma as the decimal separator, filters
stray characters as you type, and flags an empty or malformed field with an
inline, auto-dismissing message instead of an `alert`.

**Practises:** DOM lookup, click handling, `input.value`, live input filtering
with regex, `parseFloat` and `Number.isNaN` validation, floating-point cleanup
with `toPrecision`, template literals.

**Why it matters:** Reliable string-to-number conversion depends on type
coercion and floating-point precision, the same care that prevents unreliable
numeric assertions in test automation.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve the folder statically (see the
[repo README](../../README.md#running-a-task)).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/0-simplest-calculator?view=preview)
