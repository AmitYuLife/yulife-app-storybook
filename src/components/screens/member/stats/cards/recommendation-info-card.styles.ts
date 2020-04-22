import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: Style.SCALE_UP_AND_DOWN(16),
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
    alignItems: "center",
  } as ViewStyle,
  infotText: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginRight: Style.SCALE_UP_AND_DOWN(19),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    width: Style.SCALE_UP_AND_DOWN(263),
  } as TextStyle,
  image: {
    height: Style.SCALE_UP_AND_DOWN(38),
    width: Style.SCALE_UP_AND_DOWN(32),
    marginLeft: "auto",
  } as ImageStyle,
});
