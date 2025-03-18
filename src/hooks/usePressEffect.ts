import { useCallback, useState } from "react";
import { ViewStyle } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";

export interface IUsePressEffectProps {
  pressedOpacity?: number;
  pressedScale?: number;
  pressedTranslation?: number;
  duration?: number;
  isEnabled?: boolean;
  isActive?: boolean;
}

export const usePressEffect = ({
  pressedOpacity = 0.9,
  pressedScale = 0.985,
  pressedTranslation = 5,
  duration = 100,
  isActive,
  isEnabled = true,
}: IUsePressEffectProps = {}) => {
  const [isPressedIn, setIsPressedIn] = useState<boolean>(false);

  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    if (!isEnabled) {
      return {};
    }

    const { scale, translation } = (() => {
      if (isPressedIn) {
        return { scale: pressedScale, translation: pressedTranslation };
      }

      if (isActive) {
        return { scale: pressedScale + (1 - pressedScale) * 0.35, translation: pressedTranslation };
      }

      return { scale: 1, translation: 0 };
    })();

    return {
      opacity: withTiming(isPressedIn ? pressedOpacity : 1, { duration: duration * 1.2 }),
      transform: [
        {
          scale: withTiming(scale, { duration: duration * 1.2 }),
        },
        {
          translateY: withTiming(translation, {
            duration,
          }),
        },
      ],
    };
  });

  const onPressIn = useCallback(() => {
    setIsPressedIn(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressedIn(false);
  }, []);

  return { animatedStyle, onPressIn, onPressOut };
};
