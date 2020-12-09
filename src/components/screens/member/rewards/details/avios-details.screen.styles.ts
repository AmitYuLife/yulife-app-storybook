import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Style, TOP_BAR } from "../../../../../styles";
import media from "@styles/media";

const TOP_BAR_PAD = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: TOP_BAR.HEIGHT + 6,
    },
    {
      condition: Platform.OS === "android",
      value: TOP_BAR.HEIGHT + 16,
    },
  ],
  TOP_BAR.HEIGHT + 20
);

export default StyleSheet.create({
  contentContainerStyle: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  contentContainerWithKeyboard: {
    paddingTop: Style.adjust(16),
  } as ViewStyle,
  contentWrapper: {
    marginTop: Style.adjust(30),
    paddingHorizontal: Style.adjust(15),
  } as ViewStyle,
  ctaWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Style.adjust(25),
    width: "100%",
  } as ViewStyle,
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    marginTop: Style.adjust(20),
    paddingHorizontal: Style.adjust(44),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(20),
    marginBottom: Style.adjust(15),
  } as TextStyle,
  kAV: {
    flex: 1,
  } as ViewStyle,
  linksWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Style.adjust(16),
    width: "100%",
  } as ViewStyle,
  paragraph: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(23),
  } as TextStyle,
  rewardTabsWrapper: {
    alignItems: "center",
  } as ViewStyle,
  textInput: {
    paddingHorizontal: 0,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  pad: {
    height: TOP_BAR_PAD,
  } as ViewStyle,
});
