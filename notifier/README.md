# notifier

A small, reusable "why this practice matters" widget shared across the task
pages in this repo. It is **not** a practice task itself, just shared UI.

It renders a slim header bar fixed to the top of a task page, with a `?` circle
at its far left acting as a tape-measure case. On load the tape (a teal ribbon
the same height as the circle, carrying a short note on why that task's concept
matters) rolls out of the circle from left to right, holds for about 7 seconds,
then recoils back in. Hovering or focusing the circle draws the tape out again.
If the note is longer than the space available, the message scrolls in a
continuous loop, holding a moment at the start so the opening is readable, so
the whole note can still be read. The teal gradient matches the repo's task
index. The tape roll respects `prefers-reduced-motion` (it simply appears
instead of rolling), while the looping text is driven in JavaScript so the
message stays readable in any environment.

## Files

- [`notifier.css`](notifier.css): all styling and the slide animation.
- [`notifier.js`](notifier.js): injects the badge markup, reading its text from
  a `data-why` attribute so each page supplies only its own note.

## Usage

Task pages live two levels below the repo root
(`<group>/<task>/index.html`), so they reference this folder with `../../`.

In `<head>`:

```html
<link rel="stylesheet" href="../../notifier/notifier.css" />
```

Near the end of `<body>`:

```html
<script
  src="../../notifier/notifier.js"
  data-why="Reliable string-to-number conversion depends on type coercion and floating-point precision, the same care that prevents unreliable numeric assertions in test automation."
></script>
```

Optionally override the label (defaults to `why this practice matters`) with a
`data-label` attribute.
