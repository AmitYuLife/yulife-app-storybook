import { YuHealthCapability as TypeYuHealthCapability } from "@graphql/_core/schema/globalTypes";
import { YuHealthCapability } from "@graphql/__generated";
import { HealthPermissionStatus, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { Alert, Linking } from "react-native";

// The capabilities to request when connected
export const YU_HEALTH_DEFAULT_CAPABILITIES = [
  HealthProviderCapability.STEP_COUNT,
  HealthProviderCapability.MINDFUL_MINUTES,
  HealthProviderCapability.CYCLING_DISTANCE,
];

// All currently supported capabilities, requested by settings
export const YU_HEALTH_ALL_CAPABILITIES = [
  HealthProviderCapability.STEP_COUNT,
  HealthProviderCapability.MINDFUL_MINUTES,
  HealthProviderCapability.CYCLING_DISTANCE,
  HealthProviderCapability.ACTIVITIES,
];

/**
 * Open settings when user has declined system permission
 */
export const openSettingsAlert = () => async () => {
  // TODO: Localise this, get copy. We currently don't do this with fitkit, and ignore the system permission
  Alert.alert("System permission needed", "Please open YuLife settings and enable the permission", [
    {
      text: "Close",
    },
    {
      text: "Open settings",
      onPress: () => {
        Linking.openSettings();
      },
    },
  ]);
};

/**
 * If permission is granted or not determined, we are safe to start using health data
 */
export const shouldContinueWithPermissionStatus = (status: HealthPermissionStatus) => {
  return status === HealthPermissionStatus.granted || status === HealthPermissionStatus.notDetermined;
};

/**
 * We should only request permissions if status is not asked or denied
 */
export const shouldRequestHealthPermission = (status: HealthPermissionStatus) => {
  return status === HealthPermissionStatus.notAsked || status === HealthPermissionStatus.denied;
};

type MergedCapability = YuHealthCapability | TypeYuHealthCapability;

export function gqlCapabilityToCapability(
  capability: (YuHealthCapability | TypeYuHealthCapability)[]
): HealthProviderCapability[];
export function gqlCapabilityToCapability(
  capability: YuHealthCapability | TypeYuHealthCapability
): HealthProviderCapability;
export function gqlCapabilityToCapability(
  capability: MergedCapability | MergedCapability[]
): HealthProviderCapability | HealthProviderCapability[] {
  if (Array.isArray(capability)) {
    return capability.map(gqlCapabilityToCapability);
  }

  switch (capability) {
    case YuHealthCapability.StepCount:
      return HealthProviderCapability.STEP_COUNT;
    case YuHealthCapability.MindfulMinutes:
      return HealthProviderCapability.MINDFUL_MINUTES;
    case YuHealthCapability.CyclingDistance:
      return HealthProviderCapability.CYCLING_DISTANCE;
    case YuHealthCapability.Activities:
      return HealthProviderCapability.ACTIVITIES;
    case YuHealthCapability.Calories:
      return HealthProviderCapability.CALORIES;
    case YuHealthCapability.HeartRate:
      return HealthProviderCapability.HEART_RATE;
    case YuHealthCapability.WorkoutMinutes:
      return HealthProviderCapability.WORKOUT_MINUTES;
  }

  throw new Error(`Capability ${capability} not supported for conversion!`);
}
