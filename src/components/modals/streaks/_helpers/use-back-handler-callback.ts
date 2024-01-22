import { VoidFunction } from "@utils";
import { useCallback } from "react";

export function useBackHandlerCallback(callback: VoidFunction) {
  const backHandler = useCallback(() => {
    if (callback) {
      callback();
      return true;
    }

    return false;
  }, [callback]);

  return backHandler;
}
