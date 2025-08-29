import {
  GenericHeadingAbsolute,
  GenericHeadingPad,
  SystemPermissionsSection,
  HealthPermissionsSection,
  SwitchGoogleFitSection,
} from "@organisms";
import { Style, templateTextStyles, StyleSheet } from "@styles";
import React, { memo, useCallback, useMemo } from "react";
import { Platform, ScrollView, View } from "react-native";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { isSamsung } from "@utils";
import { FitKitHealthTrackingPlatform } from "@yu-life/react-native-fitkit";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { SettingsPermissions } from "@services/fitkit/permissions.helpers";
import { t } from "@locale";
import { TextTemplate } from "@atoms";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import Markdown from "@components/molecules/markdown/markdown";
import { SecondaryButton } from "@components/molecules";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { FitKitType } from "@graphql/__generated";

interface IProps {
  loading: boolean;
  settingsPermissions: SettingsPermissions;
  updatePermissions: () => Promise<void>;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
}

const PermissionsOldScreen = ({
  settingsPermissions,
  loading,
  updatePermissions,
  onLeftIconPress,
  onRightIconPress,
}: IProps) => {
  const {
    systemPermission,
    healthPermission,
    isGoogleFitAuthorised,
    isSamsungHealthStepsAuthorised,
    isSamsungHealthStepDailyTrendAuthorised,
  } = settingsPermissions || {};

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

  const { authoriseFitKitTypes, authorise } = useFitKit();
  const connectGoogleFit = useCallback(async () => {
    await authorise({ ...FitKitPermissions(), platform: "GoogleFit" });
  }, []);

  const showSamsungHealth = useMemo(
    () =>
      isSamsung() &&
      !isGoogleFitAuthorised &&
      (isSamsungHealthStepsAuthorised || isSamsungHealthStepDailyTrendAuthorised),
    [isGoogleFitAuthorised, isSamsungHealthStepsAuthorised, isSamsungHealthStepDailyTrendAuthorised]
  );

  const onHealthConnect = useCallback(async () => {
    const platform: FitKitHealthTrackingPlatform = Platform.select({
      ios: "AppleHealth",
      android: showSamsungHealth ? "SamsungHealth" : "GoogleFit",
    });

    const fitkitTypesRead = showSamsungHealth
      ? []
      : healthPermission.filter((item) => item.scope === "read").map((item) => item.type as FitKitType);

    await authoriseFitKitTypes(fitkitTypesRead, platform, true);

    if (Platform.OS === "ios") {
      await updatePermissions();
    }
  }, [updatePermissions, authoriseFitKitTypes, showSamsungHealth, healthPermission]);
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.messageWrapper}>
          <TextTemplate type="b2">{t("screens.permissions.info_message")}</TextTemplate>
        </View>
        {!showSamsungHealth ? null : <SwitchGoogleFitSection connectGoogleFit={connectGoogleFit} />}
        <SystemPermissionsSection loading={loading} systemPermission={systemPermission} showInfoPopup={showPopup} />
        <HealthPermissionsSection
          loading={loading}
          healthPermission={healthPermission}
          showSamsungHealth={showSamsungHealth}
          onHealthConnect={onHealthConnect}
          showInfoPopup={showPopup}
        />
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
  text: templateTextStyles.b2,
  paragraph: {
    paddingVertical: Style.adjust(8),
  },
};

export default memo(PermissionsOldScreen);
