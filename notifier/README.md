# notifier

A small, reusable "why this practice matters" widget shared across the task
pages in this repo. It is **not** a practice task itself, just shared UI.

It renders a `?` badge fixed in the top-right corner of a page, styled as a
tape-measure case. On load the "tape" (a teal ribbon with a short note on why
that task's concept matters) extends out of the circle to the left, holds for
about 7 seconds, then recoils back into the case. Hovering or focusing the
badge draws the tape out again. The reveal is driven by `clip-path`, so the
ribbon appears to unroll from the circle rather than slide in, with a smooth
pull-out and a snappier recoil. The teal gradient matches the repo's task
index, and a `prefers-reduced-motion` fallback keeps the tape retracted
(revealed on hover) for users who opt out of animation.

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
