const fillButton = document.getElementById("fill-form");
const summary = document.getElementById("summary");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalStep = document.getElementById("modal-step");
const modalSelect = document.getElementById("modal-select");
const modalInput = document.getElementById("modal-input");
const modalError = document.getElementById("modal-error");
const modalNext = document.getElementById("modal-next");
const modalTextActions = document.getElementById("modal-text-actions");
const modalConfirmActions = document.getElementById("modal-confirm-actions");
const modalYes = document.getElementById("modal-yes");
const modalNo = document.getElementById("modal-no");
const modalDate = document.getElementById("modal-date");
const modalDateInput = document.getElementById("modal-date-input");
const modalDateBtn = document.getElementById("modal-date-btn");
const modalDateNative = document.getElementById("modal-date-native");

// names may hold letters and digits (e.g. "K8"), but no spaces or punctuation
const nameChars = /^[A-Za-zА-Яа-я0-9]+$/;
const TOTAL_STEPS = 6;
let stepIndex = 0;

const genderOptions = [
  { label: "Man" },
  { label: "Woman" },
  { label: "Non-binary" },
  { label: "Prefer not to say" },
  { label: "A gender not listed here", withText: true, placeholder: "your gender" },
];

fillButton.addEventListener("click", fillForm);

async function fillForm() {
  stepIndex = 0;
  summary.hidden = true;

  const firstName = toNameCase(
    await askText("first name", validateName, { nameCase: true })
  );
  const middleName = toNameCase(
    await askText("middle name", validateOptionalName, {
      optional: true,
      nameCase: true,
    })
  );
  const lastName = toNameCase(
    await askText("last name", validateName, { nameCase: true })
  );
  const dob = parseDate(await askDate("date of birth", validateDob));
  const gender = await askSelect("gender", genderOptions);
  const likesJs = await askConfirm("do you like JS?");

  closeModal();
  showSummary(firstName, middleName, lastName, dob, gender, likesJs);
}

// "First letter capitalized, rest lowercase" (leaves "" and "K8" sensible)
function toNameCase(value) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function validateName(value) {
  if (value.length < 2 || !nameChars.test(value)) {
    return "enter at least 2 chars";
  }
  return null;
}

// middle name is optional: an empty value passes, anything typed still must be valid
function validateOptionalName(value) {
  return value.length === 0 ? null : validateName(value);
}

function validateDob(value) {
  const dob = parseDate(value);
  if (!dob) {
    return "enter a valid date";
  }
  if (dob > new Date()) {
    return "date can't be in the future";
  }
  if (ageInYears(dob, new Date()) > 120) {
    return "enter a realistic date";
  }
  return null;
}

// parse "YYYY-MM-DD" into a local Date, rejecting impossible days (e.g. 2021-02-31)
function parseDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = +match[1];
  const month = +match[2];
  const day = +match[3];
  const date = new Date(year, month - 1, day);
  const rolledOver =
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day;
  return rolledOver ? null : date;
}

function todayISO() {
  return formatDate(new Date());
}

// completed years lived, dropping the current year until the birthday has passed
function ageInYears(dob, today) {
  let years = today.getFullYear() - dob.getFullYear();
  const beforeBirthday =
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate());
  return beforeBirthday ? years - 1 : years;
}

// exact calendar days between two dates; UTC midnights sidestep DST, and the
// real count already includes every leap day, so no 365-vs-366 bookkeeping
function daysBetween(from, to) {
  const start = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const end = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((end - start) / 86400000);
}

// show a text step; resolves with the value once it validates.
// opts: { optional, type, max } — type/max drive the underlying <input>.
function askText(title, validate, opts = {}) {
  const { optional = false, type = "text", max, nameCase = false } = opts;
  return new Promise((resolve) => {
    setStep(title, optional);
    modalInput.type = type;
    if (max) {
      modalInput.max = max;
    } else {
      modalInput.removeAttribute("max");
    }
    modalInput.value = "";
    modalInput.placeholder = "";
    modalInput.classList.remove("is-invalid");
    modalError.hidden = true;
    modalSelect.hidden = true;
    modalDate.hidden = true;
    modalInput.hidden = false;
    modalTextActions.hidden = false;
    modalConfirmActions.hidden = true;
    openModal();
    modalInput.focus();

    function submit() {
      const value = modalInput.value.trim();
      const error = validate(value);
      if (error) {
        modalError.textContent = error;
        modalError.hidden = false;
        modalInput.classList.add("is-invalid");
        return;
      }
      cleanup();
      resolve(value);
    }
    function onKey(event) {
      if (event.key === "Enter") {
        submit();
      }
    }
    // format name fields on blur: first letter upper, the rest lower
    function onBlur() {
      const cased = toNameCase(modalInput.value);
      if (cased !== modalInput.value) {
        modalInput.value = cased;
      }
    }
    function cleanup() {
      modalNext.removeEventListener("click", submit);
      modalInput.removeEventListener("keydown", onKey);
      if (nameCase) modalInput.removeEventListener("blur", onBlur);
    }
    modalNext.addEventListener("click", submit);
    modalInput.addEventListener("keydown", onKey);
    if (nameCase) modalInput.addEventListener("blur", onBlur);
  });
}

// show a date step: an ISO text field (yyyy-mm-dd) plus a calendar button that
// opens the native picker. resolves with the ISO string once it validates.
function askDate(title, validate) {
  return new Promise((resolve) => {
    setStep(title);
    modalError.hidden = true;
    modalSelect.hidden = true;
    modalInput.hidden = true;
    modalDate.hidden = false;
    modalTextActions.hidden = false;
    modalConfirmActions.hidden = true;
    modalDateInput.value = "";
    modalDateInput.classList.remove("is-invalid");
    modalDateNative.max = todayISO();
    openModal();
    modalDateInput.focus();

    // keep the field to digits and dashes as it is typed or pasted into
    function onFilter() {
      const filtered = modalDateInput.value.replace(/[^\d-]/g, "");
      if (filtered !== modalDateInput.value) modalDateInput.value = filtered;
    }
    function openPicker() {
      if (parseDate(modalDateInput.value)) {
        modalDateNative.value = modalDateInput.value;
      }
      if (typeof modalDateNative.showPicker === "function") {
        modalDateNative.showPicker();
      } else {
        modalDateNative.click();
      }
    }
    // the native value is always ISO; mirror it into the visible field
    function onPick() {
      if (modalDateNative.value) {
        modalDateInput.value = modalDateNative.value;
        modalDateInput.classList.remove("is-invalid");
        modalError.hidden = true;
      }
    }
    function submit() {
      const value = modalDateInput.value.trim();
      const error = validate(value);
      if (error) {
        modalError.textContent = error;
        modalError.hidden = false;
        modalDateInput.classList.add("is-invalid");
        return;
      }
      cleanup();
      resolve(value);
    }
    function onKey(event) {
      if (event.key === "Enter") {
        submit();
      }
    }
    function cleanup() {
      modalNext.removeEventListener("click", submit);
      modalDateInput.removeEventListener("keydown", onKey);
      modalDateInput.removeEventListener("input", onFilter);
      modalDateBtn.removeEventListener("click", openPicker);
      modalDateNative.removeEventListener("change", onPick);
      modalDate.hidden = true;
    }
    modalNext.addEventListener("click", submit);
    modalDateInput.addEventListener("keydown", onKey);
    modalDateInput.addEventListener("input", onFilter);
    modalDateBtn.addEventListener("click", openPicker);
    modalDateNative.addEventListener("change", onPick);
  });
}

// show a dropdown step; the last option can reveal a free-text box.
// resolves with the chosen label, or the typed text for the open option.
function askSelect(title, options) {
  return new Promise((resolve) => {
    setStep(title);
    modalSelect.innerHTML = "";
    options.forEach((opt, i) => {
      const optionEl = document.createElement("option");
      optionEl.value = String(i);
      optionEl.textContent = opt.label;
      modalSelect.appendChild(optionEl);
    });
    modalSelect.selectedIndex = 0;

    modalInput.type = "text";
    modalInput.removeAttribute("max");
    modalInput.value = "";
    modalInput.placeholder = "";
    modalInput.classList.remove("is-invalid");
    modalError.hidden = true;
    modalSelect.hidden = false;
    modalDate.hidden = true;
    modalInput.hidden = true;
    modalTextActions.hidden = false;
    modalConfirmActions.hidden = true;
    openModal();
    modalSelect.focus();

    function current() {
      return options[modalSelect.selectedIndex];
    }
    // reveal the free-text box only while the open-ended option is selected
    function syncText() {
      const opt = current();
      if (opt.withText) {
        modalInput.placeholder = opt.placeholder || "";
        modalInput.hidden = false;
        modalInput.focus();
      } else {
        modalInput.hidden = true;
        modalInput.classList.remove("is-invalid");
        modalError.hidden = true;
      }
    }
    function submit() {
      const opt = current();
      if (opt.withText) {
        const text = modalInput.value.trim();
        if (text.length < 2) {
          modalError.textContent = "enter at least 2 chars";
          modalError.hidden = false;
          modalInput.classList.add("is-invalid");
          return;
        }
        cleanup();
        resolve(text);
        return;
      }
      cleanup();
      resolve(opt.label);
    }
    function onKey(event) {
      if (event.key === "Enter") {
        submit();
      }
    }
    function cleanup() {
      modalNext.removeEventListener("click", submit);
      modalSelect.removeEventListener("change", syncText);
      modalInput.removeEventListener("keydown", onKey);
      modalSelect.hidden = true;
    }
    modalNext.addEventListener("click", submit);
    modalSelect.addEventListener("change", syncText);
    modalInput.addEventListener("keydown", onKey);
  });
}

// show a yes/no step; resolves with a boolean
function askConfirm(title) {
  return new Promise((resolve) => {
    setStep(title);
    modalError.hidden = true;
    modalSelect.hidden = true;
    modalDate.hidden = true;
    modalInput.hidden = true;
    modalTextActions.hidden = true;
    modalConfirmActions.hidden = false;
    openModal();
    modalYes.focus();

    function answer(value) {
      cleanup();
      resolve(value);
    }
    function onYes() {
      answer(true);
    }
    function onNo() {
      answer(false);
    }
    function cleanup() {
      modalYes.removeEventListener("click", onYes);
      modalNo.removeEventListener("click", onNo);
    }
    modalYes.addEventListener("click", onYes);
    modalNo.addEventListener("click", onNo);
  });
}

function setStep(title, optional = false) {
  stepIndex += 1;
  modalTitle.textContent = title;
  modalStep.textContent =
    `step ${stepIndex} of ${TOTAL_STEPS}` + (optional ? " (optional)" : "");
}

function openModal() {
  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
}

function showSummary(firstName, middleName, lastName, dob, gender, likesJs) {
  const today = new Date();
  const age = ageInYears(dob, today);
  const ageDays = daysBetween(dob, today);

  const fullName = [firstName, middleName, lastName].filter(Boolean).join(" ");
  // legacy pension mapping: women retire at 56, everyone else at 61
  const retiresEarly = gender === "Woman";
  const status =
    (retiresEarly && age >= 56) || (!retiresEarly && age >= 61)
      ? "retired"
      : "not retired";
  const likesMessage = likesJs
    ? "you like JS — give me a high-five!"
    : "you do not like JavaScript?! how dare you!";

  const rows = [
    ["full name", fullName],
    ["date of birth", formatDate(dob)],
    ["age", age],
    ["age in days", ageDays],
    ["in 5 years", age + 5],
    ["gender", gender],
    ["status", status],
  ];
  summary.textContent =
    rows.map(([label, value]) => `${(label + ":").padEnd(15)}${value}`).join("\n") +
    "\n" +
    likesMessage;
  summary.hidden = false;
}

function formatDate(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
