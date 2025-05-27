import { useCallback, useEffect, useRef, useState } from "react";
import { clamp } from "lodash";
import { useFps } from "@hooks";

const MAX_MULTIPLIER = 2;
const MIN_MULTIPLIER = 0.2;
const DEFAULT_SCALING_MULTIPLIER = 1.2; // If target FPS is 60 and fps = target fps
const MAX_FPS = 60;

type FrameAdjusterProps = {
  initialValue: number;
  targetFps?: number;
  fpsDelta?: number; // Allow the fps to fluctuate by this value, default 3
  minValue?: number; // Defaults to 0
  maxValue?: number; // Defaults to initial value
};

export const useFrameAdjuster = ({
  initialValue,
  targetFps = 60,
  fpsDelta = 3,
  minValue = 0,
  maxValue = initialValue,
}: FrameAdjusterProps): number => {
  const [count, setCount] = useState(initialValue);
  const countRef = useRef<number>(initialValue);
  const [fpsCount, lastFpsUpdatedAt] = useFps(500);

  const calculateNewCount = useCallback(
    (fps: number) => {
      const fpsDiff = fps - targetFps;

      if (Math.abs(fpsDiff) < fpsDelta && fps < MAX_FPS) {
        return countRef.current;
      }

      const exceedsMaxFps = fps >= MAX_FPS && targetFps >= MAX_FPS;
      const diffRatio = exceedsMaxFps ? DEFAULT_SCALING_MULTIPLIER : fps / targetFps;

      const countMultiplier = clamp(diffRatio, MIN_MULTIPLIER, MAX_MULTIPLIER);
      let newCount = Math.round(countRef.current * countMultiplier);

      // Ensure we adjust by at least 1 if multiplier didn't cause a change
      if (newCount === countRef.current) {
        newCount += fpsDiff >= 0 ? 1 : -1;
      }

      return clamp(newCount, minValue, maxValue);
    },
    [targetFps, fpsDelta, minValue, maxValue]
  );

  useEffect(() => {
    if (!fpsCount) {
      return;
    }

    const newCount = minValue === maxValue ? minValue : calculateNewCount(fpsCount);
    if (countRef.current !== newCount) {
      countRef.current = newCount;
      setCount(newCount);
    }
  }, [calculateNewCount, fpsCount, lastFpsUpdatedAt, maxValue, minValue]);

  return count;
};
