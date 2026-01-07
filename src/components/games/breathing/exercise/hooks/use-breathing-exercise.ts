import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Easing, useSharedValue, withTiming, cancelAnimation } from "react-native-reanimated";

const INTRO_DURATION_MS = 3 * 1000;

const START_PART_INDEX = -1;
const END_PART_INDEX = -2;

export enum BreathingExerciseOptionPartType {
  Intro = "Intro",
  End = "End",
  Exhale = "Exhale",
  Hold = "Hold",
  Inhale = "Inhale",
}

interface IBreathingExerciseProps {
  parts: {
    id: string;
    duration: number;
    type: BreathingExerciseOptionPartType;
  }[];
  defaultDuration: number;
  onCompleted: () => void;
  onStarted: () => void;
  onPaused: () => void;
  onResumed: () => void;
}

export const useBreathingExercise = ({
  parts: partsInput,
  defaultDuration,
  onCompleted,
  onStarted,
  onPaused,
  onResumed,
}: IBreathingExerciseProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDurationMs, setSelectedDurationMs] = useState(defaultDuration);
  const [partIndex, setPartIndex] = useState(START_PART_INDEX);
  const progress = useSharedValue(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const totalElapsedMs = useRef(0);
  const phaseStartTime = useRef<number | null>(null);
  const phaseRemainingMs = useRef<number | null>(null);
  const progressAnimating = useRef(false);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prev) => {
      if (prev) {
        // Pausing
        if (phaseStartTime.current && phaseRemainingMs.current !== null) {
          const elapsed = Date.now() - phaseStartTime.current;
          phaseRemainingMs.current = Math.max(0, phaseRemainingMs.current - elapsed);
        }

        progressAnimating.current = false;
        onPaused();
      } else {
        onResumed();
      }

      return !prev;
    });
  }, [onPaused, onResumed]);

  const startPlaying = useCallback(() => {
    setPartIndex(START_PART_INDEX);
    setIsPlaying(true);
    progress.value = 0;
    totalElapsedMs.current = 0;
    phaseStartTime.current = null;
    phaseRemainingMs.current = null;
    progressAnimating.current = false;
    onStarted();
  }, [progress, onStarted]);

  const updateSelectedDurationMs = useCallback((durationMs: number) => {
    setSelectedDurationMs(durationMs);
  }, []);

  const currentPart = useMemo(() => {
    if (partIndex === START_PART_INDEX) {
      return { type: BreathingExerciseOptionPartType.Intro, duration: INTRO_DURATION_MS };
    }

    if (partIndex === END_PART_INDEX) {
      return { type: BreathingExerciseOptionPartType.End, duration: 0 };
    }

    return partsInput[partIndex];
  }, [partIndex, partsInput]);

  // Single effect to handle phase transitions and progress
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!isPlaying || partIndex === END_PART_INDEX) {
      // Paused or ended - pause progress bar and cleanup
      cancelAnimation(progress);
      progressAnimating.current = false;
      return;
    }

    // Determine phase duration (use remaining time if resuming mid-phase)
    const phaseDuration = phaseRemainingMs.current ?? currentPart.duration;

    // Handle progress bar animation - only start/restart when needed
    if (!progressAnimating.current && partIndex >= 0 && progress.value < 1) {
      const progressRemaining = 1 - progress.value;
      const timeRemaining = progressRemaining * selectedDurationMs;
      progress.value = withTiming(1, { duration: timeRemaining, easing: Easing.linear });
      progressAnimating.current = true;
    }

    phaseStartTime.current = Date.now();
    phaseRemainingMs.current = phaseDuration;

    // Set timeout for phase transition
    timeoutRef.current = setTimeout(() => {
      // Reset phase remaining time for next phase
      phaseRemainingMs.current = null;

      // Check if exercise will be complete
      const willBeComplete = totalElapsedMs.current + currentPart.duration >= selectedDurationMs;

      // If completing, cancel animation BEFORE any state updates
      if (willBeComplete) {
        cancelAnimation(progress);
        progressAnimating.current = false;
      }

      setPartIndex((prev) => {
        // Intro -> first breathing part
        if (prev === START_PART_INDEX) {
          totalElapsedMs.current = 0;
          return 0;
        }

        // Track elapsed time (use actual phase duration, not remaining time)
        totalElapsedMs.current += currentPart.duration;

        // Check if exercise is complete
        if (totalElapsedMs.current >= selectedDurationMs) {
          setIsPlaying(false);
          onCompleted();
          return END_PART_INDEX;
        }

        // Loop through breathing parts
        const nextIndex = (prev + 1) % partsInput.length;
        return nextIndex;
      });
    }, phaseDuration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isPlaying, partIndex, selectedDurationMs, partsInput.length, progress, onCompleted, currentPart.duration]);

  return {
    startPlaying,
    togglePlaying,
    updateSelectedDurationMs,
    selectedDurationMs,
    isPlaying,
    currentPart,
    progress,
  };
};
