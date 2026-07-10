# Clock, Tabs, Stopwatch & Timer

A small tabbed widget with four modes:

- **Clock** — a live `HH:MM:SS` clock updated every second.
- **Tabs** — switches the visible panel and highlights the active link.
- **Stopwatch** and **Timer** — both built on a shared `StopwatchTimer`
  constructor; `Stopwatch` counts up from 0, `Timer` counts down from 300 s and
  alerts when it reaches zero. Start/Stop/Reset buttons are enabled/disabled via
  a small `ClassUpdate` helper.

Stopwatch and Timer inherit from `StopwatchTimer` via
`Object.create(...prototype)` and each override `getTimeDifference` to count in
their own direction.

**Practises:** module composition, prototype inheritance and method overriding,
`setTimeout`-driven ticking, `Date` math, class toggling, `apply`/`bind`.

**Source:** [`src/modules/`](src/modules/) — `clock`, `tabs`, `stopwatch`,
`timer`, `stopwatchTimer`, `classUpdate`.

**Run:** open in [StackBlitz](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/0-clock-tabs-stopwatch-timer?view=preview) or serve statically (see the
[repo README](../../README.md#running-a-task)).
