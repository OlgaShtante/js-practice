let htmlElements;
let messageTimer;
const MAX_ITEMS = 10;

let items = [
  { color: "darkgreen", bgColor: "forestgreen" },
  { color: "orange", bgColor: "yellow" },
  { color: "firebrick", bgColor: "orangered" },
];

function init() {
  htmlElements = {
    bgColorInput: document.getElementById("bg-color-input"),
    textColorInput: document.getElementById("text-color-input"),
    addButton: document.getElementById("add-item"),
    items: document.getElementById("items"),
    preview: document.getElementById("preview"),
    message: document.getElementById("editor-message"),
    bgMessage: document.getElementById("msg-bg"),
    textMessage: document.getElementById("msg-text"),
  };

  htmlElements.addButton.addEventListener("click", addNewItem);
  htmlElements.bgColorInput.addEventListener("focusout", checkBgColorField);
  htmlElements.textColorInput.addEventListener("focusout", checkColorField);
  htmlElements.bgColorInput.addEventListener("input", clearErrors);
  htmlElements.textColorInput.addEventListener("input", clearErrors);

  render();
}

init();

function render() {
  htmlElements.items.innerHTML = "";
  // reset the preview to its default; a selected item re-applies its colours below
  htmlElements.preview.style.removeProperty("background-color");
  htmlElements.preview.style.removeProperty("color");
  for (let i = 0; i < items.length; i++) {
    let existedItems = items[i];

    const itemCard = document.createElement("div");
    itemCard.className = "item";
    itemCard.style.backgroundColor = existedItems.bgColor;
    itemCard.style.color = existedItems.color;
    itemCard.addEventListener("click", newItemClicked);
    if (existedItems.selected === true) {
      itemCard.classList.add("selected");
      htmlElements.preview.style.backgroundColor = existedItems.bgColor;
      htmlElements.preview.style.color = existedItems.color;
    }
    htmlElements.items.appendChild(itemCard);

    const span = document.createElement("span");
    span.className = "item__text";
    span.textContent = existedItems.color.toLowerCase();
    itemCard.appendChild(span);

    const xButton = document.createElement("button");
    xButton.type = "button";
    xButton.className = "item__delete";
    xButton.textContent = "✕";
    xButton.addEventListener("click", deleteButtonClicked);
    itemCard.appendChild(xButton);
  }
}

function deleteButtonClicked(event) {
  event.stopPropagation();

  let removeItem = this.parentElement;
  const itemElement = removeItem.parentElement;
  const itemArray = Array.from(itemElement.querySelectorAll("div.item"));
  let index = itemArray.indexOf(removeItem);
  items.splice(index, 1);

  render();
}

function newItemClicked() {
  for (let i = 0; i < items.length; i++) {
    items[i].selected = false;
  }
  const selectElement = this.parentElement;
  const itemArray = Array.from(selectElement.querySelectorAll("div.item"));
  let index = itemArray.indexOf(this);
  items[index].selected = true;

  render();
}

function addNewItem() {
  const bgValue = htmlElements.bgColorInput.value.trim().toLowerCase();
  const textValue = htmlElements.textColorInput.value.trim().toLowerCase();

  // 1. empty (shared message; highlight the empty field(s))
  if (bgValue === "" || textValue === "") {
    clearFieldError(htmlElements.bgColorInput, htmlElements.bgMessage);
    clearFieldError(htmlElements.textColorInput, htmlElements.textMessage);
    htmlElements.bgColorInput.classList.toggle("is-invalid", bgValue === "");
    htmlElements.textColorInput.classList.toggle("is-invalid", textValue === "");
    showMessage("enter a background and a text colour");
    return;
  }

  // 2. improper colour (per-field message under each bad field)
  const bgOk = checkIfBgColorCanBeAdded();
  const textOk = checkIfColorCanBeAdded();
  if (!bgOk || !textOk) {
    if (!bgOk) {
      showFieldError(
        htmlElements.bgColorInput,
        htmlElements.bgMessage,
        "improper colour",
      );
    } else {
      clearFieldError(htmlElements.bgColorInput, htmlElements.bgMessage);
    }
    if (!textOk) {
      showFieldError(
        htmlElements.textColorInput,
        htmlElements.textMessage,
        "improper colour",
      );
    } else {
      clearFieldError(htmlElements.textColorInput, htmlElements.textMessage);
    }
    return;
  }

  clearFieldError(htmlElements.bgColorInput, htmlElements.bgMessage);
  clearFieldError(htmlElements.textColorInput, htmlElements.textMessage);

  // 3. same colour
  if (normalizeColor(bgValue) === normalizeColor(textValue)) {
    htmlElements.bgColorInput.classList.add("is-invalid");
    htmlElements.textColorInput.classList.add("is-invalid");
    showMessage("background and text can't be the same colour");
    return;
  }

  // 4. duplicate, then 5. cap — handled in createNewItem
  createNewItem();
  render();
}

function createNewItem() {
  if (checkThisItem() === true) {
    htmlElements.bgColorInput.classList.add("is-invalid");
    htmlElements.textColorInput.classList.add("is-invalid");
    showMessage("this colour pair is already added");
    return;
  }

  // cap check runs last, only once the pair is otherwise valid
  if (items.length >= MAX_ITEMS) {
    showMessage(`max ${MAX_ITEMS} colours reached — delete one to add another`);
    return;
  }

  const newItem = {
    bgColor: htmlElements.bgColorInput.value.trim().toLowerCase(),
    color: htmlElements.textColorInput.value.trim().toLowerCase(),
  };
  items.push(newItem);
  htmlElements.bgColorInput.value = "";
  htmlElements.textColorInput.value = "";
}

// shared inline message under the add button, auto-dismissed after 5s
function showMessage(text) {
  htmlElements.message.textContent = text;
  htmlElements.message.hidden = false;
  clearTimeout(messageTimer);
  messageTimer = setTimeout(() => {
    htmlElements.message.hidden = true;
  }, 5000);
}

// per-field error: red highlight + message under that field, auto-cleared after 5s
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

// typing in either field clears all current errors (including the both-field
// "same colour" highlight); validation re-runs on focus-out and submit
function clearErrors() {
  clearFieldError(htmlElements.bgColorInput, htmlElements.bgMessage);
  clearFieldError(htmlElements.textColorInput, htmlElements.textMessage);
  htmlElements.message.hidden = true;
  clearTimeout(messageTimer);
}

// normalise a colour so "grey" / "gray" / "#808080" all compare equal
function normalizeColor(value) {
  const context = document.createElement("canvas").getContext("2d");
  context.fillStyle = value;
  return context.fillStyle;
}

function checkThisItem() {
  let checkedItem = {};
  checkedItem.bgColor = htmlElements.bgColorInput.value.trim().toLowerCase();
  checkedItem.color = htmlElements.textColorInput.value.trim().toLowerCase();
  for (let i = 0; i < items.length; i++) {
    if (
      items[i].bgColor === checkedItem.bgColor &&
      items[i].color === checkedItem.color
    ) {
      return true;
    }
  }
}

function checkIfColorCanBeAdded() {
  let color = htmlElements.textColorInput.value.trim().toLowerCase();
  if (color.indexOf("rgb") > -1 || color === "") {
    return false;
  }
  let div = document.createElement("div");
  div.style.color = color;
  let colorIsSetCorrectly = div.style.color === color;
  return colorIsSetCorrectly;
}

function checkIfBgColorCanBeAdded() {
  let bgColor = htmlElements.bgColorInput.value.trim().toLowerCase();
  if (bgColor.indexOf("rgb") > -1 || bgColor === "") {
    return false;
  }
  let div = document.createElement("div");
  div.style.backgroundColor = bgColor;
  let colorIsSetCorrectly = div.style.backgroundColor === bgColor;
  return colorIsSetCorrectly;
}

// on focus-out, flag a non-empty improper colour with a message under the field
function checkBgColorField() {
  const value = htmlElements.bgColorInput.value.trim();
  if (value !== "" && !checkIfBgColorCanBeAdded()) {
    showFieldError(
      htmlElements.bgColorInput,
      htmlElements.bgMessage,
      "improper colour",
    );
  } else {
    clearFieldError(htmlElements.bgColorInput, htmlElements.bgMessage);
  }
}

function checkColorField() {
  const value = htmlElements.textColorInput.value.trim();
  if (value !== "" && !checkIfColorCanBeAdded()) {
    showFieldError(
      htmlElements.textColorInput,
      htmlElements.textMessage,
      "improper colour",
    );
  } else {
    clearFieldError(htmlElements.textColorInput, htmlElements.textMessage);
  }
}
