import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text, Platform } from "react-native";
import { Style } from "../../../../styles";
import media from "@styles/media";

interface ITitleProps {
  title: string;
  textStyle?: TextStyle;
}

export default function FibTitle(props: ITitleProps) {
  const { title, textStyle } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([styles.title, textStyle])}>{title}</Text>
    </View>
  );
}

const TITLE_FONT_SIZE = Platform.select({
  ios: Style.adjust(28),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: Style.adjust(28) * 0.8,
      },
    ],
    Style.adjust(28)
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  title: {
    width: Style.DEVICE_WIDTH - 120,
    fontSize: TITLE_FONT_SIZE,
    lineHeight: TITLE_FONT_SIZE * 1.2,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1,
    color: "#464647",
  } as TextStyle,
});
