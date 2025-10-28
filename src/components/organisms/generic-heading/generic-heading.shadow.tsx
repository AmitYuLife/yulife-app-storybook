import {
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useGenericHeadingShadowOpacity = (hasShadow: boolean, scrollValueInput: SharedValue<number>) => {
  // the shadow opacity should ease up to 0.08 over 200ms, when the scroll value is greater than 0, and ease down to 0 over 200ms when the scroll value is less than 0.
  const shadowOpacity = useSharedValue(0);

  useAnimatedReaction(
    () => scrollValueInput?.value ?? 0,
    (scrollValue) => {
      if (!hasShadow) {
        shadowOpacity.value = withTiming(0, { duration: 200 });
        return;
      }

      shadowOpacity.value = withTiming(scrollValue > 0 ? 0.08 : 0, { duration: 200 });
    }
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: shadowOpacity.value,
    };
  });

  return animatedStyle;
};
