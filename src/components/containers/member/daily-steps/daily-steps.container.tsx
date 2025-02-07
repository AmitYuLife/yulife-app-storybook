import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "@navigation/root";
import React, { memo, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { Navigation } from "@navigation/main";

import { DailyStepsScreen } from "@screens";
import {
  useNavigationComponentDidAppear,
  useTapBackTwiceToExit,
  useVerifyAndAuthorizeCapability,
  useYuWatch,
} from "@hooks";
import { getUserSurge, getUserFeatures, getUserHeroCards } from "@redux/user/user.selectors";

import {
  getChallengesStatus,
  getCurrentLevel,
  getHasNotification,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { YU_HEALTH_DEFAULT_CAPABILITIES, getCurrentWorld, getCurrentYuniverse } from "@utils";
import { dailyScreenInformationIcon } from "@redux/onboarding/onboarding.selectors";
import { getTheme } from "@theme";
import { hideDailyScreenInformationIcon } from "@redux/onboarding/onboarding.actions";
import { getCapabilityStatuses, getYuHealthState } from "@redux/yu-health/yu-health.selectors";
import { HealthPermissionStatus } from "@yu-life/react-native-yu-health";
import { IDailyStepsContentProps } from "@organisms/daily-steps/daily-steps-content/daily-steps-content";
import { YuHealthStatus } from "@redux/yu-health/yu-health.types";
import { useNavigation } from "@navigation/navigation.context";

const DailyStepsContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();

  useYuWatch();
  const dispatch = useDispatch();
  const userSurge = useSelector(getUserSurge);
  const userFeatures = useSelector(getUserFeatures);
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const heroCards = useSelector(getUserHeroCards);
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });

  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
  const capabilityStatuses = useSelector(getCapabilityStatuses);
  const { status, isUnavailable: isYuHealthUnavailable, activeProvider } = useSelector(getYuHealthState);

  const isDailyScreenInformationIconHidden = useSelector(dailyScreenInformationIcon);
  const { hasDone } = useSelector(getChallengesStatus);
  const isChallengeActive = useSelector(getHasNotification);

  const theme = getTheme(currentLevel, yuniversalMap);

  const navigateToTodayEarnings = useCallback(() => {
    if (!isDailyScreenInformationIconHidden) {
      dispatch(hideDailyScreenInformationIcon());
    }

    pushToScreen(componentId, {
      component: {
        id: ROUTES.todayEarnings,
        name: ROUTES.todayEarnings,
      },
    });
  }, [isDailyScreenInformationIconHidden, componentId, dispatch]);

  const navigateToNotifications = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.notifications,
        name: ROUTES.notifications,
      },
    });
  }, [componentId]);

  useNavigationComponentDidAppear(() => {
    dispatch(startDailySteps());
  }, componentId);

  useTapBackTwiceToExit(componentId);

  const contentProps = useMemo((): IDailyStepsContentProps => {
    const isLoading = status !== YuHealthStatus.ready;
    const isUnavailable = isYuHealthUnavailable || !activeProvider;
    const isUnauthorised = !isLoading && capabilityStatuses?.STEP_COUNT !== HealthPermissionStatus.granted;
    const showHeroCards = isYuHealthUnavailable || isUnauthorised || heroCards?.length > 0;

    return {
      isLoading,
      isUnauthorised,
      hasAskedPreviously: !(!capabilityStatuses || capabilityStatuses?.STEP_COUNT === HealthPermissionStatus.notAsked),
      isUnavailable,
      onConnect: async () => {
        await verifyAndAuthorizeCapability(YU_HEALTH_DEFAULT_CAPABILITIES, { skipPreliminaryModal: true });
      },
      hasEvents: showHeroCards,
      showHeroCards,
    };
  }, [activeProvider, capabilityStatuses, status, isYuHealthUnavailable, verifyAndAuthorizeCapability, heroCards]);

  return (
    <DailyStepsScreen
      onCoinPress={navigateToTodayEarnings}
      currentYuniverse={currentYuniverse}
      currentWorld={currentWorld}
      currentLevel={currentLevel}
      yuniversalLevel={yuniversalLevel}
      yuniversalMap={yuniversalMap}
      hasDoneChallengeToday={hasDone}
      isChallengeActive={isChallengeActive}
      theme={theme}
      userSurge={userSurge}
      onLeftMenuPress={onLeftMenuPress}
      onNotificationPress={userFeatures.showNotificationCentre ? navigateToNotifications : undefined}
      hasPermission={true}
      hasEvents={contentProps.hasEvents}
      hideInformationIcon={isDailyScreenInformationIconHidden}
      contentProps={contentProps}
    />
  );
};

export default memo(DailyStepsContainer);
