# Vantage Lite — a freelancer's landing page in plain HTML

A free, cut-down version of the **Vantage** template: a one-page site for
someone who sells paid advertising. Three languages, dark and light, and two
client results drawn as real charts — from six numbers each, with no charting
library anywhere in the repository.

No framework, no build step, no npm — and **no external requests at all**: no
webfont, no icon library, no analytics, no tracking pixel.

Open `index.html`. That is the whole setup.

**Live:** https://anatolii198.github.io/vantage-lite/

---

## What is interesting in here

### A line chart from six numbers

Each case in `js/offer.js` is one array:

```js
{ id: 'home', key: 'case.home', unit: 'x', lower: false,
  series: [1.9, 2.1, 2.6, 3.2, 3.9, 4.3] }
```

`js/main.js` turns that into the grid, the area, the line, the dots, the axis
and a tooltip — about forty lines of SVG written as a string. Nothing is
fetched and nothing is bundled, so the chart cannot break because a CDN
changed a major version.

`unit` decides how a value is written: `'x'` → `4.3×`, `'money'` → `PLN 96`,
`'n'` → `74`. `lower: true` means smaller is better, so a falling line is
labelled **down 69%** instead of pretending every fall is a loss.

### One series per chart, so no legend

A legend exists to tell lines apart. With one line the card's own heading
already says what the number is, so the page spends that space on the number
instead. The hover tooltip gives the exact value for a month; on a phone the
hit area is a full-height column, not the 3px dot.

### The accent colour is fill-only

The brand colour is acid lime. It works as a button fill with dark text on
top, and it is invisible as a 2px line on white — so the chart does not use
it. There is a second token, `--series`, which is the lime in dark mode and a
deep green in light mode. One colour, two jobs, named separately.

### Prices format themselves

A price is a plain number — `4500`. The language decides how it is written:

| language | shown as |
|---|---|
| English | PLN 4,500 |
| Polish | 4500 zł |
| Ukrainian | 4500 PLN |

That is `Intl.NumberFormat` with one currency code in `js/config.js`. Change
`currency: 'PLN'` to `'EUR'` and the whole page follows. No string
concatenation, no hard-coded symbols.

### Platforms are text, never logos

The row under the hero says *Meta Ads · Google Ads · TikTok Ads*. Those marks
are trademarks, and a template that ships their logos hands its buyer a
problem. Plain text costs nothing and is honest.

### Two themes, three languages, no libraries

Dark is this page's own look, so the dark values sit on `:root` and light
redefines the same names. The page follows the system setting first and a
manual toggle after, and remembers the choice. Each language is its own block
in `js/i18n.js`, so adding a fourth is copying one block — the file says
exactly what else to change.

### The photograph slot cannot go blank

The portrait is a `background-image` layered over a CSS gradient. Delete the
file and the panel keeps its drawn placeholder instead of showing a broken
frame.

---

## Files

```
index.html        the page
css/style.css     one commented stylesheet
js/config.js      name, contacts, currency, the three hero figures
js/offer.js       services, results, the four steps
js/i18n.js        every word, three languages
js/main.js        behaviour, and the chart
img/              one portrait (Unsplash placeholder)
```

---

## Lite and full

This repository is the showcase. The paid template adds the part a freelancer
actually gets clients with:

| | Lite (here) | Vantage |
|---|---|---|
| One page, 3 languages, dark mode | ✅ | ✅ |
| Case charts drawn from data | 2 cases | 3 cases |
| Services as a price list | 3 | 5 |
| Pricing packages | — | 3 tiers |
| FAQ | — | 6 questions |
| **Booking window for a consultation** | — | ✅ |
| **A form that really sends** | — | ✅ |
| README with a setup walkthrough | — | ✅ |

The booking window is the reason the full version exists. It offers **only the
times that still fit your working day** — a 30-minute call cannot start ten
minutes before you stop — skips the next few hours so nobody books you for
right now, collects the budget range and the site, and then **posts the
request to your inbox**. One line in `js/config.js`:

```js
form: { endpoint: 'https://formspree.io/f/xxxxxxxx' }
```

Leave it empty and the window says plainly that nothing was sent, instead of
showing a thank-you that means nothing. Formspree, Basin, Getform,
Web3Forms, a Google Apps Script or your own endpoint all work — it is one
POST of JSON.

**Live demo of the full version:**
https://vantage-marketer-template.netlify.app

Full version — $29: Payhip · Gumroad · Codester *(links added when it goes
live)*

---

## Licence

Code in this repository: MIT, see `LICENSE`. Use it, learn from it, build on
it.

The photograph comes from Unsplash under the Unsplash License and is not
covered by the MIT licence; it is not mine to relicense, and the person in it
has signed no model release — replace it with your own before launch. The
specialist, his clients and every number on the page are invented.
