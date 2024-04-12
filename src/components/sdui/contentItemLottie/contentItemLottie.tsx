import React, { memo, useState, useEffect, useRef, useCallback, MutableRefObject, useContext, useMemo } from "react";
import Lottie from "lottie-react-native";
import { ContentItemLottieFragment as GqlLottie } from "@graphql/__generated";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useDispatch } from "react-redux";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { useGetLottieJson } from "@hooks";
import { LottieView } from "@molecules";
import { SduiDispatchContext, SduiStateContext } from "../_context/SduiProvider";

type Props = Omit<GqlLottie, "onAnimationEnd"> & {
  shouldPlay?: boolean;
  keyShouldPlay?: string;
  shouldUseFadeIn?: boolean;
  onAnimationEnd?: GqlLottie["onAnimationEnd"] | (() => void);
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
      onAnimationEndDelay.current = setTimeout(onAnimationEnd, props.animationEndCallbackDelay ?? GRACE_PERIOD);
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
export const ContentItemLottieSdui = memo(
  ({ shouldPlay, keyShouldPlay, onAnimationEnd, onAnimationEndLocal, ...props }: Props) => {
    const localDispatch = useContext(SduiDispatchContext);
    const localDispatchCallback = useCallback(() => {
      if (onAnimationEndLocal) {
        localDispatch(onAnimationEndLocal);
      }
    }, [onAnimationEndLocal]);
    const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onAnimationEnd, localDispatchCallback);
    const sduiStateContext = useContext(SduiStateContext);

    const calculatedShouldPlay = useMemo(
      () => shouldPlay || !!sduiStateContext.dynamicData[keyShouldPlay],
      [props, sduiStateContext]
    );

    return <ContentItemLottie {...props} shouldPlay={calculatedShouldPlay} onAnimationEnd={handleSduiAction} />;
  }
);

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
