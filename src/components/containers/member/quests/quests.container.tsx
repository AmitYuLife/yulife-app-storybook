import { IMainTabsProps } from "@navigation/root";
import { getUnitTarget, getCurrentWorld } from "@services/utils";
import { Style } from "@styles/index";
import React, { FC, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { challengeCancelAction, challengeEndAction, challengeResetAction } from "@redux/levels/levels.actions";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import { displayStreaksCompletedAction } from "@redux/streaks/streaks.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import {
  ChallengeExitScreen,
  ChallengeFailedScreen,
  ChallengeProgressScreen,
  ChallengeSuccessScreen,
  QuestsScreenOffline,
  ChallengeCompleteScreen,
} from "@screens";
import QuestsScreenContainer from "@screens/member/quests/quests-scroll-screen/quests-screen.container";
import { BlurProvider } from "@atoms/index";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";

export type Props = IMainTabsProps;

const QuestsContainer: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const features = useSelector(getUserFeatures);

  const { componentId, onLeftMenuPress } = props;

  const {
    coins,
    endDateTime,
    level,
    milestones,
    rating,
    score,
    status,
    subtype,
    timeUp,
    unit,
    isLoading,
  } = activeLevel;

  useTapBackTwiceToExit(props.componentId);

  const currentWorld = useMemo(() => getCurrentWorld(level), [level]);

  const screenProps = useMemo(
    () => ({
      componentId,
      onLeftMenuPress,
    }),
    [componentId, onLeftMenuPress]
  );

  const handleResetChallenge = useCallback(
    (wasSuccessful = false) => {
      if (wasSuccessful) {
        // at some point(if we dispatch another action) it'll be good to create a new action
        // and move all these to a saga; keep it for now
        dispatch(displayStreaksCompletedAction());
      }

      dispatch(challengeResetAction());
    },
    [dispatch]
  );

  if (Style.isIPad()) {
    return <QuestsScreenOffline fitkitAvailable={false} onLeftMenuPress={onLeftMenuPress} />;
  }

  if (status) {
    if (status === "success") {
      return (
        <ChallengeSuccessScreen
          level={level}
          onPressCta={() => handleResetChallenge(true)}
          rating={rating}
          reward={coins}
          score={score}
          unit={unit as any}
          loading={false}
          currentWorld={currentWorld}
        />
      );
    }

    return (
      <ChallengeFailedScreen level={level} onPress={handleResetChallenge} loading={false} currentWorld={currentWorld} />
    );
  }

  if (timeUp) {
    return <ChallengeCompleteScreen isLoading={isLoading} onCtaPress={() => dispatch(challengeEndAction())} />;
  }

  if (subtype) {
    const progressTargets = milestones.map((item) => item.target[getUnitTarget(subtype)]);

    return (
      <BlurProvider
        render={({ showOverlay }) => (
          <ChallengeProgressScreen
            {...screenProps}
            currentWorld={currentWorld}
            challengeType={subtype as any}
            showCounter={features.showCounter}
            onDismissPress={showOverlay}
            endDateTime={endDateTime}
            userProgress={score}
            progressTargets={progressTargets}
            unit={unit as any}
          />
        )}
        renderOverlay={({ hideOverlay }) => (
          <ChallengeExitScreen
            onClose={hideOverlay}
            onPressExit={() => dispatch(challengeCancelAction())}
            isCancelling={isLoading}
          />
        )}
      />
    );
  }

  return <QuestsScreenContainer {...screenProps} showCompletedLevel={features.showCompletedLevel} />;
};

export default QuestsContainer;
