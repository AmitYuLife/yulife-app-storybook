import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
  plusWrapper: {
    marginRight: Style.SCALE_UP_AND_DOWN(6),
  } as ViewStyle,
  text: {
    color: Colours.darkHotPink,
    fontSize: Style.SCALE_UP_AND_DOWN(34),
    marginBottom: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? 2 : -4),
  } as TextStyle,
  textWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: Style.SCALE_UP_AND_DOWN(24),
    paddingRight: Style.SCALE_UP_AND_DOWN(8),
    position: "absolute",
    top: 0,
    width: Style.SCALE_UP_AND_DOWN(84),
    zIndex: 2,
  } as ViewStyle,
});
