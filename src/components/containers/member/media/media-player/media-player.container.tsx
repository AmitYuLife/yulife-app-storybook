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
import { getChallengeIsActive } from "@redux/levels/levels.selectors";
import Logger from "@services/logging/logger";
import { updateInAppMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

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

interface IProps {
  componentId: string;
  video: IVideo;
  levelSlotId: string;
  onLeftIconPress: () => void;
  eventType: "workout" | "mindfullness";
  orientation: "landscape" | "portrait";
  startChallengeButtonLabel: string;
  trackingInfo: ITrackingInfo;
}

const MediaPlayerContainer = ({
  componentId,
  video,
  levelSlotId,
  onLeftIconPress,
  eventType,
  orientation,
  startChallengeButtonLabel,
  trackingInfo,
}: IProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const challengeIsActive = useSelector(getChallengeIsActive);
  const dispatch = useDispatch();
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

  const createChallenge = useCallback(
    async (contentId: string) => {
      if (video?.duration) {
        const { data } = await createQuestMapLevelChallengeMutation({ variables: { levelSlotId, contentId } });
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
      }
    },
    [levelSlotId, createQuestMapLevelChallengeMutation, dispatch, video?.duration]
  );

  const cancelChallenge = useCallback(
    async (shouldNavigate = true) => {
      await cancelMapLevelChallenge({
        variables: {
          levelSlotId,
          contentId: video.id,
        },
      });
      dispatch(challengeCancelAction());
      if (shouldNavigate) {
        setShowModal(false);
        await Navigation.pop(ROUTES.mediaPlayer);
      }
    },
    [video.id, levelSlotId]
  );

  const endChallenge = useCallback(async () => {
    try {
      const { data } = await updateQuestMapLevelChallenge({
        variables: { levelSlotId, contentId: video.id, payload: { value: video.duration } },
      });

      const challenge = data?.updateQuestMapLevelChallenge?.challenge;

      if (challenge) {
        dispatch(challengeEndSuccessAction({ ...challenge }));
        if (eventType === "mindfullness") {
          dispatch(updateInAppMeditation({ duration: video.duration, createdAt: challenge.createdAt }));
        }

        await Navigation.popTo(ROUTES.quests);

        Logger.logMixpanelEvent("meditopia_challenge_end", { levelSlotId, duration: video.duration });
      }
    } catch (err) {
      throw Error(err);
    }
  }, [video.duration, levelSlotId, video.id]);

  const onError = useCallback(() => {
    if (trackingInfo) {
      dispatch(logMixpanelEventActionCreator("media_not_loaded", { ...trackingInfo }));
    }

    setShowError(true);
    setShowModal(true);
  }, []);

  const onRightIconPress = useCallback(
    (shouldShowModal: boolean) => {
      if (shouldShowModal) {
        return setShowModal(true);
      }

      Navigation.popTo(ROUTES.quests);
    },
    [componentId]
  );
  const onPress = useCallback(async () => cancelChallenge(), [cancelChallenge]);

  const onPressSecondary = useCallback(async () => {
    setShowModal(false);
    if (showError) {
      if (challengeIsActive) {
        cancelChallenge(false);
      }

      await Navigation.popTo(ROUTES.quests);
    }
  }, [showError, showModal]);

  return (
    <>
      <MediaPlayerScreen
        onStart={createChallenge}
        onEnd={endChallenge}
        onError={onError}
        video={video}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        startErrorMessage={t("create_challenge_error")}
        eventType={eventType}
        orientation={orientation}
        startChallengeButtonLabel={startChallengeButtonLabel}
      />

      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <GenericModal
          isPrimaryOnePressOnly={true}
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
          onPress={onPress}
          onPressSecondary={onPressSecondary}
        />
      </Modal>
    </>
  );
};

export default memo(MediaPlayerContainer);
