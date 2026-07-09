# js-practice

Coursework from **Web Application Development with JavaScript** (Computer
Programming, Specific Applications) at **IT Academy** (Minsk), Apr–Aug 2019. These are
learning artifacts, kept public as a record of the ground I covered.

**Course scope:** working effectively with web pages; handling mouse, keyboard,
touchscreen and other events; writing regular expressions; SVG and Canvas; JSON
and AJAX; basic work with NoSQL databases and building services to
request / create / update / remove their data; ES5 and ES6; debugging and
testing code.

> Code by me, 2019 — back then there was no AI assistance, and a lot of the work
> was done via `console.log` and the `debugger`. Reorganized in 2026 with Claude:
> finally giving the `debugger` / `console.log` a day off.

Tasks are grouped into folders by concept, and each task has its own
`README.md` describing what it practises, its key source file(s), and how to run
it. The groups below are ordered as a rough learning path — from variables and
DOM manipulation up to Promises, `async`/`await`, and `fetch`/XHR.

## Tasks

Each task links to its code; **▶ StackBlitz** opens it live in the browser.

### [`0-fundamentals-and-dom/`](0-fundamentals-and-dom)
Inputs, events, styling and forms.

- [`0-simplest-calculator`](0-fundamentals-and-dom/0-simplest-calculator) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/0-simplest-calculator)
- [`1-background-color-switcher`](0-fundamentals-and-dom/1-background-color-switcher) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/1-background-color-switcher)
- [`2-color-list-manager`](0-fundamentals-and-dom/2-color-list-manager) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/2-color-list-manager)
- [`3-color-items-editor`](0-fundamentals-and-dom/3-color-items-editor) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/3-color-items-editor)
- [`4-prompt-form-validation`](0-fundamentals-and-dom/4-prompt-form-validation) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/4-prompt-form-validation)

### [`1-objects-and-prototypes/`](1-objects-and-prototypes)
Object literals, constructors and the prototype chain.

- [`0-classroom-object-literals`](1-objects-and-prototypes/0-classroom-object-literals) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/0-classroom-object-literals)
- [`1-nested-function-scope`](1-objects-and-prototypes/1-nested-function-scope) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/1-nested-function-scope)
- [`2-classroom-oop-model`](1-objects-and-prototypes/2-classroom-oop-model) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/2-classroom-oop-model)
- [`3-prototype-inheritance`](1-objects-and-prototypes/3-prototype-inheritance) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/3-prototype-inheritance)
- [`4-prototype-chain`](1-objects-and-prototypes/4-prototype-chain) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/1-objects-and-prototypes/4-prototype-chain)

### [`2-dom-effects-and-canvas/`](2-dom-effects-and-canvas)
Hover, redirect, slideshows and Canvas.

- [`0-hover-tooltip`](2-dom-effects-and-canvas/0-hover-tooltip) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/0-hover-tooltip)
- [`1-link-redirect`](2-dom-effects-and-canvas/1-link-redirect) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/1-link-redirect)
- [`2-auto-slideshow`](2-dom-effects-and-canvas/2-auto-slideshow) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/2-auto-slideshow)
- [`3-image-carousel`](2-dom-effects-and-canvas/3-image-carousel) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/3-image-carousel)
- [`4-canvas-mouse-drawing`](2-dom-effects-and-canvas/4-canvas-mouse-drawing) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/2-dom-effects-and-canvas/4-canvas-mouse-drawing)

### [`3-closures-timers-recursion/`](3-closures-timers-recursion)
Scope, closures, timers and recursion.

- [`0-clock-tabs-stopwatch-timer`](3-closures-timers-recursion/0-clock-tabs-stopwatch-timer) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/0-clock-tabs-stopwatch-timer)
- [`1-closures-counter-sum`](3-closures-timers-recursion/1-closures-counter-sum) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/1-closures-counter-sum)
- [`2-closure-timing-logger`](3-closures-timers-recursion/2-closure-timing-logger) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/2-closure-timing-logger)
- [`3-recursive-password-check`](3-closures-timers-recursion/3-recursive-password-check) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/3-recursive-password-check)
- [`4-nested-object-methods`](3-closures-timers-recursion/4-nested-object-methods) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/4-nested-object-methods)

### [`4-promises-and-async/`](4-promises-and-async)
Promises, `async`/`await`, XHR and `fetch`.

- [`0-custom-promise-delay`](4-promises-and-async/0-custom-promise-delay) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/0-custom-promise-delay)
- [`1-promise-returning-function`](4-promises-and-async/1-promise-returning-function) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/1-promise-returning-function)
- [`2-async-await-fetch`](4-promises-and-async/2-async-await-fetch) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/2-async-await-fetch)
- [`3-promisified-xhr`](4-promises-and-async/3-promisified-xhr) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/3-promisified-xhr)
- [`4-xhr-json-callback`](4-promises-and-async/4-xhr-json-callback) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/4-xhr-json-callback)

### [`5-urls-and-rest/`](5-urls-and-rest)
Query-string parsing and REST requests.

- [`0-parse-url-params`](5-urls-and-rest/0-parse-url-params) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/5-urls-and-rest/0-parse-url-params)
- [`1-url-parser-class`](5-urls-and-rest/1-url-parser-class) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/5-urls-and-rest/1-url-parser-class)
- [`2-rest-http-requests`](5-urls-and-rest/2-rest-http-requests) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/5-urls-and-rest/2-rest-http-requests)

### [`6-vruslo-project-pages/`](6-vruslo-project-pages)
Not standalone exercises — link/landing pages for a separate course project ("vRUSLO").

- [`0-vruslo-promises-links`](6-vruslo-project-pages/0-vruslo-promises-links) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/6-vruslo-project-pages/0-vruslo-promises-links)
- [`1-vruslo-events-links`](6-vruslo-project-pages/1-vruslo-events-links) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/6-vruslo-project-pages/1-vruslo-events-links)
- [`2-vruslo-url-params-links`](6-vruslo-project-pages/2-vruslo-url-params-links) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/6-vruslo-project-pages/2-vruslo-url-params-links)
- [`3-vruslo-xhr-links`](6-vruslo-project-pages/3-vruslo-xhr-links) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/6-vruslo-project-pages/3-vruslo-xhr-links)
- [`4-vruslo-json-server-links`](6-vruslo-project-pages/4-vruslo-json-server-links) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/6-vruslo-project-pages/4-vruslo-json-server-links)
- [`5-vruslo-peer-review`](6-vruslo-project-pages/5-vruslo-peer-review) — [▶ StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/6-vruslo-project-pages/5-vruslo-peer-review)

## Running a task

The quickest way to run any task is to open its folder in StackBlitz straight
from GitHub, e.g.
`https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/4-promises-and-async/2-async-await-fetch`.
The [task index](public/index.html) links every task this way.

To run locally:

- **Modular tasks** (an `index.html` at the task root with a `src/` folder of ES
  modules) are just static files — the browser runs the modules natively, no
  build step. Their `package.json` only starts a static server:

  ```bash
  cd 4-promises-and-async/0-custom-promise-delay
  npm start   # runs `npx serve .`, then open the printed URL
  ```

  > These modular tasks were originally scaffolded as Create React App projects
  > (`react-scripts`) when exported to StackBlitz — even though the code is plain
  > vanilla JS with no React. The 2026 cleanup dropped that phantom CRA setup;
  > StackBlitz launches them in its own container and serves the files
  > statically.

- **Flat tasks** (an `index.html` at the task-folder root, e.g.
  `0-fundamentals-and-dom/1-background-color-switcher`,
  `0-fundamentals-and-dom/4-prompt-form-validation`) need nothing at all — just
  open `index.html` in a browser.

Most tasks log their output to the browser console, so keep DevTools open.

## Note

This is coursework, not a framework or product. For my automation and
architecture work, see my other repositories.
