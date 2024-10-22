import {
  default as Reanimated,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { memo, useEffect, useMemo, useRef } from "react";
import { useGetLottieJson } from "@hooks";
import { DETOX_ENABLED } from "@services/socket";
import { AnimatedPlantProps } from "./types";
import { ITEM_WIDTH, PROGRESS_INCREMENT, MULTIPLIER_MINIMUM, ANIMATION_PHASE_DURATION_BASE } from "./configuration";

const AnimatedLottieView = Reanimated.createAnimatedComponent(LottieView);

export const ReanimatedPlant = memo(({ animation, end, start, shouldAnimate, lapsed }: AnimatedPlantProps) => {
  const animationRef = useSharedValue(0);
  const opacityRef = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({ progress: animationRef.value }), []);
  const { uri: lottieUri, loading: lottieLoading } = useGetLottieJson(animation);
  const currentAnimation = useRef(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      width: ITEM_WIDTH,
      height: ITEM_WIDTH / 0.63,
      opacity: opacityRef.value,
      marginLeft: -12,
      marginRight: -12,
    }),
    [lottieLoading, lottieUri]
  );

  const memoized = useMemo(() => ({ uri: animation }), [animation]);

  useEffect(() => {
    if (DETOX_ENABLED || lottieLoading || !lottieUri || shouldAnimate) {
      return;
    }

    currentAnimation.current = end;
    animationRef.value = withTiming(end, { duration: 256 });
    opacityRef.value = withTiming(1, { duration: 512 });
  }, [lottieUri, lottieLoading]);

  useEffect(() => {
    if (lapsed) {
      animationRef.value = withTiming(start, { duration: 256 });
    }
  }, [start, lapsed]);

  useEffect(() => {
    if (DETOX_ENABLED || lottieLoading || !lottieUri || !shouldAnimate || lapsed) {
      return;
    }

    const percentageProgressDelta = (end - currentAnimation.current) * 100;
    const phasesPassed = Math.floor(percentageProgressDelta / PROGRESS_INCREMENT);
    const durationMultiplier = phasesPassed < MULTIPLIER_MINIMUM ? MULTIPLIER_MINIMUM : phasesPassed;
    const duration = ANIMATION_PHASE_DURATION_BASE * durationMultiplier;

    animationRef.value = withTiming(end, { duration });
  }, [lottieLoading, lottieUri, end, shouldAnimate]);

  return <AnimatedLottieView source={memoized} animatedProps={animatedProps} style={animatedStyle} />;
});
