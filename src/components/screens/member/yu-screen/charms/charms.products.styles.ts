import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  charmWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  } as ViewStyle,

  charmDescription: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    textAlign: "left",
    overflow: "visible",
    marginRight: Style.adjust(32),
  } as TextStyle,
  charmDescriptionWrapper: {
    marginRight: 160,
  } as TextStyle,

  charmIcon: {
    height: Style.SCALE_UP_AND_DOWN(75),
    width: Style.SCALE_UP_AND_DOWN(63),
    marginRight: Style.SCALE_UP_AND_DOWN(16),
  } as ImageStyle,

  rateView: {
    height: Style.adjust(32),
    width: Style.adjust(32),
    backgroundColor: Colours.yuscreen.earnRateBackground,
    borderColor: Colours.yuscreen.white,
    borderRadius: Style.adjust(32),
    borderWidth: 2,
    right: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  rateText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    letterSpacing: 0.8,
    color: Colours.yuscreen.brown,
    marginTop: 2,
    marginLeft: Style.adjust(3),
  } as TextStyle,
});
