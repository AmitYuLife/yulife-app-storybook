import React, { useId } from "react";
import { palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { radii } from "../../tokens/radii";

// ─── Dimensions ────────────────────────────────────────────────────────────────
// Source: Figma "App — Game UI", node 304:16951 / 304:16969 / 1216:20928

/** Badge frame in px — matches Figma 64×72 */
const BADGE_WIDTH = 64;
const BADGE_HEIGHT = 72;

/**
 * The ellipse body is a circle clipped at the bottom with a concave bridge.
 * viewBox height is derived from the Figma path's bounding box.
 */
const BODY_SVG_H = 53.874;

/**
 * The pill label occupies the bottom 25% of the badge frame.
 * Left/right inset keeps it narrower than the ellipse (matches Figma 14.06%).
 */
const PILL_HEIGHT_PCT = 25;
const PILL_INSET_PCT = 14.06;

/**
 * Bubble circle sits in the top-right corner of the frame.
 * In Figma: `inset-[0_0_69.44%_65.63%]` on a 64×72px container
 * → 22×22 px circle at (42, 0).
 */
const BUBBLE_SIZE = 22;
const BUBBLE_GAP = 2; // px gap between bubble edge and ellipse cutout

/** Bubble center & subtract-mask radius in SVG coordinate space (viewBox 0 0 64 53.874) */
const BUBBLE_CX = BADGE_WIDTH - BUBBLE_SIZE / 2; // 53
const BUBBLE_CY = BUBBLE_SIZE / 2; // 11
const BUBBLE_R = BUBBLE_SIZE / 2; // 11
const MASK_R = BUBBLE_R + BUBBLE_GAP; // 13

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface BadgeProps {
  /**
   * Colour icon rendered inside the ellipse body.
   * Pass a ColourIcon component at `size={24}`, e.g. `<SurgeColourIcon size={24} />`.
   */
  icon: React.ReactNode;
  /**
   * Text rendered in the pill label at the bottom of the badge.
   * Examples: "43m", "1/5", "Done".
   */
  label: string;
  /**
   * Background colour applied to both the ellipse body and the pill.
   * Use palette tokens, e.g. `palette.purple600` for Surge or `palette.pink600` for Streak/Quest.
   * Pass a lighter shade (e.g. `palette.pink300`) for the disabled/done state.
   */
  color: string;
  /**
   * Optional text shown in a small bubble at the top-right corner of the badge.
   * The ellipse body has a concave cutout subtracted where the bubble sits.
   * Examples: "8x", "1".
   */
  bubble?: string | number;
  /** Accessible label forwarded to the root element. */
  accessibilityLabel?: string;
}

// ─── Badge ─────────────────────────────────────────────────────────────────────

/**
 * Badge
 *
 * A 64×72 px floating icon badge used for Surge, Streak, and Quest indicators.
 * It combines:
 *   - An SVG ellipse body (circle clipped at the bottom) whose fill colour is
 *     controlled by the `color` prop.
 *   - A centred colour icon slot.
 *   - A pill-shaped label at the bottom.
 *   - An optional small bubble at the top-right, whose position is subtracted
 *     from the ellipse body via an SVG `<mask>`, producing a concave cutout.
 *
 * Figma reference: App — Game UI, "Floating icon" section, node 3990:12581
 * https://www.figma.com/design/bpwO4qkwPcBErdjtIru9J4/App---Game-UI?node-id=3990-12581
 */
export const Badge: React.FC<BadgeProps> = ({ icon, label, color, bubble, accessibilityLabel }) => {
  // Unique ID for the SVG <mask> element — prevents collisions when multiple
  // Badge instances appear on the same page.
  const maskId = useId();
  const hasBubble = bubble !== undefined && bubble !== null && bubble !== "";

  return (
    <div
      style={{
        position: "relative",
        width: BADGE_WIDTH,
        height: BADGE_HEIGHT,
        userSelect: "none",
        flexShrink: 0,
      }}
      role="img"
      aria-label={accessibilityLabel}
    >
      {/*
       * ── Ellipse body ──────────────────────────────────────────────────────
       *
       * SVG path traces a circle clipped at the bottom with a concave bridge
       * where the pill tabs join. When a bubble is present a <mask> subtracts
       * a circular region at the top-right so the bubble appears to "float"
       * above the ellipse with a visible gap.
       */}
      <svg
        viewBox={`0 0 ${BADGE_WIDTH} ${BODY_SVG_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${100 - PILL_HEIGHT_PCT}%`,
        }}
        aria-hidden={true}
      >
        <defs>
          <mask id={maskId}>
            {/* Show everything by default */}
            <rect width={BADGE_WIDTH} height={BODY_SVG_H} fill="white" />
            {/* Subtract the bubble area when the bubble is active */}
            {hasBubble && <circle cx={BUBBLE_CX} cy={BUBBLE_CY} r={MASK_R} fill="black" />}
          </mask>
        </defs>
        {/*
         * Path from Figma node 304:16954 "Subtract" — a circle (r=32, c=32,32)
         * clipped to a flat bottom with a concave bridge between the two pill tabs.
         * viewBox="0 0 64 53.874"
         */}
        <path
          d="M32 0C49.6731 0 64 14.3269 64 32C64 40.4602 60.7152 48.152 55.3535 53.874C54.2601 52.7207 52.7147 52 51 52H13C11.285 52 9.73898 52.7204 8.64551 53.874C3.2841 48.1521 0 40.46 0 32C0 14.3269 14.3269 0 32 0Z"
          fill={color}
          mask={`url(#${maskId})`}
        />
      </svg>

      {/*
       * ── Colour icon ───────────────────────────────────────────────────────
       *
       * Centred in the ellipse, at `inset-[22.22%_28.13%_38.89%_28.13%]`
       * on a 64×72 frame → 28×28 px area at (18, 16).
       * overflow:hidden clips icons that bleed outside the area (e.g. Surge).
       */}
      <div
        style={{
          position: "absolute",
          top: "22.22%",
          left: "28.13%",
          right: "28.13%",
          bottom: "38.89%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        aria-hidden={true}
      >
        {icon}
      </div>

      {/*
       * ── Pill label ────────────────────────────────────────────────────────
       *
       * Occupies the bottom 25% of the badge. Inset 14.06% left/right so it
       * is narrower than the ellipse, matching the Figma "Timer" element.
       */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: `${PILL_INSET_PCT}%`,
          right: `${PILL_INSET_PCT}%`,
          height: `${PILL_HEIGHT_PCT}%`,
          backgroundColor: color,
          borderRadius: radii.sm,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-hidden={true}
      >
        <span
          style={{
            ...textStyles.label1Bold,
            lineHeight: `${textStyles.label1Bold.lineHeight}px`,
            letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
            color: palette.neutralWhite,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>

      {/*
       * ── Bubble ────────────────────────────────────────────────────────────
       *
       * 22×22 px circle at the top-right of the badge frame. The ellipse body
       * SVG mask subtracts a matching area so the bubble floats with a 2 px gap.
       */}
      {hasBubble && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: BUBBLE_SIZE,
            height: BUBBLE_SIZE,
            borderRadius: radii.pill,
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden={true}
        >
          <span
            style={{
              ...textStyles.label2Bold,
              lineHeight: `${textStyles.label2Bold.lineHeight}px`,
              letterSpacing: `${textStyles.label2Bold.letterSpacing}px`,
              color: palette.neutralWhite,
              whiteSpace: "nowrap",
            }}
          >
            {bubble}
          </span>
        </div>
      )}
    </div>
  );
};

export default Badge;
