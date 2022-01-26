import Logger from "@services/logging/logger";
import { Alert, AlertButton, PermissionsAndroid, PermissionStatus, Platform } from "react-native";
import { FitkitAndroidSystemPermission } from "./fitkit.permissions";

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

const permissionsConfig: Map<FitkitAndroidSystemPermission, IPermissionConfig> = new Map([
  [
    "android.permission.ACCESS_FINE_LOCATION",
    {
      title: "Getting started",
      message:
        "If you would like to be rewarded for cycling using the YuLife app you’ll need to enable location services.",
      multipleItemsMessage: "Location is only required if you would like to be rewarded for cycling.",
      tracking: (status: PermissionStatus) => {
        Logger.logMixpanelEvent("permission_requested", { type: "android.permission.ACCESS_FINE_LOCATION", status });
        Logger.setUserProperties({ data_permission_location: status });
      },
    },
  ],
  [
    "android.permission.ACTIVITY_RECOGNITION",
    {
      title: "Getting started",
      message: "To offer you rewards you’ll need to allow YuLife to read your physical activity.",
      multipleItemsMessage: "To offer you rewards you’ll need to allow YuLife to read your physical activity",
      tracking: (status: PermissionStatus) => {
        Logger.logMixpanelEvent("permission_requested", { type: "android.permission.ACTIVITY_RECOGNITION", status });
      },
    },
  ],
]);

const handlePermissionTracking = (permissionState: Map<FitkitAndroidSystemPermission, PermissionStatus>) => {
  permissionState.forEach((status, permission) => {
    permissionsConfig.get(permission)?.tracking?.(status);
  });
};

export const requestAndroidSystemPermissions = async (
  permissions: FitkitAndroidSystemPermission[]
): Promise<Map<FitkitAndroidSystemPermission, PermissionStatus>> => {
  if (Platform.OS === "ios") {
    return Promise.reject(null);
  }

  const currentPermissionState = await Promise.all(
    permissions.map(async (permission) => {
      const granted = await PermissionsAndroid.check(permission as any);
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
      missingPermissions: [] as FitkitAndroidSystemPermission[],
      grantedPermissions: new Map<FitkitAndroidSystemPermission, PermissionStatus>(),
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
          const result = new Map<FitkitAndroidSystemPermission, PermissionStatus>([
            ...grantedPermissions,
            ...missingPermissions.map<[FitkitAndroidSystemPermission, PermissionStatus]>((permission) => {
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
            missingPermissions.map((permission) => permission as any)
          );
          const result = new Map<FitkitAndroidSystemPermission, PermissionStatus>([
            ...grantedPermissions,
            ...Object.entries(permissionsRequestResult).map<[FitkitAndroidSystemPermission, PermissionStatus]>(
              ([permission, status]) => [permission as FitkitAndroidSystemPermission, status]
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
  permission: FitkitAndroidSystemPermission
): Promise<PermissionStatus> => {
  const result = await requestAndroidSystemPermissions([permission]);
  return result.get(permission);
};
