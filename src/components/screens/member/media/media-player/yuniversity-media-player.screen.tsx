import React, { memo } from "react";
import { Media } from "@graphql/_core/schema";
import VideoPlayer from "react-native-video-controls";

interface IProps {
  video: Media;
  onLeftIconPress: () => void;
  onEnd: () => void;
  onError: () => void;
}

const YuniversityMediaPlayerScreen = ({ video, onLeftIconPress, onEnd }: IProps) => {
  return (
    <VideoPlayer
      source={{ uri: video.media.uri }}
      onBack={onLeftIconPress}
      onEnd={onEnd}
      // videoSourceType={video.sourceType}
    />
  );
};

export default memo(YuniversityMediaPlayerScreen);
