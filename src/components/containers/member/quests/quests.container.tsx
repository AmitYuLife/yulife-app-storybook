import moment from "moment";
import { IMainTabsProps } from "@navigation/root";
import { getUnitTarget } from "@utils";
import { Style } from "@styles/index";
import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { challengeCancelAction, challengeEndAction, challengeResetAction } from "@redux/levels/levels.actions";
import {
  ActiveLevelStatus,
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
  MediaPlayerProgressScreen,
  QuestsScreenOffline,
} from "@screens";
import QuestsScreenContainer from "@screens/member/quests/quests-scroll-screen/quests-screen.container";
import { BlurProvider } from "@atoms/index";
import { useAsyncEffect, useTapBackTwiceToExit } from "@hooks";
import SudokuProgressScreen from "@components/screens/games/sudoku/sudoku-progress/sudoku-progress.screen";
import { Storage, StorageKey } from "@utils/storage";

const QuestsContainer = ({ componentId, onLeftMenuPress }: IMainTabsProps) => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const challengeIsActive = useSelector(getChallengeIsActive);
  const hideExternalLinks = useSelector(getHideExternalLinks);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);
  const [hasVideoProgressStorage, setHasVideoProgressStorage] = useState<boolean>(false);

  useTapBackTwiceToExit(componentId);

  useAsyncEffect(async () => {
    const videoProgressStorage = await Storage.getItem(StorageKey.mediaPlayerProgress);
    setHasVideoProgressStorage(Boolean(videoProgressStorage));

    if (!challengeIsActive && activeLevel.levelSlotId && !activeLevel.status) {
      const hasChallengeEnded = moment().isBefore(activeLevel.endDateTime);

      if (!hasChallengeEnded) {
        dispatch(challengeEndAction());
      }
    }
  }, [activeLevel.endDateTime, activeLevel.levelSlotId, activeLevel.status, challengeIsActive, dispatch]);

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

  const cancelChallenge = useCallback(async (): Promise<void> => {
    await Storage.removeItem(StorageKey.mediaPlayerProgress);
    dispatch(challengeCancelAction());
  }, [dispatch]);

  const renderProgressScreen = useCallback(
    ({ showOverlay }: { showOverlay: () => void }) => {
      if (activeLevel.subtype === "sudoku") {
        return (
          <SudokuProgressScreen
            onDismissPress={showOverlay}
            onLeftMenuPress={onLeftMenuPress}
            levelSlotId={activeLevel.levelSlotId}
          />
        );
      }

      // Both internal and external meditations both use the same `meditation`
      // subtype, however only internal meditations set `videoPlayerIsActive` to true
      // therefore we can use this to assume it is an internal meditation, and external
      // ones can use the default `ChallengeProgressScreen` screen instead.
      const isInternalMeditation = videoPlayerIsActive || hasVideoProgressStorage;

      if (activeLevel.subtype === "meditation" && isInternalMeditation) {
        return (
          <MediaPlayerProgressScreen
            activeLevel={activeLevel}
            onDismissPress={showOverlay}
            onLeftIconPress={onLeftMenuPress}
          />
        );
      }

      return (
        <ChallengeProgressScreen
          unit={activeLevel.unit}
          onDismissPress={showOverlay}
          userProgress={activeLevel.score}
          onLeftMenuPress={onLeftMenuPress}
          challengeType={activeLevel.subtype}
          levelSlotId={activeLevel.levelSlotId}
          endDateTime={activeLevel.endDateTime}
          hideExternalLinks={hideExternalLinks}
          progressTargets={activeLevel.milestones.map((item) => item.target[getUnitTarget(activeLevel.subtype)])}
        />
      );
    },
    [activeLevel, hideExternalLinks, onLeftMenuPress, videoPlayerIsActive, hasVideoProgressStorage]
  );

  if (Style.isIPad()) {
    return <QuestsScreenOffline fitkitAvailable={false} onLeftMenuPress={onLeftMenuPress} />;
  }

  if (activeLevel.status === ActiveLevelStatus.success) {
    return (
      <ChallengeSuccessScreen
        loading={false}
        unit={activeLevel.unit}
        level={activeLevel.level}
        score={activeLevel.score}
        reward={activeLevel.coins}
        rating={activeLevel.rating}
        yuniversalMap={yuniversalMap}
        onPressCta={() => handleResetChallenge(true)}
      />
    );
  }

  if (activeLevel.status === ActiveLevelStatus.failed) {
    return (
      <ChallengeFailedScreen
        loading={false}
        level={activeLevel.level}
        yuniversalMap={yuniversalMap}
        onPress={handleResetChallenge}
      />
    );
  }

  // Renders a challenge in progress
  if (activeLevel.subtype) {
    return (
      <BlurProvider
        render={renderProgressScreen}
        renderOverlay={({ hideOverlay }) => (
          <ChallengeExitScreen
            onClose={hideOverlay}
            onPressExit={cancelChallenge}
            challengeType={activeLevel.subtype}
            isCancelling={activeLevel.isLoading}
          />
        )}
      />
    );
  }

  return <QuestsScreenContainer componentId={componentId} onLeftMenuPress={onLeftMenuPress} />;
};

export default QuestsContainer;
