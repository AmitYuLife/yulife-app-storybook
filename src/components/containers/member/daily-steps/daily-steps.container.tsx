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
import { useLazyQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_USER_SURGE } from "@graphql/surge";
import { GetUserSurge } from "@graphql/_core/schema/GetUserSurge";
import { getAppState } from "@redux/app/app.selectors";

type Props = IMainTabsProps;

function _DailyStepsContainer({ componentId, onLeftMenuPress }: Props) {
  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const theme = useSelector(getDailyStepsTheme);
  const appState = useSelector(getAppState);

  const [getUserSurge, { data: userSurge }] = useLazyQuery<GetUserSurge>(GQL_QUERY_GET_USER_SURGE, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    (async () => {
      if (appState === "active") {
        await getUserSurge();
      }
    })();
  }, [appState]);

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
        userSurge={userSurge?.getUserSurge}
        onLeftMenuPress={onLeftMenuPress}
        fitKitAvailable={fitkit.available}
        hasPermission={fitkit.authorised}
      />
    </FitkitContext.Provider>
  );
}

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
