import { useEffect, useRef } from "react";
import { VoidFunction } from "@utils";

export const useRecurringTimeout = (callback: VoidFunction, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || delay <= 0) {
      return;
    }

    const tick = () => {
      savedCallback.current();
      schedule();
    };

    let timeoutId = setTimeout(tick, delay);

    const schedule = () => {
      timeoutId = setTimeout(tick, delay);
    };

    return () => clearTimeout(timeoutId);
  }, [delay]);
};
