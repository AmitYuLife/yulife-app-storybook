import { useCallback, useState } from "react";
import { calculateBaseScrollOffset, calculateScrollOffset } from "./utils";
import { Easing, runOnJS, SharedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { clamp } from "lodash";
import { createDeferredPromise } from "@utils/promise";

const SCROLL_EASING = Easing.bezier(0.6, 0.05, 0.4, 0.95);
const DURATION_STEP_1 = 500;
const getDurationStep2 = (target: number, currentTarget: number) =>
  clamp(Math.abs(target - currentTarget) * 150, 600, 2000);
const DURATION_STEP_3 = 500;

type Props = {
  initialTarget: number;
  displayWidth: number;
  minNumber: number;
  updateCurrentTarget: (target: number) => void;
};

type UseHorizontalNumberDisplayAnimationsReturn = {
  animate: (from: number, to: number) => Promise<void>;
  jump: (to: number) => Promise<void>;
  isAnimating: boolean;
  scrollPosition: SharedValue<number>;
  stylesProgress: SharedValue<number>;
};

export const useHorizontalNumberDisplayAnimations = ({
  initialTarget,
  displayWidth,
  minNumber,
  updateCurrentTarget,
}: Props): UseHorizontalNumberDisplayAnimationsReturn => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Animated values
  const scrollPosition = useSharedValue(calculateScrollOffset(initialTarget, minNumber, displayWidth));
  const stylesProgress = useSharedValue(1); // 1 = display styles, 0 = small styles for scrolling

  const animateStep1 = useCallback(
    (from: number): Promise<void> => {
      const baseScrollPosition = calculateBaseScrollOffset(from, minNumber, displayWidth);
      const { resolve, promise } = createDeferredPromise();

      // Step 1: Minimize numbers, prepare for scrolling
      stylesProgress.value = withTiming(0, {
        duration: DURATION_STEP_1,
        easing: Easing.inOut(Easing.quad),
      });
      scrollPosition.value = withTiming(
        baseScrollPosition,
        {
          duration: DURATION_STEP_1,
          easing: Easing.inOut(Easing.quad),
        },
        () => runOnJS(resolve)()
      );

      return promise;
    },
    [displayWidth, minNumber, scrollPosition, stylesProgress]
  );

  // Step 2: Scroooooollll
  const animateStep2 = useCallback(
    (from: number, to: number): Promise<void> => {
      const middlePosition = calculateBaseScrollOffset(to, minNumber, displayWidth);
      const scrollDuration = getDurationStep2(to, from);
      const { resolve, promise } = createDeferredPromise();

      scrollPosition.value = withTiming(
        middlePosition,
        {
          duration: scrollDuration,
          easing: SCROLL_EASING,
        },
        () => runOnJS(resolve)()
      );

      return promise;
    },
    [displayWidth, minNumber, scrollPosition]
  );

  // Step 3: Go back to display sizes
  const animateStep3 = useCallback(
    (to: number, duration: number = DURATION_STEP_3): Promise<void> => {
      const newScrollPosition = calculateScrollOffset(to, minNumber, displayWidth);
      const { resolve, promise } = createDeferredPromise();

      stylesProgress.value = withTiming(1, {
        duration: duration,
        easing: Easing.inOut(Easing.quad),
      });
      scrollPosition.value = withTiming(
        newScrollPosition,
        {
          duration: duration,
          easing: Easing.inOut(Easing.quad),
        },
        () => runOnJS(resolve)()
      );

      return promise;
    },
    [displayWidth, minNumber, scrollPosition, stylesProgress]
  );

  const animate = useCallback(
    async (from: number, to: number) => {
      if (isAnimating) {
        return;
      }

      setIsAnimating(true);

      try {
        await animateStep1(from);
        await animateStep2(from, to);
        updateCurrentTarget(to);
        await animateStep3(to);
      } finally {
        setIsAnimating(false);
      }
    },
    [animateStep1, animateStep2, animateStep3, isAnimating, updateCurrentTarget]
  );

  const jump = useCallback(
    (to: number) => {
      updateCurrentTarget(to);
      return animateStep3(to, 0);
    },
    [animateStep3, updateCurrentTarget]
  );

  return {
    animate,
    jump,
    isAnimating,
    scrollPosition,
    stylesProgress,
  };
};
