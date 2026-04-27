# Angel Gomez — Portfolio

Personal portfolio built with HTML, CSS, and vanilla JavaScript. Features responsive design, CSS variables, animations, and basic DOM interactivity.

---

## File Structure

```
portfolio/
├── index.html       # Main page
├── mascotas.html    # Pet gallery page
├── style.css        # Main stylesheet
├── style.min.css    # Minified CSS (no spaces or comments)
├── script.js        # JavaScript interactivity
└── README.md        # This file
```

---

## How to Run

1. Download or clone all files into one folder.
2. Open `index.html` in any browser.
3. No server or installation needed.

---

## Features

- **Welcome toast** — appears on load and disappears after 3 seconds.
- **Change message button** — cycles through phrases dynamically in the About section.
- **Show/hide form** — toggle button reveals or hides the contact form.
- **Pet gallery** — separate page with 6 cards showing images and descriptions.

---

## Responsive Design

| Screen       | Projects   | Pet Gallery |
|--------------|------------|-------------|
| Desktop      | 3 columns  | 3 columns   |
| Tablet ≤768px| 2 columns  | 3 columns   |
| Mobile ≤480px| 1 column   | 2 columns   |

The navigation menu stacks vertically on mobile screens.

---

## CSS Highlights

- Global variables in `:root` for colors and border radius.
- Grouped rules — `.card` is reused for both projects and pet gallery.
- All images use `max-width: 100%` and `height: auto`.
- Font sizes use `rem` and `clamp()` for better scaling.
- `style.min.css` is the production-ready minified version.

---

## Technologies

- HTML5
- CSS3 — Flexbox, Grid, Variables, Media Queries
- JavaScript ES6 — DOM manipulation, events, classList

---

## Author

**Angel Gomez** — Systems Engineering Student · Coder at Riwi
