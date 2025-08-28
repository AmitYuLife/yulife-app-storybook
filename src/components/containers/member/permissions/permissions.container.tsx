import React, { memo, useCallback, useMemo, useState } from "react";
import { useNavigationComponentDidAppear, useVerifyAndAuthorizeCapability } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { HealthProviderCapability, ICapabilityPermissions } from "@yu-life/react-native-yu-health";
import { useSelector } from "react-redux";
import { getActiveProvider, getYuHealthStatus } from "@redux/yu-health/yu-health.selectors";
import { getPermissionsConfig } from "@services/yuHealth/permissions.helpers";
import { YU_HEALTH_ALL_CAPABILITIES } from "@utils";
import PermissionsScreen from "@components/screens/member/permissions/permissions.screen";
import { YuHealthStatus } from "@redux/yu-health/yu-health.types";
import { getHealthPermissionStatuses } from "@services/fitkit/yu-health.helpers";

interface IProps {
  componentId: string;
}

const PermissionsContainer = ({ componentId }: IProps) => {
  const yuHealthStatus = useSelector(getYuHealthStatus);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const activeProvider = useSelector(getActiveProvider);
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.permissions), []);
  const [permissionStatus, setPermissionStatus] = useState<ICapabilityPermissions>();
  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const refreshPermissions = useCallback(async () => {
    setIsLoading(true);
    const status = await getHealthPermissionStatuses(YU_HEALTH_ALL_CAPABILITIES, activeProvider);

    setIsLoading(false);
    return setPermissionStatus(status);
  }, []);

  const permissions = useMemo(() => getPermissionsConfig(activeProvider), [activeProvider]);

  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });
  const onPermissionRequest = useCallback(
    async (capability: HealthProviderCapability) => {
      await verifyAndAuthorizeCapability(capability, { skipPreliminaryModal: true });
      refreshPermissions();
    },
    [refreshPermissions, verifyAndAuthorizeCapability]
  );

  const onConnect = useCallback(async () => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.yuHealthConnect,
        name: ROUTES.yuHealthConnect,
      },
    });

    refreshPermissions();
  }, [componentId, refreshPermissions]);

  useNavigationComponentDidAppear(refreshPermissions);

  return (
    <PermissionsScreen
      isLoading={yuHealthStatus !== YuHealthStatus.ready || isLoading}
      permissions={permissions}
      onConnect={onConnect}
      activeProvider={activeProvider}
      onOpenSwitch={onConnect}
      permissionStatuses={permissionStatus}
      onPermissionRequest={onPermissionRequest}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
    />
  );
};

export default memo(PermissionsContainer);
