/**
 * Health & Wellbeing Service Assets
 *
 * Photographic thumbnails used by health-tools and wellbeing service tiles.
 * All images are raster PNGs — import as URL strings and pass to `TileImage`
 * via the `imageSrc` prop with `imageOverlay` enabled.
 */

import phio from "./Phio.png";
import betterhelp from "./Betterhelp.png";
import skinVision from "./SkinVision.png";

export { phio, betterhelp, skinVision };

export const serviceImages = {
  Phio: phio,
  Betterhelp: betterhelp,
  SkinVision: skinVision,
} as const;

export type ServiceImageKey = keyof typeof serviceImages;
