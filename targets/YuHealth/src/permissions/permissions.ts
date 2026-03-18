import { HealthProviderCapability } from "../health-provider-capability.enum";
import { Platform } from "react-native";
import {
  addSystemPermissionStatusOfCapabilitiesAndroid,
  hasPermissionsAndroid,
  requestPermissionAndroid,
} from "./android-permissions";
import {
  ICapabilityPermissions,
  HealthPermissionStatus,
  IProviderPermission,
} from "../interface/permissions.interface";
import { addSystemPermissionStatusOfCapabilitiesIOS } from "./ios-permissions";
import { YuHealthModule } from "../YuHealthModule";

export const requestSystemPermission = async (capabilities: HealthProviderCapability[]) => {
  if (Platform.OS === "ios") {
    const notGrantedCapabilities: Record<string, HealthPermissionStatus> = {};
    return {
      capabilitiesToRequest: capabilities,
      notGrantedCapabilities,
    };
  }

  return requestPermissionAndroid(capabilities);
};

export const addSystemPermissionStatusOfCapabilities = async (
  providerPermissions: Pick<IProviderPermission, "identifier" | "capability" | "status">[]
) => {
  if (Platform.OS === "ios") {
    return addSystemPermissionStatusOfCapabilitiesIOS(providerPermissions);
  }

  return addSystemPermissionStatusOfCapabilitiesAndroid(providerPermissions);
};

export const getPermissionStatusOfCapabilities = async (
  capabilities: HealthProviderCapability[]
): Promise<ICapabilityPermissions> => {
  const capabilitiesPermissions = await YuHealthModule.getPermissionStatusOfCapabilities(capabilities);

  return addSystemPermissionStatusOfCapabilities(capabilitiesPermissions.providerPermissions);
};

export const requestPermissions = async (
  capabilities: HealthProviderCapability[],
  provider?: string
): Promise<Record<HealthProviderCapability, HealthPermissionStatus>> => {
  const { capabilitiesToRequest, notGrantedCapabilities } = await requestSystemPermission(capabilities);

  if (capabilitiesToRequest.length === 0) {
    return notGrantedCapabilities;
  }

  await YuHealthModule.requestPermissions(capabilitiesToRequest, provider);

  return await hasPermissions(capabilities);
};

export const requestPermission = async (
  capability: HealthProviderCapability,
  provider?: string
): Promise<HealthPermissionStatus> => {
  const response = await requestPermissions([capability], provider);
  return response[capability];
};

export const hasPermissions = async (
  capabilities: HealthProviderCapability[],
  provider?: string
): Promise<Record<HealthProviderCapability, HealthPermissionStatus>> => {
  const providerCapabilitiesPermissions = (await YuHealthModule.hasPermissions(
    capabilities,
    provider
  )) as unknown as Record<HealthProviderCapability, HealthPermissionStatus>;

  if (Platform.OS === "ios") {
    return providerCapabilitiesPermissions;
  }

  return hasPermissionsAndroid(providerCapabilitiesPermissions);
};

export const hasPermission = async (
  capability: HealthProviderCapability,
  provider?: string
): Promise<HealthPermissionStatus> => {
  const response = await hasPermissions([capability], provider);
  return response[capability];
};
