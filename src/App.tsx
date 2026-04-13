const punchskaterUrl = import.meta.env.VITE_DECK_BUILDER_URL || "https://punchskater.com";

function App() {
  return (
    <main className="app-shell placeholder-shell">
      <section className="panel placeholder-card">
        <div className="stack">
          <p className="eyebrow">Sk8rpunk.com</p>
          <h1>Skater-Punk is parked here for now.</h1>
          <p className="muted">
            This site is currently a simple placeholder while the broader Skater-Punk hub is on
            hold. For the live experience right now, head to Punchskater.
          </p>
        </div>

        <div className="placeholder-actions">
          <a className="app-tile-link-button placeholder-link" href={punchskaterUrl}>
            Open Punchskater
          </a>
          <span className="badge outline-badge">Placeholder site</span>
        </div>
      </section>
    </main>
  );
}

export default App;
