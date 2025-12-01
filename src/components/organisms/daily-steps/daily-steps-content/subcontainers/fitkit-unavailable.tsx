import { Colours } from "@styles";
import React from "react";
import { Platform, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

export const FitkitUnavailable = () => (
  <>
    <Text bold={true} style={styles.heading}>
      {t("screens.daily.fitkit.unavailable.heading")}
    </Text>
    <Text style={styles.content}>
      {Platform.select({
        android: t("screens.daily.fitkit.unavailable.subheading_android"),
        ios: t("screens.daily.fitkit.unavailable.subheading_ios"),
      })}
    </Text>
  </>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(25),
  } as TextStyle,
  content: {
    color: Colours.gray,
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginTop: Style.SCALE_UP_AND_DOWN(15),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(235),
  } as TextStyle,
});
