import { TextTemplate } from "@atoms/index";
import { VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { addCommasToNumber } from "@utils";
import { DETOX_ENABLED } from "@services/socket";
import { TemplateTextType } from "@styles/textStyles";

interface CounterProps {
  duration?: number;
  value: number;
  textAfterValue?: string;
  textBeforeValue?: string;
  type: TemplateTextType;
  color?: string;
  testIDFn?: (value: number) => string;
}

const Counter: FC<CounterProps> = memo(
  ({ duration = 1000, value, textAfterValue = "", textBeforeValue = "", type, color, testIDFn }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const animatedValueRef = useRef(new Animated.Value(value));
    const prevValueRef = useRef(value);

    const onValueChanged = useCallback((e: { value: number }) => {
      setDisplayValue(Math.floor(e.value));
    }, []);

    useEffect(() => {
      const animatedValue = animatedValueRef.current;
      animatedValue.addListener(onValueChanged);

      return () => {
        animatedValue.stopAnimation();
        animatedValue.removeAllListeners();
      };
    }, [onValueChanged]);

    useEffect(() => {
      if (prevValueRef.current !== value) {
        prevValueRef.current = value;
        const animatedValue = animatedValueRef.current;
        animatedValue.stopAnimation();

        if (DETOX_ENABLED) {
          setDisplayValue(Math.floor(value));
          return;
        }

        const animation = Animated.timing(animatedValue, {
          duration,
          toValue: value,
          useNativeDriver: true,
        });

        animation.start();

        return () => {
          animation.stop();
        };
      }
    }, [value, duration]);

    const renderValue = `${textBeforeValue} ${addCommasToNumber(displayValue)} ${textAfterValue}`.trim();
    const resolvedTestID = testIDFn ?? VIEW_TOP_RIGHT_COIN_COUNTER;

    return (
      <TextTemplate type={type} color={color} testID={resolvedTestID(displayValue)}>
        {renderValue}
      </TextTemplate>
    );
  }
);

export default Counter;
