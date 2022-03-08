import { FitKitAuthOptions, FitKitTypes } from "@services/fitkit/fitkit.service";
import { Platform } from "react-native";

export enum FitKitAndroidSystemPermission {
  location = "android.permission.ACCESS_FINE_LOCATION",
  activity = "android.permission.ACTIVITY_RECOGNITION",
}

export const AndroidSystemPermissionsConfig = new Map(
  Platform.Version > 28
    ? [
        [FitKitTypes.Types.MindfulSession, FitKitAndroidSystemPermission.activity],
        [FitKitTypes.Types.StepCount, FitKitAndroidSystemPermission.activity],
        [FitKitTypes.Types.Biking, FitKitAndroidSystemPermission.location],
      ]
    : [[FitKitTypes.Types.Biking, FitKitAndroidSystemPermission.location]]
);

export const buildFitKitPermissions = (cycling: boolean): FitKitAuthOptions => {
  const read = [FitKitTypes.Types.MindfulSession, FitKitTypes.Types.StepCount];

  if (cycling) {
    return { read: [...read, FitKitTypes.Types.Biking] };
  }

  return { read };
};

export default buildFitKitPermissions;
