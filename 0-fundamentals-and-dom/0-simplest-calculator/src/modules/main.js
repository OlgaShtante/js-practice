const inputOne = document.getElementById("num-1");
const inputTwo = document.getElementById("num-2");
const countButton = document.getElementById("count");
const result = document.getElementById("result");
const error = document.getElementById("calc-error");
let errorTimer;

countButton.addEventListener("click", showSum);

// keep the fields to digits, comma and dot as they are typed or pasted into
[inputOne, inputTwo].forEach((input) => {
  input.addEventListener("input", () => {
    const filtered = input.value.replace(/[^\d.,]/g, "");
    if (filtered !== input.value) {
      input.value = filtered;
    }
  });
});

function showSum() {
  const first = toNumber(inputOne.value);
  const second = toNumber(inputTwo.value);

  const firstInvalid = Number.isNaN(first);
  const secondInvalid = Number.isNaN(second);
  inputOne.classList.toggle("is-invalid", firstInvalid);
  inputTwo.classList.toggle("is-invalid", secondInvalid);

  if (firstInvalid || secondInvalid) {
    // a non-empty field that still won't parse is malformed, not just missing
    const malformed =
      (firstInvalid && inputOne.value.trim() !== "") ||
      (secondInvalid && inputTwo.value.trim() !== "");
    showError(malformed ? "improper number" : "enter two numbers");
    result.hidden = true;
    return;
  }

  clearError();
  // toPrecision trims floating-point noise (e.g. 0.1 + 0.2)
  const sum = parseFloat((first + second).toPrecision(12));
  result.textContent = `${first} + ${second} = ${sum}`;
  result.hidden = false;
}

// show the error, then auto-dismiss after 5s (as in the other tasks)
function showError(text) {
  error.textContent = text;
  error.hidden = false;
  clearTimeout(errorTimer);
  errorTimer = setTimeout(clearError, 5000);
}

function clearError() {
  error.hidden = true;
  clearTimeout(errorTimer);
  inputOne.classList.remove("is-invalid");
  inputTwo.classList.remove("is-invalid");
}

// accept a dot or comma as the decimal separator, but only between digits
// (rejects ".9", "1.", ",03", "0," and other malformed values like "1.2.3")
function toNumber(value) {
  const trimmed = value.trim();
  if (!/^-?\d+([.,]\d+)?$/.test(trimmed)) {
    return NaN;
  }
  return parseFloat(trimmed.replace(",", "."));
}
