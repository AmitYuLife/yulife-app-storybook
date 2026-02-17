import moment from "moment";
import { showYuModal } from "@navigation/root";
import { getUnitTarget } from "@utils";
import { Style } from "@styles/index";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { challengeCancelAction, challengeEndAction, challengeResetAction } from "@redux/levels/levels.actions";
import {
  getActiveLevel,
  getChallengeFinishedResult,
  getChallengeIsActive,
  getHideExternalLinks,
  getVideoPlayerIsActive,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { ActiveLevelStatus, ChallengeSourceType } from "@redux/levels/levels.types";
import {
  ChallengeExitScreen,
  ChallengeFailedScreen,
  ChallengeProgressScreen,
  ChallengeSuccessScreen,
  ChallengeSuccessOldScreen,
  ChallengeWatchProgress,
  MediaPlayerProgressScreen,
  QuestsScreenOffline,
} from "@screens";
import { useAsyncEffect, useTapBackTwiceToExit, useUserFeatures } from "@hooks";
import { useModal } from "@modules/modals/useModal";
import SudokuProgressScreen from "@components/screens/games/sudoku/sudoku-progress/sudoku-progress.screen";
import { Storage, StorageKey } from "@utils/storage";
import QuestMapContainer from "./quest-map/quest-map-container";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import { MODALS, ROUTES } from "@navigation/constants";
import { useNavigation } from "@navigation/navigation.context";
import { Navigation } from "@navigation/main";
import { NOTIF_CENTRE } from "@ids";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

const QuestsContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const challengeFinishedResult = useSelector(getChallengeFinishedResult);
  const currentRoute = useSelector(getRouteState);
  const challengeIsActive = useSelector(getChallengeIsActive);
  const hideExternalLinks = useSelector(getHideExternalLinks);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const features = useUserFeatures();
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);
  const activeModal: ReturnType<typeof getModalState> = useSelector(getModalState);
  const [hasVideoProgressStorage, setHasVideoProgressStorage] = useState<boolean>(false);
  const [hasShownDeferModal, setHasShownDeferModal] = useState<boolean>(false);
  const { showModal } = useModal();

  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginEnd: Style.adjust(16) },
      },
      ...(features.showNotificationCentre
        ? [
            {
              icon: LeftIcon.NOTIFICATIONS,
              onPress: () => {
                Navigation.push(ROUTES.quests, {
                  component: {
                    id: ROUTES.notifications,
                    name: ROUTES.notifications,
                  },
                });
              },
              testID: NOTIF_CENTRE,
              style: { paddingStart: Style.adjust(8) },
            },
          ]
        : []),
    ],
    [features.showNotificationCentre, onLeftMenuPress]
  );
  useTapBackTwiceToExit(componentId);

  useAsyncEffect(async () => {
    const videoProgressStorage = await Storage.getItem(StorageKey.mediaPlayerProgress);
    setHasVideoProgressStorage(Boolean(videoProgressStorage));

    if (!challengeIsActive && activeLevel.id && !activeLevel.status) {
      const isStillInProgress = moment().isBefore(activeLevel.endDateTime);

      if (!isStillInProgress) {
        dispatch(challengeEndAction({ location: "quests.container" }));
      }
    }
  }, [activeLevel.endDateTime, activeLevel.id, activeLevel.status, challengeIsActive, dispatch]);

  useEffect(() => {
    if (!activeLevel?.challengeIsActive && hasShownDeferModal) {
      setHasShownDeferModal(false);
    }
  }, [activeLevel, dispatch, hasShownDeferModal]);

  useEffect(() => {
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
  }, [activeLevel, activeLevel.endDeferCount, activeModal, currentRoute, hasShownDeferModal]);

  const handleResetChallenge = useCallback(() => {
    dispatch(challengeResetAction());
  }, [dispatch]);

  const cancelChallenge = useCallback(async (): Promise<void> => {
    await Storage.removeItem(StorageKey.mediaPlayerProgress);
    dispatch(challengeCancelAction());
  }, [dispatch]);

  const showCancelModal = useCallback(() => {
    showModal(({ onClose }) => (
      <ChallengeExitScreen
        onClose={onClose}
        onPressExit={() => {
          onClose();
          cancelChallenge();
        }}
        challengeType={activeLevel.subtype}
        isCancelling={activeLevel.isLoading}
      />
    ));
  }, [showModal, cancelChallenge, activeLevel.subtype, activeLevel.isLoading]);

  const renderProgressScreen = useCallback(() => {
    if (activeLevel.createdBySource === ChallengeSourceType.Watch) {
      return <ChallengeWatchProgress onLeftMenuPress={onLeftMenuPress} onCancel={showCancelModal} />;
    }

    if (activeLevel.subtype === "sudoku") {
      return (
        <SudokuProgressScreen
          onDismissPress={showCancelModal}
          onLeftMenuPress={onLeftMenuPress}
          challengeId={activeLevel.id}
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
          onDismissPress={showCancelModal}
          onLeftIconPress={onLeftMenuPress}
        />
      );
    }

    return (
      <ChallengeProgressScreen
        unit={activeLevel.unit}
        onDismissPress={showCancelModal}
        userProgress={activeLevel.score}
        onLeftMenuPress={onLeftMenuPress}
        challengeType={activeLevel.subtype}
        startDateTime={activeLevel.startDateTime}
        endDateTime={activeLevel.endDateTime}
        hideExternalLinks={hideExternalLinks}
        progressTargets={activeLevel.milestones.map((item) => item.target[getUnitTarget(activeLevel.subtype)])}
        level={activeLevel.level}
        yuniversalMap={activeLevel.yuniversalMap}
        levelSlotTemplateId={activeLevel.levelSlotTemplateId}
      />
    );
  }, [
    activeLevel,
    videoPlayerIsActive,
    hasVideoProgressStorage,
    currentRoute,
    onLeftMenuPress,
    hideExternalLinks,
    showCancelModal,
  ]);

  if (Style.isIPad()) {
    return <QuestsScreenOffline leftIcons={leftIcons} fitkitAvailable={false} />;
  }

  if (challengeFinishedResult && challengeFinishedResult.status === ActiveLevelStatus.success) {
    if (features.tempGameEnableNewSuccessScreen) {
      return (
        <ChallengeSuccessScreen
          level={challengeFinishedResult.level}
          reward={challengeFinishedResult.coins}
          rating={challengeFinishedResult.rating}
          onPressCta={handleResetChallenge}
          completionSummary={challengeFinishedResult.completionSummary}
        />
      );
    }

    return (
      <ChallengeSuccessOldScreen
        loading={false}
        unit={challengeFinishedResult.unit}
        level={challengeFinishedResult.level}
        score={challengeFinishedResult.score}
        reward={challengeFinishedResult.coins}
        rating={challengeFinishedResult.rating}
        yuniversalMap={yuniversalMap}
        onPressCta={handleResetChallenge}
      />
    );
  }

  if (challengeFinishedResult && challengeFinishedResult.status === ActiveLevelStatus.failed) {
    return (
      <ChallengeFailedScreen
        loading={false}
        level={challengeFinishedResult.level}
        yuniversalMap={yuniversalMap}
        onPress={handleResetChallenge}
      />
    );
  }

  // Renders a challenge in progress
  if (activeLevel.subtype) {
    return renderProgressScreen();
  }

  return <QuestMapContainer leftIcons={leftIcons} componentId={componentId} onLeftMenuPress={onLeftMenuPress} />;
};

export default QuestsContainer;
