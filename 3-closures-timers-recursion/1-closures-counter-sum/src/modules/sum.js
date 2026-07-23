// A curried sum: each call adds to a private `total` held in the closure and
// returns the same function, so calls can be chained; `.value()` reads the total.
function adder() {
  let total = 0;
  function add(n) {
    total += n;
    return add;
  }
  add.value = () => total;
  return add;
}

const sum = adder();
console.log("");
console.log("curried sum closing over a private total:");
console.log("  sum(1)(2)(3)(10).value() ->", sum(1)(2)(3)(10).value());
