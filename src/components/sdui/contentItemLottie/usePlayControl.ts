import type LottieView from "lottie-react-native";
import { RefObject, useEffect, useRef } from "react";

export const usePlayControl = (lottieRef: RefObject<LottieView | null>, shouldPlay: boolean) => {
  const shouldPlayPrevious = useRef(false);
  const firstTabPlayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const wasPlaying = shouldPlayPrevious.current;
    shouldPlayPrevious.current = shouldPlay;

    if (!shouldPlay || wasPlaying) {
      return;
    }

    if (lottieRef.current) {
      lottieRef.current.reset();
      lottieRef.current.play();
      return;
    }

    firstTabPlayTimeout.current = setTimeout(() => {
      lottieRef.current?.play();
    }, 1000);

    return () => {
      if (firstTabPlayTimeout.current !== null) {
        clearTimeout(firstTabPlayTimeout.current);
        firstTabPlayTimeout.current = null;
      }
    };
  }, [lottieRef, shouldPlay]);
};
