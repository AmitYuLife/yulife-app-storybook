import { Platform } from "react-native";
import uuid from "react-native-uuid";
import * as Device from "expo-device";
import * as Application from "expo-application";
import { DETOX_ENABLED } from "@services/socket";
import * as semver from "semver";
import { Storage, EncryptedStorageKey } from "./storage";
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

// Devices with Dynamic Island - matching react-native-device-info implementation
// Uses model names for comparison (Device.modelName returns marketing names like "iPhone 14 Pro")
const DYNAMIC_ISLAND_DEVICES: { brand: string; model: string }[] = [
  { brand: "Apple", model: "iPhone 17" },
  { brand: "Apple", model: "iPhone Air" },
  { brand: "Apple", model: "iPhone 17 Pro" },
  { brand: "Apple", model: "iPhone 17 Pro Max" },
  { brand: "Apple", model: "iPhone 16" },
  { brand: "Apple", model: "iPhone 16 Plus" },
  { brand: "Apple", model: "iPhone 16 Pro" },
  { brand: "Apple", model: "iPhone 16 Pro Max" },
  { brand: "Apple", model: "iPhone 16e" },
  { brand: "Apple", model: "iPhone 15" },
  { brand: "Apple", model: "iPhone 15 Plus" },
  { brand: "Apple", model: "iPhone 15 Pro" },
  { brand: "Apple", model: "iPhone 15 Pro Max" },
  { brand: "Apple", model: "iPhone 14 Pro" },
  { brand: "Apple", model: "iPhone 14 Pro Max" },
];

// Devices with Notch - matching react-native-device-info implementation
// Includes all Apple devices with notch + various Android manufacturers
const NOTCH_DEVICES: { brand: string; model: string }[] = [
  // Apple devices (all Dynamic Island devices also have a notch area)
  ...DYNAMIC_ISLAND_DEVICES,
  { brand: "Apple", model: "iPhone 14" },
  { brand: "Apple", model: "iPhone 14 Plus" },
  { brand: "Apple", model: "iPhone 13 mini" },
  { brand: "Apple", model: "iPhone 13" },
  { brand: "Apple", model: "iPhone 13 Pro" },
  { brand: "Apple", model: "iPhone 13 Pro Max" },
  { brand: "Apple", model: "iPhone 12 mini" },
  { brand: "Apple", model: "iPhone 12" },
  { brand: "Apple", model: "iPhone 12 Pro" },
  { brand: "Apple", model: "iPhone 12 Pro Max" },
  { brand: "Apple", model: "iPhone 11" },
  { brand: "Apple", model: "iPhone 11 Pro" },
  { brand: "Apple", model: "iPhone 11 Pro Max" },
  { brand: "Apple", model: "iPhone X" },
  { brand: "Apple", model: "iPhone XS" },
  { brand: "Apple", model: "iPhone XS Max" },
  { brand: "Apple", model: "iPhone XR" },
  // Asus
  { brand: "Asus", model: "ZenFone 5" },
  { brand: "Asus", model: "ZenFone 5z" },
  // Google
  { brand: "google", model: "Pixel 3 XL" },
  { brand: "Google", model: "Pixel 3 XL" },
  // Huawei
  { brand: "Huawei", model: "P20" },
  { brand: "Huawei", model: "P20 Plus" },
  { brand: "Huawei", model: "P20 Lite" },
  { brand: "Huawei", model: "ANE-LX1" },
  { brand: "Huawei", model: "INE-LX1" },
  { brand: "Huawei", model: "POT-LX1" },
  { brand: "Huawei", model: "Mate 20 Lite" },
  { brand: "Huawei", model: "Mate 20 Pro" },
  { brand: "Huawei", model: "nova 3" },
  { brand: "Huawei", model: "nova 3i" },
  { brand: "Huawei", model: "Honor Play" },
  { brand: "Huawei", model: "Honor 10" },
  { brand: "Huawei", model: "Honor 8X" },
  { brand: "Huawei", model: "Honor 7X" },
  // LG
  { brand: "LG", model: "G7" },
  { brand: "LG", model: "G7 ThinQ" },
  { brand: "LG", model: "G7+ ThinQ" },
  { brand: "LG", model: "LM-Q910" },
  { brand: "LG", model: "LM-G710" },
  { brand: "LG", model: "LM-V405" },
  // Motorola
  { brand: "Motorola", model: "Motorola One" },
  { brand: "Motorola", model: "Moto g 5G" },
  { brand: "Motorola", model: "Moto G Power (2021)" },
  { brand: "Motorola", model: "Moto G(20)" },
  // Nokia
  { brand: "Nokia", model: "5.1 Plus" },
  { brand: "Nokia", model: "6.1 Plus" },
  { brand: "Nokia", model: "7.1" },
  { brand: "Nokia", model: "8.1" },
  // OnePlus
  { brand: "OnePlus", model: "6" },
  { brand: "OnePlus", model: "OnePlus 6" },
  { brand: "OnePlus", model: "A6003" },
  { brand: "OnePlus", model: "OnePlus 6T" },
  { brand: "OnePlus", model: "ONEPLUS A6000" },
  { brand: "OnePlus", model: "ONEPLUS A6013" },
  // Oppo
  { brand: "Oppo", model: "R15" },
  { brand: "Oppo", model: "R15 Pro" },
  { brand: "Oppo", model: "F7" },
  // Vivo
  { brand: "Vivo", model: "V9" },
  { brand: "Vivo", model: "X21" },
  { brand: "Vivo", model: "X21 UD" },
  // Xiaomi
  { brand: "Xiaomi", model: "Mi 8" },
  { brand: "Xiaomi", model: "Mi 8 Explorer Edition" },
  { brand: "Xiaomi", model: "Mi 8 SE" },
  { brand: "Xiaomi", model: "MI 8 UD" },
  { brand: "Xiaomi", model: "Mi 8 Lite" },
  { brand: "Xiaomi", model: "POCO F1" },
  { brand: "Xiaomi", model: "POCOPHONE F1" },
  { brand: "Xiaomi", model: "Redmi 6 Pro" },
  { brand: "Xiaomi", model: "Redmi Note 7" },
  { brand: "Xiaomi", model: "Redmi Note 7 Pro" },
  { brand: "Xiaomi", model: "Mi A2 Lite" },
  { brand: "Xiaomi", model: "Mi Play" },
  { brand: "Xiaomi", model: "Redmi Note 6 Pro" },
  // Other
  { brand: "Leagoo", model: "S9" },
  { brand: "Oukitel", model: "U18" },
  { brand: "Sharp", model: "Aquos S3" },
  { brand: "Blackview", model: "A30" },
  { brand: "Redmi", model: "K20 Pro" },
  // Samsung
  { brand: "samsung", model: "SM-M205F" },
  { brand: "samsung", model: "SM-A20" },
  { brand: "samsung", model: "SM-M305F" },
];

export const hasDynamicIsland = (): boolean => {
  const brand = (Device.brand ?? "").toLowerCase();
  const model = (Device.modelName ?? "").toLowerCase();
  return DYNAMIC_ISLAND_DEVICES.some(
    (device) => device.brand.toLowerCase() === brand && device.model.toLowerCase() === model
  );
};

export const hasNotch = (): boolean => {
  const brand = (Device.brand ?? "").toLowerCase();
  const model = (Device.modelName ?? "").toLowerCase();
  return NOTCH_DEVICES.some((device) => device.brand.toLowerCase() === brand && device.model.toLowerCase() === model);
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
