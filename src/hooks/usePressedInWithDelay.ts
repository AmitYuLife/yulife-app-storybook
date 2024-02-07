import { DETOX_ENABLED } from "@services/socket";
import React, { useEffect, useRef } from "react";

interface Args {
  delay?: number;
  onPress: () => void;
}

export function usePressedInWithDelay({ delay = 1000, onPress }: Args) {
  const currentDelay = DETOX_ENABLED ? 0 : delay;
  const [isPressedIn, setIsPressedIn] = React.useState(false);
  const isUnmounted = useRef(false);
  const isWaitingForResponse = useRef(false);
  const calledAt = useRef(getInitialDate());

  useEffect(() => {
    return function () {
      isUnmounted.current = true;
    };
  }, []);

  return React.useMemo(
    () => ({
      isPressedIn,
      handlePressIn() {
        setIsPressedIn(true);
      },
      handlePressOut() {
        setIsPressedIn(false);
      },
      async handlePress() {
        if (new Date().valueOf() - calledAt.current.valueOf() > currentDelay) {
          calledAt.current = new Date();
          if (onPress && !isWaitingForResponse.current) {
            isWaitingForResponse.current = true;
            await onPress(); // onPress can be anything, safer to await

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
