import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import LottieView from "lottie-react-native";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useDispatch } from "react-redux";
import { StyleSheet } from "react-native";

type Props = GqlLottie;

export const ContentItemLottie = memo((props: Props) => {
  const [shouldLoop, setShouldLoop] = useState(false);
  const lottieRef = useRef<LottieView>(null);
  const isUnmounted = useRef(false);
  const [lottieAnimation, setLottieAnimation] = useState(null);
  const { autoPlay, loop, uri, styles: serverStyles, onAnimationEnd } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    if (uri && !lottieAnimation) {
      (async () => {
        try {
          const response = await fetch(uri, { method: "GET" });
          const json = await response.json();

          if (!isUnmounted.current) {
            setLottieAnimation(json);
          }
        } catch (e) {
          // safe fail
        }
      })();
    }
  }, [uri, lottieAnimation]);

  useEffect(
    () => () => {
      isUnmounted.current = true;
    },
    []
  );

  const handleAnimationEnd = useCallback(() => {
    if (loop && !shouldLoop) {
      setShouldLoop(true);
      lottieRef?.current?.play();
    }

    if (onAnimationEnd) {
      dispatch(onAnimationEnd);
    }
  }, [loop, shouldLoop, onAnimationEnd, dispatch]);

  if (!lottieAnimation) {
    return null;
  }

  return (
    <LottieView
      ref={lottieRef}
      style={[styles.wrapper, mapServerStyles(serverStyles)]}
      source={lottieAnimation}
      autoPlay={autoPlay}
      loop={shouldLoop}
      onAnimationFinish={handleAnimationEnd}
    />
  );
});

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});
