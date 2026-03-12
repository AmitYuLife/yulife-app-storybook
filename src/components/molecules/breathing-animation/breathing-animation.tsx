import type Lottie from "lottie-react-native";
import { useCallback, useEffect, useRef, useMemo, useState } from "react";
import LottieView from "../lottie-view/lottie-view";
import { ViewStyle } from "react-native";

const PLAYABLE_PHASES = ["intro", "inhale", "exhale"];

interface IBreathingAnimationProps {
  phase: (typeof PLAYABLE_PHASES)[number] | "hold" | "end";
  phaseDurationMs?: number;
  isPlaying: boolean;
  style?: ViewStyle;
}

const LOTTIE_FPS = 24;

export const BreathingAnimation = ({ phase, phaseDurationMs, isPlaying, style }: IBreathingAnimationProps) => {
  const lottieRef = useRef<Lottie>(null);
  const previousPhaseRef = useRef<string>("");
  const previousIsPlayingRef = useRef<boolean>(false);
  const pauseTimeRef = useRef<number | null>(null);
  const phaseStartTimeRef = useRef<number | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);

  const calculateSpeed = useCallback((frameCount: number, desiredDurationMs: number): number => {
    const normalDurationMs = (frameCount / LOTTIE_FPS) * 1000;
    return normalDurationMs / desiredDurationMs;
  }, []);

  const baseSpeed = useMemo(() => {
    const mapping = FRAME_MAPPING[phase];
    if (!mapping) {
      return 1;
    }

    const frameCount = mapping.endFrame - mapping.startFrame;
    if (mapping.adhereToDuration && phaseDurationMs) {
      return calculateSpeed(frameCount, phaseDurationMs);
    }

    return 1;
  }, [phase, phaseDurationMs, calculateSpeed]);

  useEffect(() => {
    if (!lottieRef.current) {
      return;
    }

    const mapping = FRAME_MAPPING[phase];
    const isPhaseChange = previousPhaseRef.current !== phase;
    const isPlayablePhase = PLAYABLE_PHASES.includes(phase);
    const wasPlaying = previousIsPlayingRef.current;

    // Update refs for next render
    previousPhaseRef.current = phase;
    previousIsPlayingRef.current = isPlaying;

    // Handle phase changes
    if (isPhaseChange) {
      if (isPlayablePhase) {
        // Only set timing for playable phases
        phaseStartTimeRef.current = Date.now();
        pauseTimeRef.current = null;
        setAnimationSpeed(baseSpeed);
      }

      if (isPlaying && isPlayablePhase) {
        lottieRef.current.play(mapping.startFrame, mapping.endFrame);
      } else if (wasPlaying) {
        lottieRef.current.pause();
      }

      return;
    }

    // Handle play/pause changes within same phase
    if (isPlaying !== wasPlaying) {
      if (isPlaying && isPlayablePhase) {
        // Starting or resuming
        if (pauseTimeRef.current && phaseStartTimeRef.current && phaseDurationMs) {
          // Resume: calculate current frame and adjusted speed
          const elapsedMs = pauseTimeRef.current - phaseStartTimeRef.current;
          const progress = Math.min(elapsedMs / phaseDurationMs, 1);
          const currentFrame = mapping.startFrame + progress * (mapping.endFrame - mapping.startFrame);
          const remainingFrames = mapping.endFrame - currentFrame;
          const remainingMs = phaseDurationMs - elapsedMs;

          if (remainingMs > 0 && remainingFrames > 0) {
            if (mapping.adhereToDuration) {
              // Calculate and set adjusted speed for remaining animation
              const adjustedSpeed = calculateSpeed(remainingFrames, remainingMs);
              setAnimationSpeed(adjustedSpeed);
            } else {
              setAnimationSpeed(baseSpeed);
            }

            phaseStartTimeRef.current = Date.now() - elapsedMs;
            pauseTimeRef.current = null;
            lottieRef.current.play(currentFrame, mapping.endFrame);
          }
        } else {
          // Start fresh
          setAnimationSpeed(baseSpeed);
          phaseStartTimeRef.current = Date.now();
          lottieRef.current.play(mapping.startFrame, mapping.endFrame);
        }
      } else if (!isPlaying || !isPlayablePhase) {
        // Pausing
        pauseTimeRef.current = Date.now();
        lottieRef.current.pause();
      }
    }
  }, [isPlaying, phase, phaseDurationMs, calculateSpeed, baseSpeed]);

  return (
    <LottieView
      ref={lottieRef}
      source={require("./breathing-animation.json")}
      loop={false}
      autoPlay={false}
      speed={animationSpeed}
      style={style}
    />
  );
};

const FRAME_MAPPING: Record<
  IBreathingAnimationProps["phase"],
  { startFrame: number; endFrame: number; adhereToDuration: boolean }
> = {
  intro: { startFrame: 0, endFrame: 68, adhereToDuration: true },
  inhale: { startFrame: 90, endFrame: 149, adhereToDuration: true },
  exhale: { startFrame: 364, endFrame: 430, adhereToDuration: true },
};
