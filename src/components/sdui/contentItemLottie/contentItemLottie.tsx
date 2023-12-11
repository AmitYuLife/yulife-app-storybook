import React, { memo, useState, useEffect, useRef, useCallback, MutableRefObject } from "react";
import Lottie from "lottie-react-native";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useDispatch } from "react-redux";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { useGetLottieJson } from "@hooks";
import { LottieView } from "@molecules";

type Props = Omit<GqlLottie, "onAnimationEnd"> & {
  shouldPlay?: boolean;
  shouldUseFadeIn?: boolean;
  onAnimationEnd: GqlLottie["onAnimationEnd"] | (() => void);
};

const GRACE_PERIOD = 2000;
// If you require this component to be used with SDUI, use the wrapped version ContentItemLottieSdui below.
export const ContentItemLottie = memo((props: Props) => {
  const [shouldLoop, setShouldLoop] = useState(false);
  const lottieRef = useRef<Lottie>(null);
  const { autoPlay, loop, uri, styles: serverStyles, onAnimationEnd, shouldPlay, shouldUseFadeIn, aspectRatio } = props;
  const dispatch = useDispatch();
  const { opacity } = useFadeIn(shouldUseFadeIn);
  usePlayControl(lottieRef, shouldPlay);
  const onAnimationEndDelay = useRef(null);
  const { uri: lottieUri } = useGetLottieJson(uri);

  useEffect(
    () => () => {
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

  if (!lottieUri) {
    return null;
  }

  const animationAspectRatio = aspectRatio ?? (lottieUri?.w / lottieUri?.h || 1);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        { opacity, height: Style.DEVICE_WIDTH / animationAspectRatio },
        mapServerStyles(serverStyles),
      ]}
    >
      <LottieView
        ref={lottieRef}
        style={[styles.wrapper, { height: Style.DEVICE_WIDTH / animationAspectRatio }]}
        source={lottieUri}
        autoPlay={autoPlay}
        loop={shouldLoop}
        onAnimationFinish={handleAnimationEnd}
      />
    </Animated.View>
  );
});

// Wrapped version of ContentItemLottie with SduiStateContext.
export const ContentItemLottieSdui = memo((props: Props) => {
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(props.onAnimationEnd);

  return <ContentItemLottie {...props} onAnimationEnd={handleSduiAction} />;
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

const usePlayControl = (lottieRef: MutableRefObject<Lottie>, shouldPlay: boolean) => {
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
