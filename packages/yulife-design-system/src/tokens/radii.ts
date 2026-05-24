/**
 * Border radius tokens
 *
 * Sourced from the YuLife App Storybook — Variables collection.
 * Figma: https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?vars=1&var-set-id=10757-1089
 *
 * Use these tokens for all borderRadius values in components.
 * Never hardcode raw pixel values.
 */

export const radii = {
  /** 0px — no rounding */
  none: 0,
  /** 2px — hairline rounding for small decorative elements */
  xs: 2,
  /** 4px — subtle rounding for tags, badges, code snippets */
  sm: 4,
  /** 8px — standard component radius (cards, inputs, chips) */
  md: 8,
  /** 12px — larger component radius (icon containers, modals) */
  lg: 12,
  /** 16px — prominent rounding (sheets, elevated surfaces) */
  xl: 16,
  /** 24px — heavy rounding (large cards, onboarding panels) */
  "2xl": 24,
  /** 9999px — pill / fully rounded (buttons, tags, toggles) */
  pill: 9999,
} as const;

export type RadiusKey = keyof typeof radii;
