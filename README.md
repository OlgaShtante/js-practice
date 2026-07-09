# js-practice

Exercises from my JavaScript course — vanilla JS fundamentals worked through
from language basics up to asynchronous programming and REST calls. These are
learning artifacts, kept public as a record of the ground I covered.

Tasks are grouped into folders by concept, and each task has its own
`README.md` describing what it practises, its key source file(s), and how to run
it. The groups below are ordered as a rough learning path — from variables and
DOM manipulation up to Promises, `async`/`await`, and `fetch`/XHR.

## Topics covered

Each group folder also has its own README.

### [`0-fundamentals-and-dom/`](0-fundamentals-and-dom)
Inputs, events, styling and forms:
[`0-simplest-calculator`](0-fundamentals-and-dom/0-simplest-calculator),
[`1-background-color-switcher`](0-fundamentals-and-dom/1-background-color-switcher),
[`2-color-list-manager`](0-fundamentals-and-dom/2-color-list-manager),
[`3-color-items-editor`](0-fundamentals-and-dom/3-color-items-editor),
[`4-prompt-form-validation`](0-fundamentals-and-dom/4-prompt-form-validation)

### [`1-objects-and-prototypes/`](1-objects-and-prototypes)
Object literals, constructors and the prototype chain:
[`0-classroom-object-literals`](1-objects-and-prototypes/0-classroom-object-literals),
[`1-nested-function-scope`](1-objects-and-prototypes/1-nested-function-scope),
[`2-classroom-oop-model`](1-objects-and-prototypes/2-classroom-oop-model),
[`3-prototype-inheritance`](1-objects-and-prototypes/3-prototype-inheritance),
[`4-prototype-chain`](1-objects-and-prototypes/4-prototype-chain)

### [`2-dom-effects-and-canvas/`](2-dom-effects-and-canvas)
Hover, redirect, slideshows and Canvas:
[`0-hover-tooltip`](2-dom-effects-and-canvas/0-hover-tooltip),
[`1-link-redirect`](2-dom-effects-and-canvas/1-link-redirect),
[`2-auto-slideshow`](2-dom-effects-and-canvas/2-auto-slideshow),
[`3-image-carousel`](2-dom-effects-and-canvas/3-image-carousel),
[`4-canvas-mouse-drawing`](2-dom-effects-and-canvas/4-canvas-mouse-drawing)

### [`3-closures-timers-recursion/`](3-closures-timers-recursion)
Scope, closures, timers and recursion:
[`0-clock-tabs-stopwatch-timer`](3-closures-timers-recursion/0-clock-tabs-stopwatch-timer),
[`1-closures-counter-sum`](3-closures-timers-recursion/1-closures-counter-sum),
[`2-closure-timing-logger`](3-closures-timers-recursion/2-closure-timing-logger),
[`3-recursive-password-check`](3-closures-timers-recursion/3-recursive-password-check),
[`4-nested-object-methods`](3-closures-timers-recursion/4-nested-object-methods)

### [`4-promises-and-async/`](4-promises-and-async)
Promises, `async`/`await`, XHR and `fetch`:
[`0-custom-promise-delay`](4-promises-and-async/0-custom-promise-delay),
[`1-promise-returning-function`](4-promises-and-async/1-promise-returning-function),
[`2-async-await-fetch`](4-promises-and-async/2-async-await-fetch),
[`3-promisified-xhr`](4-promises-and-async/3-promisified-xhr),
[`4-xhr-json-callback`](4-promises-and-async/4-xhr-json-callback)

### [`5-urls-and-rest/`](5-urls-and-rest)
Query-string parsing and REST requests:
[`0-parse-url-params`](5-urls-and-rest/0-parse-url-params),
[`1-url-parser-class`](5-urls-and-rest/1-url-parser-class),
[`2-rest-http-requests`](5-urls-and-rest/2-rest-http-requests)

### [`6-vruslo-project-pages/`](6-vruslo-project-pages)
Not standalone exercises — link/landing pages for a separate course project
("vRUSLO"). See the group README.

A single-page index of every task with live StackBlitz links is in
[`public/index.html`](public/index.html).

## Running a task

Most tasks are plain HTML + ES modules and need no build step.

- **Modular tasks** (a `src/` + `public/` folder): open the task folder in
  StackBlitz straight from GitHub, e.g.
  `https://stackblitz.com/github/OlgaShtante/js-practice/tree/master/4-promises-and-async/2-async-await-fetch`,
  or serve it locally with any static server:

  ```bash
  npx serve 4-promises-and-async/0-custom-promise-delay   # then open the printed URL
  ```

- **Flat tasks** (an `index.html` at the task-folder root, e.g.
  `0-fundamentals-and-dom/1-background-color-switcher`,
  `0-fundamentals-and-dom/4-prompt-form-validation`): just open `index.html` in a
  browser.

Most output goes to the browser console — keep DevTools open.

## Note

This is coursework, not a framework or product. For my automation and
architecture work, see my other repositories.
