import { createAction } from "@reduxjs/toolkit";
import { HealthProvider } from "@yu-life/react-native-yu-health";

export const YU_HEALTH_SET_ACTIVE_PROVIDER = "YU_HEALTH_SET_ACTIVE_PROVIDER";

export const setActiveYuHealthProvider = createAction<HealthProvider, "YU_HEALTH_SET_ACTIVE_PROVIDER">(
  YU_HEALTH_SET_ACTIVE_PROVIDER
);
