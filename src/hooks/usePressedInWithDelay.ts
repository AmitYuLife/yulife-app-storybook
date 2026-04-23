import { DETOX_ENABLED } from "@services/socket";
import { useEffect, useMemo, useState, useRef } from "react";
import { GestureResponderEvent } from "react-native";

interface Args {
  delay?: number;
  onPress?: (event?: GestureResponderEvent) => void;
}

export function usePressedInWithDelay({ delay = 1000, onPress }: Args) {
  const currentDelay = DETOX_ENABLED ? 0 : delay;
  const [isPressedIn, setIsPressedIn] = useState(false);
  const isUnmounted = useRef(false);
  const isWaitingForResponse = useRef(false);
  const calledAt = useRef(getInitialDate());

  useEffect(() => {
    return function () {
      isUnmounted.current = true;
    };
  }, []);

  return useMemo(
    () => ({
      isPressedIn,
      handlePressIn() {
        setIsPressedIn(true);
      },
      handlePressOut() {
        setIsPressedIn(false);
      },
      async handlePress(event?: GestureResponderEvent) {
        if (new Date().valueOf() - calledAt.current.valueOf() > currentDelay) {
          calledAt.current = new Date();
          if (onPress && !isWaitingForResponse.current) {
            isWaitingForResponse.current = true;
            await onPress(event); // onPress can be anything, safer to await

            if (!isUnmounted.current) {
              isWaitingForResponse.current = false;
            }
          }
        }
      },
    }),
    [isPressedIn, calledAt, isWaitingForResponse, currentDelay, onPress]
  );
}

function getInitialDate() {
  const date = new Date();

  date.setHours(date.getHours() - 1);

  return date;
}
