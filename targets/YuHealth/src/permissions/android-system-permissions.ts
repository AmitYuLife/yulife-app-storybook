import { HealthProviderCapability } from "../health-provider-capability.enum";
import { PermissionsAndroid, Permission } from "react-native";
import { Platform } from "react-native";
import { ANDROID_SYSTEM_PERMISSIONS_MAP, ANDROID_SYSTEM_PERMISSION_API_LEVEL_REQUIRED } from "./system-permissions-map";

export const getUniqueSystemPermissions = (capabilities: HealthProviderCapability[]) => {
  const uniqueSystemPermissionBasedOnCapabilities: Set<Permission> = new Set();
  const supportedCapabilities = new Set<HealthProviderCapability>();

  for (const capability of capabilities) {
    if (ANDROID_SYSTEM_PERMISSIONS_MAP.has(capability)) {
      supportedCapabilities.add(capability);
      const permissions = ANDROID_SYSTEM_PERMISSIONS_MAP.get(capability) as Permission[];

      permissions.forEach((permission) => {
        uniqueSystemPermissionBasedOnCapabilities.add(permission);
      });
    }
  }

  return {
    uniqueSystemPermissionBasedOnCapabilities,
    supportedCapabilities,
  };
};

export const getSystemPermissionStatus = async (systemPermissionBasedOnCapabilities: Set<Permission>) => {
  const systemPermissionsStatus: Record<string, boolean> = {};
  const systemPermissionToRequest: Permission[] = [];
  for (const permission of systemPermissionBasedOnCapabilities) {
    const hasPermission = await checkSystemPermission(permission);
    if (!hasPermission) {
      systemPermissionToRequest.push(permission);
    } else {
      systemPermissionsStatus[permission] = true;
    }
  }

  if (systemPermissionToRequest.length > 0) {
    const result = await PermissionsAndroid.requestMultiple(systemPermissionToRequest);

    for (const permission of systemPermissionToRequest) {
      systemPermissionsStatus[permission] = result[permission] === "granted";
    }
  }

  return systemPermissionsStatus;
};

export const checkMultipleSystemPermissions = async (permissions: Permission[]) => {
  let hasPermission = true;

  for (const permission of permissions) {
    const permissionStatus = await checkSystemPermission(permission);
    if (!permissionStatus) {
      hasPermission = false;
      break;
    }
  }

  return hasPermission;
};

export const checkSystemPermission = async (permission: Permission) => {
  const isPermissionGrantedByDefault =
    ANDROID_SYSTEM_PERMISSION_API_LEVEL_REQUIRED.has(permission) &&
    +Platform.Version < (ANDROID_SYSTEM_PERMISSION_API_LEVEL_REQUIRED.get(permission) as number);

  if (isPermissionGrantedByDefault) {
    return true;
  }

  return await PermissionsAndroid.check(permission);
};
