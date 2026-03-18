import { HealthProviderCapability } from "../health-provider-capability.enum";
import { Permission } from "react-native";

export enum HealthPermissionStatus {
  granted = "GRANTED",
  denied = "DENIED",
  notDetermined = "NOT_DETERMINED",
  unsupported = "UNSUPPORTED",
  notAsked = "NOT_ASKED",
  systemPermissionRequired = "SYSTEM_PERMISSION_REQUIRED",
}

export type Provider = "googleFit" | "healthConnect" | "samsungHealth" | "appleHealth";

export type AppleSystemPermission = "MotionAndFitnessPermission";

export type SystemPermission = Permission | AppleSystemPermission;

export type IProviderPermission = {
  identifier: string;
  status: HealthPermissionStatus;
  systemPermissionsRequired: SystemPermission[];
  capability: HealthProviderCapability;
};

export type ISystemPermission = {
  identifier: SystemPermission;
  status: HealthPermissionStatus;
};

export interface ICapabilityPermissions {
  systemPermissions: ISystemPermission[];
  providerPermissions: IProviderPermission[];
}
