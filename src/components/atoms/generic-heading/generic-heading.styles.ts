import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
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
    top: Platform.select({ ios: Style.adjust(18), android: Style.SCALE_Y_UP_AND_DOWN(22) }),
    alignSelf: "flex-start",
    height: Style.adjust(32),
    width: Style.adjust(32),
  },
  rightIcon: {
    position: "absolute",
    top: Style.adjust(10),
    alignSelf: "flex-end",
    height: Style.adjust(32),
    minWidth: Style.adjust(32),
  },
  backAdjust: {
    marginTop: Style.adjust(-4),
  } as ViewStyle,
  newBorderPad: {
    height: 8,
  } as ViewStyle,
  newBorderShadow: {
    position: "absolute",
    height: 1,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  } as ViewStyle,
  rightTextIcon: {
    fontSize: Style.adjust(20),
    marginTop: Style.adjust(6),
  } as TextStyle,
});

export default styles;
