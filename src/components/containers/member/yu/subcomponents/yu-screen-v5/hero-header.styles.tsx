import { StyleSheet } from "react-native";
import { Colours, Style, TOP_BAR } from "@styles";
import { ANIMATION_START_Y } from "./yu-screen.styles";
import { TOP_BAR_HEIGHT } from "@organisms";

export const PLATFORM_SIZE = {
  width: Style.DEVICE_WIDTH,
  height: (Style.DEVICE_WIDTH / 375) * 165,
};
export const FOREGROUND_HEIGHT = PLATFORM_SIZE.height * 0.9 + TOP_BAR.PADDING_TOP + ANIMATION_START_Y;

export const styles = StyleSheet.create({
  foregroundContainer: {
    display: "flex",
    marginTop: -ANIMATION_START_Y,
  },
  bottomHider: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(1000),
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
    bottom: 0,
    height: Style.adjust(40),
    backgroundColor: Colours.neutral.white,
  },
  offsetFill: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    backgroundColor: Colours.neutral.white,
  },
  infoBar: {
    position: "absolute",
    bottom: 0,
    width: Style.DEVICE_WIDTH,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(8),
    paddingLeft: Style.adjust(24),
  },
  yumojiWrapper: {
    position: "absolute",
    bottom: Style.adjust(10),
    right: Style.adjust(20),
    alignItems: "center",
  },
  heroHeaderBackground: {
    position: "absolute",
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(160),
    display: "flex",
    width: Style.DEVICE_WIDTH,
  },
  nameAndLevelWrapper: {
    position: "absolute",
    left: Style.adjust(16),
    top: TOP_BAR_HEIGHT + Style.adjust(20),
  },
});
