import { MediaPlayerScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import React, { useCallback, memo, useState } from "react";
import { Navigation } from "react-native-navigation";
import {
  CancelActiveChallenge,
  CancelActiveChallengeVariables,
  Media,
  UpdateQuestMapLevelChallenge,
  UpdateQuestMapLevelChallengeVariables,
} from "@graphql/_core/schema";
import {
  CreateQuestMapLevelChallengeMutationTuple,
  GQL_MUTATION_CANCEL_ACTIVE_CHALLENGE,
  GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE,
  GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE,
} from "@graphql/challenges";
import { useMutation } from "@apollo/react-hooks";
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

  const [cancelActiveChallenge] = useMutation<CancelActiveChallenge, CancelActiveChallengeVariables>(
    GQL_MUTATION_CANCEL_ACTIVE_CHALLENGE
  );

  const createChallenge = useCallback(
    async (contentId: string) => {
      const { data } = await createQuestMapLevelChallengeMutation({ variables: { levelSlotId, contentId } });
      dispatch(
        challengeStartSuccessAction({
          createActiveChallenge: data?.createQuestMapLevelChallenge,
          levelSlotId,
          videoPlayerIsActive: true,
        })
      );
    },
    [levelSlotId, createQuestMapLevelChallengeMutation, dispatch]
  );

  const cancelChallenge = useCallback(async (shouldNavigate = true) => {
    await cancelActiveChallenge({
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

    dispatch(challengeEndSuccessAction({ ...data?.updateQuestMapLevelChallenge?.challenge }));
    await Navigation.popTo(ROUTES.quests);
  }, []);

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
        cancelChallenge={cancelChallenge}
      />
      <Modal animationType="slide" visible={showModal} onRequestClose={() => setShowModal(false)}>
        <GenericModal
          isPrimaryOnePressOnly={true}
          heading={
            !showError
              ? t("modals.genericModal.cancelChallenge.heading")
              : t("modals.genericModal.onMeditopiaError.heading")
          }
          subheading={
            !showError
              ? t("modals.genericModal.cancelChallenge.subheading")
              : t("modals.genericModal.onMeditopiaError.subheading")
          }
          ctaLabel={
            !showError
              ? t("modals.genericModal.cancelChallenge.ctaLabel")
              : t("modals.genericModal.onMeditopiaError.ctaLabel")
          }
          ctaLabelSecondary={
            !showError
              ? t("modals.genericModal.cancelChallenge.ctaLabelSecondary")
              : t("modals.genericModal.onMeditopiaError.ctaLabelSecondary")
          }
          onPress={onPress}
          onPressSecondary={onPressSecondary}
        />
      </Modal>
    </>
  );
};

export default memo(MediaPlayerContainer);
