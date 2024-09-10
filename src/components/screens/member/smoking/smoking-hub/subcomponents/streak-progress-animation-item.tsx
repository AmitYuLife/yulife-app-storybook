import {
  default as Reanimated,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { memo, useEffect, useMemo, useRef } from "react";
import { Style } from "@styles";
import { useGetLottieJson } from "@hooks";
import { DETOX_ENABLED } from "@services/socket";

type Props = {
  animation: string;
  end: number;
  start: number;
  shouldAnimate: boolean;
  lapsed: boolean;
};

const AnimatedLottieView = Reanimated.createAnimatedComponent(LottieView);

const ITEM_WIDTH = Style.DEVICE_WIDTH / 3.5;
const ANIMATION_PHASE_DURATION_BASE = 1000;
const PROGRESS_MAX = 100;
const PROGRESS_PHASES = 7;
const PROGRESS_INCREMENT = Math.floor(PROGRESS_MAX / PROGRESS_PHASES);
const MULTIPLIER_MINIMUM = 1;

export const StreakProgressAnimationItem = memo(({ animation, end, start, shouldAnimate, lapsed }: Props) => {
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
