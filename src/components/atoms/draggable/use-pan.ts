import { useEffect } from "react";
import {
  Gesture,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { runOnJS, SharedValue } from "react-native-reanimated";

type MagneticPan = {
  sectionWidth: number;
  minOffsetX: number;
  maxOffsetX: number;
  breakpoints: number[];
  defaultIndex: number;
  left: SharedValue<number>;
  onSnapToBreakpointIndex?: (breakpointIndex: number) => void;
};

export const usePan = ({
  minOffsetX,
  maxOffsetX,
  sectionWidth,
  breakpoints = [],
  defaultIndex = 0,
  onSnapToBreakpointIndex,
  left,
}: MagneticPan) => {
  const sectionWidthHalf = sectionWidth / 2;

  useEffect(() => {
    if (!breakpoints?.length || sectionWidth <= 0) {
      return;
    }

    let targetBreakpoint = breakpoints[0];
    if (defaultIndex < 0 || defaultIndex >= breakpoints.length) {
      left.value = targetBreakpoint + sectionWidthHalf;
      return;
    }

    targetBreakpoint = breakpoints[defaultIndex];
    left.value = targetBreakpoint + sectionWidthHalf;
  }, [breakpoints, sectionWidth]);

  const pan = Gesture.Pan()
    .onChange((event: GestureUpdateEvent<PanGestureHandlerEventPayload & PanGestureChangeEventPayload>) => {
      if (event.absoluteX < minOffsetX) {
        left.value = minOffsetX;
      } else if (event.absoluteX > maxOffsetX) {
        left.value = maxOffsetX;
      } else {
        left.value = event.absoluteX;
      }
    })
    .onEnd((event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
      for (const [breakpointIndex, breakpoint] of breakpoints.entries()) {
        const aboveLowerLimit = event.absoluteX > breakpoint;
        const belowUpperLimit = event.absoluteX < breakpoint + sectionWidth;
        const withinBreakpointLimits = aboveLowerLimit && belowUpperLimit;

        if (withinBreakpointLimits) {
          left.value = breakpoint + sectionWidthHalf;

          if (onSnapToBreakpointIndex) {
            runOnJS(onSnapToBreakpointIndex)(breakpointIndex);
          }

          break;
        }
      }
    });

  return { left, pan };
};
