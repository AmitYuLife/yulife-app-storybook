import { Colours, Style } from "@styles/index";
import { memo, useEffect, useMemo } from "react";
import { ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet } from "@styles";

type DotProps = {
  delay?: number;
  duration?: number;
  delayBreakPoint1: number;
  delayBreakPoint2: number;
};

export const SplashLoadingDot = (props: DotProps) => {
  const { delay = 1000, duration = 1000, delayBreakPoint1, delayBreakPoint2 } = props;
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));
  const dotStyle = useMemo(() => [styles.dot, animatedStyle], [animatedStyle]);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withDelay(delay * delayBreakPoint1, withTiming(1, { duration })),
        withDelay(delay * delayBreakPoint2, withTiming(0, { duration }))
      ),
      -1,
      false
    );
  }, [delay, duration, delayBreakPoint1, delayBreakPoint2]);

  return <Animated.View style={dotStyle} />;
};

export default memo(SplashLoadingDot);

const DOT_SIZE = Style.adjust(10);

const styles = StyleSheet.create({
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    backgroundColor: Colours.darkHotPink,
    borderRadius: DOT_SIZE,
  } as ViewStyle,
});
