import { useEffect, useRef } from "react";
import { Animated } from "react-native";

/**
 * avoids flashing assets before playing
 */
export const useFadeIn = (shouldUseFadeIn: boolean) => {
  const opacity = useRef(new Animated.Value(shouldUseFadeIn ? 0 : 1)).current;
  useEffect(() => {
    if (!shouldUseFadeIn) {
      return;
    }

    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: 1000,
    }).start();

    return () => opacity.stopAnimation();
  }, []);

  return { opacity };
};
