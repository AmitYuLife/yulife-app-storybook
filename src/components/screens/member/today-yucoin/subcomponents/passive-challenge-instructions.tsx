import React from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms/index";
import { Style } from "@styles/index";

export default function PassiveChallengeInstructions({ children }: { children: React.ReactChild }) {
  return (
    <View style={styles.passiveChallengeInstructionsWrapper}>
      <Text style={styles.passiveChallengeInstructions}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  passiveChallengeInstructions: {
    color: "rgb(170,170,170)",
    fontSize: Style.SCALE_UP_AND_DOWN(13),
  } as TextStyle,
  passiveChallengeInstructionsWrapper: {
    flexDirection: "row",
    marginTop: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,
});
