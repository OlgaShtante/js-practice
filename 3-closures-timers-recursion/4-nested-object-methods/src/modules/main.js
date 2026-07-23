// Recursive deep copy of a nested object. A WeakMap of already-copied objects
// lets a circular reference resolve to its copy instead of recursing forever.
function deepCopy(value, seen = new WeakMap()) {
  // primitives and functions are returned as-is
  if (value === null || typeof value !== "object") {
    return value;
  }
  // already copied this object? reuse the copy (this is what breaks cycles)
  if (seen.has(value)) {
    return seen.get(value);
  }
  const copy = Array.isArray(value) ? [] : {};
  seen.set(value, copy);
  for (const key of Object.keys(value)) {
    copy[key] = deepCopy(value[key], seen);
  }
  return copy;
}

// a nested object...
const original = {
  size: "S",
  colour: { tone: "light", main: "yellow" },
  tags: ["a", "b"],
};
// ...with a circular reference back to itself
original.self = original;

const copy = deepCopy(original);

const lines = [
  "deep copy of a nested object that references itself:",
  "",
  "the copy is deep, nested values are new references:",
  `  copy.colour === original.colour: ${copy.colour === original.colour}`,
  `  copy.tags   === original.tags:   ${copy.tags === original.tags}`,
  "",
  "so mutating the copy does not touch the original:",
];
copy.colour.main = "teal";
lines.push(`  copy.colour.main:     ${copy.colour.main}`);
lines.push(`  original.colour.main: ${original.colour.main}`);
lines.push("");
lines.push("and the circular reference is preserved, not infinite:");
lines.push(`  copy.self === copy:     ${copy.self === copy}`);
lines.push(`  copy.self === original: ${copy.self === original}`);

console.log(lines.join("\n"));
