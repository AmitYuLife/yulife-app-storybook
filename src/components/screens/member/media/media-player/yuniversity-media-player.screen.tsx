import React, { memo } from "react";
import { Media } from "@graphql/_core/schema";
import VideoPlayer from "react-native-video-controls";
import { LoadError } from "react-native-video";

interface IProps {
  video: Media;
  onLeftIconPress: () => void;
  onEnd: () => void;
  onPause: () => void;
  onPlay: () => void;
  onError: (error: LoadError) => void;
}

const YuniversityMediaPlayerScreen = ({ video, onLeftIconPress, onEnd, onError, onPause, onPlay }: IProps) => {
  return (
    <VideoPlayer
      source={{ uri: video.media.uri }}
      onBack={onLeftIconPress}
      onEnd={onEnd}
      onError={onError}
      onPause={onPause}
      onPlay={onPlay}
      // videoSourceType={video.sourceType}
    />
  );
};

export default memo(YuniversityMediaPlayerScreen);
