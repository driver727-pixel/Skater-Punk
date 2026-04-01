import { createInitialState } from "./content";
import type { GameState } from "./types";

const STORAGE_KEY = "skater-punk-state-v1";

const ensureValidGameState = (raw: unknown): GameState => {
  const base = createInitialState();
  if (!raw || typeof raw !== "object") {
    return base;
  }
  const partial = raw as Partial<GameState>;
  const monetization =
    partial.monetization && typeof partial.monetization === "object"
      ? partial.monetization
      : base.monetization;
  return {
    credits: typeof partial.credits === "number" ? partial.credits : base.credits,
    premiumFuelCells: typeof partial.premiumFuelCells === "number" ? partial.premiumFuelCells : base.premiumFuelCells,
    lastTickAt: typeof partial.lastTickAt === "string" ? partial.lastTickAt : base.lastTickAt,
    monetization,
    // Array element shape is trusted from our own save logic; deeper per-element
    // validation can be added here if the schema becomes user-editable in future.
    skaters: Array.isArray(partial.skaters) ? partial.skaters : base.skaters,
    flashcards: Array.isArray(partial.flashcards) ? partial.flashcards : base.flashcards,
    routes: Array.isArray(partial.routes) ? partial.routes : base.routes,
    garageUpgrades: Array.isArray(partial.garageUpgrades) ? partial.garageUpgrades : base.garageUpgrades,
    districtCards: Array.isArray(partial.districtCards) ? partial.districtCards : base.districtCards,
    notifications: Array.isArray(partial.notifications) ? partial.notifications : base.notifications,
    createdCards: Array.isArray(partial.createdCards) ? partial.createdCards : base.createdCards,
  };
};

export const loadState = (): GameState => {
  if (typeof window === "undefined") {
    return createInitialState();
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createInitialState();
    }
    return ensureValidGameState(JSON.parse(raw));
  } catch {
    return createInitialState();
  }
};

export const saveState = (state: GameState): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};
