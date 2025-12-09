import React, { memo } from "react";
import { AccessibilityRole, ColorValue, Text, TextStyle } from "react-native";
import { Colours, TemplateTextType, templateTextStyles, StyleSheet } from "@styles";
import { isAndroid } from "@utils";
import { isRTL } from "@locale";

export type ITextDecorationType = "underline" | "strikeThrough" | "none";

interface IProps {
  testID?: string;
  children: React.ReactNode;
  type: TemplateTextType;
  color?: ColorValue | string;
  textAlign?: TextStyle["textAlign"];
  decoration?: ITextDecorationType;
  numberOfLines?: number;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessible?: boolean;
  lineHeight?: TextStyle["lineHeight"];
  writingDirection?: TextStyle["writingDirection"];
  fontVariant?: TextStyle["fontVariant"];
}

export const TextTemplate = memo(
  ({
    children,
    testID,
    type,
    color,
    textAlign = "left",
    decoration,
    numberOfLines,
    accessibilityLabel,
    accessibilityRole,
    accessible = true,
    lineHeight: customLineHeight,
    writingDirection,
    fontVariant,
  }: IProps) => {
    const alignment = { textAlign };
    const fontColor = { color: color || Colours.neutral.n800 };
    const decorationStyle = !decoration || decoration === "none" ? null : styles[decoration];
    const lineHeight = buildLineHeightStyle({ customLineHeight, type });
    const writingDirectionStyle = writingDirection ? { writingDirection } : {};
    const fontVariantStyle = fontVariant ? { fontVariant } : {};

    return (
      <Text
        style={StyleSheet.flatten([
          templateTextStyles[type],
          alignment,
          fontColor,
          decorationStyle,
          lineHeight,
          writingDirectionStyle,
          fontVariantStyle,
        ])}
        allowFontScaling={false}
        testID={testID}
        numberOfLines={numberOfLines}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
        importantForAccessibility={accessible ? "auto" : "no-hide-descendants"}
      >
        {children}
      </Text>
    );
  }
);

type BuildLineHeightStyleProps = {
  customLineHeight: TextStyle["lineHeight"];
  type: TemplateTextType;
};

const buildLineHeightStyle = ({ customLineHeight, type }: BuildLineHeightStyleProps) => {
  if (customLineHeight) {
    return { lineHeight: customLineHeight };
  }

  const size = templateTextStyles[type].fontSize as number;

  if (isRTL() && isAndroid()) {
    // on Android, the line height is not applied correctly when the text is RTL
    // so we need to remove the line height
    return { lineHeight: undefined };
  }

  return { lineHeight: size * 1.25 };
};

export const styles = StyleSheet.create({
  underline: {
    textDecorationLine: "underline",
  } as TextStyle,
  strikeThrough: {
    textDecorationLine: "line-through",
  } as TextStyle,
});
