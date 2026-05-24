/**
 * Elevation tokens
 *
 * Box-shadow values that communicate surface height and z-layering.
 * Each level uses `palette.transBlack8` (black at 8% opacity) as the
 * shadow colour, consistent with the Figma elevation system.
 *
 * Usage:
 *   import { elevation } from "@/tokens/elevation";
 *
 *   boxShadow: elevation.toast
 */

import { palette } from "./colors";

export const elevation = {
  /** No shadow — flat surface at resting z-level. */
  none: "none",
  /**
   * Toast / floating surface — hard 8 px offset shadow.
   * Used by InlineBanner in `mode="toast"` to lift the panel above page content.
   * Figma: App — Core UI, node 11048:4475
   * https://www.figma.com/design/aNnODOQlMlk38LrQVs63oq/App---Core-UI?node-id=11048-4475
   */
  toast: `8px 8px 0px 0px ${palette.transBlack8}`,
  /**
   * Popover / tooltip surface — hard 4 px downward shadow.
   * Used by Popover to lift the bubble above surrounding content.
   * Figma: YuLife App Storybook, node 9314:19961
   * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9314-19961
   */
  popover: `0px 4px 0px 0px ${palette.transBlack8}`,
  /**
   * Popover shadow as a `filter: drop-shadow(...)` value.
   *
   * The Popover draws its silhouette (rounded card + directional beak) as a
   * single SVG path; `box-shadow` would only follow the bounding rectangle,
   * so we apply this filter on the wrapper instead so the shadow tracks the
   * real outline including the beak. `drop-shadow` does not accept a spread
   * argument, so this is the same shadow as `popover` minus the 0 spread.
   */
  popoverFilter: `drop-shadow(0 4px 0 ${palette.transBlack8})`,
} as const;

export type ElevationKey = keyof typeof elevation;
