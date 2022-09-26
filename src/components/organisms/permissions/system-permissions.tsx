import { PermissionItem, SecondaryButton, SettingsHeader } from "@components/molecules";
import React, { memo, useCallback } from "react";
import { Linking, View } from "react-native";
import { Permissions } from "@services/fitkit/permissions.helpers";
import { styles } from "./_styles";
import { t } from "@locale";
import { ChainIcon } from "@atoms/icon/chain-icon";

interface IProps {
  loading: boolean;
  systemPermission: Permissions[];
  showInfoPopup: (viewRef: React.MutableRefObject<View>, markdown: string) => void;
}

const SystemPermissionsSection = ({ systemPermission, loading, showInfoPopup }: IProps) => {
  const openSettings = useCallback(() => Linking.openSettings(), []);
  return (
    <View>
      <View style={styles.settingsHeader}>
        <SettingsHeader title={t("screens.permissions.system_section.header")} />
      </View>

      {systemPermission?.map(({ id, title, status, description, requirement }) => (
        <PermissionItem
          key={id}
          title={title}
          status={status}
          description={description}
          requirement={requirement}
          loading={loading}
          showInfoPopup={showInfoPopup}
          errorMessage={t("screens.permissions.status_disconnected")}
          infoMessage={t("screens.permissions.status_unknown")}
        />
      ))}

      <SecondaryButton
        size="Fill"
        label={t("screens.permissions.system_section.secondary_button")}
        wrapperStyle={styles.paddingHorizontal24}
        onPress={openSettings}
        leftIcon={<ChainIcon />}
      />
    </View>
  );
};

export default memo(SystemPermissionsSection);
