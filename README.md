# Naija to UK

**Your guide to starting life in the UK.**

A single-page, responsive website concept for a resource that helps Nigerians settle into the UK — accommodation, transport, SIM cards, cost of living, community and everyday life, all in one place.

Built with plain HTML, CSS and JavaScript — no frameworks, no build step.

## Preview

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
naija-to-uk/
├── index.html   # markup and content
├── style.css    # design system + responsive layout
├── script.js    # mobile nav toggle, waitlist form handling, footer year
└── README.md
```

## Notes

- The waitlist form validates the email on the front end and shows a
  confirmation message. There is no backend yet — wire the `fetch`/submit
  logic in `script.js` up to your email service or API of choice when
  you're ready to collect real signups.
- Built to be accessible: semantic landmarks, a skip link, visible focus
  states, and `prefers-reduced-motion` support.
- Fully responsive from mobile up to desktop.

## License

Feel free to use and adapt this for your own project.
