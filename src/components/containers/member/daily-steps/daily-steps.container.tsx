import { IntroContainer } from "@containers/index";
import { MODALS } from "@navigation/constants";
import { IMainTabsProps, labels, showYuModal } from "@navigation/root";
import { getShowIntro } from "@redux/onboarding/onboarding.selectors";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { getSurgeIntro, getUserFeatures } from "@redux/user/user.selectors";
import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import useNavigationComponentDidAppear from "@services/hooks/useNavigationComponentDidAppear";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";

type Props = IMainTabsProps;

function navigateToTodayYuCoin() {
  showYuModal({
    component: {
      id: MODALS.todayYucoin,
      name: MODALS.todayYucoin,
      passProps: {
        onCtaPress: labels[1].onPress,
      },
    },
  });
}

function _DailyStepsContainer({ componentId, onLeftMenuPress }: Props) {
  const dispatch = useDispatch();
  const fitkit = useFitKit();

  const features = useSelector(getUserFeatures);
  const isFetching = useSelector(getDailyStepsIsFetching);
  const theme = useSelector(getDailyStepsTheme);
  const showIntro = useSelector(getShowIntro);
  const surgeIntro = useSelector(getSurgeIntro);

  useNavigationComponentDidAppear(() => {
    dispatch(startDailySteps());
  }, componentId);

  useTapBackTwiceToExit(componentId);

  const shouldDisplaySurge = features.showSurge;

  if (showIntro || surgeIntro.visibility) {
    return (
      <FitkitContext.Provider value={fitkit}>
        <IntroContainer
          shouldDisplaySurge={shouldDisplaySurge}
          isLoading={isFetching || fitkit.loading}
          onCoinPress={navigateToTodayYuCoin}
          onLeftMenuPress={onLeftMenuPress}
          theme={theme}
          showIntro={showIntro}
          surgeIntro={surgeIntro}
          isShowingPassiveMeditation={features.usePassiveMeditation}
        />
      </FitkitContext.Provider>
    );
  }

  return (
    <FitkitContext.Provider value={fitkit}>
      <DailyStepsScreen
        onCoinPress={navigateToTodayYuCoin}
        theme={theme}
        onLeftMenuPress={onLeftMenuPress}
        fitKitAvailable={fitkit.available}
        hasPermission={fitkit.authorised}
      />
    </FitkitContext.Provider>
  );
}

const DailyStepsContainer = memo(_DailyStepsContainer);

export default DailyStepsContainer;
