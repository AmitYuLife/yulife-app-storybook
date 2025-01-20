import { YuHealthCapability, YuHealthDataType, YuHealthOptions as YuHealthOptionsGql } from "@graphql/__generated";
import {
  HealthDataType,
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
} from "@yu-life/react-native-yu-health";
import { Alert, Linking } from "react-native";
import { isAndroid } from "./device";
import { t } from "@locale";
import { YuHealthOptions as YuHealthOptionsRedux } from "@redux/_core/types";
import { fetchFitkitActivityData, fetchFitkitStepsData } from "@services/fitkit/fitkit.helpers";
import { IFetchActivityRequest } from "@services/fitkit/fitkit.types";
import { fetchYuHealthActivityData, fetchYuHealthStepsData } from "@services/fitkit/yu-health.helpers";

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

// Supported providers
export const SUPPORTED_PROVIDERS = [
  HealthProvider.googleFit,
  HealthProvider.healthKit,
  HealthProvider.samsungHealth,
  // HealthProvider.healthConnect,
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

export const PROVIDER_RECOMMENDED_ORDER = [
  HealthProvider.googleFit,
  HealthProvider.healthKit,
  HealthProvider.samsungHealth,
  HealthProvider.healthConnect,
];

export const getRecommendedProvider = ({
  providerAvailabilities,
}: {
  providerAvailabilities?: Record<HealthProvider, HealthProviderAvailability>;
}): HealthProvider => {
  if (!providerAvailabilities) {
    return null;
  }

  for (const recommended of PROVIDER_RECOMMENDED_ORDER) {
    if (providerAvailabilities[recommended] === HealthProviderAvailability.available) {
      return recommended;
    }
  }

  return isAndroid() ? HealthProvider.googleFit : HealthProvider.healthKit;
};

const CAPABILITY_TRANSLATIONS: Record<HealthProviderCapability, string> = {
  [HealthProviderCapability.STEP_COUNT]: "yu_health.capabilitiesRequest.capabilities.steps",
  [HealthProviderCapability.MINDFUL_MINUTES]: "yu_health.capabilitiesRequest.capabilities.meditation",
  [HealthProviderCapability.CYCLING_DISTANCE]: "yu_health.capabilitiesRequest.capabilities.cycling",
  [HealthProviderCapability.HEART_RATE]: "yu_health.capabilitiesRequest.capabilities.heartRate",
  [HealthProviderCapability.WORKOUT_MINUTES]: "yu_health.capabilitiesRequest.capabilities.workouts",
  [HealthProviderCapability.ACTIVITIES]: "yu_health.capabilitiesRequest.capabilities.workouts",
  [HealthProviderCapability.CALORIES]: "yu_health.capabilitiesRequest.capabilities.calories",
};

export const joinCapabilities = (capabilities: HealthProviderCapability[]) => {
  return capabilities
    .map((capability) => t(CAPABILITY_TRANSLATIONS[capability]))
    .filter(Boolean)
    .reduce(
      (acc, curr, index, array) =>
        acc + (index < array.length - 1 ? ", " : ` ${t("yu_health.capabilitiesRequest.join")} `) + curr
    );
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

export function gqlCapabilityToCapability(capability: YuHealthCapability[]): HealthProviderCapability[];
export function gqlCapabilityToCapability(capability: YuHealthCapability): HealthProviderCapability;
export function gqlCapabilityToCapability(
  capability: YuHealthCapability | YuHealthCapability[]
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
}

export function gqlDataTypeToDataType(dataType: YuHealthDataType[]): HealthDataType[];
export function gqlDataTypeToDataType(dataType: YuHealthDataType): HealthDataType;
export function gqlDataTypeToDataType(
  dataType: YuHealthDataType | YuHealthDataType[]
): HealthDataType | HealthDataType[] {
  if (Array.isArray(dataType)) {
    return dataType.map(gqlDataTypeToDataType);
  }

  switch (dataType) {
    case YuHealthDataType.StepCount:
      return HealthDataType.steps;
    case YuHealthDataType.MindfulMinutes:
      return HealthDataType.mindfulMinutes;
    case YuHealthDataType.CyclingDistance:
      return HealthDataType.cyclingDistance;
    case YuHealthDataType.WorkoutMinutes:
      return HealthDataType.workoutMinutes;
    case YuHealthDataType.Calories:
      return HealthDataType.calories;
    case YuHealthDataType.HeartRate:
      return HealthDataType.heartRate;
  }

  throw new Error(`Data type ${dataType} not supported for conversion!`);
}

export const toYuHealthReduxType = (gql: YuHealthOptionsGql): YuHealthOptionsRedux => {
  if (!gql) {
    return undefined;
  }

  return {
    dataType: gqlDataTypeToDataType(gql.dataType),
    capabilities: gqlCapabilityToCapability(gql.capabilities),
  };
};

export const fetchActivityData = async ({ features, stepsBlackListApps, start, end }: IFetchActivityRequest) => {
  if (!features.tempGameEnableReleaseYuHealthV2) {
    return fetchFitkitActivityData({ features, stepsBlackListApps, start, end });
  }

  return fetchYuHealthActivityData({ features, stepsBlackListApps, start, end });
};

export const fetchStepsData = async ({ features, stepsBlackListApps, start, end }: IFetchActivityRequest) => {
  if (!features.tempGameEnableReleaseYuHealthV2) {
    return fetchFitkitStepsData({ features, stepsBlackListApps, start, end });
  }

  return fetchYuHealthStepsData({ features, stepsBlackListApps, start, end });
};
