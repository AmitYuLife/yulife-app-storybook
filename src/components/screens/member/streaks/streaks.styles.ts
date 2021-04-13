import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles";

const IMAGE_SIZE = Style.isShortToMediumAndroid() ? 220 : 320;

export default StyleSheet.create({
  buttonWrapper: {
    height: Style.adjust(176),
    justifyContent: "flex-end",
  },
  buttonPrimaryWrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  buttonSecondaryWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  headingWrapper: {
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  streakLabel: {
    fontSize: Style.adjust(15),
    lineHeight: Style.adjust(15),
    textAlign: "center",
  } as TextStyle,
  streakLabelLast: {
    fontSize: Style.adjust(Style.isShortAndroid() ? 11 : 12),
    lineHeight: Style.adjust(11),
    marginTop: 0,
  } as TextStyle,
  streakWrapperLast: {
    marginRight: 0,
  } as ViewStyle,
  streaksWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    flex: 1,
    paddingHorizontal: 24,
  } as ViewStyle,
  lottieWrapper: {
    width: Style.adjust(IMAGE_SIZE),
    height: Style.adjust(IMAGE_SIZE),
    marginBottom: Style.adjust(Style.isShortToMediumAndroid() ? 0 : 32),
  },
});
