import { createAction } from "@reduxjs/toolkit";
import { HealthPermissionStatus, HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";

export const YU_HEALTH_SET_ACTIVE_PROVIDER = "YU_HEALTH_SET_ACTIVE_PROVIDER";
export const YU_HEALTH_REFRESH_ALL_CAPABILITY_PERMISSIONS = "YU_HEALTH_REFRESH_ALL_CAPABILITY_PERMISSIONS";
export const YU_HEALTH_UPDATE_CAPABILITY_STATUSES = "YU_HEALTH_UPDATE_CAPABILITY_STATUSES";

export const setActiveYuHealthProvider = createAction<HealthProvider, "YU_HEALTH_SET_ACTIVE_PROVIDER">(
  YU_HEALTH_SET_ACTIVE_PROVIDER
);

export const refreshAllCapabilityPermissions = createAction<null, "YU_HEALTH_REFRESH_ALL_CAPABILITY_PERMISSIONS">(
  YU_HEALTH_REFRESH_ALL_CAPABILITY_PERMISSIONS
);

type UpdateCapabilityStatusType = Record<HealthProviderCapability, HealthPermissionStatus>;
export const updateCapabilityStatuses = createAction<
  UpdateCapabilityStatusType,
  "YU_HEALTH_UPDATE_CAPABILITY_STATUSES"
>(YU_HEALTH_UPDATE_CAPABILITY_STATUSES);
