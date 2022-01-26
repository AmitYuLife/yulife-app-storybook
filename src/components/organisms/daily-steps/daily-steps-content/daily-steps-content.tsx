import React, { memo, useContext, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { FitkitUnavailable } from "./subcontainers/fitkit-unavailable";
import { FitkitUnauthorised } from "./subcontainers/fitkit-unauthorised";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import { useAuthoriseFitkit } from "@services/hooks/useAuthoriseFitkit";
import Storage from "@services/storage";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { isSamsung } from "@utils";
import { Platform } from "react-native";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { getUserFeatures } from "@redux/user/user.selectors";

const _DailyStepsContent = () => {
  const { authorise, loading: fitkitLoading, authorised, available } = useContext(FitkitContext);
  const features = useSelector(getUserFeatures);
  const { isIosMotionAuthorised, fitkitPermission, setFitkitPermission, handleAuthoriseFitkit } = useAuthoriseFitkit({
    authorise,
    passiveCyclingEnabled: features.passiveCyclingEnabled,
  });
  const dailyStepsIsFetching = useSelector(getDailyStepsIsFetching);

  const isLoading = fitkitLoading || dailyStepsIsFetching;
  const unavailable = !isLoading && !available;
  const unauthorised = !isLoading && available && !authorised;

  const onPress = useCallback(async () => {
    if (isSamsung()) {
      const route = ROUTES.onboardingFitKitConnect;
      Navigation.push(ROUTES.dailySteps, {
        component: {
          id: route,
          name: route,
          passProps: {
            dismissButtonLabel: "Cancel",
            dailyStepScreenHandleAuthorised: async (platform: FitKitHealthTrackingPlatform) => {
              const authorized = await handleAuthoriseFitkit(platform);
              return authorized;
            },
            navigateToNext: () => {
              Navigation.popToRoot(ROUTES.dailySteps);
            },
          },
          options: { bottomTabs },
        },
      });
    } else {
      if (Platform.OS === "android") {
        handleAuthoriseFitkit("GoogleFit");
      } else {
        handleAuthoriseFitkit("AppleHealth");
      }
    }
  }, [handleAuthoriseFitkit, isSamsung]);

  useEffect(() => {
    Storage.fitkit.getFitkitPermission().then((storageValue) => setFitkitPermission(storageValue));
  }, [setFitkitPermission]);

  if (isLoading) {
    return <DailyStepsLoading />;
  }

  if (unavailable) {
    return <FitkitUnavailable />;
  }

  if (unauthorised) {
    return (
      <FitkitUnauthorised
        onPress={onPress}
        isIosMotionAuthorised={isIosMotionAuthorised}
        hasRequestedPermission={fitkitPermission === Storage.fitkit.REQUESTED}
      />
    );
  }

  return <DailyStepsOnline />;
};

export const DailyStepsContent = memo(_DailyStepsContent);
