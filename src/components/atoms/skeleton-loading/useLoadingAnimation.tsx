/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import { DETOX_ENABLED } from "@services/socket";
import { useEffect } from "react";
import { Easing, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export const useLoadingAnimation = () => {
  "use no memo";
  const opacity = useSharedValue<number>(1);

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    opacity.value = withRepeat(
      withTiming(0.5, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    opacity,
  };
};
