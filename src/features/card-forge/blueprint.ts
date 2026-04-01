export interface ForgeRoadmapStep {
  phase: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface ForgeListSection {
  title: string;
  items: string[];
}

export const FORGE_ROADMAP: ForgeRoadmapStep[] = [
  {
    phase: "Phase 1",
    title: "Define the card contract",
    summary:
      "Lock the saved JSON shape first so future rendering, rerolls, exports, and balancing all use the same source of truth.",
    deliverables: [
      "Create card, visual, stats, and reroll-lock TypeScript interfaces",
      "Add one deterministic fixture card for UI and balancing work",
      "Keep generated card data separate from the live delivery-sim skater model",
    ],
  },
  {
    phase: "Phase 2",
    title: "Build a seeded generator",
    summary:
      "Generate names, stat spreads, traits, and visual picks from archetype, vibe, rarity, and accent inputs so cards are reproducible.",
    deliverables: [
      "Use weighted tables for archetypes, crews, visuals, and abilities",
      "Store the seed with each card so results can be reproduced or re-rendered later",
      "Reuse existing skater fiction as source material for names, crews, and district flavor",
    ],
  },
  {
    phase: "Phase 3",
    title: "Ship a preview-first forge UI",
    summary:
      "Start with a simple form, card preview, and reroll controls before building a full editor so the loop can be validated quickly.",
    deliverables: [
      "Form inputs for archetype, rarity, style vibe, and accent color",
      "Card preview built with HTML/CSS so it can later export to PNG",
      "Reroll buttons for all, visuals only, stats only, and name only",
    ],
  },
  {
    phase: "Phase 4",
    title: "Persist cards and connect them to the game",
    summary:
      "Once generation feels good, save cards into a collection and define how they become usable squad members, cosmetics, or deck-builder content.",
    deliverables: [
      "Add collection storage beside existing local save logic",
      "Save render config separately from gameplay balance values for easier tuning",
      "Create a promotion step from generated card to playable squad character when ready",
    ],
  },
];

export const FORGE_LIST_SECTIONS: ForgeListSection[] = [
  {
    title: "MVP inputs",
    items: ["Archetype", "Rarity", "Style vibe", "Accent color", "Generate card action"],
  },
  {
    title: "MVP outputs",
    items: [
      "Generated skater name",
      "Structured portrait parts",
      "Auto-rolled stats and rarity modifiers",
      "Passive trait, active ability, and flavor text",
      "Rendered preview card ready for export",
    ],
  },
  {
    title: "Integration points in this repo",
    items: [
      "src/game/content.ts for existing archetype tone, districts, and squad fiction",
      "src/game/storage.ts for local persistence patterns",
      "src/App.tsx for the first embedded forge screen before extracting feature components",
      "docs/card-creation-system.md for the long-form design source",
    ],
  },
];

export const FORGE_FILE_PLAN = [
  "src/features/card-forge/types.ts",
  "src/features/card-forge/generator/createCharacterCard.ts",
  "src/features/card-forge/generator/tables.ts",
  "src/features/card-forge/components/CardForgeForm.tsx",
  "src/features/card-forge/components/CharacterCardPreview.tsx",
  "src/features/card-forge/storage.ts",
];
