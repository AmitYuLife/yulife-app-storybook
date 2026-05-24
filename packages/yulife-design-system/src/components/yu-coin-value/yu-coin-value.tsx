import React from "react";
import { YuCoinColourIcon } from "../../icons/colour";
import { colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";

/**
 * Displays a YuCoin balance as a number followed by the YuCoin colour icon.
 *
 * Two sizes matching the Figma spec:
 * - **small** — Label 2 Bold (12px), 16px icon, 4px gap. Used in tile body slots.
 * - **medium** — Body 2 Bold (16px), 24px icon, 8px gap. Used in the NavigationHeader right slot.
 *
 * Figma:
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=12815-5719
 */
export interface YuCoinValueProps {
  /** The coin balance to display. */
  value: string | number;
  /**
   * Size variant.
   * - `"small"` — 12px text, 16px icon (tile body usage)
   * - `"medium"` — 16px text, 24px icon (navigation header usage)
   * @default "medium"
   */
  size?: "small" | "medium";
  /**
   * When true, switches text colour to `colors.textInverse` (white) for use
   * on dark or image backgrounds.
   * @default false
   */
  dark?: boolean;
  /** Accessible label for the coin icon. @default "YuCoin" */
  accessibilityLabel?: string;
  /** Additional inline styles applied to the root element. */
  style?: React.CSSProperties;
}

export const YuCoinValue = ({
  value,
  size = "medium",
  dark = false,
  accessibilityLabel = "YuCoin",
  style,
}: YuCoinValueProps) => {
  const isSmall = size === "small";
  const textStyle = isSmall ? textStyles.label2Bold : textStyles.body2Bold;
  const iconSize = isSmall ? 16 : 24;
  const gap = isSmall ? spacing[1] : spacing[2];
  const color = dark ? colors.textInverse : colors.textPrimary;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap,
        ...style,
      }}
    >
      <span
        style={{
          ...textStyle,
          lineHeight: `${textStyle.lineHeight}px`,
          letterSpacing: `${textStyle.letterSpacing}px`,
          color,
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
      <YuCoinColourIcon size={iconSize} accessibilityLabel={accessibilityLabel} />
    </div>
  );
};
