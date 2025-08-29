import { memo, ReactNode, useEffect } from "react";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { usePan } from "./use-pan";
import { Platform } from "react-native";

type Props = {
  children: ReactNode;
  minOffsetX?: number;
  maxOffsetX: number;
  sectionWidth: number;
  breakpoints: number[];
  defaultIndex?: number;
  handleWidth: number;

  /**
   * Used for Storybook testing
   * Set to false to deterministically have opacity be set to 1
   */
  fadeIn?: boolean;

  onChange?: (breakpointIndex: number) => void;

  left: SharedValue<number>;
};

const Draggable = ({
  children,
  minOffsetX = 0,
  maxOffsetX,
  sectionWidth,
  breakpoints = [],
  defaultIndex = 0,
  handleWidth,
  fadeIn = true,
  onChange,
  left,
}: Props) => {
  const opacity = useSharedValue(fadeIn ? 0 : 1);
  const { pan } = usePan({
    left,
    minOffsetX,
    maxOffsetX,
    breakpoints,
    sectionWidth,
    defaultIndex,
    onSnapToBreakpointIndex: onChange,
  });

  const animatedStyle = useAnimatedStyle(() => ({
    start: left.value - handleWidth / 2,
    bottom: 0,
    top: 0,
    position: "absolute",
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = withDelay(Platform.select({ ios: 0, android: 1000 }), withSpring(1));
  }, []);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View collapsable={false} style={animatedStyle}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default memo(Draggable);
