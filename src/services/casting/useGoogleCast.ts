import { useCallback } from "react";
import {
  useCastDevice,
  useCastSession,
  useRemoteMediaClient,
  useMediaStatus,
  useStreamPosition,
  MediaPlayerState,
} from "react-native-google-cast";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";

export interface IUseGoogleCastProps {
  videoSourceType?: string;
}

export interface IVideoMetadata {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUri?: string;
}

export interface IUseGoogleCastResult {
  /** Whether Google Cast devices are available on the network */
  isGoogleCastAvailable: boolean;
  /** Whether currently connected to a Google Cast device */
  isGoogleCastConnected: boolean;
  /** Whether Google Cast is enabled (Android, feature flag on, and supported video format) */
  isGoogleCastEnabled: boolean;
  /** Whether video is actively playing on external display */
  isExternalPlaybackActive: boolean;
  /** Whether the cast media is currently paused */
  isCastPaused: boolean;
  /** Current stream position in seconds from the cast device */
  streamPosition: number | null;
  /** Play the current media on the cast device */
  play: () => void;
  /** Pause the current media on the cast device */
  pause: () => void;
  /** Seek to a position in seconds on the cast device */
  seek: (positionInSeconds: number) => void;
  /** Start casting a video to the connected device */
  startCasting: (videoUrl: string, metadata?: IVideoMetadata) => Promise<void>;
  /** Stop media playback on the cast device */
  stop: () => void;
}

const SUPPORTED_VIDEO_TYPES = ["mp4", "m3u8"];

/**
 * Hook providing Google Cast state and controls for video playback.
 *
 * @param videoSourceType - The video source type (e.g., "mp4", "m3u8")
 * @returns Google Cast state and controls
 */
const useGoogleCast = ({ videoSourceType }: IUseGoogleCastProps): IUseGoogleCastResult => {
  const { tempVideoPlaybackEnableGoogleCast } = useSelector(getUserFeatures);

  const castDevice = useCastDevice();
  const castSession = useCastSession();
  const remoteMediaClient = useRemoteMediaClient();
  const mediaStatus = useMediaStatus();
  const streamPosition = useStreamPosition();

  const isGoogleCastAvailable = castDevice !== null;
  const isGoogleCastConnected = castSession !== null;

  const isGoogleCastEnabled =
    tempVideoPlaybackEnableGoogleCast === true && SUPPORTED_VIDEO_TYPES.includes(videoSourceType ?? "");

  const isExternalPlaybackActive =
    isGoogleCastConnected &&
    mediaStatus !== null &&
    (mediaStatus.playerState === MediaPlayerState.PLAYING ||
      mediaStatus.playerState === MediaPlayerState.BUFFERING ||
      mediaStatus.playerState === MediaPlayerState.PAUSED);

  const isCastPaused = mediaStatus?.playerState === MediaPlayerState.PAUSED;

  const play = useCallback(() => {
    remoteMediaClient?.play();
  }, [remoteMediaClient]);

  const pause = useCallback(() => {
    remoteMediaClient?.pause();
  }, [remoteMediaClient]);

  const seek = useCallback(
    (positionInSeconds: number) => {
      remoteMediaClient?.seek({ position: positionInSeconds });
    },
    [remoteMediaClient]
  );

  const startCasting = useCallback(
    async (videoUrl: string, metadata?: IVideoMetadata) => {
      if (!remoteMediaClient) {
        return;
      }

      try {
        const contentType = videoSourceType === "m3u8" ? "application/x-mpegURL" : "video/mp4";

        await remoteMediaClient.loadMedia({
          mediaInfo: {
            contentUrl: videoUrl,
            contentType,
            metadata: metadata
              ? {
                  type: "movie",
                  title: metadata.title,
                  subtitle: metadata.subtitle,
                  images: metadata.imageUri ? [{ url: metadata.imageUri }] : undefined,
                }
              : undefined,
          },
          autoplay: true,
        });
      } catch (error) {
        Logger.error(error as Error, { location: "useGoogleCast-startCasting" });
      }
    },
    [remoteMediaClient, videoSourceType]
  );

  const stop = useCallback(() => {
    remoteMediaClient?.stop();
  }, [remoteMediaClient]);

  return {
    isGoogleCastAvailable,
    isGoogleCastConnected,
    isGoogleCastEnabled,
    isExternalPlaybackActive,
    isCastPaused,
    streamPosition: streamPosition ?? null,
    play,
    pause,
    seek,
    startCasting,
    stop,
  };
};

export default useGoogleCast;
