import { SettingsHeader, PermissionItem } from "@components/molecules";
import { t } from "@locale";
import { IPermission } from "@services/yuHealth/permissions.helpers";
import { memo, useMemo } from "react";
import { View } from "react-native";
import { permissionsStyles } from "./_styles";
import {
  IProviderPermission,
  ISystemPermission,
} from "@yu-life/react-native-yu-health/interface/permissions.interface";
import { HealthProviderCapability } from "@yu-life/react-native-yu-health";

interface IProps {
  isLoading: boolean;
  sectionTitle?: string;
  onPermissionRequest?: (capability: HealthProviderCapability) => void;
  permissions: IPermission[];
  permissionStatuses: (ISystemPermission | IProviderPermission)[];
  showInfoPopup: (viewRef: React.MutableRefObject<View>, markdown: string) => void;
}

const HealthPermissionSection = ({
  onPermissionRequest,
  sectionTitle,
  showInfoPopup,
  isLoading,
  permissionStatuses,
  permissions,
}: IProps) => {
  const permissionStatusesMap = useMemo(
    () => new Map(permissionStatuses?.map((status) => [status.identifier, status.status])),
    [permissionStatuses]
  );

  return (
    <View>
      <View style={permissionsStyles.settingsHeader}>
        <SettingsHeader title={sectionTitle} />
      </View>

      {permissions?.map(({ identifier, capability, title, description, requirement }) => {
        const status = permissionStatusesMap.get(identifier);

        const onRequest = () => {
          if (capability) {
            onPermissionRequest?.(capability);
          }
        };

        return (
          <PermissionItem
            key={`${identifier}-${title}`}
            title={title}
            status={status}
            description={description}
            onRequest={onRequest}
            requirement={requirement}
            loading={isLoading}
            showInfoPopup={showInfoPopup}
            errorMessage={t("screens.permissions.status_disconnected")}
            infoMessage={t("screens.permissions.status_unknown")}
          />
        );
      })}
    </View>
  );
};

export default memo(HealthPermissionSection);
