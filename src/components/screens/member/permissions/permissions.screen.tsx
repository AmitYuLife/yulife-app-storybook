import {
  GenericHeadingAbsolute,
  GenericHeadingPad,
  SystemPermissionsSection,
  HealthPermissionsSection,
  SwitchGoogleFitSection,
} from "@organisms";
import { Style } from "@styles";
import React, { memo, useCallback, useMemo } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { isSamsung } from "@utils";
import { FitKitHealthTrackingPlatform } from "@yu-life/react-native-fitkit";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { SettingsPermissions } from "@services/fitkit/permissions.helpers";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { t } from "@locale";

interface IProps {
  loading: boolean;
  settingsPermissions: SettingsPermissions;
  updatePermissions: () => Promise<void>;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
}

const PermissionsScreen = ({
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

  const { authoriseFitKitTypes, authorise } = useFitKit();
  const features = useSelector(getUserFeatures);
  const connectGoogleFit = useCallback(async () => {
    await authorise({ ...FitKitPermissions(features.passiveCyclingEnabled), platform: "GoogleFit" });
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
    <View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <GenericHeadingPad />

        <SystemPermissionsSection loading={loading} systemPermission={systemPermission} />

        <HealthPermissionsSection
          loading={loading}
          healthPermission={healthPermission}
          showSamsungHealth={showSamsungHealth}
          onHealthConnect={onHealthConnect}
        />

        {!showSamsungHealth ? null : <SwitchGoogleFitSection connectGoogleFit={connectGoogleFit} />}
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
  scrollViewContainer: {
    paddingBottom: Style.adjust(24),
  },
});

export default memo(PermissionsScreen);
