# Recursive Password Check

Prompts for a password on button click and keeps re-prompting until it matches
the expected value — implemented by having `checkIfPasswordIsValid()` **call
itself** on a wrong answer instead of using a loop.

**Practises:** recursion as a retry loop, `prompt`, early `return`.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** open in StackBlitz or serve statically; click the button (password is
`mypassword`).
