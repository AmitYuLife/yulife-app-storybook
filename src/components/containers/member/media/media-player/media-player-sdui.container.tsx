import { MediaPlayerScreen } from "@components/screens";
import { useCallback, memo } from "react";
import { MediaFragment } from "@graphql/__generated";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { IYuLifeLogoProps } from "@atoms/logo";

interface IVideo extends MediaFragment {
  reward: number;
  stars: number;
}

export interface IMediaPlayerSduiContainerProps {
  video: IVideo;
  eventType: "workout" | "mindfulness";
  orientation: "landscape" | "portrait";
  startChallengeButtonLabel?: string;
  autoPlay?: boolean;
  startTimeInSeconds?: number;
  componentId: string;
  logoType: IYuLifeLogoProps["type"];

  handleStart: VoidFunctionOrSduiActionPayload;
  handleEnd: VoidFunctionOrSduiActionPayload;
  handleLeftIconPress: VoidFunctionOrSduiActionPayload;
  handleRightIconPress: VoidFunctionOrSduiActionPayload;
}

const MediaPlayerSduiContainer = ({
  video,
  eventType,
  orientation,
  startChallengeButtonLabel,
  autoPlay = false,
  startTimeInSeconds = 0,
  handleStart: handleStartSduiAction,
  handleEnd: handleEndSduiAction,
  handleLeftIconPress: handleLeftIconPressSduiAction,
  handleRightIconPress: handleRightIconPressSduiAction,
  logoType,
}: IMediaPlayerSduiContainerProps) => {
  const dispatch = useDispatch();

  const onError = useCallback(() => {
    dispatch(logMixpanelEventActionCreator("media_not_loaded", { video: video.id }));
  }, [dispatch]);

  const { handleSduiAction: handleStart } = useSduiCallbackFunctionOrReduxAction(handleStartSduiAction);
  const { handleSduiAction: handleEnd } = useSduiCallbackFunctionOrReduxAction(handleEndSduiAction);

  const { handleSduiAction: handleLeftIconPress } = useSduiCallbackFunctionOrReduxAction(handleLeftIconPressSduiAction);
  const { handleSduiAction: handleRightIconPress } =
    useSduiCallbackFunctionOrReduxAction(handleRightIconPressSduiAction);

  return (
    <MediaPlayerScreen
      startTimeInSeconds={startTimeInSeconds}
      onStart={handleStart}
      onEnd={handleEnd}
      onLeftIconPress={handleLeftIconPress}
      onRightIconPress={handleRightIconPress}
      onError={onError}
      video={video}
      eventType={eventType}
      orientation={orientation}
      startChallengeButtonLabel={startChallengeButtonLabel || ""}
      autoPlay={autoPlay}
      logoType={logoType}
    />
  );
};

export default memo(MediaPlayerSduiContainer);
