import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  contentWrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(30),
    lineHeight: Style.SCALE_UP_AND_DOWN(40),
    marginVertical: Style.SCALE_UP_AND_DOWN(20),
    textAlign: "center",
  } as TextStyle,
  subheading: {
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginHorizontal: Style.SCALE_UP_AND_DOWN(40),
    textAlign: "center",
  } as TextStyle,
  privacyButton: {
    marginTop: Style.SCALE_UP_AND_DOWN(27),
  } as ViewStyle,
  primaryButton: { marginVertical: 15 } as ViewStyle,
});
