import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

const styles = StyleSheet.create({
  heading: {
    fontSize: Style.adjust(20),
  } as TextStyle,
  headingWrapper: {
    alignItems: "center",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: Style.adjust(17),
  } as ViewStyle,
  paddingBottom: {
    paddingBottom: Style.adjust(13),
  },
  paddingHorizontal: {
    paddingHorizontal: Style.adjust(15),
  } as ViewStyle,
  subheading: {
    color: Colours.darkGray,
    fontSize: Style.adjust(12),
  } as TextStyle,
  subheadingWrapper: {
    alignItems: "center",
  } as ViewStyle,
  leftIcon: {
    position: "absolute",
    top: Style.adjust(17),
    alignSelf: "flex-start",
    height: 32,
    width: 32,
  },
  rightIcon: {
    position: "absolute",
    top: Style.SCALE_UP_AND_DOWN(10),
    alignSelf: "flex-end",
    height: 32,
    width: 32,
  },
});

export default styles;
