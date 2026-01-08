import { memo, useCallback, useState } from "react";
import { IMediaPlayerSduiContainerProps } from "@components/containers/member/media/media-player/media-player-sdui.container";
import { MediaPlayerScreen } from "@components/screens";
import { Navigation } from "@navigation/main";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";
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

  const dispatch = useDispatch();
  const { startChallenge, completeChallenge } = usePathwayChallenge({ componentId, challengeId, skipQuery: true });

  const onIconPress = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onError = useCallback(() => {
    dispatch(logMixpanelEventActionCreator("media_not_loaded", { contentId: video.id }));
    setShowErrorModal(true);
  }, [dispatch, video.id]);

  const hideErrorModal = useCallback(() => {
    setShowErrorModal(false);
  }, []);

  const onPress = useCallback(async () => {
    setShowErrorModal(false);
    Navigation.pop(ROUTES.pathwaysMediaPlayer);
  }, []);

  const onPressSecondary = useCallback(() => {
    setShowErrorModal(false);
    Navigation.popTo(ROUTES.questsChallengesList);
  }, []);

  const handleEnd = useCallback(() => {
    completeChallenge({ durationInSeconds: video.duration, challengeType: eventType });
  }, [completeChallenge, video.duration, eventType]);

  return (
    <>
      <MediaPlayerScreen
        startTimeInSeconds={startTimeInSeconds}
        onStart={startChallenge}
        onEnd={handleEnd}
        onLeftIconPress={onIconPress}
        onRightIconPress={onIconPress}
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
          onPress={onPress}
          isPrimaryOnePressOnly={true}
          onPressSecondary={onPressSecondary}
          heading={t("modals.generic_modal.on_pathways_media_error.heading")}
          subheading={t("modals.generic_modal.on_pathways_media_error.subheading")}
          ctaLabel={t("modals.generic_modal.on_pathways_media_error.cta_label")}
          ctaLabelSecondary={t("modals.generic_modal.on_pathways_media_error.cta_label_secondary")}
        />
      </Modal>
    </>
  );
};

export default memo(PathwaysMediaPlayerContainer);
