import { templateTextStyles } from "@styles";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { memo, useEffect, useMemo, useRef } from "react";

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
};

const TimerDisplay = ({ timeElapsed, initialColor, triggers }: TimerDisplayProps) => {
  const baseColor = useSharedValue(initialColor);
  const colorValue = useSharedValue(initialColor);
  const lastTriggerSecondsRef = useRef<number>(-1);

  useEffect(() => {
    const secondsElapsed = Math.floor(timeElapsed / 1000);

    if (lastTriggerSecondsRef.current === secondsElapsed) {
      return;
    }

    lastTriggerSecondsRef.current = secondsElapsed;

    let newBaseColor = baseColor.value;
    triggers.forEach((trigger) => {
      const { seconds, repeat, pulseColor, color, action } = trigger;

      const shouldTrigger = repeat ? secondsElapsed > 0 && secondsElapsed % seconds === 0 : secondsElapsed === seconds;

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
