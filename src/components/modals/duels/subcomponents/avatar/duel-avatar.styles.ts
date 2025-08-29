import { Style, StyleSheet } from "@styles";
import { Platform, ViewStyle } from "react-native";
import { ImageStyle } from "@atoms";

const scaleAvatarBasedOnDeviceHeight = (width: number) => {
  const MAGIC_NUMBER = 875;
  const scaleFactor = Style.DEVICE_HEIGHT / MAGIC_NUMBER;
  return Style.adjust(width) * scaleFactor;
};

const WIDTH = Style.isShortToMediumAndroid ? 300 : 350;
const AVATAR_WIDTH = scaleAvatarBasedOnDeviceHeight(WIDTH);

export default StyleSheet.create({
  wrapper: {
    marginTop: Platform.select({
      ios: Style.adjust(-10),
      android: Style.isShortToMediumAndroid ? Style.adjust(-15) : 0,
    }),
    height: AVATAR_WIDTH - 2,
    width: AVATAR_WIDTH - 10,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: 1000,
    backgroundColor: "transparent",
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: "#dea4e5",
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH - 18,
    borderRadius: 1000,
    alignItems: "center",
  },
  image: {
    width: scaleAvatarBasedOnDeviceHeight(WIDTH),
    height: scaleAvatarBasedOnDeviceHeight(WIDTH + 300),
  } as ImageStyle,
  border: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    position: "absolute",
    top: 0,
    overflow: "hidden",
  } as ImageStyle,
});
