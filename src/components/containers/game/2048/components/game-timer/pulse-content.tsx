import { memo, ReactNode, useCallback, useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { VoidFunction } from "@utils";

type PulseContentProps = {
  setPulseContentAction: (pulse: VoidFunction) => void;
  children: ReactNode;
};

const PulseContent = ({ setPulseContentAction, children }: PulseContentProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const pulse = useCallback(() => {
    scale.value = withSequence(
      withTiming(1.4, { duration: 300, easing: Easing.inOut(Easing.ease) }),
      withDelay(700, withTiming(1, { duration: 300, easing: Easing.inOut(Easing.ease) }))
    );
  }, []);

  useEffect(() => {
    setPulseContentAction(pulse);
  }, [pulse, setPulseContentAction]);

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default memo(PulseContent);
