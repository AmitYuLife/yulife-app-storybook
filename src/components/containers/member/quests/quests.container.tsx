import moment from "moment";
import { IMainTabsProps } from "@navigation/root";
import { getUnitTarget } from "@utils";
import { Style } from "@styles/index";
import React, { useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { challengeCancelAction, challengeEndAction, challengeResetAction } from "@redux/levels/levels.actions";
import {
  getActiveLevel,
  getChallengeIsActive,
  getHideExternalLinks,
  getVideoPlayerIsActive,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { displayStreaksCompletedAction } from "@redux/streaks/streaks.actions";
import {
  ChallengeExitScreen,
  ChallengeFailedScreen,
  ChallengeProgressScreen,
  ChallengeSuccessScreen,
  QuestsScreenOffline,
} from "@screens";
import QuestsScreenContainer from "@screens/member/quests/quests-scroll-screen/quests-screen.container";
import { BlurProvider } from "@atoms/index";
import { useTapBackTwiceToExit } from "@hooks";
import SudokuProgressScreen from "@components/screens/games/sudoku/sudoku-progress/sudoku-progress.screen";

const QuestsContainer = (props: IMainTabsProps) => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const challengeIsActive = useSelector(getChallengeIsActive);
  const hideExternalLinks = useSelector(getHideExternalLinks);
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);

  const { componentId, onLeftMenuPress } = props;

  const { coins, endDateTime, level, milestones, rating, score, status, subtype, unit, isLoading, levelSlotId } =
    activeLevel;

  useEffect(() => {
    if (!challengeIsActive && levelSlotId && !status) {
      const hasChallengeEnded = moment().isBefore(endDateTime);

      if (!hasChallengeEnded) {
        dispatch(challengeEndAction());
      }
    }
  }, [challengeIsActive, endDateTime, levelSlotId, dispatch, status]);

  useTapBackTwiceToExit(props.componentId);

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
          yuniversalMap={yuniversalMap}
          onPressCta={() => handleResetChallenge(true)}
          rating={rating}
          reward={coins}
          score={score}
          unit={unit as any}
          loading={false}
        />
      );
    }

    return (
      <ChallengeFailedScreen
        level={level}
        yuniversalMap={yuniversalMap}
        onPress={handleResetChallenge}
        loading={false}
      />
    );
  }

  if (subtype && !videoPlayerIsActive) {
    const progressTargets = milestones.map((item) => item.target[getUnitTarget(subtype)]);

    return (
      <BlurProvider
        render={({ showOverlay }) => (
          <>
            {subtype === "sudoku" ? (
              <SudokuProgressScreen {...screenProps} levelSlotId={levelSlotId} onDismissPress={showOverlay} />
            ) : (
              <ChallengeProgressScreen
                {...screenProps}
                challengeType={subtype as any}
                levelSlotId={levelSlotId}
                onDismissPress={showOverlay}
                endDateTime={endDateTime}
                userProgress={score}
                progressTargets={progressTargets}
                unit={unit as any}
                hideExternalLinks={hideExternalLinks}
              />
            )}
          </>
        )}
        renderOverlay={({ hideOverlay }) => (
          <ChallengeExitScreen
            onClose={hideOverlay}
            challengeType={subtype}
            onPressExit={() => dispatch(challengeCancelAction())}
            isCancelling={isLoading}
          />
        )}
      />
    );
  }

  return <QuestsScreenContainer {...screenProps} />;
};

export default QuestsContainer;
