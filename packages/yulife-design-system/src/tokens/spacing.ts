/**
 * Spacing tokens — 8-point grid from Figma Brand Foundations.
 * Used by canon components imported from design-system.
 */

export const spacing = {
  0: 0,
  px: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

export type SpacingKey = keyof typeof spacing;

/** Named semantic spacing aliases — prefer over raw numbers in component code. */
export const space = {
  componentPaddingXS: spacing[2],
  componentPaddingSM: spacing[3],
  componentPaddingMD: spacing[4],
  componentPaddingLG: spacing[6],
  pagePaddingHorizontal: spacing[4],
  pagePaddingVertical: spacing[6],
  stackXS: spacing[1],
  stackSM: spacing[2],
  stackMD: spacing[4],
  stackLG: spacing[6],
  stackXL: spacing[8],
  inlineXS: spacing[1],
  inlineSM: spacing[2],
  inlineMD: spacing[4],
} as const;

/** @deprecated Legacy pixel-indexed spacing — use `spacing` grid or `space` aliases. */
export const pixelSpacing = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  80: 80,
  96: 96,
} as const;

export type SpacingValue = keyof typeof pixelSpacing;

/** @deprecated Prefer `radii` from `./radii`. Kept for legacy component compatibility. */
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const;

export type BorderRadiusValue = keyof typeof borderRadius;
