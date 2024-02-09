import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useVerifyAndAuthorizeCapability } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import {
  HealthProviderCapability,
  ICapabilityPermissions,
  getPermissionStatusOfCapabilities,
} from "@yu-life/react-native-yu-health";
import { useSelector } from "react-redux";
import { getActiveProviderSelector, getYuHealthState } from "@redux/yu-health/yu-health.selectors";
import { getPermissionsConfig } from "@services/yuHealth/permissions.helpers";
import { YU_HEALTH_ALL_CAPABILITIES } from "@utils";
import PermissionsScreen from "@components/screens/member/permissions/permissions.screen";

interface IProps {
  componentId: string;
}

const PermissionsContainer = ({ componentId }: IProps) => {
  const { isAuthorising } = useSelector(getYuHealthState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const activeProvider = useSelector(getActiveProviderSelector);
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.permissions), []);
  const [permissionStatus, setPermissionStatus] = useState<ICapabilityPermissions>();
  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const refreshPermissions = useCallback(async () => {
    setIsLoading(true);
    const status = await getPermissionStatusOfCapabilities(YU_HEALTH_ALL_CAPABILITIES);

    setIsLoading(false);
    return setPermissionStatus(status);
  }, []);

  const permissions = useMemo(() => getPermissionsConfig(activeProvider), [activeProvider]);

  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability();
  const onPermissionRequest = useCallback(
    async (capability: HealthProviderCapability) => {
      await verifyAndAuthorizeCapability(capability);
      refreshPermissions();
    },
    [refreshPermissions, verifyAndAuthorizeCapability]
  );

  const onConnect = useCallback(async () => {
    await verifyAndAuthorizeCapability(YU_HEALTH_ALL_CAPABILITIES);
    refreshPermissions();
  }, [refreshPermissions, verifyAndAuthorizeCapability]);

  useEffect(() => {
    refreshPermissions();
  }, [refreshPermissions]);

  return (
    <PermissionsScreen
      isLoading={isAuthorising || isLoading}
      permissions={permissions}
      onConnect={onConnect}
      activeProvider={activeProvider}
      permissionStatuses={permissionStatus}
      onPermissionRequest={onPermissionRequest}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
    />
  );
};

export default memo(PermissionsContainer);
