import { safeAreaViewOffset } from "@styles/safeAreaViewOffset";
import { useCallback } from "react";

export const useSafeAreaViewOffset = () => {
  // @TODO: change this to use useSafeAreaInsets();
  const setSafeAreaViewOffset = useCallback((newSafeAreaViewOffset: { y: number }) => {
    safeAreaViewOffset.y = newSafeAreaViewOffset.y;
  }, []);

  return { safeAreaViewOffset, setSafeAreaViewOffset };
};
