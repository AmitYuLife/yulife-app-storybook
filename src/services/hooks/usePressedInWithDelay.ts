import React from "react";

interface Args {
  delay?: number;
  onPress: () => any;
}

export function usePressedInWithDelay({ delay = 1000, onPress }: Args) {
  const [isPressedIn, setIsPressedIn] = React.useState(false);
  const [calledAt, setCalledAt] = React.useState(getInitialDate());
  const [isWaitingForResponse, setIsWaitingForResponse] = React.useState(false);

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
        if (new Date().valueOf() - calledAt.valueOf() > delay) {
          setCalledAt(new Date());

          if (onPress && !isWaitingForResponse) {
            setIsWaitingForResponse(true);
            await onPress(); // onPress can be anything, safer to await
            setIsWaitingForResponse(false);
          }
        }
      },
    }),
    [isPressedIn, calledAt, isWaitingForResponse, delay, onPress]
  );
}

function getInitialDate() {
  const date = new Date();

  date.setHours(date.getHours() - 1);

  return date;
}
