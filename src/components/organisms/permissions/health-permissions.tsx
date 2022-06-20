import { Button, PermissionItem, SecondaryButton, SettingsHeader } from "@components/molecules";
import React, { memo, useCallback } from "react";
import { Platform, View } from "react-native";
import { Permissions } from "@services/fitkit/permissions.helpers";
import { openAppleHealthPrivacy, openGoogleFitApp, openSamsungHealthApp } from "@services/app-link";
import { styles } from "./_styles";
import { t } from "@locale";
import { ChainIcon } from "@atoms/icon/chain-icon";
import { Colours } from "@styles";
import { HEALTH_SCREEN } from "@ids";

interface IProps {
  loading: boolean;
  showSamsungHealth: boolean;
  healthPermission: Permissions[];
  onHealthConnect: () => void;
  showInfoPopup: (viewRef: React.MutableRefObject<View>, markdown: string) => void;
}

const HealthPermissionsSection = ({
  healthPermission,
  showSamsungHealth,
  loading,
  onHealthConnect,
  showInfoPopup,
}: IProps) => {
  const showConnectButtonHealthSection = healthPermission?.find((item) =>
    Platform.select({
      android: item.status === "denied",
      ios: item.status === "not_asked" && item.scope === "read",
    })
  );

  const healthApp = Platform.select({
    ios: "Apple Health",
    android: showSamsungHealth ? "Samsung Health" : "Google Fit",
  });

  const healthAppSectionTitle = Platform.select({
    ios: t("screens.permissions.healthSection.iosHeader"),
    android: showSamsungHealth
      ? t("screens.permissions.healthSection.samsungHeader")
      : t("screens.permissions.healthSection.androidHeader"),
  });

  const openHealthApp = useCallback(() => {
    if (Platform.OS === "ios") {
      openAppleHealthPrivacy();
      return;
    }

    if (showSamsungHealth) {
      openSamsungHealthApp();
      return;
    }

    openGoogleFitApp();
  }, [showSamsungHealth]);

  return (
    <View testID={HEALTH_SCREEN}>
      <View style={styles.settingsHeader}>
        <SettingsHeader title={healthAppSectionTitle} />
      </View>

      {healthPermission?.map(({ id, title, status, description, requirement }) => (
        <PermissionItem
          key={id}
          title={title}
          status={status}
          description={description}
          requirement={requirement}
          loading={loading}
          showInfoPopup={showInfoPopup}
          errorMessage={t("screens.permissions.statusAskPermissions")}
          infoMessage={t("screens.permissions.statusUnknown")}
        />
      ))}

      {showConnectButtonHealthSection ? (
        <Button
          wrapperStyle={styles.paddingHorizontal24}
          size="Fill"
          label="Connect"
          onPress={onHealthConnect}
          leftIcon={<ChainIcon color={Colours.neutral.white} />}
        />
      ) : (
        <SecondaryButton
          size="Fill"
          label={healthApp}
          wrapperStyle={styles.paddingHorizontal24}
          onPress={openHealthApp}
          leftIcon={<ChainIcon />}
        />
      )}
    </View>
  );
};

export default memo(HealthPermissionsSection);
