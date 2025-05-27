import { useCallback, useState } from "react";
import { runOnJS, useFrameCallback, useSharedValue } from "react-native-reanimated";

export function useFps(delay: number = 0, updateIntervalMs: number = 1000) {
  const frameCount = useSharedValue(0);
  const windowStart = useSharedValue<number | null>(null);
  const lastUpdateAt = useSharedValue<number | null>(null);
  const [fps, setFps] = useState(0);
  const [lastFpsUpdatedAt, setLastFpsUpdatedAt] = useState(0);

  const updateFps = useCallback((value: number) => {
    setFps(value);
    setLastFpsUpdatedAt(Date.now());
  }, []);

  useFrameCallback((frame) => {
    const now = frame.timestamp;

    // Initialize timing values
    if (lastUpdateAt.value === null) {
      lastUpdateAt.value = now + delay;
      windowStart.value = now;
      frameCount.value = 0;
      return;
    }

    // Reset window if it's been longer than updateIntervalMs since window start
    if (now - windowStart.value >= updateIntervalMs) {
      windowStart.value = now;
      frameCount.value = 1;
    } else {
      frameCount.value++;
    }

    // Update FPS at specified intervals
    if (now - lastUpdateAt.value >= updateIntervalMs) {
      const elapsed = now - windowStart.value;
      const currentFps = Math.round((frameCount.value * 1000) / elapsed);
      lastUpdateAt.value = now;
      runOnJS(updateFps)(currentFps);
    }
  });

  return [fps, lastFpsUpdatedAt] as const;
}
