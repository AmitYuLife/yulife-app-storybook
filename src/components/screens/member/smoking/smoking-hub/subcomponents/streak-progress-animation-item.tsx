import {
  default as Reanimated,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { memo, useEffect, useMemo } from "react";
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
export const StreakProgressAnimationItem = memo(({ animation, end, start, shouldAnimate, lapsed }: Props) => {
  const animationRef = useSharedValue(0);
  const opacityRef = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({ progress: animationRef.value }), []);
  const { uri: lottieUri, loading: lottieLoading } = useGetLottieJson(animation);

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

    animationRef.value = withTiming(end, { duration: 1000 });
  }, [lottieLoading, lottieUri, end, shouldAnimate]);

  return <AnimatedLottieView source={memoized} animatedProps={animatedProps} style={animatedStyle} />;
});
