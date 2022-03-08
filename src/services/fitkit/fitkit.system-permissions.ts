import Logger from "@services/logging/logger";
import { Alert, AlertButton, PermissionsAndroid, Permission, PermissionStatus, Platform } from "react-native";
import { FitKitAndroidSystemPermission } from "./fitkit.permissions";

interface IPermissionConfig {
  title: string;
  message: string;
  multipleItemsMessage: string;
  tracking?: (status: PermissionStatus) => void;
}

const DEFAULT_CONFIG: IPermissionConfig = {
  title: "Getting started",
  message: "In order to use the Yulife app please enable a new permission.",
  multipleItemsMessage: "In order to use the Yulife app please enable a new permission.",
};

const permissionsConfig: Map<FitKitAndroidSystemPermission, IPermissionConfig> = new Map([
  [
    FitKitAndroidSystemPermission.location,
    {
      title: "Getting started",
      message:
        "If you would like to be rewarded for cycling using the YuLife app you’ll need to enable location services.",
      multipleItemsMessage: "Location is only required if you would like to be rewarded for cycling.",
      tracking: (status: PermissionStatus) => {
        Logger.logMixpanelEvent("permission_requested", { type: FitKitAndroidSystemPermission.location, status });
        Logger.setUserProperties({ data_permission_location: status });
      },
    },
  ],
  [
    FitKitAndroidSystemPermission.activity,
    {
      title: "Getting started",
      message: "To offer you rewards you’ll need to allow YuLife to read your physical activity.",
      multipleItemsMessage: "To offer you rewards you’ll need to allow YuLife to read your physical activity.",
      tracking: (status: PermissionStatus) => {
        Logger.logMixpanelEvent("permission_requested", { type: FitKitAndroidSystemPermission.activity, status });
      },
    },
  ],
]);

const handlePermissionTracking = (permissionState: Map<FitKitAndroidSystemPermission, PermissionStatus>) => {
  permissionState.forEach((status, permission) => {
    permissionsConfig.get(permission)?.tracking?.(status);
  });
};

export const requestAndroidSystemPermissions = async (
  permissions: FitKitAndroidSystemPermission[]
): Promise<Map<FitKitAndroidSystemPermission, PermissionStatus>> => {
  if (Platform.OS === "ios") {
    return Promise.reject(null);
  }

  const currentPermissionState = await Promise.all(
    permissions.map(async (permission) => {
      const granted = await PermissionsAndroid.check(permission as Permission);
      return {
        permission,
        granted,
      };
    })
  );

  const { missingPermissions, grantedPermissions } = currentPermissionState.reduce(
    (map, { permission, granted }) => {
      if (granted) {
        map.grantedPermissions.set(permission, "granted");
      } else {
        map.missingPermissions.push(permission);
      }

      return map;
    },
    {
      missingPermissions: [] as FitKitAndroidSystemPermission[],
      grantedPermissions: new Map<FitKitAndroidSystemPermission, PermissionStatus>(),
    }
  );

  if (missingPermissions.length === 0) {
    handlePermissionTracking(grantedPermissions);
    return Promise.resolve(grantedPermissions);
  }

  const singleMissing = missingPermissions.length === 1;

  const title =
    singleMissing && permissionsConfig.has(missingPermissions[0])
      ? permissionsConfig.get(missingPermissions[0]).title
      : DEFAULT_CONFIG.title;

  const message =
    missingPermissions
      .filter((permission) => permissionsConfig.has(permission))
      .map(
        (permission) =>
          `${
            singleMissing
              ? permissionsConfig.get(permission).message
              : permissionsConfig.get(permission).multipleItemsMessage
          }`
      )
      .join(` `) || DEFAULT_CONFIG.message;

  return new Promise((resolve) => {
    const buttons: AlertButton[] = [
      {
        text: "Maybe later",
        onPress: () => {
          const result = new Map<FitKitAndroidSystemPermission, PermissionStatus>([
            ...grantedPermissions,
            ...missingPermissions.map<[FitKitAndroidSystemPermission, PermissionStatus]>((permission) => {
              return [permission, "denied"];
            }),
          ]);
          handlePermissionTracking(result);
          resolve(result);
        },
      },
      {
        text: "Enable",
        onPress: async () => {
          const permissionsRequestResult = await PermissionsAndroid.requestMultiple(
            missingPermissions.map((permission) => permission as Permission)
          );
          const result = new Map<FitKitAndroidSystemPermission, PermissionStatus>([
            ...grantedPermissions,
            ...Object.entries(permissionsRequestResult).map<[FitKitAndroidSystemPermission, PermissionStatus]>(
              ([permission, status]) => [permission as FitKitAndroidSystemPermission, status]
            ),
          ]);
          handlePermissionTracking(result);
          resolve(result);
        },
      },
    ];
    Alert.alert(title, message, buttons);
  });
};

export const requestAndroidSystemPermission = async (
  permission: FitKitAndroidSystemPermission
): Promise<PermissionStatus> => {
  const result = await requestAndroidSystemPermissions([permission]);
  return result.get(permission);
};
