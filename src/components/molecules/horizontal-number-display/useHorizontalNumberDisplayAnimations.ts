import { useCallback, useRef, useState } from "react";
import { calculateBaseScrollOffset, calculateScrollOffset } from "./utils";
import { Easing, runOnJS, SharedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { clamp, merge } from "lodash";
import { createDeferredPromise } from "@utils/promise";

const SCROLL_EASING = Easing.bezier(0.6, 0.05, 0.4, 0.95);

type AnimationOptions = {
  durationStep1: number;
  durationStep2: number | ((target: number, currentTarget: number) => number);
  durationStep3: number;
};

const DEFAULT_ANIMATION_OPTIONS: Required<AnimationOptions> = {
  durationStep1: 500,
  durationStep2: (t, ct) => clamp(Math.abs(t - ct) * 150, 600, 2000),
  durationStep3: 500,
};

const buildAnimationOptions = (options: Partial<AnimationOptions> = {}) =>
  merge({}, DEFAULT_ANIMATION_OPTIONS, options);

type Props = {
  initialTarget: number;
  displayWidth: number;
  minNumber: number;
};

type UseHorizontalNumberDisplayAnimationsReturn = {
  animate: (to: number, animationOptions?: Partial<AnimationOptions>) => Promise<void>;
  jump: (to: number) => Promise<void>;
  currentTarget: number;
  isAnimating: boolean;
  scrollPosition: SharedValue<number>;
  stylesProgress: SharedValue<number>;
};

export const useHorizontalNumberDisplayAnimations = ({
  initialTarget,
  displayWidth,
  minNumber,
}: Props): UseHorizontalNumberDisplayAnimationsReturn => {
  const [currentTarget, setCurrentTarget] = useState(initialTarget);
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingTowardsTargetRef = useRef<number | null>(null);

  // Animated values
  const scrollPosition = useSharedValue(calculateScrollOffset(initialTarget, minNumber, displayWidth));
  const stylesProgress = useSharedValue(1); // 1 = display styles, 0 = small styles for scrolling

  const animateStep1 = useCallback(
    (from: number, animationOptions: AnimationOptions): Promise<void> => {
      const baseScrollPosition = calculateBaseScrollOffset(from, minNumber, displayWidth);
      const { resolve, promise } = createDeferredPromise();

      // Step 1: Minimize numbers, prepare for scrolling
      stylesProgress.value = withTiming(
        0,
        {
          duration: animationOptions.durationStep1,
          easing: Easing.inOut(Easing.quad),
        },
        () => runOnJS(resolve)()
      );
      scrollPosition.value = withTiming(baseScrollPosition, {
        duration: animationOptions.durationStep1,
        easing: Easing.inOut(Easing.quad),
      });

      return promise;
    },
    [displayWidth, minNumber, scrollPosition, stylesProgress]
  );

  // Step 2: Scroooooollll
  const animateStep2 = useCallback(
    (from: number, to: number, animationOptions: AnimationOptions): Promise<void> => {
      const middlePosition = calculateBaseScrollOffset(to, minNumber, displayWidth);
      const scrollDuration =
        typeof animationOptions.durationStep2 === "number"
          ? animationOptions.durationStep2
          : animationOptions.durationStep2(to, from);
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
    (to: number, animationOptions: AnimationOptions): Promise<void> => {
      const newScrollPosition = calculateScrollOffset(to, minNumber, displayWidth);
      const { resolve, promise } = createDeferredPromise();

      stylesProgress.value = withTiming(
        1,
        {
          duration: animationOptions.durationStep3,
          easing: Easing.inOut(Easing.quad),
        },
        () => runOnJS(resolve)()
      );
      scrollPosition.value = withTiming(newScrollPosition, {
        duration: animationOptions.durationStep3,
        easing: Easing.inOut(Easing.quad),
      });

      return promise;
    },
    [displayWidth, minNumber, scrollPosition, stylesProgress]
  );

  const animate = useCallback(
    async (to: number, animationOptions: Partial<AnimationOptions>) => {
      if (isAnimating || currentTarget === to || animatingTowardsTargetRef.current === to) {
        return;
      }

      const options = buildAnimationOptions(animationOptions);
      animatingTowardsTargetRef.current = to;
      setIsAnimating(true);

      try {
        await animateStep1(currentTarget, options);
        await animateStep2(currentTarget, to, options);
        setCurrentTarget(to);
        await animateStep3(to, options);
      } finally {
        setIsAnimating(false);
      }
    },
    [animateStep1, animateStep2, animateStep3, currentTarget, isAnimating]
  );

  const jump = useCallback(
    (to: number) => {
      if (currentTarget === to) {
        return;
      }

      setCurrentTarget(to);
      return animateStep3(to, buildAnimationOptions({ durationStep3: 0 }));
    },
    [animateStep3, currentTarget]
  );

  return {
    animate,
    jump,
    currentTarget,
    isAnimating,
    scrollPosition,
    stylesProgress,
  };
};
