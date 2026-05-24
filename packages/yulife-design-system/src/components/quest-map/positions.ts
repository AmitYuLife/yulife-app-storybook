/**
 * Placemat positions for each episode pathway.
 *
 * Each episode pathway is a 256×478 frame (Figma "Pathway / Episode N").
 * Coordinates are disc centre (x, y) relative to the pathway frame origin.
 * Level 1 is the entry point (bottom), Level 7 is the exit (top, usually a Chest).
 *
 * Source: Figma "App — Game UI", node 3020:5412 (Pathways section)
 * https://www.figma.com/design/bpwO4qkwPcBErdjtIru9J4/App---Game-UI?node-id=3020-5412
 */

export interface PlacematPosition {
  x: number;
  y: number;
}

export interface EpisodeLayout {
  /** Pathway frame origin within the episode PNG, in logical px. */
  pathwayOffset: { x: number; y: number };
  /** 7 disc centre positions, ordered Level 1 (bottom) → Level 7 (top). */
  placemats: [
    PlacematPosition,
    PlacematPosition,
    PlacematPosition,
    PlacematPosition,
    PlacematPosition,
    PlacematPosition,
    PlacematPosition
  ];
}

// Pathway frame: 256×478, positioned at x≈60 within each 375-wide PNG.
// Y offset derived from (pngLogicalHeight − 478) / 2, fine-tuned to match
// where the baked-in pathway lines sit in each PNG.

const PX = 60;

export const EPISODE_LAYOUTS: Record<number, EpisodeLayout> = {
  // Episode 1 (Figma Pathway/Episode 0): centre-column entry pathway
  // PNG: 375×812 — pathwayOffset y = (812 − 478) / 2 ≈ 167
  1: {
    pathwayOffset: { x: PX, y: 167 },
    placemats: [
      { x: 124, y: 446 },
      { x: 124, y: 358 },
      { x: 28, y: 270 },
      { x: 124, y: 270 },
      { x: 220, y: 270 },
      { x: 124, y: 182 },
      { x: 124, y: 94 },
    ],
  },

  // Episode 2 (Figma Pathway/Episode 1): centre-column then 3-across fan-out
  // PNG: 375×676
  2: {
    pathwayOffset: { x: PX, y: 99 },
    placemats: [
      { x: 124, y: 446 },
      { x: 124, y: 358 },
      { x: 28, y: 270 },
      { x: 124, y: 270 },
      { x: 220, y: 270 },
      { x: 124, y: 182 },
      { x: 124, y: 94 },
    ],
  },

  // Episode 3 (Figma Pathway/Episode 2): centre-column with 3-across at rows 4-6
  // PNG: 375×676
  3: {
    pathwayOffset: { x: PX, y: 99 },
    placemats: [
      { x: 128, y: 446 },
      { x: 128, y: 358 },
      { x: 128, y: 270 },
      { x: 224, y: 182 },
      { x: 128, y: 182 },
      { x: 32, y: 182 },
      { x: 128, y: 94 },
    ],
  },

  // Episode 4 (Figma Pathway/Episode 3): bottom fan-out, 2 rows of pairs
  // PNG: 375×733
  4: {
    pathwayOffset: { x: PX, y: 128 },
    placemats: [
      { x: 128, y: 358 },
      { x: 224, y: 358 },
      { x: 32, y: 358 },
      { x: 32, y: 270 },
      { x: 224, y: 270 },
      { x: 128, y: 182 },
      { x: 128, y: 94 },
    ],
  },

  // Episode 5 (Figma Pathway/Episode 4): arc pattern with side offsets
  // PNG: 375×667
  5: {
    pathwayOffset: { x: PX, y: 95 },
    placemats: [
      { x: 129, y: 435 },
      { x: 224, y: 344 },
      { x: 224, y: 257 },
      { x: 129, y: 344 },
      { x: 31, y: 257 },
      { x: 129, y: 168 },
      { x: 129, y: 77 },
    ],
  },

  // Episode 6 (Figma Pathway/Episode 5): diamond shape
  // PNG: 375×746
  6: {
    pathwayOffset: { x: PX, y: 134 },
    placemats: [
      { x: 32, y: 446 },
      { x: 224, y: 446 },
      { x: 128, y: 358 },
      { x: 224, y: 270 },
      { x: 32, y: 270 },
      { x: 128, y: 182 },
      { x: 128, y: 94 },
    ],
  },

  // Episode 7 (Figma Pathway/Episode 6): bottom row then diamond fan
  // PNG: 375×557
  7: {
    pathwayOffset: { x: PX, y: 40 },
    placemats: [
      { x: 128, y: 444 },
      { x: 224, y: 358 },
      { x: 32, y: 358 },
      { x: 32, y: 270 },
      { x: 224, y: 270 },
      { x: 128, y: 182 },
      { x: 128, y: 94 },
    ],
  },

  // Episode 8 (Figma Pathway/Episode 7): circle / ring pattern
  // PNG: 375×676
  8: {
    pathwayOffset: { x: PX, y: 99 },
    placemats: [
      { x: 128, y: 446 },
      { x: 128, y: 358 },
      { x: 32, y: 358 },
      { x: 128, y: 270 },
      { x: 224, y: 358 },
      { x: 128, y: 182 },
      { x: 128, y: 94 },
    ],
  },
};
