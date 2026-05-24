import React, { useState } from "react";
import { palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Drop-shadow height in px — the amount the tile travels on press. */
const SHADOW_DEPTH = 4;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TileProps {
  /**
   * Colour icon rendered above the label. Pass a ColourIcon component at
   * `size={24}` (e.g. `<CoverDetailsColourIcon size={24} />`).
   */
  colourIcon: React.ReactNode;
  /**
   * Label text rendered below the icon in Body 2 Bold.
   * Clamped to two lines with overflow ellipsis.
   */
  label: string;
  /**
   * Called when the tile is pressed.
   */
  onClick?: () => void;
  /**
   * Accessible label — forwarded to the underlying `<button>`.
   * Defaults to the visible `label` when omitted.
   */
  "aria-label"?: string;
  /**
   * Inline style overrides for the root element. `transform` values are
   * composed with the press animation rather than overwriting it. When used
   * inside `TileGroup` this is used to apply `flex: "1 0 0"`.
   */
  style?: React.CSSProperties;
}

// ─── Tile ─────────────────────────────────────────────────────────────────────

/**
 * Tile
 *
 * A tappable icon + label tile with a white card chassis, border, and
 * drop-shadow. Animates on press identically to the `Button` component —
 * the tile travels down by 4 px while the drop-shadow collapses, giving a
 * natural tactile feel.
 *
 * Designed to be used individually or composed inside a `TileGroup` for a
 * horizontally-equal row of navigation shortcuts.
 *
 * The `colourIcon` slot accepts any 24 × 24 ColourIcon component.
 * The `label` is rendered in Body 2 Bold, clamped to two lines.
 *
 * Figma reference: YuLife App Storybook → Tile → node 10888:1463
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10888-1463
 */
export const Tile: React.FC<TileProps> = ({
  colourIcon,
  label,
  onClick,
  "aria-label": ariaLabel,
  style: styleProp,
}) => {
  const [pressed, setPressed] = useState(false);

  // Compose any external transform with the press translateY, matching the
  // same pattern used in Button so transform overrides don't clobber the animation.
  const { transform: externalTransform, ...restStyle } = styleProp ?? {};
  const pressTransform = pressed ? `translateY(${SHADOW_DEPTH}px)` : "translateY(0)";
  const composedTransform = [externalTransform, pressTransform].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      style={{
        // Reset <button> browser defaults
        appearance: "none",
        cursor: "pointer",
        // Card chassis
        width: 160,
        backgroundColor: palette.neutralWhite,
        border: `1px solid ${palette.neutral300}`,
        borderRadius: radii.xl,
        boxShadow: pressed ? "none" : `0px ${SHADOW_DEPTH}px 0px 0px ${palette.neutral300}`,
        padding: spacing[4],
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing[2],
        boxSizing: "border-box",
        // Press animation
        transform: composedTransform,
        transition: "transform 80ms ease-out, box-shadow 80ms ease-out",
        // Consumer overrides (width/flex come from TileGroup via this path)
        ...restStyle,
      }}
    >
      {/* Icon slot — 24 × 24 ColourIcon */}
      <div
        style={{
          width: 24,
          height: 24,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {colourIcon}
      </div>

      {/* Label — Body 2 Bold, 2-line clamp */}
      <p
        style={{
          ...textStyles.body2Bold,
          lineHeight: `${textStyles.body2Bold.lineHeight}px`,
          letterSpacing: `${textStyles.body2Bold.letterSpacing}px`,
          color: palette.neutral600,
          margin: 0,
          textAlign: "center",
          width: "100%",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {label}
      </p>
    </button>
  );
};

export default Tile;
