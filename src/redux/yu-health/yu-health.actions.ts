import { createAction } from "@reduxjs/toolkit";
import {
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
} from "@yu-life/react-native-yu-health";
import { YuHealthStatus } from "./yu-health.types";

export const YU_HEALTH_SET_ACTIVE_PROVIDER = "YU_HEALTH_SET_ACTIVE_PROVIDER";
export const YU_HEALTH_REFRESH_ALL_CAPABILITY_PERMISSIONS = "YU_HEALTH_REFRESH_ALL_CAPABILITY_PERMISSIONS";
export const YU_HEALTH_UPDATE_CAPABILITY_STATUSES = "YU_HEALTH_UPDATE_CAPABILITY_STATUSES";
export const YU_HEALTH_UPDATE_PROVIDER_AVAILABILITY = "YU_HEALTH_UPDATE_PROVIDER_AVAILABILITY";
export const YU_HEALTH_PERMISSIONS_REQUESTED = "YU_HEALTH_PERMISSIONS_REQUESTED";
export const YU_HEALTH_REFRESH_CAPABILITY_PERMISSIONS = "YU_HEALTH_REFRESH_CAPABILITY_PERMISSIONS";
export const YU_HEALTH_SET_STATUS = "YU_HEALTH_SET_STATUS";
export const YU_HEALTH_RESET_YU_HEALTH_STATE = "YU_HEALTH_RESET_YU_HEALTH_STATE";

/* Dispatched when YuHealth permissions have potentially changed */
export const yuHealthPermissionsRequested = createAction<void, "YU_HEALTH_PERMISSIONS_REQUESTED">(
  YU_HEALTH_PERMISSIONS_REQUESTED
);

export const refreshProviderAvailability = createAction<
  Record<HealthProvider, HealthProviderAvailability>,
  "YU_HEALTH_UPDATE_PROVIDER_AVAILABILITY"
>(YU_HEALTH_UPDATE_PROVIDER_AVAILABILITY);

export const setActiveYuHealthProvider = createAction<HealthProvider, "YU_HEALTH_SET_ACTIVE_PROVIDER">(
  YU_HEALTH_SET_ACTIVE_PROVIDER
);

type UpdateCapabilityStatusType = Record<HealthProviderCapability, HealthPermissionStatus>;
export const updateCapabilityStatuses = createAction<
  UpdateCapabilityStatusType,
  "YU_HEALTH_UPDATE_CAPABILITY_STATUSES"
>(YU_HEALTH_UPDATE_CAPABILITY_STATUSES);

export const refreshCapabilityPermissions = createAction<void, "YU_HEALTH_REFRESH_CAPABILITY_PERMISSIONS">(
  YU_HEALTH_REFRESH_CAPABILITY_PERMISSIONS
);

export const setYuHealthStatus = createAction<YuHealthStatus, "YU_HEALTH_SET_STATUS">(YU_HEALTH_SET_STATUS);

export const resetYuHealthState = createAction<void, "YU_HEALTH_RESET_YU_HEALTH_STATE">(
  YU_HEALTH_RESET_YU_HEALTH_STATE
);
