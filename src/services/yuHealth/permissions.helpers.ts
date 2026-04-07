import { t } from "@locale";
import { HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { isAndroid } from "@utils";

const buildIosProviderPermissions = (): IPermission[] => [
  {
    identifier: "HKQuantityTypeIdentifierStepCount",
    title: t("permissions.ios.steps_read.title"),
    description: t("permissions.ios.steps_read.description"),
    capability: HealthProviderCapability.STEP_COUNT,
  },
  {
    identifier: "HKCategoryTypeIdentifierMindfulSession",
    title: t("permissions.ios.mindfulness_read.title"),
    description: t("permissions.ios.mindfulness_read.description"),
    capability: HealthProviderCapability.MINDFUL_MINUTES,
  },
  {
    identifier: "HKQuantityTypeIdentifierDistanceCycling",
    title: t("permissions.ios.cycling_read.title"),
    description: t("permissions.ios.cycling_read.description"),
    capability: HealthProviderCapability.CYCLING_DISTANCE,
  },
  {
    identifier: "HKWorkoutTypeIdentifier",
    title: t("permissions.ios.workouts_read.title"),
    description: t("permissions.ios.workouts_read.description"),
    capability: HealthProviderCapability.ACTIVITIES,
  },
];

const buildIosSystemPermissions = (): IPermission[] => [
  {
    identifier: "MotionAndFitnessPermission",
    title: t("permissions.ios.motion_and_fitness.title"),
    description: t("permissions.ios.motion_and_fitness.description"),
  },
];

const buildAndroidSystemPermissions = (): IPermission[] => [
  {
    identifier: "android.permission.ACTIVITY_RECOGNITION",
    title: t("permissions.android.activity_recognition.title"),
    requirement: t("permissions.android.activity_recognition.requirement"),
    description: t("permissions.android.activity_recognition.description"),
  },
  {
    identifier: "android.permission.ACCESS_FINE_LOCATION",
    title: t("permissions.android.location.title"),
    requirement: t("permissions.android.location.requirement"),
    description: t("permissions.android.location.description"),
  },
];

const buildSamsungHealthPermissions = (): IPermission[] => [
  {
    identifier: "stepCount",
    title: t("permissions.android.samsung_steps_count_trend.title"),
    requirement: t("permissions.android.samsung_steps_count_trend.requirement"),
    description: t("permissions.android.samsung_steps_count_trend.description"),
    capability: HealthProviderCapability.STEP_COUNT,
  },
  {
    identifier: "stepCount",
    title: t("permissions.android.samsung_steps_count.title"),
    requirement: t("permissions.android.samsung_steps_count.requirement"),
    description: t("permissions.android.samsung_steps_count.description"),
    capability: HealthProviderCapability.STEP_COUNT,
  },
  {
    identifier: "mindfulMinutes",
    title: t("permissions.android.samsung_mindful.title"),
    description: t("permissions.android.samsung_mindful.description"),
    capability: HealthProviderCapability.MINDFUL_MINUTES,
  },
  {
    identifier: "cyclingDistance",
    title: t("permissions.android.samsung_cycling.titleSupported"),
    description: t("permissions.android.samsung_cycling.descriptionSupported"),
    capability: HealthProviderCapability.CYCLING_DISTANCE,
  },
];

const buildGoogleFitPermissions = (): IPermission[] => [
  {
    identifier: "stepCount",
    title: t("permissions.android.fitness_activity_read.title"),
    requirement: t("permissions.android.fitness_activity_read.requirement"),
    description: t("permissions.android.fitness_activity_read.description"),
    capability: HealthProviderCapability.STEP_COUNT,
  },
  {
    identifier: "mindfulMinutes",
    title: t("permissions.android.mindfulness_read.title"),
    requirement: t("permissions.android.mindfulness_read.requirement"),
    description: t("permissions.android.mindfulness_read.description"),
    capability: HealthProviderCapability.MINDFUL_MINUTES,
  },
  {
    identifier: "cyclingDistance",
    title: t("permissions.android.distance_read.title"),
    requirement: t("permissions.android.distance_read.requirement"),
    description: t("permissions.android.distance_read.description"),
    capability: HealthProviderCapability.CYCLING_DISTANCE,
  },
  {
    identifier: "activities",
    title: t("permissions.android.workouts_read.title"),
    requirement: t("permissions.android.workouts_read.requirement"),
    description: t("permissions.android.workouts_read.description"),
    capability: HealthProviderCapability.ACTIVITIES,
  },
];

const buildHealthConnectPermissions = (): IPermission[] => [
  {
    identifier: "stepCount",
    title: t("permissions.android.health_connect.steps.title"),
    requirement: t("permissions.android.health_connect.steps.requirement"),
    description: t("permissions.android.health_connect.steps.description"),
    capability: HealthProviderCapability.STEP_COUNT,
  },
  {
    identifier: "mindfulMinutes",
    title: t("permissions.android.health_connect.meditation.title"),
    requirement: t("permissions.android.health_connect.meditation.requirement"),
    description: t("permissions.android.health_connect.meditation.description"),
    capability: HealthProviderCapability.MINDFUL_MINUTES,
  },
  {
    identifier: "cyclingDistance",
    title: t("permissions.android.health_connect.cycling.title"),
    requirement: t("permissions.android.health_connect.cycling.requirement"),
    description: t("permissions.android.health_connect.cycling.description"),
    capability: HealthProviderCapability.CYCLING_DISTANCE,
  },
  {
    identifier: "activities",
    title: t("permissions.android.health_connect.exercise.title"),
    requirement: t("permissions.android.health_connect.exercise.requirement"),
    description: t("permissions.android.health_connect.exercise.description"),
    capability: HealthProviderCapability.ACTIVITIES,
  },
];

export interface IPermission {
  identifier: string;
  title: string;
  description: string;
  requirement?: string;
  capability?: HealthProviderCapability;
}

export interface IPermissionConfig {
  providerPermissions: IPermission[];
  systemPermissions: IPermission[];
}

export const getPermissionsConfig = (activeProvider: HealthProvider): IPermissionConfig => {
  if (isAndroid()) {
    switch (activeProvider) {
      case HealthProvider.googleFit:
        return { providerPermissions: buildGoogleFitPermissions(), systemPermissions: buildAndroidSystemPermissions() };
      case HealthProvider.samsungHealth:
        return {
          providerPermissions: buildSamsungHealthPermissions(),
          systemPermissions: buildAndroidSystemPermissions(),
        };
      case HealthProvider.healthConnect:
        return {
          providerPermissions: buildHealthConnectPermissions(),
          systemPermissions: buildAndroidSystemPermissions(),
        };
      default:
        return { providerPermissions: [], systemPermissions: buildAndroidSystemPermissions() };
    }
  }

  return { providerPermissions: buildIosProviderPermissions(), systemPermissions: buildIosSystemPermissions() };
};
