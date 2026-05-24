import React from "react";
import { palette, colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { space } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CardElevation = "Off" | "On";

export interface CardProps {
  /**
   * Content rendered inside the card body. Typically a `CardInfoContent`
   * (or multiple), but any `ReactNode` is accepted — the card is a neutral
   * slot container with no opinion on its contents.
   */
  children?: React.ReactNode;
  /**
   * Optional overline label rendered above the card. Uses Label 1 Bold.
   * Pass a `ReactNode` if you need custom formatting.
   */
  overline?: React.ReactNode;
  /**
   * Drop-shadow depth.
   * - `Off` — flat card, border only.
   * - `On`  — adds a 4 px bottom shadow (`0 4px 0 0 neutral300`).
   * @default "Off"
   */
  elevation?: CardElevation;
  /**
   * Show or hide the 1 px border. When false, the card renders with no border
   * and relies solely on elevation or background colour for definition.
   * @default true
   */
  border?: boolean;
  /**
   * Inner padding applied around `children`.
   * Defaults to 16 px, matching the Figma specification.
   * Set to `0` when embedding edge-to-edge media.
   */
  padding?: number;
  /** Inline style overrides applied to the card body element. */
  style?: React.CSSProperties;
  /** Inline style overrides applied to the outer wrapper (overline + body). */
  wrapperStyle?: React.CSSProperties;
}

// ─── Card ─────────────────────────────────────────────────────────────────────

/**
 * Card
 *
 * A neutral slot container used as the foundation for list items, info rows,
 * and composed content blocks throughout the app. The card has no opinions on
 * its contents — pass any `ReactNode` as `children`, typically one or more
 * `CardInfoContent` components.
 *
 * Figma reference: YuLife App Storybook — Card (New)
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-4570
 */
export const Card: React.FC<CardProps> = ({
  children,
  overline,
  elevation = "Off",
  border = true,
  padding = space.componentPaddingMD,
  style,
  wrapperStyle,
}) => {
  const isElevated = elevation === "On";

  const bodyStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: colors.bgElevated,
    border: border ? `1px solid ${palette.neutral300}` : undefined,
    borderRadius: radii.md,
    padding,
    boxShadow: isElevated ? `0px 4px 0px 0px ${palette.neutral300}` : undefined,
    ...style,
  };

  const overlineStyle: React.CSSProperties = {
    ...textStyles.label1Bold,
    lineHeight: `${textStyles.label1Bold.lineHeight}px`,
    letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
    color: colors.textPrimary,
    margin: 0,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: space.stackSM,
        width: "100%",
        ...wrapperStyle,
      }}
    >
      {overline != null && <p style={overlineStyle}>{overline}</p>}
      <div style={bodyStyle}>{children}</div>
    </div>
  );
};

export default Card;
