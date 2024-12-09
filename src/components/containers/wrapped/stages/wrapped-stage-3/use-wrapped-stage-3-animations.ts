import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface IUseWrappedStage3Animations {
  isExiting: boolean;
}

export const useWrappedStage3Animations = ({ isExiting }: IUseWrappedStage3Animations) => {
  const coinScale = useSharedValue(0);
  const coinTranslateY = useSharedValue(0);

  // @ts-expect-error - reanimated doesn't like scale and translate in same style
  const coinStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      height: "100%",
      transform: [
        {
          scale: coinScale.value,
        },
        {
          translateY: coinTranslateY.value,
        },
      ],
    };
  });

  const coinContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: isExiting ? withDelay(1000, withTiming(isExiting ? 0 : 1, { duration: 500 })) : 1,
    };
  });

  const coinContainerFloatStyle = useAnimatedStyle(() => {
    const easing = Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42));
    const duration = 3000;
    return {
      transform: [
        {
          translateY: withRepeat(
            withSequence(
              withTiming(10, { duration: duration, easing }),
              withTiming(-10, { duration: duration, easing })
            ),
            -1,
            true
          ),
        },
      ],
    };
  });

  return { coinScale, coinStyle, coinContainerStyle, coinContainerFloatStyle, coinTranslateY };
};
