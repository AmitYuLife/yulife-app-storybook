import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  buttonWrapper: {
    marginTop: Style.adjust(44),
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: Style.adjust(15),
  } as ViewStyle,
  heading: {
    color: "rgb(51,51,51)",
    fontSize: Style.adjust(35),
    textAlign: "center",
  } as TextStyle,
  subheading: {
    color: "rgb(96,96,96)",
    fontSize: Style.adjust(16),
    marginLeft: Style.adjust(35),
    marginRight: Style.adjust(35),
    marginTop: Style.adjust(20),
    textAlign: "center",
  } as TextStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
