import React, { memo, useState, useEffect, useRef, useCallback, useContext, useMemo } from "react";
import type Lottie from "lottie-react-native";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useDispatch } from "react-redux";
import { Animated } from "react-native";
import { Style } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { useGetLottieJson } from "@hooks";
import { LottieView } from "@molecules";
import { SduiDispatchContext, SduiStateContext } from "../_context/SduiProvider";
import { ProgressControlledLottie } from "./progressControlledLottie";
import { Props } from "./types";
import { styles } from "./styles";
import { useFadeIn } from "./useFadeIn";
import { usePlayControl } from "./usePlayControl";

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
export const ContentItemLottieSdui = memo((props: Props) =>
  props.progressKey ? <ProgressControlledLottie {...props} /> : <ClassicLottie {...props} />
);

const ClassicLottie = memo((props: Props) => {
  const { shouldPlay, keyShouldPlay, onAnimationEnd, onAnimationEndLocal } = props;
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
});
