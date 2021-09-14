import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    marginBottom: Style.adjust(30),
    justifyContent: "flex-end",
  } as ViewStyle,
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
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  lottieWrapper: {
    width: Style.adjust(220),
    height: Style.adjust(220),
    marginBottom: Style.adjust(Style.isShortToMedium() ? Style.adjust(15) : Style.adjust(32)),
  },
  activeBuffsButton: {
    position: "absolute",
    top: Style.adjust(100),
    right: Style.adjust(34),
    shadowColor: "#000000",
    shadowOffset: { width: Style.adjust(2), height: Style.adjust(2) },
    shadowOpacity: 0.16,
    shadowRadius: 7,
    elevation: 2,
  },
});
