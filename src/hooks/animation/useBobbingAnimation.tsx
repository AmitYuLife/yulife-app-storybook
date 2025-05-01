import { useEffect } from "react";
import { useSharedValue, useAnimatedStyle, withRepeat, withTiming, withDelay, Easing } from "react-native-reanimated";
import { DETOX_ENABLED } from "@services/socket";

interface UseBobbingAnimationProps {
  amplitude?: number;
  duration?: number;
  delay?: number;
  startDirection?: "up" | "down";
}

export function useBobbingAnimation({
  amplitude = 12,
  duration = 2400,
  delay = 0,
  startDirection = "up",
}: UseBobbingAnimationProps = {}) {
  const translateY = useSharedValue(startDirection === "up" ? 0 : -amplitude);

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    translateY.value = withDelay(
      delay,
      withRepeat(
        withTiming(startDirection === "up" ? -amplitude : 0, {
          duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, [amplitude, duration, delay, startDirection, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: DETOX_ENABLED ? 0 : translateY.value }],
  }));

  return animatedStyle;
}
