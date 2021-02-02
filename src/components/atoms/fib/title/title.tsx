import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text, Platform } from "react-native";
import { Style, Colours } from "../../../../styles";
import media from "@styles/media";

interface ITitleProps {
  title: string;
  textStyle?: TextStyle;
}

function _FibTitle(props: ITitleProps) {
  const { title, textStyle } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([titleStyle, textStyle])}>{title}</Text>
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

const titleStyle = {
  width: Style.DEVICE_WIDTH - 90,
  fontSize: TITLE_FONT_SIZE,
  lineHeight: TITLE_FONT_SIZE * 1.2,
  fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  letterSpacing: 1,
  color: Colours.neutral.n800,
} as TextStyle;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
});

const FibTitle = Object.assign(_FibTitle, { TITLE_STYLE: titleStyle });

export default FibTitle;
