# Prompt Form Validation

A stepped survey shown in a custom on-page modal (the 2019 version used the
browser's `prompt`/`confirm`/`alert`). Each step re-shows itself until the
answer validates: first, middle (optional) and last name, date of birth,
gender, and a yes/no question. Name fields are title-cased on blur; the date
step pairs an ISO text field with a native calendar button. On submit it prints
a summary below the button with full name, age, age in days, age in 5 years,
and a retirement status.

**Practises:** building a reusable modal, driving a sequential flow with
`Promise`-returning steps and `async`/`await`, per-step validation, regex name
checks, safe date parsing (rejecting impossible days), and date math for age,
days lived, and retirement age.

**Why it matters:** Validating each field before advancing, and re-asking until
the input is correct, is what makes a multi-step form trustworthy.

**Source:** [`main.js`](main.js)

**Run:** open [`index.html`](index.html) and click the button.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/0-fundamentals-and-dom/4-prompt-form-validation?view=preview)
