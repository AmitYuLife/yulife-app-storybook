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
  UpsertDailyPassives,
  UpsertDailyPassivesVariables,
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
import { GQL_MUTATION_UPSERT_DAILY_PASSIVES } from "@graphql/challenges/upsertDailyPassives.gql";
import { updateInAppMeditation } from "@redux/daily-meditation/daily-meditation.actions";

interface IVideo extends Media {
  reward: number;
  stars: number;
}

interface IProps {
  componentId: string;
  video: IVideo;
  levelSlotId: string;
}

const MediaPlayerContainer = ({ componentId, video, levelSlotId }: IProps) => {
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
  const [upsertDailyPassives] = useMutation<UpsertDailyPassives, UpsertDailyPassivesVariables>(
    GQL_MUTATION_UPSERT_DAILY_PASSIVES
  );

  const createChallenge = useCallback(
    async (contentId: string) => {
      const { data } = await createQuestMapLevelChallengeMutation({ variables: { levelSlotId, contentId } });
      dispatch(
        challengeStartSuccessAction({
          createQuestMapLevelChallenge: data?.createQuestMapLevelChallenge,
          levelSlotId,
          videoPlayerIsActive: true,
          videoDuration: video.duration,
        })
      );
    },
    [levelSlotId, createQuestMapLevelChallengeMutation, dispatch, upsertDailyPassives, video.duration]
  );

  const cancelChallenge = useCallback(async (shouldNavigate = true) => {
    await cancelMapLevelChallenge({
      variables: {
        levelSlotId,
      },
    });
    dispatch(challengeCancelAction());
    if (shouldNavigate) {
      setShowModal(false);
      await Navigation.pop(ROUTES.mediaPlayer);
    }
  }, []);

  const endChallenge = useCallback(async () => {
    const { data } = await updateQuestMapLevelChallenge({
      variables: { levelSlotId, payload: { value: video.duration } },
    });

    if (data?.updateQuestMapLevelChallenge) {
      dispatch(challengeEndSuccessAction({ ...data?.updateQuestMapLevelChallenge?.challenge }));
      dispatch(updateInAppMeditation(video.duration));

      await Navigation.popTo(ROUTES.quests);

      Logger.logMixpanelEvent("meditopia_challenge_end", { levelSlotId, duration: video.duration });
    }
  }, [video.duration, levelSlotId]);

  const onError = useCallback(() => {
    setShowError(true);
    setShowModal(true);
  }, []);

  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.mediaList), [componentId]);
  const onRightIconPress = useCallback(() => setShowModal(true), [componentId]);
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
      />
      <Modal animationType="slide" visible={showModal} onRequestClose={() => setShowModal(false)}>
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
            !showError
              ? t("modals.generic_modal.cancel_challenge.cta_label_secondary")
              : t("modals.generic_modal.on_meditopia_error.cta_label_secondary")
          }
          onPress={onPress}
          onPressSecondary={onPressSecondary}
        />
      </Modal>
    </>
  );
};

export default memo(MediaPlayerContainer);
