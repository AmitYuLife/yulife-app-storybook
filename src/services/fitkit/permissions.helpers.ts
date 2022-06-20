import { PermissionsAndroid, Platform, Permission as AndroidSystemPermission, Permission } from "react-native";
import RNFitKit, { FitKitTypes } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { isSamsung } from "@utils";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { FitKitAuthOptions, PermissionStatus } from "@yu-life/react-native-fitkit";
import { FitKitAndroidSystemPermission } from "./fitkit.permissions";
import { t } from "@locale";

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

const androidPermissions: Permissions[] = [
  {
    id: "system_activity_recognition_permission",
    title: t("permissions.android.activityRecognition.title"),
    requirement: t("permissions.android.activityRecognition.requirement"),
    description: t("permissions.android.activityRecognition.description"),
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
    title: t("permissions.android.fitnessActivityRead.title"),
    requirement: t("permissions.android.fitnessActivityRead.requirement"),
    description: t("permissions.android.fitnessActivityRead.description"),
    checkStatus: async () => checkGoogleFitPermission({ read: [FitKitTypes.Types.StepCount], platform: "GoogleFit" }),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "google_fit_mindfulness",
    title: t("permissions.android.mindfulnessRead.title"),
    requirement: t("permissions.android.mindfulnessRead.requirement"),
    description: t("permissions.android.mindfulnessRead.description"),
    checkStatus: async () =>
      checkGoogleFitPermission({ read: [FitKitTypes.Types.MindfulSession], platform: "GoogleFit" }),
    type: FitKitType.MindfulSession,
    scope: "read",
  },
  {
    id: "google_fit_cycling",
    title: t("permissions.android.distanceRead.title"),
    requirement: t("permissions.android.distanceRead.requirement"),
    description: t("permissions.android.distanceRead.description"),
    checkStatus: async () => checkGoogleFitPermission({ read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
    type: FitKitType.Cycling,
    scope: "read",
  },
  {
    id: "google_fit_workouts",
    title: t("permissions.android.workoutsRead.title"),
    requirement: t("permissions.android.workoutsRead.requirement"),
    description: t("permissions.android.workoutsRead.description"),
    checkStatus: async () => checkGoogleFitPermission({ read: [FitKitTypes.Types.Pilates], platform: "GoogleFit" }),
    type: FitKitType.Pilates,
    scope: "read",
  },
];

const samsungHealthPermissions: Permissions[] = [
  {
    id: "system_activity_recognition_permission",
    title: t("permissions.android.activityRecognitionSamsungHealth.title"),
    requirement: t("permissions.android.activityRecognitionSamsungHealth.requirement"),
    description: t("permissions.android.activityRecognitionSamsungHealth.description"),
    checkStatus: async () => checkAndroidSystemPermission(FitKitAndroidSystemPermission.activity as any),
    type: FitKitAndroidSystemPermission.activity as any,
    scope: "read",
  },
  {
    id: "samsung_health_step_daily_trend",
    title: t("permissions.android.samsungStepsCountTrend.title"),
    requirement: t("permissions.android.samsungStepsCountTrend.requirement"),
    description: t("permissions.android.samsungStepsCountTrend.description"),
    checkStatus: async () =>
      checkGoogleFitPermission({ read: [FitKitTypes.Types.StepDailyTrend], platform: "SamsungHealth" }),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "samsung_health_step_count",
    title: t("permissions.android.samsungStepsCount.title"),
    requirement: t("permissions.android.samsungStepsCount.requirement"),
    description: t("permissions.android.samsungStepsCount.description"),
    checkStatus: async () =>
      checkGoogleFitPermission({ read: [FitKitTypes.Types.StepCount], platform: "SamsungHealth" }),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "samsung_health_mindful",
    title: t("permissions.android.samsungMindful.title"),
    description: t("permissions.android.samsungMindful.description"),
    checkStatus: async () => "not_supported",
  },
  {
    id: "samsung_health_cycling",
    title: t("permissions.android.samsungCycling.title"),
    description: t("permissions.android.samsungCycling.description"),
    checkStatus: async () => "not_supported",
  },
];

const iosPermissions: Permissions[] = [
  {
    id: "apple_health_steps_read",
    title: t("permissions.ios.stepsRead.title"),
    description: t("permissions.ios.stepsRead.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.StepCount),
    type: FitKitType.StepCount,
    scope: "read",
  },
  {
    id: "apple_health_mindfulness_read",
    title: t("permissions.ios.mindfulnessRead.title"),
    description: t("permissions.ios.mindfulnessRead.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.MindfulSession),
    type: FitKitType.MindfulSession,
    scope: "read",
  },
  {
    id: "apple_health_cycling_read",
    title: t("permissions.ios.cyclingRead.title"),
    description: t("permissions.ios.cyclingRead.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.Biking),
    type: FitKitType.Cycling,
    scope: "read",
  },
  {
    id: "apple_health_workout",
    title: t("permissions.ios.workoutsRead.title"),
    description: t("permissions.ios.workoutsRead.description"),
    checkStatus: async () => checkIosHealthPermission(FitKitTypes.Types.Pilates),
    type: FitKitType.Pilates,
    scope: "read",
  },
  {
    id: "system_motion_fitness",
    title: t("permissions.ios.motionAndFitness.title"),
    description: t("permissions.ios.motionAndFitness.description"),
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
  const [
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  ] = await Promise.all([
    checkGoogleFitAuthorised(),
    checkSamsungHealthStepsAuthorised(),
    checkSamsungHealthStepDailyTrendAuthorised(),
  ]);

  const showSamsungHealthPermissions =
    isSamsung() &&
    !isGoogleFitAuthorised &&
    (isSamsungHealthStepsAuthorised || isSamsungHealthStepDailyTrendAuthorised);

  const permissions = Platform.select({
    ios: iosPermissions,
    android: showSamsungHealthPermissions ? samsungHealthPermissions : androidPermissions,
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
    permissions.map(
      async (item): Promise<Permissions> => {
        return {
          ...item,
          status: await item.checkStatus(),
        };
      }
    )
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
  if (Platform.Version < 29 && (permission as any) === FitKitAndroidSystemPermission.activity) {
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

    const query =
      type === FitKitTypes.Types.MindfulSession || type === FitKitTypes.Types.Pilates
        ? RNFitKit.sampleQuery
        : RNFitKit.aggregateQuery;

    const res = await query({
      aggregateBy: {
        bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
        type: FitKitTypes.AggregateType.Time,
      },
      disableUserEntries: false,
      endTime,
      startTime,
      type,
    });

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
