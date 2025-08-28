import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";
import media from "@styles/media";
import { PADDING_TOP } from "@styles/top-bar.styles";

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

export default StyleSheet.create({
  iconWrapper: {
    position: "relative",
    marginEnd: Style.adjust(8),
  } as ViewStyle,
  itemWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: Style.adjust(16),
    borderRadius: Style.adjust(8),
    paddingHorizontal: Style.adjust(8),
    paddingVertical: Style.adjust(4),
  } as ViewStyle,
  itemWrapperHighlight: {
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: PADDING_TOP,
    right: 0,
    padding: 16,
  } as ViewStyle,
  bottomPadding: {
    height: Style.adjust(120),
  } as ViewStyle,
  scrollView: {
    paddingStart: Platform.select({
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
  sparks: {
    position: "absolute",
    top: Style.adjust(-10),
    right: Style.adjust(-8),
    width: Style.adjust(42),
    height: Style.adjust(46),
  },
});
