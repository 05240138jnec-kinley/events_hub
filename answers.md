# Events Hub — Answers

## Practical III

**Q1.** If the footer colour is changed in `styles.css`, all five pages update, because every page links the same external stylesheet — one edit cascades everywhere. If the colour had only been set with an inline `style` attribute on `index.html`, only that single element on that one page would change; the other four pages (and any other element on that page) would be unaffected, since inline styles are not shared or reusable.

**Q2.** `#welcome` is more specific than `h1`. An ID selector has a higher specificity weight than an element selector, so if both rules set `color` on the same element, the `#welcome` rule wins regardless of the order the rules appear in — e.g. `h1 { color: red; } #welcome h1 { color: blue; }` renders the heading blue.

**Q3.** `#0369a1` converts to approximately `rgb(3, 105, 161)`. Designers often prefer hex in stylesheets because it is more compact (one 6/7-character token instead of three comma-separated numbers), copy-pastes cleanly from design tools, and is the format most colour pickers and brand style guides use by default.

**Q4.** `display: none` removes the element from the page entirely — it takes up no space, so surrounding content shifts up/left to fill the gap. `visibility: hidden` makes the element invisible but keeps its box in the layout, so a blank gap is left exactly where it used to be.

**Q5.** In the wireframe, event cards appear **1 per row (stacked)** at phone width, and **3 across in one row** at desktop width — matching the `col-12` (phone, full width) vs `col-md-4` (desktop, three columns of 4/12) Bootstrap grid behaviour.

**Q6.** `styles.css` must be linked *after* Bootstrap's CSS so that, when both stylesheets set the same property on the same selector with equal specificity, the *last* rule in the cascade wins — allowing custom rules to override Bootstrap's defaults. If the order were reversed and both set `h1` colour, Bootstrap's rule would load last and override the custom colour, so the heading would show Bootstrap's default colour instead of the intended brand colour.
