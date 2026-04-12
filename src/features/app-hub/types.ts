/** Metadata for a hosted game or app inside the Skater-Punk platform. */
export interface PlatformApp {
  /** Stable machine identifier used in navigation and storage. */
  id: string;
  /** Display name shown in the hub grid. */
  name: string;
  /** Optional external domain where the app is also available. */
  domain?: string;
  /** Short tagline shown below the name. */
  tagline: string;
  /** Longer description for the hub detail area. */
  description: string;
  /** Accent color used for the hub tile border and branding. */
  accentColor: string;
  /** The Screen value that mounts this app inside the shell. */
  screen: string;
  /** Optional list of feature chips displayed on the hub tile. */
  features?: string[];
  /** Whether the app is playable today or still in development. */
  status: "live" | "coming-soon";
}
