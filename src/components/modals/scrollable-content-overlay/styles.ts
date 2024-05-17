import { Style, Colours } from "@styles";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";

export const BUTTON_HEIGHT = Style.adjust(60);
export const BOTTOM_GRADIENT_BASE_HEIGHT = Style.adjust(140);
const IMAGE_OVERSHOOT_HEIGHT = Style.adjust(40);
const HEADER_IMAGE_SIZE = Style.adjust(140);

export const scrollableContentOverlayStyles = StyleSheet.create({
  bottomWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  overshootCushion: {
    paddingTop: IMAGE_OVERSHOOT_HEIGHT,
  },
  safeAreaView: {
    backgroundColor: Colours.neutral.white,
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
  } as ViewStyle,
  imageWrapper: {
    position: "absolute",
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
    height: HEADER_IMAGE_SIZE,
  } as ViewStyle,
  innerWrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(80),
    maxHeight: Style.DEVICE_HEIGHT / 1.2,
    minHeight: Style.DEVICE_HEIGHT / 2,
  },
  topPad: {
    height: Style.adjust(40),
  },
  textWrapper: {
    marginBottom: Style.adjust(24),
    textAlign: "center",
  } as TextStyle,
  buttonAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonWrapper: {
    paddingTop: Style.adjust(12),
    paddingHorizontal: Style.adjust(32),
  },
  closeButtonWrapper: {
    position: "absolute",
    top: Style.adjust(40),
    right: 0,
    padding: Style.adjust(16),
  },
  bottomFadeWrapper: {
    position: "absolute",
    top: Style.adjust(-16),
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  topFadeWrapper: {
    position: "absolute",
    height: Style.adjust(120),
    top: IMAGE_OVERSHOOT_HEIGHT,
    left: 0,
    right: 0,
    overflow: "hidden",
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
  },
});
