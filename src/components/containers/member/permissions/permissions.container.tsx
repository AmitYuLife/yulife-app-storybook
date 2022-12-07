import React, { memo, useCallback, useEffect, useState } from "react";
import { PermissionScreen } from "@components/screens";
import { checkPermissions, getPermissionsConfig, SettingsPermissions } from "@services/fitkit/permissions.helpers";
import { AppStateStatus } from "react-native";
import { useAppState } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;
}

const PermissionsContainer = ({ componentId }: IProps) => {
  const [settingsPermissions, setSettingsPermissions] = useState<SettingsPermissions>();
  const [loading, setLoading] = useState(true);

  const getPermissionStatus = useCallback(async () => {
    setLoading(true);
    const permissions = await checkPermissions();
    setSettingsPermissions(permissions);
    setLoading(false);
  }, []);

  const onAppState = useCallback(
    async (appState: AppStateStatus) => {
      if (appState === "active") {
        await getPermissionStatus();
      }
    },
    [getPermissionStatus]
  );

  useAppState(onAppState);

  useEffect(() => {
    (async () => {
      const rawPermissions = await getPermissionsConfig();
      setSettingsPermissions(rawPermissions);
      await getPermissionStatus();
    })();
  }, [getPermissionStatus]);

  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.permissions), []);

  return (
    <PermissionScreen
      loading={loading}
      settingsPermissions={settingsPermissions}
      updatePermissions={getPermissionStatus}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
    />
  );
};

export default memo(PermissionsContainer);
