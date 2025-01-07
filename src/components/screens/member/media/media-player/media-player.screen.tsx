import React, { memo, useMemo } from "react";
import { VideoPlayer } from "@organisms";
import { IVideoPlayerProps } from "@organisms/video-player/video-player";
import { t } from "@locale";
import { MediaFragment } from "@graphql/__generated";

interface IVideo extends MediaFragment {
  reward: number;
  stars: number;
}

interface IMediaPlayerScreenProps
  extends Pick<
    IVideoPlayerProps,
    | "onEnd"
    | "onStart"
    | "onError"
    | "autoPlay"
    | "eventType"
    | "onProgress"
    | "orientation"
    | "onLeftIconPress"
    | "onRightIconPress"
    | "startErrorMessage"
    | "startTimeInSeconds"
    | "startChallengeButtonLabel"
  > {
  video: IVideo;
}

const MediaPlayerScreen = ({
  video,
  startTimeInSeconds,
  onLeftIconPress,
  onRightIconPress,
  onStart,
  onProgress,
  onEnd,
  onError,
  startErrorMessage,
  eventType,
  orientation,
  startChallengeButtonLabel,
  autoPlay,
}: IMediaPlayerScreenProps) => {
  const subtitle = useMemo(() => t(`screens.video_player.video_type.${eventType}`), [eventType]);

  return (
    <VideoPlayer
      autoPlay={autoPlay}
      startTimeInSeconds={startTimeInSeconds}
      source={video.media.uri}
      poster={video.cover.uri}
      tag={video.tag}
      title={video.title}
      subtitle={subtitle}
      thumbnail={video.thumbnail.uri}
      logo={video.logo.uri}
      onProgress={onProgress}
      videoLogo={video?.videoLogo?.uri}
      description={video.description}
      shortDescription={video.shortDescription}
      theme={video.theme as "light" | "dark"}
      yuCoin={video.reward}
      stars={video.stars}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onStart={onStart}
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
