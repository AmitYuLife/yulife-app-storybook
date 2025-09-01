import React, { memo } from "react";
import { AccessibilityRole, ColorValue, Text, TextStyle } from "react-native";
import { Colours, TemplateTextType, templateTextStyles, StyleSheet } from "@styles";

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
  }: IProps) => {
    const alignment = { textAlign };
    const fontColor = { color: color || Colours.neutral.n800 };
    const decorationStyle = !decoration || decoration === "none" ? null : styles[decoration];
    const lineHeight = customLineHeight ? { lineHeight: customLineHeight } : {};
    const writingDirectionStyle = writingDirection ? { writingDirection } : {};

    return (
      <Text
        style={StyleSheet.flatten([
          templateTextStyles[type],
          alignment,
          fontColor,
          decorationStyle,
          lineHeight,
          writingDirectionStyle,
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

export const styles = StyleSheet.create({
  underline: {
    textDecorationLine: "underline",
  } as TextStyle,
  strikeThrough: {
    textDecorationLine: "line-through",
  } as TextStyle,
});
