import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { COUNTDOWN_UNIT } from "@ids";

interface Props {
  heading: string;
  label: string;
  borderRightWidth?: number;
}

export const CountdownUnit = memo(({ heading, label, borderRightWidth = 1 }: Props) => {
  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, { borderRightWidth }])}
      testID={COUNTDOWN_UNIT(parseInt(heading), label)}
    >
      <TextTemplate type="h1">{heading}</TextTemplate>
      <View style={styles.pullUp}>
        <TextTemplate type="l2">{label}</TextTemplate>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
  pullUp: {
    marginTop: Style.adjust(-8),
  } as ViewStyle,
});
