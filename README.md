# js-practice

Exercises from my JavaScript course — vanilla JS fundamentals worked through
from language basics up to asynchronous programming and REST calls. These are
learning artifacts, kept public as a record of the ground I covered. Each
numbered folder is one task (`DZ#` = homework assignment).

The tasks build on each other, so the numbering roughly tracks increasing
difficulty: from variables and DOM manipulation in the single digits to
Promises, `async/await`, and `fetch`/XHR by the twenties.

## Topics covered

Grouped by the concepts that show up across the tasks:

| Area | Tasks | What's in there |
|------|-------|-----------------|
| Fundamentals & DOM | `1.x`–`7.x` | Variables, functions, conditionals, DOM manipulation (hosted on CodePen) |
| Constructors & prototypes | `8.x`–`10.x` | Constructor functions, prototype chain, object composition (`furniture`, `techEquip`, `constructEquip`) |
| Classes & the DOM clock | `10.x`–`17.x` | ES classes, a live clock (`classUpdate`, `clock`), tabs, counters |
| Closures | `17.x` | `counter`, `sum` — state captured in closures |
| Timers | `18.x` | `setTimeout` / `setInterval`, stopwatch, timer |
| Promises | `19.x`–`20.x` | Hand-written promise chains, `delay`, sequencing (`promise1`, `promise2`) |
| Events | `21.x` | Event handling and a small logging helper (`buttonClick`, `logger`) |
| URL parsing | `22.x` | Parsing query strings (`urlParams`) |
| XHR / fetch / async-await | `23.x`–`24.x` | `XMLHttpRequest`, `fetch`, `async/await`, plus a `rest.http` request file |
| Forms & JSON server | `25.x` | Forms wired to a custom JSON server |

An index of every task with live links is in [`public/index.html`](public/index.html).

## Running a task

Most tasks are plain HTML + ES modules and need no build step. The simplest way
to open one is via StackBlitz straight from GitHub, e.g.:

```
https://stackblitz.com/github/OlgaShtante/js-practice/tree/master/25.1
```

Or serve a task folder locally with any static server:

```bash
npx serve 19.1        # then open the printed URL
```

The earliest tasks (`1.x`–`7.x`) live as CodePen pens — links are in the
[task index](public/index.html).

## Note

This is coursework, not a framework or product. For my automation and
architecture work, see my other repositories.
