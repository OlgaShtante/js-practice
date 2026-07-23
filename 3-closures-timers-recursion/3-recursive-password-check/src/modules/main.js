const TARGET = "open-sesame";

const input = document.getElementById("password");
const checkButton = document.getElementById("check");
const out = document.getElementById("out");

checkButton.addEventListener("click", runCheck);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runCheck();
});

function runCheck() {
  const attempt = input.value;
  const steps = [];
  const ok = matches(attempt, TARGET, 0, steps);

  steps.push("");
  steps.push(
    ok
      ? `✓ correct, matched in ${attempt.length} recursive comparisons`
      : "✗ no match"
  );
  out.textContent = steps.join("\n");
  out.hidden = false;
}

// Recursive char-by-char comparison: recurse to the next index only while the
// characters match, and stop at the first difference or the end of the string.
// Every branch terminates, so there is no infinite recursion.
function matches(attempt, target, i, steps) {
  // base case: reached the end of the target
  if (i === target.length) {
    if (attempt.length > target.length) {
      steps.push(`step ${i + 1}: input is longer than the target -> stop`);
      return false;
    }
    return true;
  }
  // base case: input ran out before the target did
  if (i === attempt.length) {
    steps.push(`step ${i + 1}: input ended at position ${i} before the target -> stop`);
    return false;
  }
  const typed = attempt[i];
  const wanted = target[i];
  if (typed !== wanted) {
    steps.push(`step ${i + 1}: position ${i}  '${typed}' != '${wanted}'  -> stop`);
    return false;
  }
  steps.push(`step ${i + 1}: position ${i}  '${typed}' == '${wanted}'  -> recurse`);
  return matches(attempt, target, i + 1, steps);
}
