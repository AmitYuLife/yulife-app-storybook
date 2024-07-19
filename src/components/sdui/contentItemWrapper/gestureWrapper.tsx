import { ComponentProps, memo, useCallback, useContext, useMemo, useRef } from "react";
import { runOnJS, SharedValue, useAnimatedReaction, withTiming } from "react-native-reanimated";
import { SduiDispatchContext } from "../_context/SduiProvider";
import { TouchableOpacity, View } from "react-native";

type Props = {
  children: React.ReactNode;
  config: {
    start: {
      target: number;
      config?: Record<string, number>;
    };
    end?: {
      target: number;
      config?: Record<string, number>;
      terminateOnEnd?: boolean;
    };
    gesture: Record<string, number>;
  };
  sharedValue: SharedValue<number>;
  dispatchOnEnd?: Array<{ type: string; payload: string }>;
  style: ComponentProps<typeof View>["style"];
};

export const GestureWrapper = memo((props: Props) => {
  const dispatch = useContext(SduiDispatchContext);
  const dispatched = useRef(false);

  const dispatchAllOnEndCallbacks = useCallback(() => {
    if (!props.dispatchOnEnd) {
      return;
    }

    props.dispatchOnEnd.forEach(dispatch);
    dispatched.current = true;
  }, [props.dispatchOnEnd]);

  useAnimatedReaction(
    () => props.sharedValue.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        if (!dispatched.current && currentValue === props.config.start.target) {
          runOnJS(dispatchAllOnEndCallbacks)();
        }
      }
    }
  );

  const memoized = useMemo(() => {
    return {
      handlePressIn: () => {
        props.sharedValue.value = withTiming(props.config.start.target, props.config.start.config);
      },
      handlePressOut: () => {
        if (props.config.end) {
          if (props.config.end.terminateOnEnd && props.sharedValue.value === props.config.start.target) {
            return;
          }

          props.sharedValue.value = withTiming(props.config.end.target, props.config.end.config);
        }
      },
    };
  }, [props.sharedValue, props.config]);

  return (
    <TouchableOpacity style={props.style} onPressIn={memoized.handlePressIn} onPressOut={memoized.handlePressOut}>
      {props.children}
    </TouchableOpacity>
  );
});
