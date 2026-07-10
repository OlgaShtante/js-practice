# Auto Slideshow

Cycles through a set of `.slide` images automatically, showing one at a time and
advancing every 3 seconds with a recursive `setTimeout`.

**Practises:** `getElementsByClassName`, `setTimeout` recursion, index
wrap-around, toggling `style.display`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

> Note: [`image-carousel`](../3-image-carousel) extends this with manual
> prev/next arrows on hover. (This file also relies on an undeclared `i` — an
> implicit global; the carousel version fixes that.)

**Run:** open in [StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/2-auto-slideshow?view=preview) or serve statically (see the
[repo README](../../README.md#running-a-task)).
