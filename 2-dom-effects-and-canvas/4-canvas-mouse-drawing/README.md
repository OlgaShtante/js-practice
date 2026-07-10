# Canvas Particle Animation

Fills a full-window `<canvas>` with ~4000 small `Circle` objects that each drift
by a small random velocity, redrawn every frame in a `requestAnimationFrame`
loop. The canvas resizes with the window and re-initialises.

**Practises:** Canvas 2D API (`getContext`, `arc`, `fill`, `clearRect`), an ES
`class` with `draw`/`update` methods, `requestAnimationFrame` animation loop,
`window` resize handling.

**Source:** [`src/modules/main.js`](src/modules/main.js)

> Note named "mouse drawing" but the current code animates drifting particles;
> the `mouse` position is tracked but not yet used to draw.

**Run:** serve statically (see the
[repo README](../../README.md#running-a-task)).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/4-canvas-mouse-drawing?view=preview)
