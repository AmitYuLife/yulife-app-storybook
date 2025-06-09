import { useEffect, useMemo, useState } from "react";
import { ViewStyle } from "react-native";
import {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import {
  CONTENT_SWITCH_FADE_IN_DELAY,
  FADE_IN_CONTENT_DURATION,
  FADE_IN_DELAY,
  FADE_IN_DURATION,
  FADE_IN_STAGGER,
  FADE_OUT_DURATION,
  TEXT_FADE_IN_DELAY,
} from "./smoking-celebration-constants";
import { SmokingCelebrationProps } from "./smoking-celebration";

type SmokingCelebrationAnimationsProps = {
  smokingCelebrationProps: SmokingCelebrationProps;
};

type SmokingCelebrationAnimationsReturn = {
  displayProps: SmokingCelebrationProps;
  animatedStyles: {
    container: ViewStyle;
    title: ViewStyle;
    days: ViewStyle;
    yuCoin: ViewStyle;
  };
};

export const useSmokingCelebrationAnimations = ({
  smokingCelebrationProps,
}: SmokingCelebrationAnimationsProps): SmokingCelebrationAnimationsReturn => {
  const [displayProps, setDisplayProps] = useState<SmokingCelebrationProps>(smokingCelebrationProps);
  const activeId = useSharedValue(displayProps.id);
  const propsSharedValue = useSharedValue(smokingCelebrationProps);

  useEffect(() => {
    propsSharedValue.value = smokingCelebrationProps;
  }, [smokingCelebrationProps]);

  // Shared values
  const containerOpacity = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(16);
  const daysOpacity = useSharedValue(0);
  const daysTranslateY = useSharedValue(16);
  const yuCoinOpacity = useSharedValue(0);
  const yuCoinTranslateY = useSharedValue(16);

  useEffect(() => {
    if (smokingCelebrationProps.id !== activeId.value) {
      activeId.value = smokingCelebrationProps.id;
    }
  }, [smokingCelebrationProps.id]);

  useAnimatedReaction(
    () => activeId.value,
    (newId, previousId) => {
      if (newId === previousId) {
        return;
      }

      const initialRender = containerOpacity.value === 0;
      const contentFadeOutDuration = initialRender ? 0 : FADE_OUT_DURATION;
      const contentFadeInDelay = initialRender ? FADE_IN_DELAY : CONTENT_SWITCH_FADE_IN_DELAY;

      // Start fade out (container opacity)
      containerOpacity.value = withTiming(0, { duration: contentFadeOutDuration }, () => {
        // Update display props in JS thread after fade out completes
        runOnJS(setDisplayProps)(propsSharedValue.value);

        // Reset animations
        titleOpacity.value = 0;
        titleTranslateY.value = 16;
        daysOpacity.value = 0;
        daysTranslateY.value = 16;
        yuCoinOpacity.value = 0;
        yuCoinTranslateY.value = 16;

        // Start fade in
        containerOpacity.value = withDelay(
          contentFadeInDelay,
          withTiming(1, { duration: FADE_IN_CONTENT_DURATION }, () => {
            // Animate each element in
            const renderTitle = !!propsSharedValue.value.title;
            const renderDaysHeading = !!propsSharedValue.value.daysHeading;
            const renderYuCoin = !!propsSharedValue.value.yuCoin;

            const daysHeadingDelay = TEXT_FADE_IN_DELAY + (renderTitle ? FADE_IN_STAGGER : 0);
            const yuCoinDelay =
              TEXT_FADE_IN_DELAY + (renderTitle ? (renderDaysHeading ? FADE_IN_STAGGER * 2 : FADE_IN_STAGGER) : 0);

            if (renderTitle) {
              titleOpacity.value = withDelay(TEXT_FADE_IN_DELAY, withTiming(1, { duration: FADE_IN_DURATION }));
              titleTranslateY.value = withDelay(TEXT_FADE_IN_DELAY, withTiming(0, { duration: FADE_IN_DURATION }));
            }

            if (renderDaysHeading) {
              daysOpacity.value = withDelay(daysHeadingDelay, withTiming(1, { duration: FADE_IN_DURATION }));
              daysTranslateY.value = withDelay(daysHeadingDelay, withTiming(0, { duration: FADE_IN_DURATION }));
            }

            if (renderYuCoin) {
              yuCoinOpacity.value = withDelay(yuCoinDelay, withTiming(1, { duration: FADE_IN_DURATION }));
              yuCoinTranslateY.value = withDelay(yuCoinDelay, withTiming(0, { duration: FADE_IN_DURATION }));
            }
          })
        );
      });
    }
  );

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleTranslateY.value }],
  }));

  const daysAnimatedStyle = useAnimatedStyle(() => ({
    opacity: daysOpacity.value,
    transform: [{ translateY: daysTranslateY.value }],
  }));

  const yuCoinAnimatedStyle = useAnimatedStyle(() => ({
    opacity: yuCoinOpacity.value,
    transform: [{ translateY: yuCoinTranslateY.value }],
  }));

  const animatedStyles = useMemo(
    () => ({
      container: containerAnimatedStyle,
      title: titleAnimatedStyle,
      days: daysAnimatedStyle,
      yuCoin: yuCoinAnimatedStyle,
    }),
    [containerAnimatedStyle, titleAnimatedStyle, daysAnimatedStyle, yuCoinAnimatedStyle]
  );

  return {
    displayProps,
    animatedStyles,
  };
};
