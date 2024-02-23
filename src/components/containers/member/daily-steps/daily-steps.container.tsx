import { ROUTES } from "@navigation/constants";
import { IMainTabsProps, pushToScreen } from "@navigation/root";
import React, { memo, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { Navigation } from "@navigation/main";

import { DailyStepsScreen } from "@screens";
import { useNavigationComponentDidAppear, useTapBackTwiceToExit, useVerifyAndAuthorizeCapability } from "@hooks";
import { getUserNotification, getUserSurge, getUserEventsWithAds, getUserFeatures } from "@redux/user/user.selectors";
import { useLazyQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { YU_HEALTH_DEFAULT_CAPABILITIES, getCurrentWorld, getCurrentYuniverse } from "@utils";
import { dailyScreenInformationIcon } from "@redux/onboarding/onboarding.selectors";
import { getTheme } from "@theme";
import { hideDailyScreenInformationIcon } from "@redux/onboarding/onboarding.actions";
import { getCapabilityStatuses, getYuHealthState } from "@redux/yu-health/yu-health.selectors";
import { HealthPermissionStatus } from "@yu-life/react-native-yu-health";
import { IDailyStepsContentProps } from "@organisms/daily-steps/daily-steps-content/daily-steps-content";

const DailyStepsContainer = ({ componentId, onLeftMenuPress }: IMainTabsProps) => {
  const dispatch = useDispatch();
  const userSurge = useSelector(getUserSurge);
  const userFeatures = useSelector(getUserFeatures);
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const userEvents = useSelector(getUserEventsWithAds);
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability();
  const userNotification = useSelector(getUserNotification);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const capabilityStatuses = useSelector(getCapabilityStatuses);
  const { isAuthorising, isUnavailable } = useSelector(getYuHealthState);
  const hasDailyScreenCustomIcon = userNotification?.hasDailyScreenCustomIcon;
  const isDailyScreenInformationIconHidden = useSelector(dailyScreenInformationIcon);

  const theme = getTheme(currentLevel, yuniversalMap);

  const [getDailyScreenCustomIcon, { data }] = useLazyQuery(gql("GetDailyScreenCustomIconDocument"), {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (hasDailyScreenCustomIcon) {
      getDailyScreenCustomIcon();
    }
  }, [getDailyScreenCustomIcon, hasDailyScreenCustomIcon]);

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
    return {
      isLoading: isAuthorising,
      isUnauthorised: !isAuthorising && capabilityStatuses?.STEP_COUNT !== HealthPermissionStatus.granted,
      hasAskedPreviously: !(!capabilityStatuses || capabilityStatuses?.STEP_COUNT === HealthPermissionStatus.notAsked),
      isUnavailable: isUnavailable,
      onConnect: async () => {
        await verifyAndAuthorizeCapability(YU_HEALTH_DEFAULT_CAPABILITIES, { skipPreliminaryModal: true });
      },
    };
  }, [capabilityStatuses, isAuthorising, isUnavailable, verifyAndAuthorizeCapability]);

  return (
    <DailyStepsScreen
      onCoinPress={navigateToTodayEarnings}
      currentYuniverse={currentYuniverse}
      currentWorld={currentWorld}
      theme={theme}
      userSurge={userSurge}
      onLeftMenuPress={onLeftMenuPress}
      onNotificationPress={userFeatures.showNotificationCentre ? navigateToNotifications : undefined}
      hasPermission={true}
      customIcon={data?.getDailyScreenCustomIcon}
      hasEvents={!!userEvents?.length}
      hideInformationIcon={isDailyScreenInformationIconHidden}
      contentProps={contentProps}
    />
  );
};

export default memo(DailyStepsContainer);
