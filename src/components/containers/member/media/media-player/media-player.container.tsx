import { MediaPlayerScreen } from "@components/screens";
import { MODALS, ROUTES } from "@navigation/constants";
import React, { useCallback, memo } from "react";
import { Navigation } from "react-native-navigation";
import {
  CancelActiveChallenge,
  CancelActiveChallengeVariables,
  Media,
  UpdateQuestMapLevelChallenge,
  UpdateQuestMapLevelChallengeVariables,
} from "@graphql/_core/schema";
import { showYuModal } from "@navigation/root";
import {
  CreateQuestMapLevelChallengeMutationTuple,
  GQL_MUTATION_CANCEL_ACTIVE_CHALLENGE,
  GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE,
  GQL_MUTATION_UPDATE_QUEST_MAP_LEVEL_CHALLENGE,
} from "@graphql/challenges";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import {
  challengeCancelAction,
  challengeEndSuccessAction,
  challengeStartSuccessAction,
} from "@redux/levels/levels.actions";
import { t } from "@locale";

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

  const navigateToQuests = useCallback(async () => {
    await Navigation.pop(ROUTES.mediaPlayer); // this is needed so we unmount the mediayPlayer
    await Navigation.popTo(ROUTES.quests);
  }, []);

  const cancelChallenge = useCallback(async (shouldNavigate = true) => {
    await cancelActiveChallenge({
      variables: {
        levelSlotId,
      },
    });
    dispatch(challengeCancelAction());
    if (shouldNavigate) {
      await navigateToQuests();
      await Navigation.dismissModal(MODALS.generic);
    }
  }, []);

  const endChallenge = useCallback(async () => {
    const { data } = await updateQuestMapLevelChallenge({
      variables: { levelSlotId, payload: { value: video.duration } },
    });

    dispatch(challengeEndSuccessAction({ ...data?.updateQuestMapLevelChallenge?.challenge }));
    await Navigation.popTo(ROUTES.quests);
  }, []);

  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.mediaList), [componentId]);

  const onRightIconPress = useCallback(
    () =>
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            isPrimaryOnePressOnly: true,
            heading: t("modals.genericModal.cancelChallenge.heading"),
            subheading: t("modals.genericModal.cancelChallenge.subheading"),
            ctaLabel: t("modals.genericModal.cancelChallenge.ctaLabel"),
            ctaLabelSecondary: t("modals.genericModal.cancelChallenge.ctaLabelSecondary"),
            onPress: () => cancelChallenge(),
            onPressSecondary: () => Navigation.dismissModal(MODALS.generic),
          },
        },
      }),
    [componentId]
  );

  return (
    <MediaPlayerScreen
      onStart={createChallenge}
      onEnd={endChallenge}
      video={video}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      cancelChallenge={cancelChallenge}
    />
  );
};

export default memo(MediaPlayerContainer);
