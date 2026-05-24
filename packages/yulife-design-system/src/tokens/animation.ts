/**
 * Animation tokens
 *
 * Duration and easing values used across all animated components.
 * These are sourced from the ModalTemplate enter/exit transitions and
 * extended to cover all interactive motion in the system.
 *
 * Usage:
 *   import { duration, easing } from "@/tokens/animation";
 *
 *   transition: `transform ${duration.slow}ms ${easing.enter}`
 */

// ─── Duration ─────────────────────────────────────────────────────────────────

export const duration = {
  /** 80 ms — micro-interactions: button press, toggle flip */
  fast: 80,
  /** 175 ms — exit transitions: panel slides away, element leaves */
  exit: 175,
  /** 200 ms — overlay fade-in, short state changes */
  normal: 200,
  /** 350 ms — primary enter transitions: panel slides in, sheet rises */
  slow: 350,
} as const;

export type DurationKey = keyof typeof duration;

// ─── Easing ───────────────────────────────────────────────────────────────────

export const easing = {
  /**
   * Fast-start deceleration for entering elements.
   * The element immediately covers most of its travel distance then settles,
   * making enter feel snappy and quick despite a longer duration.
   * Used by ModalTemplate panel slide-in and toast enter.
   */
  enter: "cubic-bezier(0.32, 0.72, 0, 1)",
  /**
   * Acceleration curve for exiting elements.
   * The element starts slowly and picks up speed, making the exit feel
   * deliberate — it lingers just long enough to register before leaving.
   * Used by ModalTemplate panel slide-out and toast exit.
   */
  exit: "ease-in",
  /** General-purpose easing for state changes and fades. */
  default: "ease",
  /**
   * Deceleration for spring-back / release animations.
   * Used when a dragged element snaps back to its resting position.
   */
  spring: "ease-out",
} as const;

export type EasingKey = keyof typeof easing;
