import Logger from "@services/logging/logger";
import { Permission, PermissionsAndroid, Platform, Rationale } from "react-native";

const DEFAULT_RATIONAL = {
  title: "New  permission needed",
  message: "In order to use the Yulife app please enable a new permission.",
  buttonPositive: "Enable",
};

const FINE_LOCATION_RATIONAL = {
  title: "Device location permission needed",
  message: "In order to use the Yulife app please enable device location access.",
  buttonPositive: "Enable",
};

const permissionRationalMap: Map<Permission, Rationale> = new Map([
  ["android.permission.ACCESS_FINE_LOCATION", FINE_LOCATION_RATIONAL],
]);

export const requestAndroidSystemPermission = async (permission: Permission, requestFitkitPermission?: () => void) => {
  if (Platform.OS === "ios") {
    return;
  }

  const isPermissionGranted = await PermissionsAndroid.check(permission);
  const rational = permissionRationalMap.has(permission) ? permissionRationalMap.get(permission) : DEFAULT_RATIONAL;
  const result = isPermissionGranted ? "granted" : await PermissionsAndroid.request(permission, rational);

  if (!isPermissionGranted) {
    Logger.logMixpanelEvent("permission_requested", { type: permission, status: result });
  }

  if (permission === "android.permission.ACCESS_FINE_LOCATION") {
    Logger.setUserProperties({ data_permission_location: result });
  }

  if (result === "granted" && requestFitkitPermission) {
    await requestFitkitPermission();
  }
};
