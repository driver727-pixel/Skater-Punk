# Character Card Creator Path

This repo now has a visible in-app entry point for the future Character card creator under the `forge` tab.

## What was added

- `src/features/card-forge/CardForgeRoadmap.tsx` as the first dedicated feature surface
- `src/features/card-forge/blueprint.ts` for roadmap data and planned file structure
- `forge` added to the existing screen model so the feature has a stable navigation path
- a preview-style UI scaffold in the app to show where the future creator will live

## Recommended implementation order

### 1. Create card-specific types

Add:

- `src/features/card-forge/types.ts`

Start with:

- `CharacterCard`
- `CharacterCardVisual`
- `CharacterCardStats`
- `CharacterCardAbilitySet`
- `CharacterCardLocks`
- `CharacterCardInput`

Keep these separate from the current `Skater` type. `Skater` represents a live simulation actor, while `CharacterCard` should represent generated collectible content that can later be promoted into gameplay.

### 2. Build a deterministic generator

Add:

- `src/features/card-forge/generator/tables.ts`
- `src/features/card-forge/generator/createCharacterCard.ts`

The generator should accept:

- archetype
- rarity
- style vibe
- accent color
- seed

The output should include:

- generated identity data
- visual part selections
- stats
- passive trait
- active ability
- flavor text
- render config

Keep the seed on the saved card so rerenders and rerolls are reproducible.

### 3. Replace the roadmap preview with interactive controls

Add:

- `src/features/card-forge/components/CardForgeForm.tsx`
- `src/features/card-forge/components/CharacterCardPreview.tsx`

Suggested first controls:

- archetype dropdown
- rarity dropdown
- style vibe dropdown
- accent color picker
- generate button
- reroll buttons for all, visuals, stats, and name

Start with HTML/CSS rendering for the preview because that matches the current stack and gives a straightforward path to PNG export later.

### 4. Add local persistence

Add:

- `src/features/card-forge/storage.ts`

Mirror the existing save/load approach from `src/game/storage.ts`, but store forge cards separately from the live route simulation state. That keeps balancing and collection work independent from the delivery loop.

### 5. Decide how cards connect to the game

Before merging the card creator into the live squad flow, pick one of these integration models:

- collectible-only cards for lore and deck building
- generated cards that can be promoted into playable skaters
- cosmetic identity overlays applied to existing skaters

This decision affects the data model, persistence, and whether generated cards need to map directly onto simulation stats.

## Repo-specific integration notes

- `src/App.tsx` already contains the first feature mount point
- `src/game/content.ts` is a useful source for names, crews, district flavor, and archetype tone
- `src/game/storage.ts` is the pattern to follow for local persistence
- `docs/card-creation-system.md` remains the long-form product/design source

## Next practical implementation step

The best next code change is to add `src/features/card-forge/types.ts` plus a deterministic fixture card and render that fixture inside `CharacterCardPreview`. That will lock the card contract before randomness and reroll behavior are introduced.
