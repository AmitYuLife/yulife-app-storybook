import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style, templateTextMarkdownStyles, StyleSheet } from "@styles";
import React, { memo, useCallback, useMemo } from "react";
import { Linking, Platform, ScrollView, View } from "react-native";
import { t } from "@locale";
import { TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@components/molecules";
import { IPermissionConfig } from "@services/yuHealth/permissions.helpers";
import { permissionsStyles } from "@organisms/permissions/_styles";
import { ChainIcon } from "@atoms/icon/chain-icon";
import { HealthProvider, HealthProviderCapability, ICapabilityPermissions } from "@yu-life/react-native-yu-health";
import HealthPermissionSection from "@organisms/permissions/health-permission-section";
import Markdown from "@components/molecules/markdown/markdown";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { HEALTH_PROVIDER_OPTIONS } from "@services/yuHealth/supported-health-types";
import { isiOS } from "@utils";
import { openAppleHealthPrivacy } from "@services/app-link";

interface IPermissionsScreenProps {
  activeProvider?: HealthProvider;
  isLoading: boolean;
  permissions: IPermissionConfig;
  onPermissionRequest: (capability: HealthProviderCapability) => void;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onOpenSwitch: () => void;
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
  onOpenSwitch,
  onLeftIconPress,
  onRightIconPress,
}: IPermissionsScreenProps) => {
  const openSettings = useCallback(() => Linking.openSettings(), []);

  const showPopup = useCallback((viewRef: React.MutableRefObject<View>, markdown: string) => {
    const onDismiss = () => Navigation.dismissOverlay(MODALS.blurredOverlay);
    const children = (
      <View style={styles.infoPopupWrapper}>
        <Markdown markdownStyles={sparseMarkdownStyles} text={markdown} containerStyle={styles.infoMarkdown} />
        <SecondaryButton size="Fill" onPress={onDismiss} translationKey="labels.cta.got_it" />
      </View>
    );

    showTooltipPopupRelativeToView({ viewRef, children });
  }, []);

  const activeProviderTitle = useMemo(() => {
    return HEALTH_PROVIDER_OPTIONS[activeProvider]?.label ?? activeProvider;
  }, [activeProvider]);

  const openAppleHealth = useCallback(() => {
    if (!isiOS()) {
      return;
    }

    openAppleHealthPrivacy();
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

        <View style={styles.buttons}>
          <SecondaryButton
            size="Fill"
            translationKey="screens.permissions.system_section.secondary_button"
            onPress={openSettings}
            wrapperStyle={permissionsStyles.paddingHorizontal24}
            leftIcon={<ChainIcon />}
          />
        </View>

        {activeProvider ? (
          <HealthPermissionSection
            isLoading={isLoading}
            onPermissionRequest={onPermissionRequest}
            showInfoPopup={showPopup}
            permissionStatuses={permissionStatuses?.providerPermissions}
            sectionTitle={activeProviderTitle}
            permissions={permissions?.providerPermissions}
          />
        ) : null}

        {!activeProvider ? (
          <Button
            wrapperStyle={permissionsStyles.paddingHorizontal24}
            size="Fill"
            translationKey="screens.permissions.connect_health_app"
            onPress={onConnect}
            leftIcon={<ChainIcon color={Colours.neutral.white} />}
          />
        ) : (
          <View style={styles.buttons}>
            {isiOS() ? (
              <SecondaryButton
                size="Fill"
                translationKey="screens.permissions.open_apple_health"
                wrapperStyle={permissionsStyles.paddingHorizontal24}
                onPress={openAppleHealth}
                leftIcon={<ChainIcon />}
              />
            ) : (
              <SecondaryButton
                size="Fill"
                translationKey="screens.permissions.switch_button"
                wrapperStyle={permissionsStyles.paddingHorizontal24}
                onPress={onOpenSwitch}
                leftIcon={<ChainIcon />}
              />
            )}
          </View>
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
    paddingBottom: Style.adjust(24),
  },
  buttons: {
    marginTop: Style.adjust(12),
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
  text: templateTextMarkdownStyles.b2,
  paragraph: {
    paddingVertical: Style.adjust(8),
  },
};

export default memo(PermissionsScreen);
