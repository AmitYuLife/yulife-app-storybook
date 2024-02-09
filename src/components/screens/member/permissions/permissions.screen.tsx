import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import React, { memo, useCallback } from "react";
import { Linking, Platform, ScrollView, StyleSheet, View } from "react-native";
import { t } from "@locale";
import { TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@components/molecules";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { IPermissionConfig } from "@services/yuHealth/permissions.helpers";
import { permissionsStyles } from "@organisms/permissions/_styles";
import { ChainIcon } from "@atoms/icon/chain-icon";
import {
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderCapability,
  ICapabilityPermissions,
} from "@yu-life/react-native-yu-health";
import { openAppleHealthPrivacy, openGoogleFitApp } from "@services/app-link";
import HealthPermissionSection from "@organisms/permissions/health-permission-section";
import Markdown from "@components/molecules/markdown/markdown";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { isiOS } from "@utils";

interface IPermissionsScreenProps {
  activeProvider?: HealthProvider;
  isLoading: boolean;
  permissions: IPermissionConfig;
  onPermissionRequest: (capability: HealthProviderCapability) => void;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onConnect: () => void;
  permissionStatuses: ICapabilityPermissions;
}

const PermissionsScreen = ({
  isLoading,
  onPermissionRequest,
  onConnect,
  activeProvider,
  permissionStatuses,
  permissions,
  onLeftIconPress,
  onRightIconPress,
}: IPermissionsScreenProps) => {
  const openSettings = useCallback(() => Linking.openSettings(), []);

  const showConnectButtonHealthSection = permissionStatuses?.providerPermissions.find(
    (item) => item.status === HealthPermissionStatus.denied || item.status === HealthPermissionStatus.notAsked
  );

  const openHealthApp = useCallback(() => {
    if (isiOS()) {
      openAppleHealthPrivacy();
      return;
    }

    // TODO: Determine what to open
    openGoogleFitApp();
  }, []);

  const showPopup = useCallback((viewRef: React.MutableRefObject<View>, markdown: string) => {
    const onDismiss = () => Navigation.dismissOverlay(MODALS.blurredOverlay);
    const children = (
      <View style={styles.infoPopupWrapper}>
        <Markdown markdownStyles={sparseMarkdownStyles} text={markdown} containerStyle={styles.infoMarkdown} />
        <SecondaryButton size="Fill" onPress={onDismiss} label={t("labels.cta.got_it")} />
      </View>
    );

    showTooltipPopupRelativeToView({ viewRef, children });
  }, []);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.messageWrapper}>
          <TextTemplate type="b2">{t("screens.permissions.info_message")}</TextTemplate>
        </View>
        <HealthPermissionSection
          showInfoPopup={showPopup}
          onPermissionRequest={onPermissionRequest}
          isLoading={isLoading}
          permissionStatuses={permissionStatuses?.systemPermissions}
          sectionTitle={t("screens.permissions.health_section.header")}
          permissions={permissions?.systemPermissions}
        />

        <SecondaryButton
          size="Fill"
          label={t("screens.permissions.system_section.secondary_button")}
          onPress={openSettings}
          wrapperStyle={permissionsStyles.paddingHorizontal24}
          leftIcon={<ChainIcon />}
        />

        <HealthPermissionSection
          isLoading={isLoading}
          onPermissionRequest={onPermissionRequest}
          showInfoPopup={showPopup}
          permissionStatuses={permissionStatuses?.providerPermissions}
          sectionTitle={activeProvider}
          permissions={permissions?.providerPermissions}
        />

        {showConnectButtonHealthSection ? (
          <Button
            wrapperStyle={permissionsStyles.paddingHorizontal24}
            size="Fill"
            label="Connect"
            onPress={onConnect}
            leftIcon={<ChainIcon color={Colours.neutral.white} />}
          />
        ) : (
          <SecondaryButton
            size="Fill"
            label={activeProvider}
            wrapperStyle={permissionsStyles.paddingHorizontal24}
            onPress={openHealthApp}
            leftIcon={<ChainIcon />}
          />
        )}
      </ScrollView>
      <GenericHeadingAbsolute
        heading={t("screens.permissions.heading")}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
  scrollViewContainer: {
    paddingBottom: Style.adjust(Platform.select({ ios: 24, android: 70 })),
  },
  messageWrapper: {
    marginTop: Style.adjust(12),
    marginBottom: Style.adjust(12),
    paddingHorizontal: Style.adjust(24),
  },
  infoPopupWrapper: {
    padding: Style.adjust(16),
    width: Style.adjust(Style.DEVICE_WIDTH * 0.75),
  },
  infoMarkdown: {
    marginBottom: Style.adjust(8),
  },
});

const sparseMarkdownStyles = {
  text: textTemplateStyle.b2,
  paragraph: {
    paddingVertical: Style.adjust(8),
  },
};

export default memo(PermissionsScreen);
