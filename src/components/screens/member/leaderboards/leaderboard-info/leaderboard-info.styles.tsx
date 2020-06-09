import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  infoText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    color: "#5A5A5C",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    marginTop: Style.SCALE_UP_AND_DOWN(31),
    marginLeft: Style.SCALE_UP_AND_DOWN(24),
    marginRight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
});
