import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "@styles";
import media from "@styles/media";

export const SCROLL_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.DEVICE_HEIGHT >= media.DEVICES.iPhone8Plus.height,
      value: Style.getSafeAreaStart() + Style.SCALE_Y_UP_AND_DOWN(80),
    },
    {
      condition: Platform.OS === "android" && Style.DEVICE_HEIGHT <= media.DEVICES.Pixel2.height + 1,
      value: Style.SCALE_Y_UP_AND_DOWN(40),
    },
    {
      condition: Platform.OS === "android",
      value: Style.SCALE_Y_UP_AND_DOWN(80),
    },
  ],
  Style.getSafeAreaStart() + Style.adjust(40)
);

export const CLOSE_WRAPPER_TOP_MARGIN = media.select(
  [
    {
      condition:
        Platform.OS === "ios" &&
        [media.DEVICES.iPhone12.height, media.DEVICES.iPhone12ProMax.height].includes(Style.DEVICE_HEIGHT),
      value: Style.getSafeAreaStart() + 32,
    },
    {
      condition: Platform.OS === "android",
      value: Style.adjust(16),
    },
  ],
  Style.getSafeAreaStart() + 16
);

export default StyleSheet.create({
  iconWrapper: {
    marginRight: Style.adjust(16),
  } as ViewStyle,
  itemWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: Style.adjust(24),
  } as ViewStyle,
  referralSection: {
    position: "absolute",
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(32),
    bottom: 0,
    paddingTop: Style.adjust(32),
    height: Style.adjust(150),
    overflow: "hidden",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  referralBackgroundWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
  referralImage: {
    height: Style.adjust((Style.DEVICE_WIDTH * 120) / 375),
    width: Style.DEVICE_WIDTH,
  },
  wrapper: {
    flex: 1,
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: CLOSE_WRAPPER_TOP_MARGIN - 16,
    right: 0,
    padding: 16,
  } as ViewStyle,
  referralButtonWrapper: {
    paddingHorizontal: 40,
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  bottomPadding: {
    height: Style.adjust(120),
  } as ViewStyle,
  scrollView: {
    paddingLeft: Platform.select({
      ios: Style.SCALE_UP_AND_DOWN(105),
      android: Style.SCALE_UP_AND_DOWN(120),
    }),
  } as ViewStyle,
  scrollViewContentContainer: {
    alignItems: "flex-start", // default: "stretch" expands the hit slop to the edge of the screen
  } as ViewStyle,
  debugVersionWrapper: {
    marginTop: Style.adjust(8),
    flexDirection: "row",
  } as ViewStyle,
});
