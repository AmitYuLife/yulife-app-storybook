import { useEffect } from "react";

export const useTimeout = (callback: () => void, delay: number, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const timeout = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timeout);
  }, [callback, delay, enabled]);
};
