import React, { useState } from "react";
import { palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

// ─── Constants ────────────────────────────────────────────────────────────────

const SHADOW_DEPTH = 4;
const DEFAULT_IMAGE_HEIGHT = 152;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TileImageProps {
  /** Raster image URL (PNG). Rendered at the top of the tile with `object-fit: cover`. */
  imageSrc: string;
  /** Alt text for the image. Defaults to `title` when omitted. */
  imageAlt?: string;
  /**
   * When `true`, a semi-transparent dark scrim (`rgba(0,0,0,0.4)`) is drawn
   * over the image. Use for photographic assets (e.g. reward partners,
   * wellbeing services) to ensure any overlaid flags remain legible.
   */
  imageOverlay?: boolean;
  /** Heading text rendered in Body 2 Bold below the image. */
  title: string;
  /**
   * Flexible content slot below the title — typically a description string,
   * a YuCoin balance component, or any other inline content.
   */
  bodySlot?: React.ReactNode;
  /**
   * Slot rendered at the trailing end of the actions row — typically a
   * CardFlag badge, a small Button, or a status indicator.
   */
  actionSlot?: React.ReactNode;
  /**
   * Overlay slot positioned at the top-left corner of the image area
   * (7 px inset). Use for status badges or flags that sit on top of the image.
   */
  flagSlot?: React.ReactNode;
  /** Called when the tile is pressed. */
  onClick?: () => void;
  /**
   * Accessible label forwarded to the underlying `<button>`.
   * Defaults to `title` when omitted.
   */
  "aria-label"?: string;
  /**
   * Height of the image area in px. Defaults to `152`.
   *
   * Set this to match the natural aspect ratio of the source asset at the
   * tile's rendered width (164 px default). For the standard 327×196 service
   * logo format: `imageHeight={98}`.
   */
  imageHeight?: number;
  /**
   * Inline style overrides for the root element. `transform` values are
   * composed with the press animation rather than overwriting it.
   */
  style?: React.CSSProperties;
}

// ─── TileImage ────────────────────────────────────────────────────────────────

/**
 * TileImage
 *
 * A tappable image tile with a raster image slot at the top and a content area
 * below. Shares the same card chassis (white background, neutral-300 border
 * and drop-shadow, xl radius) and press-down animation as the standard `Tile`.
 *
 * Two primary use-cases visible in the Figma spec:
 *
 * - **Challenge** — illustrated image (no overlay), title, YuCoin value,
 *   and a status badge.
 * - **Services** — photographic image with a dark scrim (`imageOverlay`),
 *   title, body description, and a status badge.
 *
 * Figma reference: YuLife App Storybook → Tile / Image
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=12806-4993
 */
export const TileImage: React.FC<TileImageProps> = ({
  imageSrc,
  imageAlt,
  imageOverlay = false,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  title,
  bodySlot,
  actionSlot,
  flagSlot,
  onClick,
  "aria-label": ariaLabel,
  style: styleProp,
}) => {
  const [pressed, setPressed] = useState(false);

  const { transform: externalTransform, ...restStyle } = styleProp ?? {};
  const pressTransform = pressed ? `translateY(${SHADOW_DEPTH}px)` : "translateY(0)";
  const composedTransform = [externalTransform, pressTransform].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? title}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      style={{
        appearance: "none",
        cursor: "pointer",
        textAlign: "left",
        width: 164,
        backgroundColor: palette.neutralWhite,
        border: `1px solid ${palette.neutral300}`,
        borderRadius: radii.xl,
        boxShadow: pressed ? "none" : `0px ${SHADOW_DEPTH}px 0px 0px ${palette.neutral300}`,
        padding: 0,
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        boxSizing: "border-box",
        transform: composedTransform,
        transition: "transform 80ms ease-out, box-shadow 80ms ease-out",
        ...restStyle,
      }}
    >
      {/* ── Image area ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: imageHeight,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {imageOverlay && (
          <div
            aria-hidden={true}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              pointerEvents: "none",
            }}
          />
        )}

        {flagSlot && (
          <div
            style={{
              position: "absolute",
              top: 7,
              left: 7,
              display: "flex",
              gap: spacing[2],
              alignItems: "center",
            }}
          >
            {flagSlot}
          </div>
        )}
      </div>

      {/* ── Content area ────────────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: palette.neutralWhite,
          padding: spacing[4],
          display: "flex",
          flexDirection: "column",
          gap: spacing[2],
          alignItems: "stretch",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Title */}
        <p
          style={{
            ...textStyles.body2Bold,
            lineHeight: `${textStyles.body2Bold.lineHeight}px`,
            letterSpacing: `${textStyles.body2Bold.letterSpacing}px`,
            color: palette.neutral600,
            margin: 0,
            textAlign: "left",
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </p>

        {/* Actions row — body slot left, action slot right */}
        {(bodySlot || actionSlot) && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: spacing[2],
              alignItems: "center",
              width: "100%",
            }}
          >
            {bodySlot && <div style={{ flex: "1 1 0", minWidth: 0, overflow: "hidden" }}>{bodySlot}</div>}
            {actionSlot && <div style={{ flex: "0 0 auto" }}>{actionSlot}</div>}
          </div>
        )}
      </div>
    </button>
  );
};

export default TileImage;
