// A closure counter: `count` is private state only the returned methods can
// touch, and it persists between calls. Each counter has its own independent
// `count`, so two counters never interfere.
function makeCounter(start = 0) {
  let count = start;
  return {
    increment(by = 1) {
      count += by;
      return count;
    },
    decrement(by = 1) {
      count -= by;
      return count;
    },
    value() {
      return count;
    },
  };
}

const a = makeCounter();
console.log("counter A (state persists across calls):");
console.log("  increment()  ->", a.increment());
console.log("  increment()  ->", a.increment());
console.log("  increment(5) ->", a.increment(5));
console.log("  decrement(2) ->", a.decrement(2));

const b = makeCounter(100);
console.log("counter B starts at 100 and is independent of A:");
console.log("  decrement(10) ->", b.decrement(10));
console.log("  A.value() ->", a.value(), " B.value() ->", b.value());
