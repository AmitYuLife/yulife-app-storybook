import React from "react";
import { View, ViewStyle, TextStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { Text } from "@atoms";

export function Instructions() {
  if (Platform.OS === "android") {
    return (
      <View style={styles.instructionWrapper}>
        <Text style={styles.instructionHeading}>Open</Text>
        <Text style={styles.instructionHeading}>Calm to start</Text>
        <Text style={styles.instructionText}>Or use any meditation app that syncs with google fit.</Text>
        <Text style={styles.instructionText}>Results will be shown here.</Text>
      </View>
    );
  }

  return (
    <View style={styles.instructionWrapper}>
      <Text style={styles.instructionHeading}>Choose</Text>
      <Text style={styles.instructionHeading}>an app to start</Text>
      <Text style={styles.instructionText}>Or use any meditation app</Text>
      <Text style={styles.instructionText}>that integrates with apple health.</Text>
      <Text style={styles.instructionText}>Results will be shown here.</Text>
    </View>
  );
}

const styles = {
  instructionWrapper: {
    flexBasis: Style.adjust(40),
    marginLeft: Style.adjust(16),
    marginTop: Style.adjust(-30),
  } as ViewStyle,
  instructionHeading: {
    fontSize: Style.adjust(25),
    color: Colours.darkestGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  instructionText: {
    fontSize: Style.adjust(15),
    lineHeight: Style.adjust(20),
    width: Style.adjust(190),
    textAlignVertical: "bottom",
    color: Colours.darkestGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
};
