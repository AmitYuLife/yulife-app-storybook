/* eslint-disable react-compiler/react-compiler -- mutates module-scoped state */
import { safeAreaViewOffset } from "@styles/safeAreaViewOffset";
import { useCallback } from "react";

export const useSafeAreaViewOffset = () => {
  "use no memo";
  // @TODO: change this to use useSafeAreaInsets();
  const setSafeAreaViewOffset = useCallback((newSafeAreaViewOffset: { y: number }) => {
    safeAreaViewOffset.y = newSafeAreaViewOffset.y;
  }, []);

  return { safeAreaViewOffset, setSafeAreaViewOffset };
};
