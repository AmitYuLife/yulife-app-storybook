import { ROUTES } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import useNavigationComponentDidAppear from "@services/hooks/useNavigationComponentDidAppear";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";
import { Navigation } from "react-native-navigation";
import { getUserNotification, getUserSurge, getUserEvents } from "@redux/user/user.selectors";
import { useLazyQuery } from "@apollo/react-hooks";
import { GetDailyScreenCustomIcon } from "@graphql/_core/schema";
import { GQL_QUERY_GET_DAILY_SCREEN_CUSTOM_ICON } from "@graphql/dailyScreenCustomIcon";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentWorld } from "@utils";

type Props = IMainTabsProps;

function _DailyStepsContainer({ componentId, onLeftMenuPress }: Props) {
  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const theme = useSelector(getDailyStepsTheme);
  const userSurge = useSelector(getUserSurge);
  const userNotification = useSelector(getUserNotification);
  const hasDailyScreenCustomIcon = userNotification?.hasDailyScreenCustomIcon;

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
  const userEvents = useSelector(getUserEvents);
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);

  const navigateToTodayEarnings = useCallback(
    () =>
      !fitkit.authorised
        ? null
        : Navigation.push(componentId, {
            component: {
              id: ROUTES.todayEarnings,
              name: ROUTES.todayEarnings,
            },
          }),
    [componentId]
  );

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
      />
    </FitkitContext.Provider>
  );
}

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
