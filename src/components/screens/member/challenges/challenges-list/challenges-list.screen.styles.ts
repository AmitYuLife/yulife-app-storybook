import { ImageStyle, Platform, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import media from "@styles/media";

const IOS_PADDING_TOP = media.select(
  [
    {
      condition: [media.DEVICES.iPhone12.height, media.DEVICES.iPhone12ProMax.height].includes(Style.DEVICE_HEIGHT),
      value: 20,
    },
  ],
  0
);

const CHALLENGE_SET_TOP_OFFSET = media.select(
  [
    { condition: Platform.OS === "android", value: 0 },
    {
      condition: [media.DEVICES.iPhone12.height, media.DEVICES.iPhone12ProMax.height].includes(Style.DEVICE_HEIGHT),
      value: 44,
    },
    { condition: Style.hasNotch, value: 12 },
  ],
  20
);

export default StyleSheet.create({
  background: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  } as ImageStyle,
  challengeSetWrapper: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    paddingHorizontal: Style.adjust(16),
    position: "absolute",
    right: 0,
    top: CHALLENGE_SET_TOP_OFFSET,
  } as ViewStyle,
  topBarWrapper: {
    paddingTop: IOS_PADDING_TOP,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  topPad: {
    height: Platform.OS === "ios" ? Style.getSafeAreaStart() : 0,
  } as ViewStyle,
});
