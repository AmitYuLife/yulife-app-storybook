import React, { memo, useCallback } from "react";
import { VideoPlayer } from "@organisms";
import { Media } from "@graphql/_core/schema";

interface IProps {
  video: Media;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onStart: () => void;
  onEnd: () => void;
  onError: () => void;
  startErrorMessage?: string;
}

const YuniversityMediaPlayerScreen = ({
  video,
  onLeftIconPress,
  onRightIconPress,
  onStart,
  onEnd,
  onError,
  startErrorMessage,
}: IProps) => {
  const onStartMedia = useCallback(async () => {
    await onStart();
  }, [onStart]);

  return (
    <VideoPlayer
      source={video.media.uri}
      poster={video.cover.uri}
      title={video.title}
      thumbnail={video.thumbnail.uri}
      description={video.description}
      shortDescription={video.shortDescription}
      theme={video.theme as "light" | "dark"}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onStart={onStartMedia}
      onEnd={onEnd}
      onError={onError}
      startErrorMessage={startErrorMessage}
      eventType=""
      showTimer={false}
      videoSourceType={video.sourceType}
    />
  );
};

export default memo(YuniversityMediaPlayerScreen);
