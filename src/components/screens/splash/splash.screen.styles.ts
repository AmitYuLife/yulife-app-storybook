import { Colours, Style, TOP_BAR } from "@styles/index";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

const LOGO_MARGIN_TOP = TOP_BAR.TOP_BAR_WITH_PAD + Style.adjust(135);
const YU_ICON_SIZE = Style.adjust(100);
const DOT_SIZE = Style.adjust(10);
const DOTS_WIDTH = Style.adjust(80);

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  logoWrapper: {
    marginTop: LOGO_MARGIN_TOP,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  iconWrapper: {
    height: YU_ICON_SIZE,
    width: YU_ICON_SIZE,
  } as ViewStyle,
  icon: { backgroundColor: "white" } as ImageStyle,
  textWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  } as ViewStyle,
  bottomWrapper: {
    flex: 1,
    marginBottom: DOTS_WIDTH,
    justifyContent: "flex-end",
    alignItems: "center",
  } as ViewStyle,
  dotsWrapper: {
    width: DOTS_WIDTH,
    justifyContent: "space-around",
    flexDirection: "row",
  } as ViewStyle,
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    backgroundColor: Colours.darkHotPink,
    borderRadius: DOT_SIZE,
  } as ViewStyle,
});
