import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style, TOP_BAR } from "@styles";
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
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  rewardTabsWrapper: {
    alignItems: "center",
  } as ViewStyle,
  wrapper: {
    flex: 1,
    paddingBottom: Style.adjust(30),
  } as ViewStyle,
  pad: {
    height: TOP_BAR_PAD,
  } as ViewStyle,
  contentItemButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  image: {
    marginBottom: Style.adjust(10),
  },
  imageStyle: {
    borderRadius: 8,
  },
  form: {
    marginTop: Style.adjust(25),
  },
  paddingTop: {
    paddingTop: Style.adjust(24),
  },
});
