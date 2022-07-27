import React, { memo, useState, useEffect, useRef, useCallback, MutableRefObject } from "react";
import LottieView from "lottie-react-native";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useDispatch } from "react-redux";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

type Props = Omit<GqlLottie, "onAnimationEnd"> & {
  shouldPlay?: boolean;
  shouldUseFadeIn?: boolean;
  onAnimationEnd: GqlLottie["onAnimationEnd"] | (() => void);
};

const GRACE_PERIOD = 2000;

export const ContentItemLottie = memo((props: Props) => {
  const [shouldLoop, setShouldLoop] = useState(false);
  const lottieRef = useRef<LottieView>(null);
  const isUnmounted = useRef(false);
  const [lottieAnimation, setLottieAnimation] = useState(null);
  const { autoPlay, loop, uri, styles: serverStyles, onAnimationEnd, shouldPlay, shouldUseFadeIn, aspectRatio } = props;
  const dispatch = useDispatch();
  const { opacity } = useFadeIn(shouldUseFadeIn);
  usePlayControl(lottieRef, shouldPlay);
  const onAnimationEndDelay = useRef(null);

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
      if (onAnimationEndDelay.current) {
        clearTimeout(onAnimationEndDelay.current);
      }
    },
    []
  );

  const handleAnimationEnd = useCallback(() => {
    if (loop && !shouldLoop) {
      setShouldLoop(true);
      lottieRef.current?.play();
    }

    if (typeof onAnimationEnd === "function") {
      onAnimationEndDelay.current = setTimeout(onAnimationEnd, GRACE_PERIOD);
      return null;
    }

    if (onAnimationEnd) {
      return dispatch(onAnimationEnd);
    }
  }, [loop, shouldLoop, onAnimationEnd, dispatch]);

  if (!lottieAnimation) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.wrapper,
        { opacity, height: Style.DEVICE_WIDTH * (1 / aspectRatio) },
        mapServerStyles(serverStyles),
      ]}
    >
      <LottieView
        ref={lottieRef}
        style={styles.wrapper}
        source={lottieAnimation}
        autoPlay={autoPlay}
        loop={shouldLoop}
        onAnimationFinish={handleAnimationEnd}
      />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    alignSelf: "center",
  } as ViewStyle,
});

/**
 * avoids flashing assets before playing
 */
const useFadeIn = (shouldUseFadeIn: boolean) => {
  const opacity = useRef(new Animated.Value(shouldUseFadeIn ? 0 : 1)).current;
  useEffect(() => {
    if (!shouldUseFadeIn) {
      return;
    }

    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: 1000,
    }).start();

    return () => opacity.stopAnimation();
  }, []);

  return { opacity };
};

const usePlayControl = (lottieRef: MutableRefObject<LottieView>, shouldPlay: boolean) => {
  const shouldPlayPrevious = useRef(false);
  const firstTabPlayTimeout = useRef(null);

  /**
   * handles autoplay of first tab
   */
  useEffect(() => {
    if (shouldPlay) {
      firstTabPlayTimeout.current = setTimeout(() => {
        lottieRef.current?.play();
      }, 1000);

      return () => {
        clearTimeout(firstTabPlayTimeout.current);
        firstTabPlayTimeout.current = null;
      };
    }
  }, []);

  /**
   * handles autoplay of non-first tabs
   */
  useEffect(() => {
    if (!shouldPlayPrevious.current && lottieRef.current) {
      if (shouldPlay) {
        lottieRef.current.reset();
        lottieRef.current.play();
      }
    }

    shouldPlayPrevious.current = shouldPlay;
  }, [shouldPlay]);
};
