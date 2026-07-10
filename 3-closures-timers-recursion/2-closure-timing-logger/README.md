# Closure Timing Logger

Times several async and sync operations and logs each with a shared `log`
helper. The point of the exercise: each task captures its own `before`/`after`
timestamps in a **closure**, and `log` reads them from that outer scope. Covers
a busy-loop sync delay, `setTimeout`, three XHR requests, and a button-click
handler — illustrating the order in which they resolve.

**Practises:** closures over local variables, sync vs. async execution order,
`setTimeout`, `XMLHttpRequest`, event handlers. (Inline comments in Russian
explain the closure at each step.)

**Source:** [`src/modules/`](src/modules/) — `main`, `logger`, `buttonClick`,
`setTimeout`, `syncDelay`, `xmlHttpRequest`.

**Run:** serve statically; watch the console for ordering.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/2-closure-timing-logger?view=preview)
