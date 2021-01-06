import { StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";
import media from "@styles/media";

const marginTop = Platform.select({
  ios: Style.adjust(32),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: 0,
      },
    ],
    Style.adjust(32)
  ),
});

const alignItems = Platform.select({
  ios: null,
  android: "center",
});

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    width: "100%",
    marginTop,
    flexDirection: "row",
    alignItems: alignItems,
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
    borderBottomWidth: 2,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as TextStyle,
  textInputOnBlur: {
    borderBottomColor: Colours.neutral.n200,
  } as TextStyle,
  preInputWrapper: {
    marginRight: Style.adjust(4),
  } as ViewStyle,
  preInputLabel: {
    color: Colours.neutral.n900,
    fontSize: Style.adjust(32),
  } as TextStyle,
  inputWrapper: {
    paddingTop: Style.adjust(2),
  } as ViewStyle,
});
