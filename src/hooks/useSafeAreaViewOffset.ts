import { safeAreaViewOffset } from "@styles/safeAreaViewOffset";
import { useCallback } from "react";

export const useSafeAreaViewOffset = () => {
  const setSafeAreaViewOffset = useCallback((newSafeAreaViewOffset: { y: number }) => {
    safeAreaViewOffset.y = newSafeAreaViewOffset.y;
  }, []);

  return { safeAreaViewOffset, setSafeAreaViewOffset };
};
