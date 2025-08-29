import React, { memo, useMemo } from "react";
import { TextTemplate } from "@atoms";
import { ContentItemProductDetailsHeader } from "@graphql/__generated";
import { View } from "react-native";
import { defaultFundingTheme } from "./styles";
import { Colours, Style, StyleSheet } from "@styles";

export const Funding = memo(({ text, theme }: ContentItemProductDetailsHeader["funding"]) => {
  const [themeStyles, textColor] = useMemo(
    () =>
      theme
        ? [{ backgroundColor: theme.backgroundColor, borderColor: theme.borderColor }, theme.textColor]
        : [defaultFundingTheme, Colours.neutral.white],
    [theme]
  );

  return (
    <View style={StyleSheet.flatten([styles.wrapper, themeStyles])}>
      <TextTemplate type="l3b" color={textColor}>
        {text}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-start",
    borderRadius: Style.adjust(20),
    borderWidth: Style.adjust(0.5),
    marginBottom: Style.adjust(16),
    paddingHorizontal: Style.adjust(12),
    paddingVertical: Style.adjust(2),
  },
});
