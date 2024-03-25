import moment from "moment";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { getUnitTarget } from "@utils";
import { Style } from "@styles/index";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { challengeCancelAction, challengeEndAction, challengeResetAction } from "@redux/levels/levels.actions";
import {
  getActiveLevel,
  getChallengeIsActive,
  getHideExternalLinks,
  getVideoPlayerIsActive,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { ActiveLevelStatus, ChallengeSourceType } from "@redux/levels/levels.types";
import { displayStreaksCompletedAction } from "@redux/streaks/streaks.actions";
import {
  ChallengeExitScreen,
  ChallengeFailedScreen,
  ChallengeProgressScreen,
  ChallengeSuccessScreen,
  ChallengeWatchProgress,
  MediaPlayerProgressScreen,
  QuestsScreenOffline,
} from "@screens";
import { BlurProvider } from "@atoms/index";
import { useAsyncEffect, useTapBackTwiceToExit, useUserFeatures } from "@hooks";
import SudokuProgressScreen from "@components/screens/games/sudoku/sudoku-progress/sudoku-progress.screen";
import { Storage, StorageKey } from "@utils/storage";
import QuestMapContainer from "./quest-map/quest-map-container";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import { MODALS, ROUTES } from "@navigation/constants";

const QuestsContainer = ({ componentId, onLeftMenuPress }: IMainTabsProps) => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const currentRoute = useSelector(getRouteState);
  const challengeIsActive = useSelector(getChallengeIsActive);
  const hideExternalLinks = useSelector(getHideExternalLinks);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const features = useUserFeatures();
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);
  const activeModal: ReturnType<typeof getModalState> = useSelector(getModalState);
  const [hasVideoProgressStorage, setHasVideoProgressStorage] = useState<boolean>(false);
  const [hasShownDeferModal, setHasShownDeferModal] = useState<boolean>(false);

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

  useEffect(() => {
    if (!activeLevel?.challengeIsActive && hasShownDeferModal) {
      setHasShownDeferModal(false);
    }
  }, [activeLevel, dispatch, hasShownDeferModal]);

  useEffect(() => {
    if (!features?.enableChallengeNoDataDefer) {
      return;
    }

    const hasChallengeEnded = moment().isAfter(activeLevel.endDateTime);
    const shouldShowDeferModal =
      activeLevel?.challengeIsActive &&
      !activeModal &&
      hasChallengeEnded &&
      activeLevel.endDeferCount &&
      currentRoute === ROUTES.quests;

    if (shouldShowDeferModal && !hasShownDeferModal) {
      setHasShownDeferModal(true);
      showYuModal({
        component: {
          id: MODALS.challengeNoData,
          name: MODALS.challengeNoData,
        },
      });
    }
  }, [
    activeLevel,
    activeLevel.endDeferCount,
    activeModal,
    currentRoute,
    features.enableChallengeNoDataDefer,
    hasShownDeferModal,
  ]);

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
      if (activeLevel.createdBySource === ChallengeSourceType.watch && features?.tempGameEnableYuWatch) {
        return <ChallengeWatchProgress onLeftMenuPress={onLeftMenuPress} onCancel={showOverlay} />;
      }

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
      const isInternalMeditation =
        (videoPlayerIsActive || hasVideoProgressStorage) && currentRoute !== ROUTES.mediaPlayer;

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
    [
      activeLevel,
      features?.tempGameEnableYuWatch,
      videoPlayerIsActive,
      hasVideoProgressStorage,
      currentRoute,
      onLeftMenuPress,
      hideExternalLinks,
    ]
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

  return <QuestMapContainer componentId={componentId} onLeftMenuPress={onLeftMenuPress} />;
};

export default QuestsContainer;
