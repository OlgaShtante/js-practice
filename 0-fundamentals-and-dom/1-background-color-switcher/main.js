const preview = document.getElementById("preview");

// clear any technique's effect before applying the next one
function resetPreview() {
  preview.style.backgroundColor = "";
  preview.className = "swatch";
  preview.style.removeProperty("--swatch");
}

function isValidColor(value) {
  return value !== "" && CSS.supports("color", value);
}

// highlight the field red and show the error, both auto-cleared after 5s
function showFieldError(input, message, text) {
  input.classList.add("is-invalid");
  message.textContent = text;
  message.hidden = false;
  clearTimeout(message._timer);
  message._timer = setTimeout(() => clearFieldError(input, message), 5000);
}

function clearFieldError(input, message) {
  input.classList.remove("is-invalid");
  message.hidden = true;
  clearTimeout(message._timer);
}

// 1 - inline style from a text input
document.getElementById("apply-1").addEventListener("click", function () {
  const input = document.getElementById("input-1");
  const message = document.getElementById("msg-1");
  const value = input.value.trim().toLowerCase();
  if (!isValidColor(value)) {
    showFieldError(input, message, "no such colour");
    return;
  }
  clearFieldError(input, message);
  resetPreview();
  preview.style.backgroundColor = value;
});

// 2 - inline style from a select
document.getElementById("apply-2").addEventListener("click", function () {
  resetPreview();
  preview.style.backgroundColor = document.getElementById("select-2").value;
});

// 3 - css class from a select (classes defined in style.css)
document.getElementById("apply-3").addEventListener("click", function () {
  const value = document.getElementById("select-3").value;
  resetPreview();
  if (value !== "") {
    preview.classList.add(value);
  }
});

// 4 - css custom property from a text input
document.getElementById("apply-4").addEventListener("click", function () {
  const input = document.getElementById("input-4");
  const message = document.getElementById("msg-4");
  const value = input.value.trim().toLowerCase();
  if (!isValidColor(value)) {
    showFieldError(input, message, "no such colour");
    return;
  }
  clearFieldError(input, message);
  resetPreview();
  preview.style.setProperty("--swatch", value);
});

// 5 - css custom property, applied on change
document.getElementById("select-5").addEventListener("change", function (event) {
  resetPreview();
  preview.style.setProperty("--swatch", event.target.value);
});
