/**
 * Insurance Product Assets
 *
 * Hero background photographs and partner logo SVGs used by the
 * `HeroProductDetails` component and its stories.
 *
 * Logos are exported as SVGR React components (use `?react` import) so they
 * can be sized and coloured via props. The background photo is a URL string.
 */

// ─── Background photos ───────────────────────────────────────────────────────

import heroBackground from "./hero-background.png";

export { heroBackground };

/**
 * All available hero background photographs, keyed by a human-readable label.
 * Use in Storybook controls: `options: Object.keys(heroBackgrounds)` +
 * `mapping: heroBackgrounds` — mirrors the `gameBackgrounds` pattern.
 */
export const heroBackgrounds = {
  "Family — Indoor": heroBackground,
} as const;

export type HeroBackgroundKey = keyof typeof heroBackgrounds;

/** Default hero background — used when no explicit photo is supplied. */
export const defaultHeroBackground = heroBackgrounds["Family — Indoor"];

// ─── Partner logos ────────────────────────────────────────────────────────────

export { default as CoveaLogo } from "./covea-logo.svg?react";
export { default as BupaLogo } from "./bupa-logo.svg?react";
export { default as BupaPipeSeparator } from "./pipe-separator.svg?react";
