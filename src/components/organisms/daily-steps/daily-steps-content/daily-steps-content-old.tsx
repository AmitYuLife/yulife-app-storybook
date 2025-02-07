import React, { memo, useContext, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { FitkitUnavailable } from "./subcontainers/fitkit-unavailable";
import { FitkitUnauthorised } from "./subcontainers/fitkit-unauthorised";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { FitkitContext } from "@services/fitkit/fitkit.context";
import { useAuthoriseFitkit } from "@hooks";
import Storage from "@services/storage";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { isSamsung } from "@utils";
import { Platform } from "react-native";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { getUserHeroCards } from "@redux/user/user.selectors";

const _DailyStepsContent = () => {
  const { authorise, loading: fitkitLoading, authorised, available } = useContext(FitkitContext);
  const { isIosMotionAuthorised, fitkitPermission, setFitkitPermission, handleAuthoriseFitkit } = useAuthoriseFitkit({
    authorise,
  });
  const dailyStepsIsFetching = useSelector(getDailyStepsIsFetching);

  const isLoading = fitkitLoading || dailyStepsIsFetching;
  const unavailable = !isLoading && !available;
  const unauthorised = !isLoading && available && !authorised;
  const heroCards = useSelector(getUserHeroCards);

  const onReferralsButtonPress = useCallback(
    () =>
      Navigation.push(ROUTES.dailySteps, {
        component: {
          id: ROUTES.referralInformation,
          name: ROUTES.referralInformation,
          passProps: {
            sourceId: ROUTES.dailySteps,
          },
          options: {
            bottomTabs,
            sideMenu: {
              left: {
                enabled: false,
                visible: false,
              },
            },
          },
        },
      }),
    []
  );

  const onPress = useCallback(async () => {
    if (isSamsung()) {
      const route = ROUTES.onboardingFitKitConnect;
      Navigation.push(ROUTES.dailySteps, {
        component: {
          id: route,
          name: route,
          passProps: {
            dismissButtonTranslationKey: "labels.cta.cancel",
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

  return <DailyStepsOnline showHeroCards={!!heroCards?.length} onReferralsButtonPress={onReferralsButtonPress} />;
};

export const DailyStepsContentOld = memo(_DailyStepsContent);
