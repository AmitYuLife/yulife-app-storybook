import { MediaPlayerScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import React, { useCallback, memo, useState, useEffect, useRef } from "react";
import { Navigation } from "@navigation/main";
import { MediaFragment } from "@graphql/__generated";
import { useDispatch, useSelector } from "react-redux";
import {
  challengeCancelAction,
  finishInAppMediaChallengeAction,
  challengeStartAction,
} from "@redux/levels/levels.actions";
import { t } from "@locale";
import { Modal } from "react-native";
import { GenericModal } from "@components/modals";
import { getActiveLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ActiveLevelState } from "@redux/levels/levels.types";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { Storage, StorageKey } from "@utils/storage";
import { IVideoProgressStorage } from "@components/screens/member/media/media-player/media-player-progress.screen";
import { usePopToQuestsRootOnNewDate } from "@hooks";

interface IVideo extends MediaFragment {
  reward: number;
  stars: number;
}

interface ITrackingInfo {
  collection_name: string;
  subcollection_name: string;
  type: string;
  subtype: string;
}

export interface IMediaPlayerContainerProps {
  video: IVideo;
  levelSlotId: string;
  // to be used for challengeStartAction
  levelSlotTemplateId: string;
  onLeftIconPress: () => void;
  eventType: "workout" | "mindfullness";
  orientation: "landscape" | "portrait";
  startChallengeButtonLabel: string;
  trackingInfo: ITrackingInfo;
  autoPlay?: boolean;
  startTimeInSeconds?: number;
  level: number;
  shouldCreateChallenge?: boolean;
}

type PromiseRef = {
  resolve: (value?: unknown) => void;
  reject: (reason?: string) => void;
};

const MediaPlayerContainer = ({
  video,
  levelSlotId,
  levelSlotTemplateId,
  onLeftIconPress,
  eventType,
  orientation,
  startChallengeButtonLabel,
  trackingInfo,
  autoPlay,
  startTimeInSeconds,
  level,
  shouldCreateChallenge = true,
}: IMediaPlayerContainerProps) => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [createChallengeLoading, setCreateChallengeLoading] = useState(false);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const promiseRef = useRef<PromiseRef>({ resolve: () => {}, reject: () => {} });

  const navigateToMediaPlayer = useCallback(async () => {
    setShowModal(false);
    await Navigation.pop(ROUTES.mediaPlayer);
  }, []);

  const cancelChallenge = useCallback(() => {
    dispatch(challengeCancelAction());
  }, [dispatch]);

  usePopToQuestsRootOnNewDate(level);

  const createChallenge = useCallback(() => {
    if (!video?.duration) {
      // TODO: show error
      return;
    }

    setCreateChallengeLoading(true);
    if (shouldCreateChallenge) {
      dispatch(
        challengeStartAction({
          levelSlotId,
          challengeStartSuccessPayload: {
            videoPlayerIsActive: true,
            videoDuration: video.duration,
          },
          createMobileQuestLevelChallengeVariables: { level, levelSlotTemplateId, yuniversalMap, contentId: video.id },
        })
      );
      return new Promise((resolve, reject) => {
        promiseRef.current = {
          resolve,
          reject,
        };
      });
    }
  }, [dispatch, levelSlotId, video, level, levelSlotTemplateId, yuniversalMap, shouldCreateChallenge]);

  useEffect(() => {
    if (!createChallengeLoading) {
      return;
    }

    if (activeLevel.levelState === ActiveLevelState.START_CHALLENGE_SUCCEED) {
      if (orientation === "landscape") {
        Navigation.mergeOptions(ROUTES.mediaPlayer, {
          statusBar: {
            drawBehind: false,
            visible: false,
          },
        });
      }

      setCreateChallengeLoading(false);
      promiseRef.current.resolve();
      return;
    }

    if (activeLevel.levelState === ActiveLevelState.START_CHALLENGE_FAILED) {
      setShowError(true);
      setShowModal(true);
      setCreateChallengeLoading(false);
      promiseRef.current.reject();
    }
  }, [activeLevel.levelState, createChallengeLoading, orientation]);

  const onEnd = useCallback(() => {
    if (activeLevel.id) {
      dispatch(finishInAppMediaChallengeAction({ video, eventType }));
    }
  }, [video, dispatch, eventType, activeLevel]);

  const onProgress = useCallback(
    async (seconds: number) => {
      // We only track progress every X seconds
      // This is to avoid too many writes to storage
      if (seconds % 5 === 0 || seconds === 1) {
        const videoProgress: IVideoProgressStorage = {
          seconds,
          id: video.id,
        };

        await Storage.setItem(StorageKey.mediaPlayerProgress, JSON.stringify(videoProgress));
      }
    },
    [video]
  );

  const onError = useCallback(() => {
    if (trackingInfo) {
      dispatch(logMixpanelEventActionCreator("media_not_loaded", { ...trackingInfo }));
    }

    setShowError(true);
    setShowModal(true);
  }, [dispatch, trackingInfo]);

  const onRightIconPress = useCallback((isModalShown: boolean) => {
    if (isModalShown) {
      return setShowModal(true);
    }

    Navigation.popTo(ROUTES.quests);
  }, []);

  const onPress = useCallback(async () => {
    cancelChallenge();
    await navigateToMediaPlayer();
  }, [cancelChallenge, navigateToMediaPlayer]);

  const onPressSecondary = useCallback(async (): Promise<void> => {
    setShowModal(false);

    if (!showError) {
      return;
    }

    if (activeLevel.challengeIsActive) {
      cancelChallenge();
    }

    await Navigation.popTo(ROUTES.quests);
  }, [showError, cancelChallenge, activeLevel]);

  const hideModal = useCallback((): void => {
    setShowModal(false);
  }, []);

  return (
    <>
      <MediaPlayerScreen
        startTimeInSeconds={startTimeInSeconds}
        onStart={createChallenge}
        onEnd={onEnd}
        onProgress={onProgress}
        onError={onError}
        video={video}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        startErrorMessage={t("create_challenge_error")}
        eventType={eventType}
        orientation={orientation}
        startChallengeButtonLabel={startChallengeButtonLabel}
        autoPlay={autoPlay}
      />

      <Modal statusBarTranslucent={true} animationType="slide" visible={showModal} onRequestClose={hideModal}>
        <GenericModal
          onPress={onPress}
          isPrimaryOnePressOnly={true}
          onPressSecondary={onPressSecondary}
          heading={
            !showError
              ? t("modals.generic_modal.cancel_challenge.heading")
              : t("modals.generic_modal.on_meditopia_error.heading")
          }
          subheading={
            !showError
              ? t("modals.generic_modal.cancel_challenge.subheading")
              : t("modals.generic_modal.on_meditopia_error.subheading")
          }
          ctaLabel={
            !showError
              ? t("modals.generic_modal.cancel_challenge.cta_label")
              : t("modals.generic_modal.on_meditopia_error.cta_label")
          }
          ctaLabelSecondary={
            !showError ? t("labels.cta.cancel") : t("modals.generic_modal.on_meditopia_error.cta_label_secondary")
          }
        />
      </Modal>
    </>
  );
};

export default memo(MediaPlayerContainer);
