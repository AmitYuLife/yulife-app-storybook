import { useCallback, useEffect } from "react";
import { cancelAnimation, Easing, runOnJS, useSharedValue, withTiming } from "react-native-reanimated";
import { Style } from "@styles";

type Params = {
  itemsLength: number;
  autoPlaySpeedMs: number;

  activeIndex: number;
  updateActiveIndex: (newIndex: number) => () => void;

  paddingHorizontal?: number;
  gap?: number;
};

const useStoryMaskAnimation = ({
  itemsLength,
  autoPlaySpeedMs,
  activeIndex,
  updateActiveIndex,
  paddingHorizontal = 0,
  gap = 0,
}: Params) => {
  const maskWidth = useSharedValue(0);
  const paused = useSharedValue(false);
  const moveForward = useCallback(updateActiveIndex(1), [updateActiveIndex]);

  const getItemStartX = useCallback(
    (index: number, isEndTarget: boolean = false) => {
      const totalItemSize = Style.DEVICE_WIDTH - paddingHorizontal * 2 - gap * (itemsLength - 1);
      const widthPerItem = totalItemSize / itemsLength;

      const offset = paddingHorizontal + gap * index;
      return index * widthPerItem + offset - (isEndTarget ? gap : 0);
    },
    [itemsLength, paddingHorizontal, gap]
  );

  // Animation starter
  const startAnimation = useCallback(
    (resumeValue?: number) => {
      const maskStart = getItemStartX(activeIndex);
      const maskTarget = getItemStartX(activeIndex + 1, true);

      // Instantly jump to starting position
      maskWidth.value = withTiming(resumeValue || maskStart, { duration: 0 }, () => {
        if (paused.value) {
          return;
        }

        // Then animate to the next position
        maskWidth.value = withTiming(
          maskTarget,
          {
            duration: autoPlaySpeedMs,
            easing: Easing.linear,
          },
          (finished) => {
            if (finished && !paused.value) {
              runOnJS(moveForward)();
            }
          }
        );
      });
    },
    [activeIndex, autoPlaySpeedMs, updateActiveIndex]
  );

  const pauseAnimation = useCallback(() => {
    paused.value = true;
    cancelAnimation(maskWidth);
  }, []);

  const resumeAnimation = useCallback(() => {
    if (!paused.value) {
      return;
    }

    paused.value = false;
    startAnimation(maskWidth.value);
  }, [startAnimation]);

  // Whenever activeIndex changes, start animation
  useEffect(() => {
    startAnimation();
  }, [activeIndex, startAnimation]);

  return {
    maskWidth,
    pauseAnimation,
    resumeAnimation,
  };
};

export default useStoryMaskAnimation;
