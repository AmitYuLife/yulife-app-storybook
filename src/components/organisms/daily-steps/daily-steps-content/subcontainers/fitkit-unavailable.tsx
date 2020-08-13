import React from "react";
import { Platform, StyleSheet, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";

export const FitkitUnavailable = () => (
  <>
    <Text bold={true} style={styles.heading}>
      {`device not supported`}
    </Text>
    <Text style={styles.content}>
      {Platform.select({
        android: "your device requires Google Play Services in order to use this app.",
        ios: "your device requires Apple Healthkit in order to use this app.",
      })}
    </Text>
  </>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(25),
  } as TextStyle,
  content: {
    color: "rgb(96,96,96)",
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginTop: Style.SCALE_UP_AND_DOWN(15),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(235),
  } as TextStyle,
});
