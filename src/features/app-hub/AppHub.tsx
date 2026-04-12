import { PLATFORM_APPS } from "./registry";
import type { PlatformApp } from "./types";

interface AppHubProps {
  onLaunchApp: (screen: string) => void;
}

function AppTile({
  app,
  onLaunch,
}: {
  app: PlatformApp;
  onLaunch: () => void;
}) {
  return (
    <article
      className="panel app-tile"
      style={{ borderColor: app.accentColor }}
    >
      <div className="app-tile-header">
        <div>
          <h3>{app.name}</h3>
          {app.domain && (
            <p className="muted app-tile-domain">{app.domain}</p>
          )}
        </div>
        <span
          className={`badge ${app.status === "live" ? "badge-live" : "badge-soon"}`}
        >
          {app.status === "live" ? "Live" : "Coming soon"}
        </span>
      </div>

      <p className="app-tile-tagline">{app.tagline}</p>
      <p className="muted">{app.description}</p>

      {app.features && app.features.length > 0 && (
        <div className="chip-row">
          {app.features.map((feature) => (
            <span key={feature} className="chip">
              {feature}
            </span>
          ))}
        </div>
      )}

      <div className="route-actions">
        <button
          disabled={app.status !== "live"}
          onClick={onLaunch}
          style={
            app.status === "live"
              ? { backgroundColor: app.accentColor, color: "#0a0e17" }
              : undefined
          }
        >
          {app.status === "live" ? `Launch ${app.name}` : "In development"}
        </button>
      </div>
    </article>
  );
}

export function AppHub({ onLaunchApp }: AppHubProps) {
  return (
    <>
      <div className="section-heading">
        <h2>Games &amp; Apps</h2>
        <p>
          Skater-Punk is a platform for cyberpunk skateboard games and tools.
          Launch an app below to get started.
        </p>
      </div>

      <div className="app-hub-grid">
        {PLATFORM_APPS.map((app) => (
          <AppTile
            key={app.id}
            app={app}
            onLaunch={() => onLaunchApp(app.screen)}
          />
        ))}
      </div>

      <article className="panel integration-panel">
        <div className="section-heading">
          <h2>Platform roadmap</h2>
          <p>
            More games and tools are in development. Each app shares the
            Skater-Punk universe, card system, and data contracts.
          </p>
        </div>
        <ul className="economy-list">
          <li>
            <strong>Punchskater</strong> — card creation tool for building
            cyberpunk courier decks. <em>Live now.</em>
          </li>
          <li>
            <strong>Courier dispatch</strong> — automated route simulation with
            real-time progression and rewarded ad boosts.{" "}
            <em>Available in the map, cards, and garage tabs.</em>
          </li>
          <li>
            <strong>More coming</strong> — future apps will plug into this hub
            as they ship.
          </li>
        </ul>
      </article>
    </>
  );
}
