import { TextStyle, ViewStyle, Platform } from "react-native";
import { Style, StyleSheet } from "@styles";

const NAVIGATION_VIEW_HEIGHT = Style.adjust(40);
const NAVIGATION_POSITION_BOTTOM = Style.adjust(54);

export default StyleSheet.create({
  actionButtonText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
  } as TextStyle,
  backButton: {
    fontSize: 16,
    letterSpacing: 0.8,
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
    end: 0,
    start: 0,
  } as ViewStyle,
  absoluteTop: {
    position: "absolute",
    start: 0,
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
  actionButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  } as ViewStyle,
  lastPageActionButton: {
    borderRadius: 8,
  } as ViewStyle,
  lastPageActionButtonText: {
    letterSpacing: 0.4,
  } as TextStyle,
});
