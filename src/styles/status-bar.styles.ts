import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { OptionsStatusBar } from "react-native-navigation";

export const MIN_ANDROID_VERSION_WITH_TRANSPARENT_STATUS_BAR = 15;

export const isAndroidWithTransparentStatusBar = () =>
  Platform.OS === "android" && Number(DeviceInfo.getSystemVersion()) >= MIN_ANDROID_VERSION_WITH_TRANSPARENT_STATUS_BAR;

export const getRNNStatusBarStyle = (): OptionsStatusBar => {
  if (isAndroidWithTransparentStatusBar()) {
    return {
      drawBehind: true,
      visible: true,
      translucent: true,
    };
  }

  return {
    drawBehind: false,
    visible: true,
  };
};
