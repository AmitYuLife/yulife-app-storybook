import { FitKitAuthOptions, FitKitTypes } from "@services/fitkit/fitkit.service";
import { Platform } from "react-native";

const Permissions = (cycling: boolean): FitKitAuthOptions => {
  if (cycling) {
    return {
      read: [FitKitTypes.Types.MindfulSession, FitKitTypes.Types.StepCount, FitKitTypes.Types.Biking],
    };
  }

  return {
    read: [FitKitTypes.Types.MindfulSession, FitKitTypes.Types.StepCount],
  };
};

export type FitkitAndroidSystemPermission =
  | "android.permission.ACCESS_FINE_LOCATION"
  | "android.permission.ACTIVITY_RECOGNITION";

export const AndroidSystemPermissionsConfig = new Map(
  Platform.Version > 28
    ? [
        [FitKitTypes.Types.MindfulSession, "android.permission.ACTIVITY_RECOGNITION" as FitkitAndroidSystemPermission],
        [FitKitTypes.Types.StepCount, "android.permission.ACTIVITY_RECOGNITION" as FitkitAndroidSystemPermission],
        [FitKitTypes.Types.Biking, "android.permission.ACCESS_FINE_LOCATION" as FitkitAndroidSystemPermission],
      ]
    : [[FitKitTypes.Types.Biking, "android.permission.ACCESS_FINE_LOCATION" as FitkitAndroidSystemPermission]]
);

export default Permissions;
