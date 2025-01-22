import { useEffect } from "react";
import {
  Gesture,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

type MagneticPan = {
  sectionWidth: number;
  minOffsetX: number;
  maxOffsetX: number;
  breakpoints: number[];
  defaultIndex: number;
};

export const usePan = ({ minOffsetX, maxOffsetX, sectionWidth, breakpoints = [], defaultIndex = 0 }: MagneticPan) => {
  const left = useSharedValue(0);
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
  }, [breakpoints, sectionWidth, defaultIndex]);

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
      for (const breakpoint of breakpoints) {
        const aboveLowerLimit = event.absoluteX > breakpoint;
        const belowUpperLimit = event.absoluteX < breakpoint + sectionWidth;
        const withinBreakpointLimits = aboveLowerLimit && belowUpperLimit;

        if (withinBreakpointLimits) {
          left.value = breakpoint + sectionWidthHalf;
          break;
        }
      }
    });

  return { left, pan };
};
