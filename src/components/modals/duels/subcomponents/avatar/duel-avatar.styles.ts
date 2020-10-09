import { Style } from "@styles";
import { StyleSheet, Platform, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";

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
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH - 18,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 1000,
  } as ViewStyle,
  image: {
    backgroundColor: "#dea4e5",
    width: scaleAvatarBasedOnDeviceHeight(WIDTH + 180),
    height: scaleAvatarBasedOnDeviceHeight(WIDTH + 400),
  } as ImageStyle,
  border: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    position: "absolute",
    top: 0,
    overflow: "hidden",
  } as ImageStyle,
});
