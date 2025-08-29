import { FULL_HEADER_HEIGHT, PLATFORM_SIZE } from "./yu-screen.styles";
import { Colours, Style, TOP_BAR, StyleSheet } from "@styles";

export const styles = StyleSheet.create({
  bottomHider: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: -1,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    overflow: "hidden",
  },
  foregroundWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 0,
    width: Style.DEVICE_WIDTH,
  },
  platformImage: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: Style.adjust(40),
    ...PLATFORM_SIZE,
  },
  platformFill: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: Style.adjust(-2),
    height: Style.adjust(46),
    backgroundColor: Colours.neutral.white,
  },
  offsetFill: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(FULL_HEADER_HEIGHT + 2),
    backgroundColor: Colours.neutral.white,
    top: Style.adjust(-2),
  },
  yumojiWrapper: {
    position: "absolute",
    end: Style.adjust(20),
    alignItems: "center",
    transformOrigin: "50% 0%",
  },
  heroHeaderBackground: {
    position: "absolute",
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(160),
    width: Style.DEVICE_WIDTH,
  },
});
