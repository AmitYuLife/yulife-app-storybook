import LottieView from "lottie-react-native";
import { useCallback, useEffect, useRef, useMemo } from "react";
import { ViewStyle } from "react-native";

const PLAYABLE_PHASES = ["intro", "inhale", "exhale"];

interface IBreathingAnimationProps {
  phase: typeof PLAYABLE_PHASES[number] | "hold" | "end";
  phaseDurationMs?: number;
  isPlaying: boolean;
  style?: ViewStyle;
}

const LOTTIE_FPS = 24;

export const BreathingAnimation = ({ phase, phaseDurationMs, isPlaying, style }: IBreathingAnimationProps) => {
  const lottieRef = useRef<LottieView>(null);

  const calculateSpeed = useCallback((frameCount: number, desiredDurationMs: number): number => {
    // At normal speed (1.0), this many frames would take (frameCount / FPS) seconds
    const normalDurationSeconds = frameCount / LOTTIE_FPS;
    const normalDurationMs = normalDurationSeconds * 1000;

    // Speed multiplier: if we want it faster, speed > 1; if slower, speed < 1
    // speed = normalDuration / desiredDuration
    // e.g., 10 frames at 24fps = 0.417s = 417ms normally. To play in 4000ms: speed = 417 / 4000 = 0.104
    const speed = normalDurationMs / desiredDurationMs;

    return speed;
  }, []);

  const animationSpeed = useMemo(() => {
    const mapping = FRAME_MAPPING[phase];

    if (!mapping) {
      return 1;
    }

    const frameCount = mapping.endFrame - mapping.startFrame;

    if (mapping.adhereToDuration && phaseDurationMs) {
      return calculateSpeed(frameCount, phaseDurationMs);
    }

    return 1; // default speed for intro
  }, [phase, phaseDurationMs, calculateSpeed]);

  useEffect(() => {
    if (!lottieRef.current) {
      return;
    }

    if (!isPlaying || !PLAYABLE_PHASES.includes(phase)) {
      lottieRef.current.pause();
    } else {
      const mapping = FRAME_MAPPING[phase];

      lottieRef.current.play(mapping.startFrame, mapping.endFrame);
    }
  }, [isPlaying, phase]);

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
  intro: { startFrame: 0, endFrame: 68, adhereToDuration: false },
  inhale: { startFrame: 90, endFrame: 149, adhereToDuration: true },
  exhale: { startFrame: 364, endFrame: 430, adhereToDuration: true },
};
