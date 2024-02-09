import { ROUTES } from "@navigation/constants";
import { IMainTabsProps, pushToScreen } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { Navigation } from "@navigation/main";

import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.context";
import { useNavigationComponentDidAppear, useTapBackTwiceToExit } from "@hooks";
import { getUserNotification, getUserSurge, getUserEventsWithAds, getUserFeatures } from "@redux/user/user.selectors";
import { useLazyQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getCurrentWorld, getCurrentYuniverse } from "@utils";
import { dailyScreenInformationIcon } from "@redux/onboarding/onboarding.selectors";
import { getTheme } from "@theme";
import { hideDailyScreenInformationIcon } from "@redux/onboarding/onboarding.actions";

type Props = IMainTabsProps;

function _DailyStepsContainer({ componentId, onLeftMenuPress }: Props) {
  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const userSurge = useSelector(getUserSurge);
  const userNotification = useSelector(getUserNotification);
  const userFeatures = useSelector(getUserFeatures);
  const hasDailyScreenCustomIcon = userNotification?.hasDailyScreenCustomIcon;
  const isDailyScreenInformationIconHidden = useSelector(dailyScreenInformationIcon);

  const [getDailyScreenCustomIcon, { data }] = useLazyQuery(gql("GetDailyScreenCustomIconDocument"), {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (hasDailyScreenCustomIcon) {
      getDailyScreenCustomIcon();
    }
  }, []);

  const userEvents = useSelector(getUserEventsWithAds);
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const theme = getTheme(currentLevel, yuniversalMap);

  const navigateToTodayEarnings = useCallback(() => {
    if (!fitkit.authorised) {
      return null;
    }

    if (!isDailyScreenInformationIconHidden) {
      dispatch(hideDailyScreenInformationIcon());
    }

    pushToScreen(componentId, {
      component: {
        id: ROUTES.todayEarnings,
        name: ROUTES.todayEarnings,
      },
    });
  }, [fitkit.authorised, isDailyScreenInformationIconHidden, componentId]);

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

  return (
    <FitkitContext.Provider value={fitkit}>
      <DailyStepsScreen
        onCoinPress={navigateToTodayEarnings}
        currentYuniverse={currentYuniverse}
        currentWorld={currentWorld}
        theme={theme}
        userSurge={userSurge}
        onLeftMenuPress={onLeftMenuPress}
        onNotificationPress={userFeatures.showNotificationCentre ? navigateToNotifications : undefined}
        hasPermission={fitkit.authorised}
        customIcon={data?.getDailyScreenCustomIcon}
        hasEvents={!!userEvents?.length}
        hideInformationIcon={isDailyScreenInformationIconHidden}
      />
    </FitkitContext.Provider>
  );
}

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
