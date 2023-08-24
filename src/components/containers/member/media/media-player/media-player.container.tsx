import { MediaPlayerScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import React, { useCallback, memo, useState } from "react";
import { Navigation } from "@navigation/main";
import {
  CancelQuestMapLevelChallenge,
  CancelQuestMapLevelChallengeVariables,
  Media,
  UpdateQuestMapLevelChallenge,
  UpdateQuestMapLevelChallengeVariables,
} from "@graphql/_core/schema";
import {
  CreateQuestMapLevelChallengeMutationTuple,
  GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE,
  GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE,
  GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE,
} from "@graphql/challenges";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  challengeCancelAction,
  challengeEndSuccessAction,
  challengeStartSuccessAction,
} from "@redux/levels/levels.actions";
import { t } from "@locale";
import { Modal } from "react-native";
import { GenericModal } from "@components/modals";
import { IActiveLevel, getActiveLevel } from "@redux/levels/levels.selectors";
import Logger from "@services/logging/logger";
import { updateInAppMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { Storage, StorageKey } from "@utils/storage";
import { IVideoProgressStorage } from "@components/screens/member/media/media-player/media-player-progress.screen";

interface IVideo extends Media {
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
  onLeftIconPress: () => void;
  eventType: "workout" | "mindfullness";
  orientation: "landscape" | "portrait";
  startChallengeButtonLabel: string;
  trackingInfo: ITrackingInfo;
  autoPlay?: boolean;
  startTimeInSeconds?: number;
}

const MediaPlayerContainer = ({
  video,
  levelSlotId,
  onLeftIconPress,
  eventType,
  orientation,
  startChallengeButtonLabel,
  trackingInfo,
  autoPlay,
  startTimeInSeconds,
}: IMediaPlayerContainerProps) => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(getActiveLevel);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [createQuestMapLevelChallengeMutation]: CreateQuestMapLevelChallengeMutationTuple = useMutation(
    GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE
  );
  const [updateQuestMapLevelChallenge] = useMutation<
    UpdateQuestMapLevelChallenge,
    UpdateQuestMapLevelChallengeVariables
  >(GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE);

  const [cancelMapLevelChallenge] = useMutation<CancelQuestMapLevelChallenge, CancelQuestMapLevelChallengeVariables>(
    GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE
  );

  const navigateToMediaPlayer = useCallback(async () => {
    setShowModal(false);
    await Navigation.pop(ROUTES.mediaPlayer);
  }, []);

  const cancelChallenge = useCallback(async (): Promise<void> => {
    await Storage.removeItem(StorageKey.mediaPlayerProgress);
    await cancelMapLevelChallenge({
      variables: {
        levelSlotId,
        contentId: video.id,
      },
    });
    dispatch(challengeCancelAction());
  }, [video.id, levelSlotId, dispatch, cancelMapLevelChallenge]);

  const createChallenge = useCallback(
    async ({ challengeIsActive, endDateTime }: IActiveLevel): Promise<void> => {
      if (challengeIsActive || Boolean(endDateTime)) {
        await cancelChallenge();
      }

      if (!video?.duration) {
        return;
      }

      const { data } = await createQuestMapLevelChallengeMutation({ variables: { levelSlotId, contentId: video.id } });
      dispatch(
        challengeStartSuccessAction({
          createQuestMapLevelChallenge: data?.createQuestMapLevelChallenge,
          levelSlotId,
          videoPlayerIsActive: true,
          videoDuration: video.duration,
        })
      );
      Navigation.mergeOptions(ROUTES.mediaPlayer, {
        statusBar: {
          drawBehind: false,
          visible: false,
        },
      });
    },
    [dispatch, video?.id, levelSlotId, video?.duration, cancelChallenge, createQuestMapLevelChallengeMutation]
  );

  const onEnd = useCallback(async (): Promise<void> => {
    try {
      const { data } = await updateQuestMapLevelChallenge({
        variables: { levelSlotId, contentId: video.id, payload: { value: video.duration } },
      });

      const challenge = data?.updateQuestMapLevelChallenge?.challenge;

      if (!challenge) {
        return;
      }

      dispatch(challengeEndSuccessAction({ ...challenge }));

      if (eventType === "mindfullness") {
        dispatch(updateInAppMeditation({ duration: video.duration, createdAt: challenge.createdAt }));
      }

      await Storage.removeItem(StorageKey.mediaPlayerProgress);
      await Navigation.popTo(ROUTES.quests);

      Logger.logMixpanelEvent("meditopia_challenge_end", { levelSlotId, duration: video.duration });
    } catch (err) {
      throw Error(err);
    }
  }, [video.duration, video.id, levelSlotId, dispatch, eventType, updateQuestMapLevelChallenge]);

  const onProgress = useCallback(
    async (seconds: number) => {
      // We only track progress every X seconds
      // This is to avoid too many writes to storage
      if (seconds % 10 === 0) {
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
    await cancelChallenge();
    await navigateToMediaPlayer();
  }, [cancelChallenge, navigateToMediaPlayer]);

  const onPressSecondary = useCallback(async (): Promise<void> => {
    setShowModal(false);

    if (!showError) {
      return;
    }

    if (activeLevel.challengeIsActive) {
      await cancelChallenge();
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
