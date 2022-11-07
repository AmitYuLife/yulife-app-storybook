import { Style } from "@styles/index";
import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";

const scaleFactor = Style.DEVICE_HEIGHT / 600;

const styles = StyleSheet.create({
  fullScreen: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: "auto",
    padding: Style.adjust(24),
    paddingTop: Platform.OS === "ios" ? Style.adjust(68) : Style.adjust(48),
    paddingBottom: Platform.OS === "ios" ? Style.adjust(24) : Style.adjust(48),
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  } as ViewStyle,
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 8,
    paddingVertical: 24,
    display: "flex",
    alignContent: "space-between",
    justifyContent: "space-between",
  } as ViewStyle,
  scrollView: {
    paddingHorizontal: 29,
    display: "flex",
    alignSelf: "stretch",
    minHeight: "100%",
  } as ViewStyle,
  heading: {
    fontWeight: "600",
    color: "#464647",
    paddingHorizontal: 30,
    lineHeight: 32,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  text: {
    paddingVertical: 8,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
    marginHorizontal: "auto",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  whiteFade: {
    position: "absolute",
    top: -30,
    height: 32,
    width: "100%",
  } as ViewStyle,
  bottomSectionWrapper: {
    position: "relative",
  } as ViewStyle,
  buttonWrapper: {
    paddingHorizontal: 29,
  } as ViewStyle,
  headingWrapper: {
    flex: 0.1,
  } as ViewStyle,
  textWrapper: {
    flex: 2,
  } as ViewStyle,
  coinWrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  coinScale: {
    transform: [{ scale: Style.DEVICE_HEIGHT / 600 }],
    paddingTop: Style.adjust(Math.pow(scaleFactor, 4) * 10),
    paddingBottom: Style.adjust(Math.pow(scaleFactor, 4) * 10),
  } as ViewStyle,
  yucoinBadgeWrapper: {
    width: Style.adjust(218),
    height: Style.adjust(218),
  } as ViewStyle,
  yucoinBadge: {
    ...StyleSheet.absoluteFillObject,
    margin: 9,
  } as ViewStyle,
});

export default styles;
