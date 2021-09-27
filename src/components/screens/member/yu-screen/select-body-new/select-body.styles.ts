import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
  } as ViewStyle,
  elementWrapper: {
    flex: 1,
    paddingBottom: Style.adjust(117),
  } as ViewStyle,
  pickBodyText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    letterSpacing: Style.adjust(0.8),
    color: "#838385",
    textAlign: "center",
  } as TextStyle,
  title: {
    flex: 0.4,
    alignSelf: "center",
    justifyContent: "flex-end",
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  selectorWrapper: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    width: "100%",
    paddingLeft: Style.adjust(32),
    paddingRight: Style.adjust(32),
    justifyContent: "space-around",
  } as ViewStyle,
  bodySelected: {
    borderColor: Colours.primary.p600,
    backgroundColor: Colours.primary.p50,
  },
  buttonsWrapper: {
    alignItems: "center",
    left: 0,
    position: "absolute",
    right: 0,
    bottom: Style.SCALE_Y_UP_AND_DOWN(40),
  } as ViewStyle,
});
