import React, { memo, useCallback } from "react";
import { VideoPlayer } from "@organisms";
import { Media } from "@graphql/_core/schema";

interface IVideo extends Media {
  reward: number;
  stars: number;
}

interface IProps {
  video: IVideo;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onStart: (contendId: string) => void;
  onEnd: () => void;
  onError: () => void;
  startErrorMessage?: string;
  eventType: string;
  orientation: "landscape" | "portrait";
  startChallengeButtonLabel: string;
}

const MediaPlayerScreen = ({
  video,
  onLeftIconPress,
  onRightIconPress,
  onStart,
  onEnd,
  onError,
  startErrorMessage,
  eventType,
  orientation,
  startChallengeButtonLabel,
}: IProps) => {
  const onStartMedia = useCallback(async () => {
    await onStart(video.id);
  }, []);

  return (
    <VideoPlayer
      source={video.media.uri}
      poster={video.cover.uri}
      title={video.title}
      thumbnail={video.thumbnail.uri}
      logo={video.logo.uri}
      videoLogo={video?.videoLogo?.uri}
      description={video.description}
      shortDescription={video.shortDescription}
      theme={video.theme as "light" | "dark"}
      yuCoin={video.reward}
      stars={video.stars}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onStart={onStartMedia}
      onEnd={onEnd}
      onError={onError}
      startErrorMessage={startErrorMessage}
      lottie={video?.lottie}
      eventType={eventType}
      orientation={orientation}
      startChallengeButtonLabel={startChallengeButtonLabel}
      videoSourceType={video.sourceType}
    />
  );
};

export default memo(MediaPlayerScreen);
