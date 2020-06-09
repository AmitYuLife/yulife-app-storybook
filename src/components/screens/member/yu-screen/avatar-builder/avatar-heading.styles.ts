import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

const styles = StyleSheet.create({
  heading: {
    alignSelf: "center",
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    color: "#333333",
  } as TextStyle,
  done: {
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    color: "#333333",
  } as TextStyle,
  exitButtonWrapper: {
    height: Style.SCALE_UP_AND_DOWN(30),
    width: Style.SCALE_UP_AND_DOWN(30),
    justifyContent: "center",
  } as ViewStyle,
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: 0,
    paddingTop: Style.SCALE_UP_AND_DOWN(17),
  } as ViewStyle,
  paddingBottom: {
    paddingBottom: Style.SCALE_UP_AND_DOWN(13),
  },
  paddingHorizontal: {
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  subheading: {
    color: Colours.darkGray,
    fontSize: Style.SCALE_UP_AND_DOWN(12),
  } as TextStyle,
  subheadingWrapper: {
    alignItems: "center",
  } as ViewStyle,
});

export default styles;
