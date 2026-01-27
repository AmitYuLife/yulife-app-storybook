import { useCallback, useEffect, useMemo, useRef } from "react";
import useAirPlay from "./useAirPlay";
import useGoogleCast, { IVideoMetadata } from "./useGoogleCast";
import { t } from "@locale";

export interface IRemotePlayback {
  /** Play the current media on the cast device */
  play: () => void;
  /** Pause the current media on the cast device */
  pause: () => void;
  /** Seek to a position in seconds on the cast device */
  seek: (positionInSeconds: number) => void;
  /** Start playback on the cast device */
  startPlayback: (videoUrl: string, metadata?: IVideoMetadata) => Promise<void>;
  /** Stop playback on the cast device (used when exiting the video player) */
  stop: () => void;
  /** Whether the cast media is currently paused */
  isPaused: boolean;
  /** Current position in seconds from the cast device */
  positionInSeconds: number | null;
}

export interface IUseCastingProps {
  videoSourceType?: string;
  onRemotePlaybackEnded?: () => void;
}

export interface IUseCastingResult {
  /** Remote playback controls and state (Google Cast) - null if not connected */
  remotePlayback: IRemotePlayback | null;
  /** Whether remote playback is loading (cast device is loading media) */
  isRemotePlaybackLoading: boolean;
  /** The active cast protocol (airplay or google_cast) */
  activeCastProtocol: "airplay" | "google_cast" | null;
  /** Whether any external playback is active (AirPlay mirroring or Google Cast) */
  isExternalPlaybackActive: boolean;
  /** Whether the AirPlay button should be shown */
  showAirPlayButton: boolean;
  /** Whether the Google Cast button should be shown */
  showGoogleCastButton: boolean;
  /** Translated label for the current casting type (e.g., "Playing on AirPlay device") */
  castingLabel: string | null;
  /** Whether the Video component should allow external playback (AirPlay mirroring) */
  allowsExternalPlayback: boolean;
  /** Handler for Video component's onExternalPlaybackChange (AirPlay mirroring) */
  handleLocalPlaybackExternalDisplayChange: (event: { isExternalPlaybackActive: boolean }) => void;
}

/**
 * Unified hook for casting functionality.
 *
 * This hook abstracts two fundamentally different casting approaches:
 *
 * **AirPlay (iOS) - Local Playback with Mirroring**
 * The Video component handles all playback locally. When connected to an AirPlay device,
 * the video output is mirrored to the external display. Play/pause/seek controls operate
 * on the local Video component, and the mirroring happens automatically. The Video component
 * reports external playback state via `onExternalPlaybackChange`.
 *
 * **Google Cast (Chromecast) - Remote Playback**
 * Playback is handled entirely on the remote Cast device. The local Video component should
 * be paused when casting. We must explicitly load media onto the Cast device via
 * `remotePlayback.startPlayback()`, and control playback via `remotePlayback.play()`/`pause()`.
 * Progress is reported back from the Cast device via `remotePlayback.positionInSeconds`.
 *
 * @param videoSourceType - The video source type (e.g., "mp4", "m3u8")
 * @returns Casting state and controls
 */
const useCasting = ({ videoSourceType, onRemotePlaybackEnded }: IUseCastingProps): IUseCastingResult => {
  const airPlay = useAirPlay({ videoSourceType });
  const googleCast = useGoogleCast({ videoSourceType, onRemotePlaybackEnd: onRemotePlaybackEnded });

  const stopRef = useRef(googleCast.stop);
  stopRef.current = googleCast.stop;

  /**
   * It's important to stop the remote playback when the component unmounts,
   * otherwise the video will continue to play on the cast device if using remote playback (e.g. google cast)
   */
  useEffect(() => {
    return () => {
      stopRef.current();
    };
  }, []);

  const remotePlayback = useMemo<IRemotePlayback | null>(() => {
    if (!googleCast.isGoogleCastConnected) {
      return null;
    }

    return {
      play: googleCast.play,
      pause: googleCast.pause,
      seek: googleCast.seek,
      startPlayback: googleCast.startCasting,
      stop: googleCast.stop,
      isPaused: googleCast.isCastPaused,
      positionInSeconds: googleCast.streamPosition,
    };
  }, [
    googleCast.isGoogleCastConnected,
    googleCast.play,
    googleCast.pause,
    googleCast.seek,
    googleCast.startCasting,
    googleCast.stop,
    googleCast.isCastPaused,
    googleCast.streamPosition,
  ]);

  const isExternalPlaybackActive = airPlay.isExternalPlaybackActive || googleCast.isExternalPlaybackActive;
  const showAirPlayButton = airPlay.isAirPlayEnabled;
  const showGoogleCastButton = googleCast.isGoogleCastEnabled;

  const activeCastProtocol = useMemo(() => {
    if (airPlay.isExternalPlaybackActive) {
      return "airplay";
    }

    if (googleCast.isExternalPlaybackActive) {
      return "google_cast";
    }

    return null;
  }, [airPlay.isExternalPlaybackActive, googleCast.isExternalPlaybackActive]);

  const castingLabel = useMemo(() => {
    if (activeCastProtocol === "airplay") {
      return t("screens.video_player.playing_on_airplay");
    }

    if (activeCastProtocol === "google_cast") {
      return t("screens.video_player.playing_on_chromecast");
    }

    return null;
  }, [activeCastProtocol]);

  const allowsExternalPlayback = airPlay.isAirPlayEnabled;
  const handleLocalPlaybackExternalDisplayChange = useCallback(
    (event: { isExternalPlaybackActive: boolean }) => {
      airPlay.handleExternalPlaybackChange(event);
    },
    [airPlay.handleExternalPlaybackChange]
  );

  return {
    remotePlayback,
    isRemotePlaybackLoading: googleCast.isRemotePlaybackLoading,
    activeCastProtocol,
    isExternalPlaybackActive,
    showAirPlayButton,
    showGoogleCastButton,
    castingLabel,
    allowsExternalPlayback,
    handleLocalPlaybackExternalDisplayChange,
  };
};

export default useCasting;
