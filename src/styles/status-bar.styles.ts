import { Platform } from "react-native";
import * as Device from "expo-device";
import { OptionsStatusBar } from "react-native-navigation";

export const MIN_ANDROID_VERSION_WITH_TRANSPARENT_STATUS_BAR = 15;

export const isAndroidWithTransparentStatusBar = () =>
  Platform.OS === "android" && Number(Device.osVersion ?? "0") >= MIN_ANDROID_VERSION_WITH_TRANSPARENT_STATUS_BAR;

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
