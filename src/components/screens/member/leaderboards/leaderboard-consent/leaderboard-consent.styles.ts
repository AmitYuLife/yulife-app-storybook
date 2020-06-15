import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  contentWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(35),
    textAlign: "center",
    color: "#333",
  } as TextStyle,
  subheading: {
    fontSize: Style.adjust(15),
    lineHeight: Style.adjust(21),
    marginHorizontal: Style.adjust(28),
    color: "#333",
    textAlign: "center",
    marginTop: Style.adjust(15),
  } as TextStyle,
  privacyButton: {
    marginTop: Style.SCALE_UP_AND_DOWN(27),
  } as ViewStyle,
  primaryButton: {
    marginTop: Style.adjust(22),
  } as ViewStyle,
});
