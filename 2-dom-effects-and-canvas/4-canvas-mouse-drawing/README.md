# Canvas Rocket Flight

A full-window `<canvas>` starfield you fly a 🚀 through with the mouse: the
rocket rides the cursor, turns to point where it is heading (`atan2`), and emits
an exhaust trail behind it. Stars drift downward and twinkle, and a translucent
per-frame fill leaves faint motion trails. Everything is redrawn in a
`requestAnimationFrame` loop and the field rebuilds on window resize.

**Practises:** Canvas 2D API (`getContext`, `arc`, `fill`, `translate`/`rotate`,
`fillText`), vector math with `atan2` for heading and a particle system for the
exhaust, a `requestAnimationFrame` animation loop, `window` resize handling.

**Why it matters:** The Canvas 2D API and an animation loop are how JavaScript
draws and moves pixels directly, the basis of games, charts, and visual effects.

**Source:** [`src/modules/main.js`](src/modules/main.js)

> The folder is named `canvas-mouse-drawing` after the original 2019 brief
> (control a canvas with the mouse); this version reimagines it as a rocket
> flight.

**Run:** serve statically (see the
[repo README](../../README.md#running-a-task)).

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/4-canvas-mouse-drawing?view=preview)
