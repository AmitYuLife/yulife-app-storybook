import { IMainTabsProps } from "@navigation/root";
import { getCurrentWorld, getUnitTarget } from "@services/utils";
import { Style } from "@styles/index";
import React, { FC, useCallback, useMemo } from "react";

import { connect, useDispatch } from "react-redux";

import { IReduxState } from "../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import {
  challengeCancelAction,
  challengeEndAction,
  challengeResetAction,
} from "../../../../redux/levels/levels.actions";
import { getActiveLevel, getCurrentLevel } from "../../../../redux/levels/levels.selectors";
import { displayStreaksCompletedAction } from "../../../../redux/streaks/streaks.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import {
  ChallengeExitScreen,
  ChallengeFailedScreen,
  ChallengeProgressScreen,
  ChallengeSuccessScreen,
  QuestsScreenOffline,
  ChallengeCompleteScreen,
} from "../../../screens";
import QuestsScreenContainer from "@screens/member/quests/quests-scroll-screen/quests-screen.container";
import { BlurProvider } from "@atoms/index";

export type ConnectedState = ReturnType<typeof mapStateToProps>;

export type Props = IMainTabsProps & ConnectedState;

const QuestsContainer: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { activeLevel, componentId, currentLevel, features, copy, totalCoins, onLeftMenuPress } = props;

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

  const currentWorld = useMemo(() => getCurrentWorld(level), [level]);
  const screenProps = useMemo(
    () => ({
      componentId,
      currentLevel,
      onLeftMenuPress,
      totalCoins,
    }),
    [currentLevel, totalCoins, componentId, onLeftMenuPress]
  );

  const handleResetChallenge = useCallback(
    (showStreakComplete = false) => {
      if (showStreakComplete) {
        dispatch(displayStreaksCompletedAction());
      }

      dispatch(challengeResetAction());
    },
    [dispatch]
  );

  if (Style.isIPad()) {
    return <QuestsScreenOffline fitkitAvailable={false} totalCoins={totalCoins} onLeftMenuPress={onLeftMenuPress} />;
  }

  if (status) {
    return status === "success" ? (
      <ChallengeSuccessScreen
        level={level}
        onPressCta={() => handleResetChallenge(true)}
        rating={rating}
        reward={coins}
        score={score}
        unit={unit as any}
        loading={false}
        copy={copy.success}
      />
    ) : (
      <ChallengeFailedScreen level={level} onPress={handleResetChallenge} loading={false} copy={copy.failed} />
    );
  }

  if (timeUp) {
    return (
      <ChallengeCompleteScreen
        isLoading={isLoading}
        onCtaPress={() => dispatch(challengeEndAction())}
        copy={copy.completed}
      />
    );
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
            copy={copy.exitChallenge}
          />
        )}
      />
    );
  }

  return (
    <QuestsScreenContainer
      {...screenProps}
      showCompletedLevel={features.showCompletedLevel}
      showChestModalCopy={copy.showChestModal}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  activeLevel: getActiveLevel(state),
  currentLevel: getCurrentLevel(state),
  features: getUserFeatures(state),
  totalCoins: getTotalCoins(state),
  copy: getCopy(state, "challenges"),
});

export default connect<ConnectedState>(mapStateToProps)(QuestsContainer);
