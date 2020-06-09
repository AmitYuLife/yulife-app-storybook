import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
  } as ViewStyle,
  elementWrapper: {
    flex: 1,
    paddingBottom: Style.SCALE_UP_AND_DOWN(117),
  } as ViewStyle,
  pickBodyText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    color: "#838385",
    textAlign: "center",
  } as TextStyle,
  bottomElement: {
    height: Style.SCALE_UP_AND_DOWN(141),
    width: "100%",
  } as ViewStyle,
  selectorWrapper: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    width: "100%",
    paddingLeft: Style.SCALE_UP_AND_DOWN(32),
    paddingRight: Style.SCALE_UP_AND_DOWN(32),
    justifyContent: "space-around",
    alignItems: "center",
  } as ViewStyle,
  body: {
    width: Style.SCALE_UP_AND_DOWN(152),
    height: Style.SCALE_UP_AND_DOWN(383),
    borderRadius: Style.SCALE_UP_AND_DOWN(20),
    borderWidth: Style.SCALE_UP_AND_DOWN(2),
    borderColor: "white",
    alignItems: "center",
  },
  bodySelected: {
    width: Style.SCALE_UP_AND_DOWN(152),
    height: Style.SCALE_UP_AND_DOWN(383),
    backgroundColor: "#FEF5FA",
    borderColor: "#F43E8E",
    borderRadius: Style.SCALE_UP_AND_DOWN(20),
    borderWidth: Style.SCALE_UP_AND_DOWN(2),
    alignItems: "center",
  },
  buttonsWrapper: {
    alignItems: "center",
    left: 0,
    position: "absolute",
    right: 0,
    bottom: Style.SCALE_Y_UP_AND_DOWN(40),
  } as ViewStyle,
});
