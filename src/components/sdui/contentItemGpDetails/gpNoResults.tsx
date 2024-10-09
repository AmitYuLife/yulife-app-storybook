import React from "react";
import { Platform, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Pressable } from "@components/molecules";

interface EmptyGpElementProps {
  setManualInput: (val: boolean) => void;
  onLoad: boolean;
}

export default function GpNoResults({ setManualInput, onLoad }: EmptyGpElementProps) {
  const text = onLoad
    ? "Start typing to generate results or"
    : "Sorry, but we couldn’t find any results based on your search. Try again or";

  return (
    <View style={styles.wrapper}>
      <Pressable delay={1000} onPress={() => setManualInput(true)}>
        <TextTemplate type="b2b" color={Colours.neutral.n800}>
          {text}
          <TextTemplate type="b2b" color={Colours.darkHotPink}>
            {" enter full address "}
          </TextTemplate>
          manually.
        </TextTemplate>
      </Pressable>
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
