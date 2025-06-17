import { useCallback, useRef, useState } from "react";
import { VoidFunction } from "@utils";
import { useAppState, useRecurringTimeout } from "@hooks";
import { AppStateStatus } from "react-native";

type TimerProps = {
  /**
   * With how timeout/intervals work, setting this to 1000 will cause it to skip a second sometimes
   */
  updateIntervalMs?: number;
  /**
   * Tracks time elapsed regardless if app is active or not
   */
  trackAbsoluteTime?: boolean;
  initiallyPaused?: boolean;
};

type UseTimerReturn = {
  timeElapsed: number;
  secondsElapsed: number;
  pause: VoidFunction;
  resume: VoidFunction;
  reset: (paused?: boolean) => void;
};

export const useTimer = ({
  updateIntervalMs = 250,
  trackAbsoluteTime = false,
  initiallyPaused = false,
}: TimerProps = {}): UseTimerReturn => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(initiallyPaused);
  const pausedAtRef = useRef<number | null>(initiallyPaused ? Date.now() : null);
  const timerStartedAtRef = useRef<number | null>(initiallyPaused ? null : Date.now());
  const pauseDurationRef = useRef(0);
  const [appActive, setAppActive] = useState(true);

  const updateTimer = useCallback(() => {
    if (!timerStartedAtRef.current) {
      return;
    }

    if (trackAbsoluteTime) {
      setTimeElapsed(Date.now() - timerStartedAtRef.current - pauseDurationRef.current);
      return;
    }

    setTimeElapsed((prev) => prev + updateIntervalMs);
  }, [trackAbsoluteTime, updateIntervalMs]);

  useRecurringTimeout(updateTimer, !appActive || isPaused ? null : updateIntervalMs);

  const pause = useCallback(() => {
    if (!pausedAtRef.current) {
      pausedAtRef.current = Date.now();
    }

    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (pausedAtRef.current) {
      pauseDurationRef.current += Date.now() - pausedAtRef.current;
    }

    setIsPaused(false);
    pausedAtRef.current = null;
    timerStartedAtRef.current = timerStartedAtRef.current || Date.now();
  }, []);

  const reset = useCallback((paused?: boolean) => {
    setTimeElapsed(0);
    timerStartedAtRef.current = paused ? null : Date.now();
    setIsPaused(paused);
    pausedAtRef.current = paused ? Date.now() : null;
    pauseDurationRef.current = 0;
  }, []);

  const onAppState = useCallback(
    (appState: AppStateStatus) => {
      if (trackAbsoluteTime) {
        return;
      }

      if (appState === "active") {
        setAppActive(true);
        return;
      }

      if (["background", "inactive"].includes(appState)) {
        setAppActive(false);
      }
    },
    [trackAbsoluteTime]
  );

  useAppState(onAppState);

  return {
    timeElapsed,
    secondsElapsed: Math.floor(timeElapsed / 1000),
    pause,
    resume,
    reset,
  };
};
