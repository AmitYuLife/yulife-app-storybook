import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { Navigation } from "@navigation/main";

import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.context";
import { useNavigationComponentDidAppear, useTapBackTwiceToExit, useYuWatch } from "@hooks";
import { getUserSurge, getUserEventsWithAds, getUserFeatures } from "@redux/user/user.selectors";

import {
  getChallengesStatus,
  getCurrentLevel,
  getHasNotification,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { getCurrentWorld, getCurrentYuniverse } from "@utils";
import { dailyScreenInformationIcon } from "@redux/onboarding/onboarding.selectors";
import { getTheme } from "@theme";
import { hideDailyScreenInformationIcon } from "@redux/onboarding/onboarding.actions";
import { useNavigation } from "@navigation/navigation.context";

function _DailyStepsContainer() {
  const { componentId, onLeftMenuPress } = useNavigation();

  useYuWatch();
  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const userSurge = useSelector(getUserSurge);
  const userFeatures = useSelector(getUserFeatures);
  const isDailyScreenInformationIconHidden = useSelector(dailyScreenInformationIcon);

  const userEvents = useSelector(getUserEventsWithAds);
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
  const theme = getTheme(currentLevel, yuniversalMap);
  const { hasDone } = useSelector(getChallengesStatus);
  const isChallengeActive = useSelector(getHasNotification);

  const navigateToTodayEarnings = useCallback((): void => {
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
        currentLevel={currentLevel}
        yuniversalLevel={yuniversalLevel}
        yuniversalMap={yuniversalMap}
        hasDoneChallengeToday={hasDone}
        isChallengeActive={isChallengeActive}
        theme={theme}
        userSurge={userSurge}
        onLeftMenuPress={onLeftMenuPress}
        onNotificationPress={userFeatures.showNotificationCentre ? navigateToNotifications : undefined}
        hasPermission={fitkit.authorised}
        hasEvents={!!userEvents?.length}
        hideInformationIcon={isDailyScreenInformationIconHidden}
      />
    </FitkitContext.Provider>
  );
}

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
