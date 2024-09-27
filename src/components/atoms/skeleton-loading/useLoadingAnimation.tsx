import { DETOX_ENABLED } from "@services/socket";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const useLoadingAnimation = () => {
  const fadeInFadeOut = useRef(new Animated.Value(0)).current;

  const opacity = fadeInFadeOut.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.loop(
      Animated.timing(fadeInFadeOut, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    opacity,
  };
};
