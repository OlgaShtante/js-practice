# Recursive Password Check

Compares your input to a target password one character at a time with a
recursive `matches()` that advances to the next index only while the characters
match, and stops at the first mismatch or the end of either string. Each
recursive step is printed to the page, and every branch terminates, so there is
no infinite recursion. Target: `open-sesame`.

**Practises:** recursion with explicit base cases, string indexing, early return
on the first mismatch, guaranteed termination.

**Why it matters:** Recursion solves a problem by having a function call itself
on a smaller part, and getting the base cases right is what separates a clean
recursive solution from an infinite loop.

**Source:** [`src/modules/main.js`](src/modules/main.js)

**Run:** serve statically; type a password, click check, and the recursive steps print on the page.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/3-closures-timers-recursion/3-recursive-password-check?view=preview)
