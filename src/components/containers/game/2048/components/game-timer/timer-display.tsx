import { templateTextStyles } from "@styles";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Ref, memo, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import { sortBy } from "lodash";

export interface TimerDisplayHandle {
  reset: () => void;
}

export type TimerTrigger = {
  seconds: number;
  repeat?: boolean;
  pulseColor?: boolean;
  color?: string;
  action?: () => void;
};

type TimerDisplayProps = {
  timeElapsed: number;
  initialColor: string;
  triggers: TimerTrigger[];
  ref?: Ref<TimerDisplayHandle>;
};

const TimerDisplay = ({ timeElapsed, initialColor, triggers: triggersProp, ref }: TimerDisplayProps) => {
  const baseColor = useSharedValue(initialColor);
  const colorValue = useSharedValue(initialColor);
  const lastTriggerSecondsRef = useRef<number>(-1);

  useImperativeHandle(ref, () => ({
    reset: () => {
      baseColor.value = initialColor;
      colorValue.value = initialColor;
      lastTriggerSecondsRef.current = -1;
    },
  }));

  const triggers: TimerTrigger[] = useMemo(() => sortBy(triggersProp, "seconds"), [triggersProp]);

  useEffect(() => {
    const secondsElapsed = Math.floor(timeElapsed / 1000);

    if (lastTriggerSecondsRef.current === secondsElapsed) {
      return;
    }

    let newBaseColor = baseColor.value;
    triggers.forEach((trigger) => {
      const { seconds, repeat, pulseColor, color, action } = trigger;

      let shouldTrigger;

      if (repeat) {
        const wasTriggered = Math.floor(lastTriggerSecondsRef.current / seconds);
        const isTriggered = Math.floor(secondsElapsed / seconds);
        shouldTrigger = isTriggered > wasTriggered;
      } else {
        shouldTrigger = seconds > lastTriggerSecondsRef.current && seconds <= secondsElapsed;
      }

      if (!shouldTrigger) {
        return;
      }

      if (color) {
        colorValue.value = withTiming(color, { duration: 300 });

        if (pulseColor) {
          colorValue.value = withSequence(
            withTiming(color, { duration: 300 }),
            withDelay(700, withTiming(newBaseColor, { duration: 300 }))
          );
        } else {
          newBaseColor = color;
        }
      }

      if (action) {
        runOnJS(action)();
      }
    });

    lastTriggerSecondsRef.current = secondsElapsed;
    baseColor.value = newBaseColor;
  }, [timeElapsed, triggers, initialColor]);

  const animatedStyle = useAnimatedStyle(() => {
    return { color: colorValue.value };
  });

  const timeDisplay = useMemo(() => {
    const seconds = Math.floor(timeElapsed / 1000);

    if (seconds <= 0) {
      return "00:00";
    }

    const minutesNum = Math.floor(seconds / 60);
    const secondsNum = Math.floor(seconds % 60);

    const minutesDisplay = minutesNum.toString().padStart(2, "0");
    const secondsDisplay = secondsNum.toString().padStart(2, "0");

    return `${minutesDisplay}:${secondsDisplay}`;
  }, [timeElapsed]);

  return (
    <Animated.Text
      style={[templateTextStyles.b2b, animatedStyle]}
      allowFontScaling={false}
      importantForAccessibility="auto"
    >
      {timeDisplay}
    </Animated.Text>
  );
};

export default memo(TimerDisplay);
