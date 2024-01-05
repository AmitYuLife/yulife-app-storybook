import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { DETOX_ENABLED } from "@services/socket";
import * as semver from "semver";
const appJson = require("../../package.json");

export const isiOS = () => Platform.OS === "ios";
export const isAndroid = () => Platform.OS === "android";
export const isWeb = () => Platform.OS === "web";

export const isSamsung = () => {
  if (isAndroid()) {
    return DeviceInfo.getBrand().toLowerCase().includes("samsung");
  }

  return false;
};

export const getAppVersion = () => {
  const version = DeviceInfo.getVersion();

  // means is local
  if (DETOX_ENABLED || version === "1.0") {
    return appJson.version;
  }

  return version;
};

export const appVersionSatisfies = (range: string) => {
  const appVersion = getAppVersion();

  if (!semver.validRange(range)) {
    return false;
  }

  // app development local has always version = 1.0
  if (!semver.valid(appVersion)) {
    return false;
  }

  return semver.satisfies(appVersion, range);
};
