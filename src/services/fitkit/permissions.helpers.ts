import { PermissionsAndroid, Platform, Permission as AndroidSystemPermission, Permission } from "react-native";
import RNFitKit, { FitKitTypes } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { isSamsung } from "@utils";
import { FitKitAuthOptions, PermissionStatus } from "@yu-life/react-native-fitkit";
import { FitKitAndroidSystemPermission } from "./fitkit.permissions";
import { t } from "@locale";
import { FitKitType } from "@graphql/__generated";

type PermissionScope = "read" | "write";

export interface Permissions {
  id: string;
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

const healthPermissionIDs = [
  "google_fit_steps_mindfulness",
  "google_fit_cycling",
  "apple_health_steps_read",
  "apple_health_mindfulness_read",
  "apple_health_cycling_read",
  "apple_health_workout",
  "samsung_health_step_daily_trend",
  "samsung_health_step_count",
  "samsung_health_mindful",
  "samsung_health_cycling",
  "google_fit_mindfulness",
  "google_fit_workouts",
];

const systemPermissionIDs = [
  "system_activity_recognition_permission",
  "system_location_permission",
  "system_motion_fitness",
];

const buildAndroidPermissions = (): Permissions[] => [
  {
    id: "system_activity_recognition_permission",
    title: t("permissions.android.activity_recognition.title"),
    requirement: t("permissions.android.activity_recognition.requirement"),
    description: t("permissions.android.activity_recognition.description"),
    checkStatus: async () => checkAndroidSystemPermission(FitKitAndroidSystemPermission.activity as any),
    type: FitKitAndroidSystemPermission.activity as any,
    scope: "read",
  },
  {
    id: "system_location_permission",
    title: t("permissions.android.location.title"),
    requirement: t("permissions.android.location.requirement"),
    description: t("permissions.android.location.description"),
    checkStatus: async () => checkAndroidSystemPermission(FitKitAndroidSystemPermission.location),
    type: FitKitAndroidSystemPermission.location,
    scope: "read",
  },
  {
    id: "google_fit_steps_mindfulness",
    title: t("permissions.android.fitness_activity_read.title"),
    requirement: t("permissions.android.fitness_activity_read.requirement"),
    description: t("permissions.android.fitness_activity_read.description"),
    checkStatus: async () => checkGoogleFitPermission({ read: [FitKitTypes.Types.StepCount], platform: "GoogleFit" }),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "google_fit_mindfulness",
    title: t("permissions.android.mindfulness_read.title"),
    requirement: t("permissions.android.mindfulness_read.requirement"),
    description: t("permissions.android.mindfulness_read.description"),
    checkStatus: async () =>
      checkGoogleFitPermission({ read: [FitKitTypes.Types.MindfulSession], platform: "GoogleFit" }),
    type: FitKitType.MindfulSession,
    scope: "read",
  },
  {
    id: "google_fit_cycling",
    title: t("permissions.android.distance_read.title"),
    requirement: t("permissions.android.distance_read.requirement"),
    description: t("permissions.android.distance_read.description"),
    checkStatus: async () => checkGoogleFitPermission({ read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
    type: FitKitType.Cycling,
    scope: "read",
  },
  {
    id: "google_fit_workouts",
    title: t("permissions.android.workouts_read.title"),
    requirement: t("permissions.android.workouts_read.requirement"),
    description: t("permissions.android.workouts_read.description"),
    checkStatus: async () => checkGoogleFitPermission({ read: [FitKitTypes.Types.Pilates], platform: "GoogleFit" }),
    type: FitKitType.Pilates,
    scope: "read",
  },
];

const buildSamsungHealthPermissions = (): Permissions[] => [
  {
    id: "system_activity_recognition_permission",
    title: t("permissions.android.activity_recognition_samsung_health.title"),
    requirement: t("permissions.android.activity_recognition_samsung_health.requirement"),
    description: t("permissions.android.activity_recognition_samsung_health.description"),
    checkStatus: async () => checkAndroidSystemPermission(FitKitAndroidSystemPermission.activity as any),
    type: FitKitAndroidSystemPermission.activity as any,
    scope: "read",
  },
  {
    id: "samsung_health_step_daily_trend",
    title: t("permissions.android.samsung_steps_count_trend.title"),
    requirement: t("permissions.android.samsung_steps_count_trend.requirement"),
    description: t("permissions.android.samsung_steps_count_trend.description"),
    checkStatus: async () =>
      checkGoogleFitPermission({ read: [FitKitTypes.Types.StepDailyTrend], platform: "SamsungHealth" }),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "samsung_health_step_count",
    title: t("permissions.android.samsung_steps_count.title"),
    requirement: t("permissions.android.samsung_steps_count.requirement"),
    description: t("permissions.android.samsung_steps_count.description"),
    checkStatus: async () =>
      checkGoogleFitPermission({ read: [FitKitTypes.Types.StepCount], platform: "SamsungHealth" }),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "samsung_health_mindful",
    title: t("permissions.android.samsung_mindful.title"),
    description: t("permissions.android.samsung_mindful.description"),
    checkStatus: async () => "not_supported",
  },
  {
    id: "samsung_health_cycling",
    title: t("permissions.android.samsung_cycling.title"),
    description: t("permissions.android.samsung_cycling.description"),
    checkStatus: async () => "not_supported",
  },
];

const buildIosPermissions = (): Permissions[] => [
  {
    id: "apple_health_steps_read",
    title: t("permissions.ios.steps_read.title"),
    description: t("permissions.ios.steps_read.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.StepCount),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "apple_health_mindfulness_read",
    title: t("permissions.ios.mindfulness_read.title"),
    description: t("permissions.ios.mindfulness_read.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.MindfulSession),
    type: FitKitType.MindfulSession,
    scope: "read",
  },
  {
    id: "apple_health_cycling_read",
    title: t("permissions.ios.cycling_read.title"),
    description: t("permissions.ios.cycling_read.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.Biking),
    type: FitKitType.Cycling,
    scope: "read",
  },
  {
    id: "apple_health_workout",
    title: t("permissions.ios.workouts_read.title"),
    description: t("permissions.ios.workouts_read.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.Pilates),
    type: FitKitType.Pilates,
    scope: "read",
  },
  {
    id: "system_motion_fitness",
    title: t("permissions.ios.motion_and_fitness.title"),
    description: t("permissions.ios.motion_and_fitness.description"),
    checkStatus: async () => checkIosMotionAndFitnessPermission(),
    scope: "read",
  },
];

export const getPermissionsConfig = async (): Promise<SettingsPermissions> => {
  const {
    permissions,
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  } = await getPermissionsData();

  return {
    systemPermission: permissions.filter((item) => systemPermissionIDs.includes(item.id)),
    healthPermission: permissions.filter((item) => healthPermissionIDs.includes(item.id)),
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  };
};

const getPermissionsData = async () => {
  const [isGoogleFitAuthorised, isSamsungHealthStepsAuthorised, isSamsungHealthStepDailyTrendAuthorised] =
    await Promise.all([
      checkGoogleFitAuthorised(),
      checkSamsungHealthStepsAuthorised(),
      checkSamsungHealthStepDailyTrendAuthorised(),
    ]);

  const showSamsungHealthPermissions =
    isSamsung() &&
    !isGoogleFitAuthorised &&
    (isSamsungHealthStepsAuthorised || isSamsungHealthStepDailyTrendAuthorised);

  const permissions = Platform.select({
    ios: buildIosPermissions(),
    android: showSamsungHealthPermissions ? buildSamsungHealthPermissions() : buildAndroidPermissions(),
  });

  return {
    permissions,
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  };
};

export const checkPermissions = async (): Promise<SettingsPermissions> => {
  const {
    permissions,
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  } = await getPermissionsData();

  const processedPermissions = await Promise.all(
    permissions.map(async (item): Promise<Permissions> => {
      return {
        ...item,
        status: await item.checkStatus(),
      };
    })
  );

  const systemPermission = processedPermissions.filter((item) => systemPermissionIDs.includes(item.id));
  const healthPermission = processedPermissions.filter((item) => healthPermissionIDs.includes(item.id));

  return {
    systemPermission,
    healthPermission,
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  };
};

const checkGoogleFitPermission = async (options: FitKitAuthOptions): Promise<PermissionStatus> => {
  const isAuthorised = await RNFitKit.isAuthorised(options);
  return isAuthorised ? "authorised" : "denied";
};

const checkAndroidSystemPermission = async (permission: Permission): Promise<PermissionStatus> => {
  if (+Platform.Version < 29 && (permission as any) === FitKitAndroidSystemPermission.activity) {
    return "authorised";
  }

  const isGranted = await PermissionsAndroid.check(permission);
  return isGranted ? "authorised" : "denied";
};

const checkIosMotionAndFitnessPermission = async (): Promise<PermissionStatus> => {
  const now = moment();
  const dayStart = now.clone().startOf("day").format();
  const dayEnd = now.clone().endOf("day").format();

  try {
    await RNFitKit.queryPedometerFromDate(dayStart, dayEnd);
    return "authorised";
  } catch (error) {
    return "denied";
  }
};

const checkIosHealthPermission = async (type: any): Promise<PermissionStatus> => {
  try {
    const start = new Date();
    start.setDate(start.getDate() - 5);
    start.setHours(0, 0, 0, 0);

    const startTime = start.toISOString().slice(0, 19);
    const endTime = new Date().toISOString().slice(0, 19);

    const useSampleQuery = type === FitKitTypes.Types.MindfulSession || type === FitKitTypes.Types.Pilates;

    const args = {
      aggregateBy: {
        bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
        type: FitKitTypes.AggregateType.Time,
      },
      disableUserEntries: false,
      endTime,
      startTime,
    };

    const res = useSampleQuery
      ? await RNFitKit.sampleQuery({ ...args, type })
      : await RNFitKit.aggregateQuery({ ...args, types: [type] });

    return res && res.length > 0 ? "authorised" : "not_determined";
  } catch (e) {
    if (e.userInfo?.NSLocalizedDescription === "Authorization not determined") {
      return "not_asked";
    }

    return "not_determined";
  }
};

const checkGoogleFitAuthorised = async () => {
  if (Platform.OS === "ios") {
    return false;
  }

  return RNFitKit.isAuthorised({ read: [], platform: "GoogleFit" });
};

const checkSamsungHealthStepsAuthorised = async () => {
  if (!isSamsung()) {
    return false;
  }

  return RNFitKit.isAuthorised({ read: [FitKitTypes.Types.StepCount], platform: "SamsungHealth" });
};

const checkSamsungHealthStepDailyTrendAuthorised = async () => {
  if (!isSamsung()) {
    return false;
  }

  return RNFitKit.isAuthorised({ read: [FitKitTypes.Types.StepDailyTrend], platform: "SamsungHealth" });
};
