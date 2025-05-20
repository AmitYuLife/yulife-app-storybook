import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppStateStatus } from "react-native";
import useInterval from "@use-it/interval";
import { Box } from "@atoms";
import { useAppState } from "@hooks";
import { noop, VoidFunction } from "@utils";
import { GameOptions, useGame2048Context } from "../../gameContext";
import PlusOne from "./plus-one";
import PulseContent from "./pulse-content";
import * as Haptics from "expo-haptics";
import TimerDisplay, { TimerDisplayHandle } from "./timer-display";
import { Colours } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";

// Don't do too close to 1000, because it might skip a second
const REFRESH_INTERVAL_MS = 250;
const PULSE_INTERVAL_SECONDS = 60; // 1 minute

const getHapticsImpactStyle = (seconds: number) => {
  if (seconds >= 180) {
    return Haptics.ImpactFeedbackStyle.Heavy;
  }

  if (seconds >= 120) {
    return Haptics.ImpactFeedbackStyle.Medium;
  }

  return Haptics.ImpactFeedbackStyle.Light;
};

type GameTimerProps = {
  options: GameOptions["timer"];
};

const GameTimer = ({ options = {} }: GameTimerProps) => {
  const { enableMinuteAdditionAnimation, enableMinutePulseAnimation, enableMinuteHapticsImpact } = options;
  const { gameId, startTimestamp, endTimestamp } = useGame2048Context();
  const { handleSduiActionWithParams } = useSduiCallbackFunctionOrReduxAction();

  const timerDisplayRef = useRef<TimerDisplayHandle>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [pulse, setPulse] = useState<VoidFunction>(noop);
  const [animatePlusOne, setAnimatePlusOne] = useState<VoidFunction>(noop);
  const [lastTriggerActionsSeconds, setLastTriggerActionsSeconds] = useState<number>(0);

  // Saving on re-renders
  const startTimestampRef = useRef(startTimestamp);
  const endTimestampRef = useRef(endTimestamp);

  useEffect(() => {
    startTimestampRef.current = startTimestamp;
  }, [startTimestamp]);

  useEffect(() => {
    endTimestampRef.current = endTimestamp;
  }, [endTimestamp]);

  useEffect(() => {
    timerDisplayRef.current?.reset();
  }, [gameId]);

  const getTimeElapsed = useCallback(() => {
    if (!startTimestampRef.current) {
      return 0;
    }

    const end = endTimestampRef.current || Date.now();
    return end - startTimestampRef.current;
  }, []);

  const updateTimer = useCallback(() => {
    const elapsed = getTimeElapsed();
    setTimeElapsed(elapsed);

    const seconds = Math.floor(elapsed / 1000);

    const lastPulseCount = Math.floor(lastTriggerActionsSeconds / PULSE_INTERVAL_SECONDS);
    const currentPulseCount = Math.floor(seconds / PULSE_INTERVAL_SECONDS);

    const canTriggerMinuteActions = currentPulseCount > lastPulseCount;

    if (!canTriggerMinuteActions) {
      return;
    }

    setLastTriggerActionsSeconds(seconds);

    if (enableMinutePulseAnimation) {
      pulse();
    }

    if (enableMinuteAdditionAnimation) {
      animatePlusOne();
    }

    if (enableMinuteHapticsImpact) {
      Haptics.impactAsync(getHapticsImpactStyle(seconds));
    }
  }, [
    getTimeElapsed,
    lastTriggerActionsSeconds,
    enableMinutePulseAnimation,
    enableMinuteAdditionAnimation,
    enableMinuteHapticsImpact,
    pulse,
    animatePlusOne,
  ]);

  useInterval(updateTimer, REFRESH_INTERVAL_MS);

  const onAppState = useCallback(
    (appState: AppStateStatus) => {
      if (appState === "active") {
        updateTimer();
      }
    },
    [updateTimer]
  );

  useAppState(onAppState);

  const setPulseContentAction = useCallback((pulseFn: VoidFunction) => setPulse(() => pulseFn), []);
  const setAnimatePlusOneAction = useCallback((animateFn: VoidFunction) => setAnimatePlusOne(() => animateFn), []);

  const triggers = useMemo(() => {
    return (options.triggers || []).map((t) => ({
      ...t,
      action: () => handleSduiActionWithParams(t.action),
    }));
  }, [handleSduiActionWithParams, options.triggers]);

  return (
    <Box>
      <PlusOne setAnimateAction={setAnimatePlusOneAction} />
      <PulseContent setPulseContentAction={setPulseContentAction}>
        <TimerDisplay
          ref={timerDisplayRef}
          timeElapsed={timeElapsed}
          initialColor={options.displayColor ?? Colours.neutral.white}
          triggers={triggers}
        />
      </PulseContent>
    </Box>
  );
};

export default memo(GameTimer);
