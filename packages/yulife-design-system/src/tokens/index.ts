export { Colours } from "./colours";
export type { ColoursType } from "./colours";
export { palette, colors } from "./colors";
export type { PaletteKey, SemanticKey } from "./colors";
export {
  textStyles,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  FONT_FAMILY_PRIMARY,
  FONT_FAMILY_PRIMARY_BOLD,
  FONT_FAMILY_SECONDARY,
} from "./typography";
export type { TemplateTextType, TextStyleDefinition } from "./typography";
// Legacy shims — intentionally re-exported for component compatibility during migration.

export { spacing, space, pixelSpacing, borderRadius } from "./spacing";
export type { SpacingKey, SpacingValue, BorderRadiusValue } from "./spacing";
export { radii } from "./radii";
export type { RadiusKey } from "./radii";
export { elevation } from "./elevation";
export type { ElevationKey } from "./elevation";
export { duration, easing } from "./animation";
export type { DurationKey, EasingKey } from "./animation";
