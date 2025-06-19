import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(22),
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    marginHorizontal: Style.SCALE_UP_AND_DOWN(70),
    textAlign: "center",
  } as TextStyle,
  imageWrapper: {
    alignItems: "center",
    height: Style.SCALE_UP_AND_DOWN(122),
    justifyContent: "center",
    marginBottom: Style.SCALE_UP_AND_DOWN(36),
    overflow: "hidden",
    width: "100%",
  } as ViewStyle,
  text: {
    color: "rgb(96, 96, 96)",
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    fontWeight: "normal",
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
