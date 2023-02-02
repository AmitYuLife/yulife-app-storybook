import React, { memo, useMemo } from "react";
import { Media } from "@graphql/_core/schema";
import VideoPlayer from "react-native-video-controls";
import { LoadError } from "react-native-video";
import Config from "react-native-config";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  video: Media;
  onLeftIconPress: () => void;
  onEnd: () => void;
  onPause: () => void;
  onPlay: () => void;
  onError: (error: LoadError) => void;
}

const YuniversityMediaPlayerScreen = ({ video, onLeftIconPress, onEnd, onError, onPause, onPlay }: IProps) => {
  const videoSource = useMemo(
    () => ({
      uri: DETOX_ENABLED
        ? "https://yulife-local.imgix.net/media/meditation/meditopia/15-seconds-video.mp4?ixlib=js-3.2.1&s=5270f77d06c4b2ad83e582610a75553b"
        : video.media.uri,
      type: video.sourceType,
      headers: {
        yu_client_token: Config.YU_CLIENT_TOKEN,
      },
    }),
    [video]
  );

  return (
    <VideoPlayer
      source={videoSource}
      onBack={onLeftIconPress}
      onEnd={onEnd}
      onError={onError}
      onPause={onPause}
      onPlay={onPlay}
    />
  );
};

export default memo(YuniversityMediaPlayerScreen);
