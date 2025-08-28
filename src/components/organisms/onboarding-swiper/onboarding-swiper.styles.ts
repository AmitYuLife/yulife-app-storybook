import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import media from "@styles/media";

const NAVIGATION_VIEW_HEIGHT = Style.adjust(40);
const NAVIGATION_POSITION_BOTTOM = media.select(
  [
    {
      condition: Platform.OS === "ios" && !Style.hasNotch,
      value: Style.adjust(20),
    },
  ],
  Style.adjust(54)
);

export default StyleSheet.create({
  actionButtonText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: Colours.primary.p600,
  } as TextStyle,
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
  backButton: {
    fontSize: 16,
    letterSpacing: 0.8,
    color: Colours.primary.p600,
  } as TextStyle,
  navigationViewWrapper: {
    position: "absolute",
    bottom: NAVIGATION_POSITION_BOTTOM,
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    paddingEnd: 34,
    paddingStart: 34,
    justifyContent: "space-between",
    alignItems: "center",
    height: NAVIGATION_VIEW_HEIGHT,
  } as ViewStyle,
  navigationViewPad: {
    height: NAVIGATION_POSITION_BOTTOM + NAVIGATION_VIEW_HEIGHT,
  } as ViewStyle,
  pageIndicatorWrapper: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    right: 0,
    left: 0,
  } as ViewStyle,
  absoluteTop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
  actionButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  } as ViewStyle,
  lastPageActionButton: {
    backgroundColor: Colours.primary.p600,
    borderRadius: 8,
  } as ViewStyle,
  lastPageActionButtonText: {
    color: Colours.neutral.white,
    letterSpacing: 0.4,
  } as TextStyle,
});
