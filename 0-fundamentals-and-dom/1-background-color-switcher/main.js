// Function to clear previously selected background colour:
function resetColour() {
  document.body.style.backgroundColor = "";
  document.body.className = "";
  document.body.style.removeProperty("--myColor");
}

// JS for the 1st task:
function changeBgColorImplementation1() {
  let color1 = document.querySelector(".implementation-1");
  let bgColor1 = color1.value;
  resetColour();

  document.body.style.backgroundColor = bgColor1;
}

// JS for the 2nd task:
function changeBgColorImplementation2() {
  let color2 = document.querySelector(".implementation-2");
  let bgColor2 = color2.value;
  resetColour();

  document.body.style.backgroundColor = bgColor2;
}

// JS for the 3rd task:
function changeBgColorImplementation3() {
  let color3 = document.querySelector(".implementation-3");
  let bgColor3 = color3.value;
  resetColour();

  document.body.className = bgColor3;
  if (bgColor3 != "Select a colour") {
    document.body.className = bgColor3;
  } else {
    alert("Try again :)");
  }
}

// JS for the 4th task:
function changeBgColorImplementation4() {
  let color4 = document.querySelector(".implementation-4");
  let bgColor4 = color4.value;
  resetColour();

  document.body.style.setProperty("--main-color", bgColor4);
}

// JS for the 5th task:
function setMainColor(selectElement) {
  let bgColor5 = selectElement.value;
  resetColour();

  document.body.style.setProperty("--main-color", bgColor5);
}
