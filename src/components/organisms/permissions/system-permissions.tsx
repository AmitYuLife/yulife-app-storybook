import { PermissionItem, SecondaryButton, SettingsHeader } from "@components/molecules";
import React, { memo, useCallback } from "react";
import { Linking, View } from "react-native";
import { Permissions } from "@services/fitkit/permissions.helpers";
import { styles } from "./_styles";
import { t } from "@locale";

interface IProps {
  loading: boolean;
  systemPermission: Permissions[];
}

const SystemPermissionsSection = ({ systemPermission, loading }: IProps) => {
  const openSettings = useCallback(() => Linking.openSettings(), []);
  return (
    <View>
      <View style={styles.settingsHeader}>
        <SettingsHeader title={t("screens.permissions.systemSection.header")} />
      </View>

      {systemPermission?.map(({ id, title, status, description, requirement }) => (
        <PermissionItem
          key={id}
          title={title}
          status={status}
          description={description}
          requirement={requirement}
          loading={loading}
        />
      ))}

      <SecondaryButton
        size="Fill"
        label={t("screens.permissions.systemSection.secondaryButton")}
        wrapperStyle={styles.paddingHorizontal24}
        onPress={openSettings}
      />
    </View>
  );
};

export default memo(SystemPermissionsSection);
