import { useCallback, useState } from "react";
import { ViewStyle } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";

interface IUsePressEffectProps {
  activeOpacity?: number;
  activeScale?: number;
  activeTranslate?: number;
  duration?: number;
}

export const usePressEffect = ({
  activeOpacity = 0.9,
  activeScale = 0.985,
  activeTranslate = 5,
  duration = 100,
}: IUsePressEffectProps = {}) => {
  const [isPressedIn, setIsPressedIn] = useState<boolean>(false);

  const animatedStyle = useAnimatedStyle(
    (): ViewStyle => ({
      opacity: withTiming(isPressedIn ? activeOpacity : 1, { duration: duration * 1.2 }),
      transform: [
        {
          scale: withTiming(isPressedIn ? activeScale : 1, { duration: duration * 1.2 }),
        },
        {
          translateY: withTiming(isPressedIn ? activeTranslate : 0, {
            duration,
          }),
        },
      ],
    })
  );

  const onPressIn = useCallback(() => {
    setIsPressedIn(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressedIn(false);
  }, []);

  return { animatedStyle, onPressIn, onPressOut };
};
