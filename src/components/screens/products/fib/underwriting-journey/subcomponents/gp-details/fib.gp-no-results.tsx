import React from "react";
import { Platform, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "../../../../../../../styles";

interface EmptyGpElementProps {
  setManualInput: () => void;
  onLoad: boolean;
}

export default function EmptyGpElement({ setManualInput, onLoad }: EmptyGpElementProps) {
  const text = onLoad
    ? "Start typing to generate results or"
    : "Sorry, but we couldn’t find any results based on your search. Try again or";

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.textStyle}>
        {text}
        <Text bold={true} onPress={setManualInput} style={[styles.textStyle, styles.textColor]}>
          {" enter full address "}
        </Text>
        manually.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingVertical: Style.adjust(16),
  } as ViewStyle,
  textStyle: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n800,
  } as TextStyle,
  textColor: {
    color: Colours.darkHotPink,
    fontSize: Platform.OS === "android" ? Style.adjust(14) : Style.adjust(16),
  } as TextStyle,
});
