import { HealthProviderCapability } from "../health-provider-capability.enum";
import { Permission } from "react-native";
import {
  ICapabilityPermissions,
  HealthPermissionStatus,
  IProviderPermission,
} from "../interface/permissions.interface";
import { ANDROID_SYSTEM_PERMISSIONS_MAP } from "./system-permissions-map";
import {
  checkMultipleSystemPermissions,
  checkSystemPermission,
  getSystemPermissionStatus,
  getUniqueSystemPermissions,
} from "./android-system-permissions";

export const addSystemPermissionStatusOfCapabilitiesAndroid = async (
  providerPermissions: Pick<IProviderPermission, "identifier" | "capability" | "status">[]
) => {
  const systemPermissionsMap = new Map<string, HealthPermissionStatus>();
  const response: ICapabilityPermissions = {
    systemPermissions: [],
    providerPermissions: [],
  };

  for (const providerPermission of providerPermissions) {
    const systemPermissionsRequired: Permission[] = [];
    const systemPermissions = ANDROID_SYSTEM_PERMISSIONS_MAP.get(providerPermission.capability);

    if (!systemPermissions) {
      continue;
    }

    for (const systemPermission of systemPermissions) {
      systemPermissionsRequired.push(systemPermission);

      if (systemPermissionsMap.has(systemPermission)) {
        continue;
      }

      const hasPermission = await checkSystemPermission(systemPermission);

      systemPermissionsMap.set(
        systemPermission,
        hasPermission ? HealthPermissionStatus.granted : HealthPermissionStatus.denied
      );
    }

    response.providerPermissions.push({
      identifier: providerPermission.identifier,
      status: providerPermission.status,
      capability: providerPermission.capability,
      systemPermissionsRequired,
    });
  }

  response.systemPermissions = Array.from(systemPermissionsMap).map(([identifier, status]) => ({
    identifier: identifier as Permission,
    status,
  }));

  return response;
};

export const requestPermissionAndroid = async (capabilities: HealthProviderCapability[]) => {
  const { uniqueSystemPermissionBasedOnCapabilities, supportedCapabilities } = getUniqueSystemPermissions(capabilities);

  const systemPermissionsStatus = await getSystemPermissionStatus(uniqueSystemPermissionBasedOnCapabilities);

  return getCapabilitiesStatus(Array.from(supportedCapabilities), systemPermissionsStatus);
};

const getCapabilitiesStatus = async (
  supportedCapabilities: HealthProviderCapability[],
  systemPermissionsStatus: Record<string, boolean>
) => {
  const notGrantedCapabilities: Record<string, HealthPermissionStatus> = {};
  const capabilitiesToRequest: HealthProviderCapability[] = [];
  for (const capability of supportedCapabilities) {
    const permissions = ANDROID_SYSTEM_PERMISSIONS_MAP.get(capability) as Permission[];
    let hasPermission = true;
    for (const permission of permissions) {
      if (!systemPermissionsStatus[permission]) {
        hasPermission = false;
        break;
      }
    }

    if (!hasPermission) {
      notGrantedCapabilities[capability] = HealthPermissionStatus.systemPermissionRequired;
    } else {
      capabilitiesToRequest.push(capability);
    }
  }

  return {
    capabilitiesToRequest,
    notGrantedCapabilities,
  };
};

export const hasPermissionsAndroid = async (
  providerCapabilitiesPermissions: Record<HealthProviderCapability, HealthPermissionStatus>
): Promise<Record<HealthProviderCapability, HealthPermissionStatus>> => {
  const response: Record<HealthProviderCapability, HealthPermissionStatus> = providerCapabilitiesPermissions;

  for (const capability of Object.keys(providerCapabilitiesPermissions) as HealthProviderCapability[]) {
    const providerCapabilityStatus = providerCapabilitiesPermissions[capability];

    if (providerCapabilityStatus !== HealthPermissionStatus.granted) {
      // Unless the provider is granted, we don't care about system permission
      response[capability] = providerCapabilityStatus;
      continue;
    }

    const systemPermissions = ANDROID_SYSTEM_PERMISSIONS_MAP.get(capability);
    if (systemPermissions) {
      const hasPermissions = await checkMultipleSystemPermissions(systemPermissions);

      if (!hasPermissions) {
        response[capability] = HealthPermissionStatus.systemPermissionRequired;
        continue;
      }
    }

    response[capability] = HealthPermissionStatus.granted;
  }

  return response;
};
