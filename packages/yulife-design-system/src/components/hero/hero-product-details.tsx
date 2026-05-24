import React from "react";
import { Hero, HeroProps } from "./hero";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { palette } from "../../tokens/colors";
import { radii } from "../../tokens/radii";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroProductDetailsProps extends Pick<HeroProps, "backgroundImage" | "onClose" | "style"> {
  /**
   * Partner or co-brand logo(s) rendered above the product heading.
   * Pass any `ReactNode` — a single SVG component, an `<img>`, or a composed
   * group of logos separated by a divider. Optional.
   */
  logo?: React.ReactNode;
  /**
   * Product name displayed at Heading 2 scale (28 px Bariol Bold).
   * Copy should be no longer than two lines.
   */
  heading: string;
  /**
   * Optional pill badge rendered below the heading — e.g. "Core Cover" or
   * "Life Insurance". Uses a frosted-white background on the hero image.
   */
  flagLabel?: string;
}

// ─── HeroProductDetails ───────────────────────────────────────────────────────

/**
 * HeroProductDetails
 *
 * A `Hero` variant for Insurance Product page templates. Renders the standard
 * hero chassis (background image, dark scrim, close button navigation) with a
 * product-specific content layout: an optional partner logo, a product heading,
 * and an optional flag label pill.
 *
 * Figma reference: YuLife App Storybook → Hero → HeroProductDetails
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-1492
 */
export const HeroProductDetails: React.FC<HeroProductDetailsProps> = ({
  backgroundImage,
  onClose,
  style,
  logo,
  heading,
  flagLabel,
}) => {
  return (
    <Hero backgroundImage={backgroundImage} onClose={onClose} style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing[4], // 16px
          paddingLeft: spacing[8], // 32px
          paddingRight: spacing[8], // 32px
          paddingBottom: spacing[12], // 48px
          paddingTop: spacing[2], // 8px
        }}
      >
        {/* ── Logo + heading ─────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: spacing[2], // 8px
            width: "100%",
          }}
        >
          {logo != null && (
            <div
              style={{
                height: 32,
                display: "flex",
                alignItems: "center",
              }}
            >
              {logo}
            </div>
          )}

          <p
            style={{
              ...textStyles.heading2,
              lineHeight: `${textStyles.heading2.lineHeight}px`,
              letterSpacing: `${textStyles.heading2.letterSpacing}px`,
              color: palette.neutralWhite,
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {heading}
          </p>
        </div>

        {/* ── Flag label ─────────────────────────────────────────────────── */}
        {flagLabel != null && flagLabel !== "" && (
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: radii.md,
              paddingLeft: spacing[2],
              paddingRight: spacing[2], // 8px
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <span
              style={{
                ...textStyles.label3Bold,
                lineHeight: `${textStyles.label3Bold.lineHeight}px`,
                letterSpacing: `${textStyles.label3Bold.letterSpacing}px`,
                color: palette.neutralWhite,
                whiteSpace: "nowrap",
              }}
            >
              {flagLabel}
            </span>
          </div>
        )}
      </div>
    </Hero>
  );
};

export default HeroProductDetails;
