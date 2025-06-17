import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@atoms";
import { useTimer } from "@hooks";
import { noop, VoidFunction } from "@utils";
import { GameOptions, useGame2048Context } from "../../gameContext";
import PlusOne from "./plus-one";
import PulseContent from "./pulse-content";
import * as Haptics from "expo-haptics";
import TimerDisplay, { TimerDisplayHandle } from "./timer-display";
import { Colours } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";

const PULSE_INTERVAL_SECONDS = 60; // 1 minute

type GameTimerProps = {
  options: GameOptions["timer"];
};

const GameTimer = ({ options = {} }: GameTimerProps) => {
  const { enableMinuteAdditionAnimation, enableMinutePulseAnimation, enableMinuteHapticsImpact } = options;
  const { gameId, startTimestamp, endTimestamp, isExiting } = useGame2048Context();
  const { handleSduiActionWithParams } = useSduiCallbackFunctionOrReduxAction();

  const timerDisplayRef = useRef<TimerDisplayHandle>(null);
  const [pulse, setPulse] = useState<VoidFunction>(noop);
  const [animatePlusOne, setAnimatePlusOne] = useState<VoidFunction>(noop);
  const lastTriggerActionSecondsRef = useRef(0);
  const {
    timeElapsed,
    secondsElapsed,
    reset: resetTimer,
  } = useTimer({
    initiallyPaused: true,
  });

  useEffect(() => {
    resetTimer(!startTimestamp);
  }, [resetTimer, startTimestamp]);

  useEffect(() => {
    resetTimer(true);
    timerDisplayRef.current?.reset();
  }, [gameId, resetTimer]);

  const triggerMinuteActions = useCallback(() => {
    if (enableMinutePulseAnimation) {
      pulse();
    }

    if (enableMinuteAdditionAnimation) {
      animatePlusOne();
    }

    if (enableMinuteHapticsImpact) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
  }, [animatePlusOne, enableMinuteAdditionAnimation, enableMinuteHapticsImpact, enableMinutePulseAnimation, pulse]);

  useEffect(() => {
    const lastPulseCount = Math.floor(lastTriggerActionSecondsRef.current / PULSE_INTERVAL_SECONDS);
    const currentPulseCount = Math.floor(secondsElapsed / PULSE_INTERVAL_SECONDS);

    const canTriggerMinuteActions = currentPulseCount > lastPulseCount && !endTimestamp && !isExiting;

    if (!canTriggerMinuteActions) {
      return;
    }

    lastTriggerActionSecondsRef.current = secondsElapsed;
    triggerMinuteActions();
  }, [endTimestamp, isExiting, secondsElapsed, triggerMinuteActions]);

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
