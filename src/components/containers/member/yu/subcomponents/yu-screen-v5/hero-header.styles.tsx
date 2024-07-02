import { StyleSheet } from "react-native";
import { Colours, Style, TOP_BAR } from "@styles";
import { COLLAPSED_HEADER_HEIGHT, PLATFORM_SIZE } from "./yu-screen.styles";

export const styles = StyleSheet.create({
  foregroundContainer: {
    height: COLLAPSED_HEADER_HEIGHT,
  },
  bottomHider: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -1,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    overflow: "hidden",
  },
  foregroundWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: Style.DEVICE_WIDTH,
  },
  platformImage: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Style.adjust(40),
    ...PLATFORM_SIZE,
  },
  platformFill: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Style.adjust(-2),
    height: Style.adjust(46),
    backgroundColor: Colours.neutral.white,
  },
  offsetFill: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(2),
    backgroundColor: Colours.neutral.white,
    top: Style.adjust(-2),
  },
  yumojiWrapper: {
    position: "absolute",
    bottom: Style.adjust(10),
    right: Style.adjust(20),
    alignItems: "center",
    transformOrigin: "50% 0%",
  },
  heroHeaderBackground: {
    position: "absolute",
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(160),
    width: Style.DEVICE_WIDTH,
  },
});
