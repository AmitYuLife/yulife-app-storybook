import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { Navigation } from "@navigation/main";

import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.context";
import { useNavigationComponentDidAppear, useTapBackTwiceToExit, useYuWatch } from "@hooks";
import { getUserSurge, getUserFeatures } from "@redux/user/user.selectors";

import {
  getChallengesStatus,
  getCurrentLevel,
  getHasNotification,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { getCurrentWorld, getCurrentYuniverse, noop } from "@utils";
import { dailyScreenInformationIcon } from "@redux/onboarding/onboarding.selectors";
import { getTheme } from "@theme";
import { hideDailyScreenInformationIcon } from "@redux/onboarding/onboarding.actions";
import { useNavigation } from "@navigation/navigation.context";

const _DailyStepsContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();

  useYuWatch();
  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const userSurge = useSelector(getUserSurge);
  const userFeatures = useSelector(getUserFeatures);
  const isDailyScreenInformationIconHidden = useSelector(dailyScreenInformationIcon);

  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
  const theme = getTheme(currentLevel, yuniversalMap);
  const { hasDone } = useSelector(getChallengesStatus);
  const isChallengeActive = useSelector(getHasNotification);

  const navigateToTodayEarnings = useCallback((): void => {
    if (!fitkit.authorised) {
      return;
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
  }, [fitkit.authorised, isDailyScreenInformationIconHidden, componentId, dispatch]);

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
    <FitkitContext value={fitkit}>
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
        userSurge={userSurge as typeof userSurge & { lottie: NonNullable<typeof userSurge.lottie> }}
        onLeftMenuPress={onLeftMenuPress ?? noop}
        onNotificationPress={userFeatures.showNotificationCentre ? navigateToNotifications : undefined}
        hasPermission={fitkit.authorised}
        hasEvents={false}
        hideInformationIcon={isDailyScreenInformationIconHidden}
      />
    </FitkitContext>
  );
};

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
