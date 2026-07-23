const htmlElements = {};
let messageTimer;

function initHTMLElements() {
  htmlElements.selectColor = document.getElementById("color-select");
  htmlElements.addButton = document.getElementById("add-color");
  htmlElements.input = document.getElementById("color-input");
  htmlElements.removeButton = document.getElementById("remove-color");
  htmlElements.removeSelectedButton = document.getElementById(
    "remove-selected-color",
  );
  htmlElements.inputMessage = document.getElementById("input-message");
  htmlElements.selectMessage = document.getElementById("select-message");
  htmlElements.body = document.body;
}

function initEvenHandles() {
  htmlElements.selectColor.addEventListener("change", selectColorValueChanged);
  htmlElements.addButton.addEventListener("click", addButtonClicked);
  htmlElements.input.addEventListener("input", validateColorInput);
  htmlElements.input.addEventListener("blur", clearColorValidation);
  htmlElements.removeButton.addEventListener("click", removeColorClicked);
  htmlElements.removeSelectedButton.addEventListener(
    "click",
    removeSelectedColorClicked,
  );
}

initHTMLElements();
initEvenHandles();
applyInitialColor();

// apply whatever colour is selected on load (blue by default) to the background
function applyInitialColor() {
  let color = htmlElements.selectColor.value;
  if (color !== "not selected") {
    setColor(color);
  }
}

function selectColorValueChanged() {
  clearMessage(htmlElements.selectMessage);
  let colorValue = htmlElements.selectColor.value;
  setColor(colorValue);
}

function addButtonClicked() {
  let color = htmlElements.input.value.toLowerCase();
  let ifColorAdded = checkIfColorAdded(color);
  if (ifColorAdded === true) {
    showMessage(htmlElements.inputMessage, "colour already added");
    htmlElements.input.value = "";
    clearColorValidation();
  } else {
    let colorCanBeAdded = checkIfColorCanBeAdded(color);
    if (colorCanBeAdded === false) {
      showMessage(htmlElements.inputMessage, "no such colour");
      htmlElements.input.value = "";
    } else {
      addColor(color);
      chooseColor(color);
      setColor(color);
    }
  }
}

function removeColorClicked() {
  let valueRemoveColor = htmlElements.input.value.toLowerCase();
  if (valueRemoveColor === "") {
    showMessage(htmlElements.inputMessage, "enter a colour first");
  } else {
    if (valueRemoveColor !== "") {
      removeColor(valueRemoveColor);
    }
  }
}

function removeSelectedColorClicked() {
  let removeSelectedColor = getSelectedValue();
  if (removeSelectedColor === "not selected") {
    showMessage(htmlElements.selectMessage, "select a colour to remove");
    return;
  }
  removeColor(removeSelectedColor);
}

function getSelectedValue() {
  let selectedIdx = htmlElements.selectColor.selectedIndex;
  return htmlElements.selectColor[selectedIdx].value;
}

// live feedback while typing: neutral when empty, green if the colour is
// valid, red if not; cleared on blur so an unfocused field has no highlight
function validateColorInput() {
  clearMessage(htmlElements.inputMessage);
  htmlElements.input.classList.remove("is-valid", "is-invalid");
  let color = htmlElements.input.value.toLowerCase();
  if (color === "") {
    return;
  }
  if (checkIfColorCanBeAdded(color)) {
    htmlElements.input.classList.add("is-valid");
  } else {
    htmlElements.input.classList.add("is-invalid");
  }
}

function clearColorValidation() {
  htmlElements.input.classList.remove("is-valid", "is-invalid");
}

function showMessage(element, text) {
  element.textContent = text;
  element.hidden = false;
  // auto-dismiss after 10s so stale errors don't linger
  clearTimeout(messageTimer);
  messageTimer = setTimeout(clearAllMessages, 5000);
}

function clearMessage(element) {
  element.textContent = "";
  element.hidden = true;
}

function clearAllMessages() {
  clearMessage(htmlElements.inputMessage);
  clearMessage(htmlElements.selectMessage);
}

function checkIfColorAdded(color) {
  let colorAdded = false;
  for (let i = 1; i < htmlElements.selectColor.length; i++) {
    if (htmlElements.selectColor[i].value === color) {
      colorAdded = true;
    }
  }
  return colorAdded;
}

function addColor(color) {
  let optionElement = new Option(color, color, true, true);
  htmlElements.selectColor.appendChild(optionElement);
  reset();
}

function chooseColor(color) {
  for (let i = 1; i < htmlElements.selectColor.length; i++) {
    if (htmlElements.selectColor[i].value === color) {
      setSelectedIndex(i);
    }
  }
}

function setSelectedIndex(idx) {
  htmlElements.selectColor.selectedIndex = idx;
}

function setColor(color) {
  htmlElements.body.style.setProperty("--color", color);
}

function removeColor(color) {
  let colorAdded = checkIfColorAdded(color);
  if (colorAdded === true) {
    for (let i = 1; i < htmlElements.selectColor.length; i++) {
      if (htmlElements.selectColor[i].value === color) {
        htmlElements.selectColor.removeChild(htmlElements.selectColor[i]);
        htmlElements.selectColor.selectedIndex = 0;
      }
    }
    reset();
  } else {
    showMessage(htmlElements.inputMessage, "no such colour");
    htmlElements.input.value = "";
  }
}

function reset() {
  htmlElements.input.value = "";
  htmlElements.input.classList.remove("is-valid", "is-invalid");
  clearAllMessages();
  htmlElements.body.style.removeProperty("--color");
}

function checkIfColorCanBeAdded(color) {
  if (color.indexOf("rgb") > -1 || color === "") {
    return false;
  }

  let div = document.createElement("div");
  div.style.backgroundColor = color;
  let colorIsSetCorrectly = div.style.backgroundColor === color;
  return colorIsSetCorrectly;
}
c;
