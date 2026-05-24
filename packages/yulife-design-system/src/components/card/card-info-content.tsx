import React from "react";
import { colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { space } from "../../tokens/spacing";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Layout variant for the left column.
 *
 * - `ColourIcon` — 24 × 24 icon, 8 px gap, top-aligned with the title.
 * - `SmallIllo`  — 64 × 64 illustration, 8 px gap, vertically centred with the text block.
 * - `LargeAsset` — 120 × 104 image/card, 16 px gap, top-aligned with the title.
 */
export type CardInfoLeftAsset = "ColourIcon" | "SmallIllo" | "LargeAsset";

export interface CardInfoContentProps {
  /**
   * Left-column content — an icon, illustration, or image. Sized and aligned
   * by `leftAsset`. The caller is responsible for passing the correctly-sized
   * asset; the component only controls layout.
   */
  leftSlot?: React.ReactNode;
  /**
   * Determines the sizing, gap, and alignment of the left column.
   * @default "ColourIcon"
   */
  leftAsset?: CardInfoLeftAsset;
  /** Title text — Body 2 Bold. */
  title: React.ReactNode;
  /**
   * Optional 24 × 24 icon rendered immediately after the title (e.g. an info
   * indicator). Pass an `<Icon />` or any sized `ReactNode`.
   */
  titleIcon?: React.ReactNode;
  /** Description text — Body 2 Regular. Keep to three lines or fewer. */
  description?: React.ReactNode;
  /**
   * Right-column content — typically a trailing chevron/`<Icon svg={RightIcon} />`.
   * Omit to hide the right column entirely.
   */
  rightSlot?: React.ReactNode;
  /** Inline style overrides applied to the root element. */
  style?: React.CSSProperties;
}

// ─── Left-asset variant specs ─────────────────────────────────────────────────

interface VariantSpec {
  /** Fixed pixel width of the left column. */
  leftWidth: number;
  /** Fixed pixel height of the left column. */
  leftHeight: number;
  /** Gap between the left column and the text block. */
  innerGap: number;
  /** Cross-axis alignment of the left column + text block. */
  align: "flex-start" | "center";
}

const VARIANTS: Record<CardInfoLeftAsset, VariantSpec> = {
  ColourIcon: {
    leftWidth: 24,
    leftHeight: 24,
    innerGap: space.stackSM, // 8
    align: "flex-start",
  },
  SmallIllo: {
    leftWidth: 64,
    leftHeight: 64,
    innerGap: space.stackSM, // 8
    align: "flex-start",
  },
  LargeAsset: {
    leftWidth: 120,
    leftHeight: 104,
    innerGap: space.stackMD, // 16
    align: "flex-start",
  },
};

// ─── CardInfoContent ──────────────────────────────────────────────────────────

/**
 * CardInfoContent
 *
 * A single info row intended to live inside a `Card`. Renders an optional
 * left-column asset (icon, illustration, or image), a title + description
 * text block, and an optional trailing slot (commonly a chevron).
 *
 * The `leftAsset` prop toggles between three layout presets that match the
 * Figma variants — sizing, gap, and vertical alignment all change together.
 *
 * Figma reference: YuLife App Storybook — CardInfoContent
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10970-1088
 */
export const CardInfoContent: React.FC<CardInfoContentProps> = ({
  leftSlot,
  leftAsset = "ColourIcon",
  title,
  titleIcon,
  description,
  rightSlot,
  style,
}) => {
  const spec = VARIANTS[leftAsset];

  const textStyleBase = textStyles.body2Regular;
  const titleStyle: React.CSSProperties = {
    ...textStyles.body2Bold,
    lineHeight: `${textStyles.body2Bold.lineHeight}px`,
    letterSpacing: `${textStyles.body2Bold.letterSpacing}px`,
    color: colors.textPrimary,
    margin: 0,
    // Title is single-line in all three Figma variants.
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: 0,
  };
  const descriptionStyle: React.CSSProperties = {
    ...textStyleBase,
    lineHeight: `${textStyleBase.lineHeight}px`,
    letterSpacing: `${textStyleBase.letterSpacing}px`,
    color: colors.textPrimary,
    margin: 0,
    width: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: space.stackSM,
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {/* Left group — left asset + text block, alignment varies by variant. */}
      <div
        style={{
          display: "flex",
          flex: "1 1 0",
          minWidth: 0,
          gap: spec.innerGap,
          alignItems: spec.align,
          alignSelf: "stretch",
        }}
      >
        {leftSlot != null && (
          <div
            style={{
              display: "flex",
              flexShrink: 0,
              width: spec.leftWidth,
              height: spec.leftHeight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {leftSlot}
          </div>
        )}

        {/* Text block */}
        <div
          style={{
            display: "flex",
            flex: "1 1 0",
            minWidth: 0,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Title row — title + optional 24px titleIcon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: space.stackSM,
              width: "100%",
            }}
          >
            <p style={titleStyle}>{title}</p>
            {titleIcon != null && (
              <span
                aria-hidden={true}
                style={{
                  display: "flex",
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {titleIcon}
              </span>
            )}
          </div>

          {description != null && <p style={descriptionStyle}>{description}</p>}
        </div>
      </div>

      {rightSlot != null && (
        <div
          style={{
            display: "flex",
            flexShrink: 0,
            alignSelf: "stretch",
            alignItems: "flex-start",
          }}
        >
          {rightSlot}
        </div>
      )}
    </div>
  );
};

export default CardInfoContent;
