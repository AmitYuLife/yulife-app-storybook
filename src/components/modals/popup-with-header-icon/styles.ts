import { Colours, Style } from "@styles";
import { Platform, StyleSheet, ViewStyle } from "react-native";

export const BUTTON_HEIGHT = Style.adjust(60);
export const DEFAULT_BOTTOM_GRADIENT_BASE_HEIGHT = Style.adjust(Platform.select({ ios: 65, android: 45 }));
export const SCROLLER_PUSHUP_SIZE = Style.adjust(Platform.select({ ios: 30, android: 50 }));

const IMAGE_OVERSHOOT_HEIGHT = Style.adjust(40);
export const HEADER_IMAGE_SIZE = Style.adjust(140);

export const modalStyles = StyleSheet.create({
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
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
    height: HEADER_IMAGE_SIZE,
  } as ViewStyle,
  image: {
    width: HEADER_IMAGE_SIZE,
    height: HEADER_IMAGE_SIZE,
  },
  innerWrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(80),
    maxHeight: Style.DEVICE_HEIGHT / 1.2,
  },
  topPad: {
    height: Style.adjust(40),
  },
  buttonAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonWrapper: {
    paddingHorizontal: Style.adjust(32),
    bottom: Style.adjust(16),
  },
  closeButtonWrapper: {
    position: "absolute",
    top: Style.adjust(40),
    right: 0,
    padding: Style.adjust(16),
  },
  bottomFadeWrapper: {
    position: "absolute",
    height: "140%",
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
