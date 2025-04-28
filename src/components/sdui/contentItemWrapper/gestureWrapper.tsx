import { ComponentProps, memo, useCallback, useContext, useMemo } from "react";
import { runOnJS, SharedValue, useAnimatedReaction, useSharedValue, withTiming } from "react-native-reanimated";
import { SduiDispatchContext } from "../_context/SduiProvider";
import { TouchableOpacity, View } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import { GESTURE_WRAPPER } from "@ids";
import { Trigger } from "./hooks/useTriggers";
import { useTriggers } from "@components/sdui/contentItemWrapper/hooks/useTriggers";

type Props = {
  children: React.ReactNode;
  config: {
    start: {
      target: number;
      config?: Record<string, number>;
      trigger?: Trigger;
    };
    end?: {
      target: number;
      config?: Record<string, number>;
      trigger?: Trigger;
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
  const dispatched = useSharedValue(false);
  const { trigger } = useTriggers();

  const dispatchAllOnEndCallbacks = useCallback(() => {
    if (props.config.end?.trigger) {
      trigger(props.config.end?.trigger);
    }

    if (!props.dispatchOnEnd) {
      return;
    }

    props.dispatchOnEnd.forEach(dispatch);
    dispatched.value = true;
  }, [props.dispatchOnEnd, props.config.end, trigger]);

  useAnimatedReaction(
    () => props.sharedValue.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        if (!dispatched.value && currentValue === props.config.start.target) {
          runOnJS(dispatchAllOnEndCallbacks)();
        }
      }
    }
  );

  const memoized = useMemo(() => {
    return {
      handlePressIn: () => {
        if (DETOX_ENABLED) {
          return dispatchAllOnEndCallbacks();
        }

        props.sharedValue.value = withTiming(props.config.start.target, props.config.start.config);

        if (props.config.start.trigger) {
          trigger(props.config.start.trigger);
        }
      },
      handlePressOut: () => {
        if (DETOX_ENABLED) {
          return;
        }

        if (props.config.end) {
          if (props.config.end.terminateOnEnd && props.sharedValue.value === props.config.start.target) {
            return;
          }

          props.sharedValue.value = withTiming(props.config.end.target, props.config.end.config);
        }
      },
    };
  }, [props.sharedValue, props.config, trigger, dispatchAllOnEndCallbacks]);

  return (
    <TouchableOpacity
      style={props.style}
      onPressIn={memoized.handlePressIn}
      onPressOut={memoized.handlePressOut}
      testID={GESTURE_WRAPPER}
    >
      {props.children}
    </TouchableOpacity>
  );
});
