# Skater-Punk
Grand Vision  Web/Android based. I am building an 80s/90s cyberpunk delivery game. I have characters on electric skateboards. Where the user builds up to a squad of 6 skateboarders who go on automated routes chosen by the user. The routes run in real time in the background. The game is map, flash card, and garage based.

## Card Forge prototype

A working static prototype now lives at the repo root:

- `index.html`
- `styles.css`
- `app.js`

### Run locally

From the repository root, start a simple web server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

### What it does

- generates a seeded Electric Skateboarder card from form inputs
- renders a 2D SVG card preview
- supports rerolling all, name, visuals, or stats
- supports lock toggles for identity, visuals, and stats
- saves cards into a local browser collection with `localStorage`
- exports the current card preview as a PNG

## Design docs

- [Electric Skateboarder Card Creation System](docs/card-creation-system.md)
