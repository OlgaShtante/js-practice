# Closures — Counter & Sum

Two small closure exercises:

- **counter** — `getCounterObject()` keeps a private `valueToCount` and returns
  `{ increase, decrease, show }` methods that close over it, so each call to the
  factory produces an independent, encapsulated counter.
- **sum** — a curried `sum1(a)(b)(c)…` that keeps subtracting from a private
  running total held in the closure, with a `.showResult()` attached to the
  returned function.

**Practises:** closures, the module/factory pattern for private state, currying,
attaching properties to functions.

**Source:** [`src/modules/counter.js`](src/modules/counter.js),
[`src/modules/sum.js`](src/modules/sum.js)

**Run:** open in StackBlitz or serve statically; output is in the console.
