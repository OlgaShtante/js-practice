# Closures: Counter & Sum

Two small closure exercises:

- **counter**: `getCounterObject()` keeps a private `valueToCount` and returns
  `{ increase, decrease, show }` methods that close over it, so each call to the
  factory produces an independent, encapsulated counter.
- **sum**: a curried `sum1(a)(b)(c)…` that keeps subtracting from a private
  running total held in the closure, with a `.showResult()` attached to the
  returned function.

**Practises:** closures, the module/factory pattern for private state, currying,
attaching properties to functions.

**Why it matters:** A closure lets a function keep private state after it
returns, which is how JavaScript encapsulates data without a class.

**Source:** [`src/modules/counter.js`](src/modules/counter.js),
[`src/modules/sum.js`](src/modules/sum.js)

**Run:** serve statically; the console output is mirrored into the panel on the
page.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/1-closures-counter-sum?view=preview)
