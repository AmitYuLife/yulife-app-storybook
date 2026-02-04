import { Platform } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import * as semver from "semver";
import * as Device from "expo-device";
import * as Application from "expo-application";
import * as uuid from "uuid";
import { EncryptedStorageKey, Storage } from "./storage";
const appJson = require("../../package.json");

export const isiOS = () => Platform.OS === "ios";
export const isAndroid = () => Platform.OS === "android";
export const isWeb = () => Platform.OS === "web";

export const isSamsung = () => {
  if (isAndroid()) {
    return (Device.brand ?? "").toLowerCase().includes("samsung");
  }

  return false;
};

export const getAppVersion = () => {
  const version = Application.nativeApplicationVersion ?? "1.0";

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

const getPlatformDeviceId = async (): Promise<string | null> => {
  try {
    if (Platform.OS === "ios") {
      return await Application.getIosIdForVendorAsync();
    }

    return Application.getAndroidId();
  } catch {
    return null;
  }
};

export const getUniqueDeviceId = async (): Promise<string> => {
  // Try to get persisted UUID first
  const persistedId = await Storage.getEncryptedItem(EncryptedStorageKey.deviceUniqueId);
  if (persistedId) {
    return persistedId;
  }

  // Get platform-specific ID or generate a new UUID
  const deviceId = (await getPlatformDeviceId()) ?? (uuid.v4().toString() as string);

  // Persist for future use
  await Storage.setEncryptedItem(EncryptedStorageKey.deviceUniqueId, deviceId);

  return deviceId;
};

export const getDeviceName = () => {
  if (Device.modelName === "Simulator iOS") {
    // expo-device deviceName is the name that can be set by the user of the device e.g. "Leomar's iPhone"
    return Device.deviceName;
  }

  return Device.modelName;
};
