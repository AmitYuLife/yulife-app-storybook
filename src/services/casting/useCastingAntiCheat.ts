import { useCallback, useEffect, useRef } from "react";
import EngagementTracking from "@services/logging/engagement-tracking";

const SEEK_THRESHOLD_SECONDS = 10;

export interface IUseCastingAntiCheatProps {
  /** Whether casting to external device is active */
  isCastingActive: boolean;
  /** Current playback progress in seconds */
  currentProgressInSeconds: number;
  /** Whether playback is paused */
  isPaused: boolean;
  /** The active cast protocol for logging purposes */
  activeCastProtocol: "airplay" | "google_cast" | null;
  /**
   * Called when seeking/cheating is detected, with the last valid progress to seek back to.
   * Must be a stable reference (wrapped in useCallback) to prevent unnecessary effect re-runs.
   */
  onCheatingDetected: (lastValidProgressInSeconds: number) => void;
}

export interface IUseCastingAntiCheatResult {
  /**
   * Validates that the video completion is legitimate and not a result of seeking to the end.
   * Call this in the onEnd handler before processing completion.
   * Returns true if safe to proceed, false if the user likely seeked to the end.
   */
  canSafelyMarkVideoAsCompleted: (durationInSeconds: number) => boolean;
}

/**
 * Hook to detect and prevent seeking/cheating during casting.
 *
 * Monitors playback progress and detects if the user seeks more than
 * the threshold (forward or backward). When detected, calls the
 * onCheatingDetected callback with the last valid position.
 */
const useCastingAntiCheat = ({
  isCastingActive,
  currentProgressInSeconds,
  isPaused,
  activeCastProtocol,
  onCheatingDetected,
}: IUseCastingAntiCheatProps): IUseCastingAntiCheatResult => {
  const lastKnownProgressRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);

  const canSafelyMarkVideoAsCompleted = useCallback(
    (durationInSeconds: number): boolean => {
      if (!isCastingActive) {
        return true;
      }

      const lastValidProgress = lastKnownProgressRef.current;
      if (lastValidProgress === null) {
        return false;
      }

      return durationInSeconds - lastValidProgress <= SEEK_THRESHOLD_SECONDS;
    },
    [isCastingActive]
  );

  useEffect(() => {
    // When casting becomes inactive, reset the initialized flag but keep the progress ref.
    // This allows canSafelyMarkVideoAsCompleted to use the last known progress value
    // even if there's a race condition between the external playback change callback
    // and onEnd (some AirPlay receivers like Philips TVs report playback stopped
    // before the video end callback fires).
    if (!isCastingActive) {
      isInitializedRef.current = false;
      return;
    }

    // Don't check progress changes while paused - playback position may jump due to:
    // - Network reconnection causing the cast device to reset/resync
    // - State synchronization between device and external display
    // - Buffering or player state reconciliation
    if (isPaused) {
      return;
    }

    // Initialize on first progress update when casting starts
    if (!isInitializedRef.current) {
      lastKnownProgressRef.current = currentProgressInSeconds;
      isInitializedRef.current = true;
      return;
    }

    const lastKnownProgress = lastKnownProgressRef.current;

    // Safety check - shouldn't happen but handle gracefully
    if (lastKnownProgress === null) {
      lastKnownProgressRef.current = currentProgressInSeconds;
      return;
    }

    const progressDelta = currentProgressInSeconds - lastKnownProgress;
    const absoluteDelta = Math.abs(progressDelta);

    // Check if seek exceeded threshold (forward or backward)
    if (absoluteDelta > SEEK_THRESHOLD_SECONDS) {
      EngagementTracking.logMixpanelEvent("casting_seek_attempt_detected", {
        lastKnownProgress,
        currentProgressInSeconds,
        progressDelta,
        direction: progressDelta > 0 ? "forward" : "backward",
        activeCastProtocol,
      });

      // Call the callback with the last valid position to seek back to
      // Don't update the ref - keep it at the last valid position
      // so when the player seeks back, the next progress update will be valid
      onCheatingDetected(lastKnownProgress);
      return;
    }

    // Valid progress update - update the ref
    lastKnownProgressRef.current = currentProgressInSeconds;
  }, [isCastingActive, currentProgressInSeconds, isPaused, activeCastProtocol, onCheatingDetected]);

  return {
    canSafelyMarkVideoAsCompleted,
  };
};

export default useCastingAntiCheat;
