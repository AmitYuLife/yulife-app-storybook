import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";

export const styles = StyleSheet.create({
  flex: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  disabled: {
    opacity: 0.3,
  } as ViewStyle,
  main: {
    width: "100%",
    paddingHorizontal: Style.adjust(16),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 16,
  } as ViewStyle,
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  titleWrapper: {
    marginStart: Style.adjust(16),
  } as TextStyle,
  subtitleWrapper: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
  rightIcon: {
    marginStart: "auto",
  } as ViewStyle,
});
