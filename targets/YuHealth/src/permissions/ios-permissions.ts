import { HealthProviderCapability } from "../health-provider-capability.enum";
import {
  ICapabilityPermissions,
  HealthPermissionStatus,
  IProviderPermission,
} from "../interface/permissions.interface";
import { queryPedometerFromDate } from "../queries/pedometer";

export const IOS_SYSTEM_PERMISSIONS_MAP = new Map<HealthProviderCapability, string[]>([
  [HealthProviderCapability.STEP_COUNT, ["MotionAndFitnessPermission"]],
]);

export const addSystemPermissionStatusOfCapabilitiesIOS = async (
  providerPermissions: Pick<IProviderPermission, "identifier" | "capability" | "status">[]
): Promise<ICapabilityPermissions> => {
  const providerPermissionToReturn: IProviderPermission[] = [];

  const motionAndFitnessPermissionStatus = await checkIosMotionAndFitnessPermission();

  for (const providerPermission of providerPermissions) {
    if (providerPermission.capability !== HealthProviderCapability.STEP_COUNT) {
      providerPermissionToReturn.push({
        ...providerPermission,
        systemPermissionsRequired: [],
      });
      continue;
    } else {
      providerPermissionToReturn.push({
        ...providerPermission,
        systemPermissionsRequired: ["MotionAndFitnessPermission"],
      });
    }
  }

  return {
    providerPermissions: providerPermissionToReturn,
    systemPermissions: [
      {
        identifier: "MotionAndFitnessPermission",
        status: motionAndFitnessPermissionStatus,
      },
    ],
  };
};

export const checkIosMotionAndFitnessPermission = async (): Promise<HealthPermissionStatus> => {
  const currentDate = new Date();

  // Subtract one day (24 hours) from the current date
  const yesterday = new Date();
  yesterday.setDate(currentDate.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  const dayEnd = new Date();

  dayEnd.setHours(23, 59, 59, 999);

  try {
    await queryPedometerFromDate({
      startTime: yesterday,
      endTime: dayEnd,
      queryOptions: {},
    });
    return HealthPermissionStatus.granted;
  } catch {
    return HealthPermissionStatus.denied;
  }
};
