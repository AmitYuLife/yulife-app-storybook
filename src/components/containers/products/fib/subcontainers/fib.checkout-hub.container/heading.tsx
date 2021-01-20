import React, { memo } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";

export const Heading = memo(() => {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.heading}>
        Your details
      </Text>
      <View style={styles.paragraphWrapper}>
        <Text style={styles.paragraph}>
          Please complete your personal details below to complete checkout and purchase this policy.
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(24),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
  paragraphWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  paragraph: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.neutral.n800,
  } as TextStyle,
});
