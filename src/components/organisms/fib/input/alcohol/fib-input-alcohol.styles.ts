import { StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";
import media from "@styles/media";

const marginTop = Platform.select({
  ios: Style.adjust(8),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: 0,
      },
    ],
    Style.adjust(8)
  ),
});

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop,
  } as ViewStyle,
  label: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    color: Colours.primary.p600,
    letterSpacing: 1,
    textDecorationLine: "underline",
    textDecorationColor: Colours.primary.p600,
  } as TextStyle,
  ftWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: 1,
    textAlign: "center",
  } as TextStyle,
  textInputOnBlur: {
    borderBottomColor: Colours.neutral.n200,
  } as TextStyle,
});
