import { useEffect } from "react";
import {
  withTiming,
  withSequence,
  withRepeat,
  Easing,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Style } from "@styles";
import { MAX_YU_SHEEN_X_OFFSET } from "../constants";

const swipeLength = Style.DEVICE_WIDTH + MAX_YU_SHEEN_X_OFFSET;

export function useSheenAnimation() {
  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 0 }), // start at 1 (visible)
        withTiming(1, { duration: 1600 }), // stay visible during swipe animation
        withTiming(0, { duration: 400 }), // fade out
        withTiming(0, { duration: 400 }), // wait for position reset
        withTiming(1, { duration: 400 }) // fade in
      ),
      -1,
      false
    );

    translateX.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 0 }), // start at 0
        withTiming(swipeLength, { duration: 1600, easing: Easing.linear }), // swipe right
        withTiming(swipeLength, { duration: 400 }), // wait for fade out
        withTiming(0, { duration: 400 }), // go back to 0
        withTiming(0, { duration: 400 }) // wait for fade in
      ),
      -1,
      false
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateX: translateX.value }],
    };
  });
}
