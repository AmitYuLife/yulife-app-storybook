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
}

const MediaPlayerScreen = ({ video, onLeftIconPress, onRightIconPress, onStart, onEnd }: IProps) => {
  const onStartMedia = useCallback(() => {
    onStart(video.id);
  }, []);

  return (
    <VideoPlayer
      source={video.media.uri}
      poster={video.cover.uri}
      title={video.title}
      thumbnail={video.thumbnail.uri}
      logo={video.logo.uri}
      description={video.description}
      shortDescription={video.shortDescription}
      theme={video.theme as "light" | "dark"}
      yuCoin={video.reward}
      stars={video.stars}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onStart={onStartMedia}
      onEnd={onEnd}
    />
  );
};

export default memo(MediaPlayerScreen);
