import { InfoPanel, PermissionItem, SecondaryButton, SettingsHeader } from "@components/molecules";
import React, { memo, useCallback } from "react";
import { Linking, View } from "react-native";
import { Permissions } from "@services/fitkit/permissions.helpers";
import { styles } from "./_styles";
import { t } from "@locale";
import { ChainIcon } from "@atoms/icon/chain-icon";

interface IProps {
  loading: boolean;
  systemPermission: Permissions[];
}

const SystemPermissionsSection = ({ systemPermission, loading }: IProps) => {
  const openSettings = useCallback(() => Linking.openSettings(), []);
  const showInfoView = systemPermission?.find((item) => item.status === "not_determined");
  const showErrorInfoView = systemPermission?.find((item) => item.status === "denied");
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
        leftIcon={<ChainIcon />}
      />

      {showErrorInfoView ? (
        <InfoPanel
          markdown={t("screens.permissions.statusDisconnected")}
          copyType={"sparse"}
          type="error"
          iconType="error"
          wrapperStyle={styles.infoErrorWrapperStyle}
          copyWrapperStyle={styles.copyWrapperStyle}
        />
      ) : null}
      {showInfoView && !showErrorInfoView ? (
        <InfoPanel
          markdown={t("screens.permissions.statusUnknown")}
          type="info"
          iconType="info"
          wrapperStyle={styles.infoWrapperStyle}
          copyWrapperStyle={styles.copyWrapperStyle}
        />
      ) : null}
    </View>
  );
};

export default memo(SystemPermissionsSection);
