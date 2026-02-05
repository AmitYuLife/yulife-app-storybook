import { memo, useCallback, useState } from "react";
import { IMediaPlayerSduiContainerProps } from "@components/containers/member/media/media-player/media-player-sdui.container";
import { MediaPlayerScreen } from "@components/screens";
import { Navigation } from "@navigation/main";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";
import { useCancelPathwayChallenge } from "@modules/pathways/hooks/useCancelPathwayChallenge";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useDispatch } from "react-redux";
import { Modal } from "react-native";
import { GenericModal } from "@components/modals";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";

interface IPathwaysMediaPlayerContainerProps
  extends Omit<
    IMediaPlayerSduiContainerProps,
    "handleStart" | "handleEnd" | "handleLeftIconPress" | "handleRightIconPress"
  > {
  challengeId: string;
}

const PathwaysMediaPlayerContainer = ({
  challengeId,
  componentId,
  video,
  eventType,
  orientation,
  startChallengeButtonLabel,
  autoPlay,
  startTimeInSeconds,
  logoType,
}: IPathwaysMediaPlayerContainerProps) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const dispatch = useDispatch();
  const { startChallenge, completeChallenge } = usePathwayChallenge({ componentId, challengeId, skipQuery: true });

  const handleCancel = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const { markAsCompleted, showCancelModal, hideCancelModal, cancelChallengeModal } = useCancelPathwayChallenge({
    challengeId,
    onCancel: handleCancel,
  });

  const hideErrorModal = useCallback(() => {
    setShowErrorModal(false);
  }, []);

  const onErrorRetry = useCallback(() => {
    setShowErrorModal(false);
    Navigation.pop(componentId);
  }, [componentId]);

  const onErrorGoToChallenges = useCallback(() => {
    setShowErrorModal(false);
    Navigation.popTo(ROUTES.questsChallengesList);
  }, []);

  const onLeftIconPress = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onRightIconPress = useCallback(() => {
    if (isStarted) {
      showCancelModal();
    } else {
      Navigation.pop(componentId);
    }
  }, [componentId, isStarted, showCancelModal]);

  const onError = useCallback(() => {
    dispatch(logMixpanelEventActionCreator("media_not_loaded", { contentId: video.id }));
    setShowErrorModal(true);
  }, [dispatch, video.id]);

  const onStart = useCallback(() => {
    setIsStarted(true);
    startChallenge();
  }, [startChallenge]);

  const onEnd = useCallback(() => {
    hideCancelModal();
    markAsCompleted();
    completeChallenge({ durationInSeconds: video.duration, challengeType: eventType });
  }, [hideCancelModal, markAsCompleted, completeChallenge, video.duration, eventType]);

  return (
    <>
      <MediaPlayerScreen
        startTimeInSeconds={startTimeInSeconds}
        onStart={onStart}
        onEnd={onEnd}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        onError={onError}
        video={video}
        eventType={eventType}
        orientation={orientation}
        startChallengeButtonLabel={startChallengeButtonLabel || ""}
        autoPlay={autoPlay}
        logoType={logoType}
      />

      <Modal statusBarTranslucent={true} animationType="slide" visible={showErrorModal} onRequestClose={hideErrorModal}>
        <GenericModal
          onPress={onErrorRetry}
          isPrimaryOnePressOnly={true}
          onPressSecondary={onErrorGoToChallenges}
          heading={t("modals.generic_modal.on_pathways_media_error.heading")}
          subheading={t("modals.generic_modal.on_pathways_media_error.subheading")}
          ctaLabel={t("modals.generic_modal.on_pathways_media_error.cta_label")}
          ctaLabelSecondary={t("modals.generic_modal.on_pathways_media_error.cta_label_secondary")}
        />
      </Modal>

      {cancelChallengeModal}
    </>
  );
};

export default memo(PathwaysMediaPlayerContainer);
