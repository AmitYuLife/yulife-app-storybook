import { Permission as AndroidSystemPermission } from "react-native";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { PermissionStatus } from "@yu-life/react-native-fitkit";
import { t } from "@locale";
import { HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { isiOS } from "@utils";

type PermissionScope = "read" | "write";

export interface Permissions {
  identifier: string;
  title: string;
  requirement?: string;
  description: string;
  checkStatus: () => Promise<PermissionStatus>;
  status?: PermissionStatus;
  type?: FitKitType | AndroidSystemPermission;
  scope?: PermissionScope;
}

export interface SettingsPermissions {
  systemPermission: Permissions[];
  healthPermission: Permissions[];
  isGoogleFitAuthorised: boolean;
  isSamsungHealthStepsAuthorised: boolean;
  isSamsungHealthStepDailyTrendAuthorised: boolean;
}

const IOS_PROVIDER_PERMISSIONS = [
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

const IOS_SYSTEM_PERMISSIONS = [
  {
    identifier: "MotionAndFitnessPermission",
    title: t("permissions.ios.motion_and_fitness.title"),
    description: t("permissions.ios.motion_and_fitness.description"),
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

export const getPermissionsConfig = (_provider: HealthProvider): IPermissionConfig => {
  // TODO: Select permissions based on provider
  if (!isiOS()) {
    return { providerPermissions: [], systemPermissions: [] };
  }

  return { providerPermissions: IOS_PROVIDER_PERMISSIONS, systemPermissions: IOS_SYSTEM_PERMISSIONS };
};
