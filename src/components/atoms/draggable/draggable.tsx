import { memo, ReactNode } from "react";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { usePan } from "./use-pan";

type Props = {
  children: ReactNode;
  minOffsetX?: number;
  maxOffsetX: number;
  sectionWidth: number;
  breakpoints: number[];
  defaultIndex?: number;
  handleWidth: number;

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
  onChange,
  left,
}: Props) => {
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
    width: handleWidth,
    alignItems: "center",
    position: "absolute",
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View collapsable={false} style={animatedStyle}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default memo(Draggable);
