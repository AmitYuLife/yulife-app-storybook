import { Button, PermissionItem, SecondaryButton, SettingsHeader } from "@components/molecules";
import React, { memo, useCallback } from "react";
import { Platform, View } from "react-native";
import { Permissions } from "@services/fitkit/permissions.helpers";
import { openAppleHealthPrivacy, openGoogleFitApp, openSamsungHealthApp } from "@services/app-link";
import { permissionsStyles } from "./_styles";
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

  const healthAppTKey = Platform.select({
    ios: "apple_health",
    android: showSamsungHealth ? "samsung_health" : "google_fit",
  });

  const healthAppSectionTitle = Platform.select({
    ios: t("screens.permissions.health_section.ios_header"),
    android: showSamsungHealth
      ? t("screens.permissions.health_section.samsung_header")
      : t("screens.permissions.health_section.android_header"),
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
      <View style={permissionsStyles.settingsHeader}>
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
          errorMessage={t("screens.permissions.status_ask_permissions")}
          infoMessage={t("screens.permissions.status_unknown")}
        />
      ))}

      {showConnectButtonHealthSection ? (
        <Button
          wrapperStyle={permissionsStyles.paddingHorizontal24}
          size="Fill"
          translationKey="labels.cta.connect"
          onPress={onHealthConnect}
          leftIcon={<ChainIcon color={Colours.neutral.white} />}
        />
      ) : (
        <SecondaryButton
          size="Fill"
          translationKey={healthAppTKey}
          wrapperStyle={permissionsStyles.paddingHorizontal24}
          onPress={openHealthApp}
          leftIcon={<ChainIcon />}
        />
      )}
    </View>
  );
};

export default memo(HealthPermissionsSection);
