import type { PlatformApp } from "./types";

/**
 * Central catalog of every game and app hosted on the Skater-Punk platform.
 *
 * Add new entries here as more projects are integrated.
 * The hub UI reads this list to render the app grid.
 */
export const PLATFORM_APPS: readonly PlatformApp[] = [
  {
    id: "punchskater",
    name: "Punchskater",
    domain: "punchskater.com",
    tagline: "Cyberpunk courier card forge",
    description:
      "Generate collectible electric-skateboard courier cards, assemble decks, and export structured JSON for future game projects. Built on deterministic TypeScript generation and procedural SVG art.",
    accentColor: "#19f2ff",
    screen: "forge",
    features: [
      "Card generation",
      "Deck builder",
      "JSON export",
      "Procedural SVG art",
      "Reroll controls",
    ],
    status: "live",
  },
];

/** Look up an app by its id. */
export const getAppById = (id: string): PlatformApp | undefined =>
  PLATFORM_APPS.find((app) => app.id === id);

/** Look up an app by its associated screen value. */
export const getAppByScreen = (screen: string): PlatformApp | undefined =>
  PLATFORM_APPS.find((app) => app.screen === screen);
