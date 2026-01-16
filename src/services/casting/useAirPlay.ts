import { useCallback, useState } from "react";
import { Platform } from "react-native";
import { useExternalPlaybackAvailability, useAirplayConnectivity } from "react-airplay";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";

export interface IUseAirPlayProps {
  videoSourceType?: string;
}

export interface IUseAirPlayResult {
  /** Whether AirPlay devices are available on the network */
  isAirPlayAvailable: boolean;
  /** Whether currently connected to an AirPlay device (via audio session) */
  isAirPlayConnected: boolean;
  /** Whether AirPlay is enabled (iOS, feature flag on, and supported video format) */
  isAirPlayEnabled: boolean;
  /** Whether video is actively playing on external display */
  isExternalPlaybackActive: boolean;
  /** Handler for react-native-video's onExternalPlaybackChange callback */
  handleExternalPlaybackChange: (event: { isExternalPlaybackActive: boolean }) => void;
}

const SUPPORTED_VIDEO_TYPES = ["mp4", "m3u8"];

/**
 * Hook providing AirPlay state and handlers for video playback.
 *
 * @param videoSourceType - The video source type (e.g., "mp4", "m3u8")
 * @returns AirPlay state and handlers
 */
const useAirPlay = ({ videoSourceType }: IUseAirPlayProps): IUseAirPlayResult => {
  const { tempVideoPlaybackEnableAppleTv } = useSelector(getUserFeatures);

  const isAirPlayAvailable = useExternalPlaybackAvailability();
  const isAirPlayConnected = useAirplayConnectivity();
  const [isExternalPlaybackActive, setIsExternalPlaybackActive] = useState(false);

  const isAirPlayEnabled =
    Platform.OS === "ios" &&
    tempVideoPlaybackEnableAppleTv === true &&
    SUPPORTED_VIDEO_TYPES.includes(videoSourceType ?? "");

  const handleExternalPlaybackChange = useCallback(
    ({ isExternalPlaybackActive: isActive }: { isExternalPlaybackActive: boolean }) => {
      setIsExternalPlaybackActive(isActive);
    },
    []
  );

  return {
    isAirPlayAvailable,
    isAirPlayConnected,
    isAirPlayEnabled,
    isExternalPlaybackActive,
    handleExternalPlaybackChange,
  };
};

export default useAirPlay;
