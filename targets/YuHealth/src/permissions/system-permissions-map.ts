import { HealthProviderCapability } from "../health-provider-capability.enum";
import { Permission } from "react-native";

export const ANDROID_SYSTEM_PERMISSIONS_MAP = new Map<HealthProviderCapability, Permission[]>([
  [HealthProviderCapability.STEP_COUNT, ["android.permission.ACTIVITY_RECOGNITION"]],
  [HealthProviderCapability.MINDFUL_MINUTES, ["android.permission.ACTIVITY_RECOGNITION"]],
  [
    HealthProviderCapability.CYCLING_DISTANCE,
    ["android.permission.ACCESS_FINE_LOCATION", "android.permission.ACTIVITY_RECOGNITION"],
  ],
  [HealthProviderCapability.HEART_RATE, ["android.permission.ACTIVITY_RECOGNITION"]],
  [HealthProviderCapability.WORKOUT_MINUTES, ["android.permission.ACTIVITY_RECOGNITION"]],
  [HealthProviderCapability.ACTIVITIES, ["android.permission.ACTIVITY_RECOGNITION"]],
  [HealthProviderCapability.CALORIES, ["android.permission.ACTIVITY_RECOGNITION"]],
]);

export const ANDROID_SYSTEM_PERMISSION_API_LEVEL_REQUIRED = new Map<Permission, number>([
  ["android.permission.ACTIVITY_RECOGNITION", 29],
]);
