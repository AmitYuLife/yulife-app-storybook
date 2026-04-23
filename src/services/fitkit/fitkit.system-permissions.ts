import { t } from "@locale";
import EngagementTracking from "@services/logging/engagement-tracking";
import { Alert, AlertButton, PermissionsAndroid, Permission, PermissionStatus, Platform } from "react-native";
import { FitKitAndroidSystemPermission } from "./fitkit.permissions";

interface IPermissionConfig {
  titleKey: string;
  messageKey: string;
  multipleItemsMessageKey: string;
  tracking?: (status: PermissionStatus) => void;
}

const DEFAULT_CONFIG: IPermissionConfig = {
  titleKey: "permissions.android.alert.default.title",
  messageKey: "permissions.android.alert.default.message",
  multipleItemsMessageKey: "permissions.android.alert.default.multiple_items_message",
};

const permissionsConfig: Map<FitKitAndroidSystemPermission, IPermissionConfig> = new Map([
  [
    FitKitAndroidSystemPermission.location,
    {
      titleKey: "permissions.android.alert.location.title",
      messageKey: "permissions.android.alert.location.message",
      multipleItemsMessageKey: "permissions.android.alert.location.multiple_items_message",
      tracking: (status: PermissionStatus) => {
        EngagementTracking.logMixpanelEvent("permission_requested", {
          type: FitKitAndroidSystemPermission.location,
          status,
        });
        EngagementTracking.setUserProperties({ data_permission_location: status });
      },
    },
  ],
  [
    FitKitAndroidSystemPermission.activity,
    {
      titleKey: "permissions.android.alert.activity.title",
      messageKey: "permissions.android.alert.activity.message",
      multipleItemsMessageKey: "permissions.android.alert.activity.multiple_items_message",
      tracking: (status: PermissionStatus) => {
        EngagementTracking.logMixpanelEvent("permission_requested", {
          type: FitKitAndroidSystemPermission.activity,
          status,
        });
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

  const titleKey =
    singleMissing && permissionsConfig.has(missingPermissions[0])
      ? permissionsConfig.get(missingPermissions[0]).titleKey
      : DEFAULT_CONFIG.titleKey;

  const message =
    missingPermissions
      .filter((permission) => permissionsConfig.has(permission))
      .map(
        (permission) =>
          `${
            singleMissing
              ? t(permissionsConfig.get(permission).messageKey)
              : t(permissionsConfig.get(permission).multipleItemsMessageKey)
          }`
      )
      .join(` `) || t(DEFAULT_CONFIG.messageKey);

  return new Promise((resolve) => {
    const buttons: AlertButton[] = [
      {
        text: t("permissions.android.alert.deny"),
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
        text: t("permissions.android.alert.accept"),
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
    Alert.alert(t(titleKey), message, buttons);
  });
};

export const requestAndroidSystemPermission = async (
  permission: FitKitAndroidSystemPermission
): Promise<PermissionStatus> => {
  const result = await requestAndroidSystemPermissions([permission]);
  return result.get(permission);
};
