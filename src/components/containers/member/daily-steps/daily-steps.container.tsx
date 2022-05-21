import { ROUTES } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import { useNavigationComponentDidAppear, useTapBackTwiceToExit } from "@hooks";
import { Navigation } from "react-native-navigation";
import { getUserNotification, getUserSurge, getUserEventsWithAds } from "@redux/user/user.selectors";
import { useLazyQuery } from "@apollo/react-hooks";
import { GetDailyScreenCustomIcon } from "@graphql/_core/schema";
import { GQL_QUERY_GET_DAILY_SCREEN_CUSTOM_ICON } from "@graphql/dailyScreenCustomIcon";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentWorld } from "@utils";
import { dailyScreenInformationIcon } from "@redux/onboarding/onboarding.selectors";
import { hideDailyScreenInformationIcon } from "@redux/onboarding/onboarding.actions";

type Props = IMainTabsProps;

function _DailyStepsContainer({ componentId, onLeftMenuPress }: Props) {
  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const theme = useSelector(getDailyStepsTheme);
  const userSurge = useSelector(getUserSurge);
  const userNotification = useSelector(getUserNotification);
  const hasDailyScreenCustomIcon = userNotification?.hasDailyScreenCustomIcon;
  const isDailyScreenInformationIconHidden = useSelector(dailyScreenInformationIcon);

  const [getDailyScreenCustomIcon, { data }] = useLazyQuery<GetDailyScreenCustomIcon>(
    GQL_QUERY_GET_DAILY_SCREEN_CUSTOM_ICON,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (hasDailyScreenCustomIcon) {
      getDailyScreenCustomIcon();
    }
  }, []);

  const userEvents = useSelector(getUserEventsWithAds);
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);

  const navigateToTodayEarnings = useCallback(() => {
    if (!fitkit.authorised) {
      return null;
    }

    if (!isDailyScreenInformationIconHidden) {
      dispatch(hideDailyScreenInformationIcon());
    }

    Navigation.push(componentId, {
      component: {
        id: ROUTES.todayEarnings,
        name: ROUTES.todayEarnings,
      },
    });
  }, [fitkit.authorised, isDailyScreenInformationIconHidden, componentId]);

  useNavigationComponentDidAppear(() => {
    dispatch(startDailySteps());
  }, componentId);

  useTapBackTwiceToExit(componentId);

  return (
    <FitkitContext.Provider value={fitkit}>
      <DailyStepsScreen
        onCoinPress={navigateToTodayEarnings}
        theme={theme}
        userSurge={userSurge}
        onLeftMenuPress={onLeftMenuPress}
        fitKitAvailable={fitkit.available}
        hasPermission={fitkit.authorised}
        customIcon={data?.getDailyScreenCustomIcon}
        currentWorld={currentWorld}
        hasEvents={!!userEvents?.length}
        hideInformationIcon={isDailyScreenInformationIconHidden}
      />
    </FitkitContext.Provider>
  );
}

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
