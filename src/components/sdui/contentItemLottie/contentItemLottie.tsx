import React, { memo, useState, useEffect, useRef, useCallback, MutableRefObject } from "react";
import LottieView from "lottie-react-native";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useDispatch } from "react-redux";
import { Animated, StyleSheet } from "react-native";
import { Style } from "@styles";

type Props = GqlLottie & {
  shouldPlay?: boolean;
};

export const ContentItemLottie = memo((props: Props) => {
  const [shouldLoop, setShouldLoop] = useState(false);
  const lottieRef = useRef<LottieView>(null);
  const isUnmounted = useRef(false);
  const [lottieAnimation, setLottieAnimation] = useState(null);
  const { autoPlay, loop, uri, styles: serverStyles, onAnimationEnd, shouldPlay } = props;
  const dispatch = useDispatch();
  const { opacity } = useFadeIn();
  usePlayControl(lottieRef, shouldPlay);

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
      lottieRef.current?.play();
    }

    if (onAnimationEnd) {
      dispatch(onAnimationEnd);
    }
  }, [loop, shouldLoop, onAnimationEnd, dispatch]);

  if (!lottieAnimation) {
    return null;
  }

  return (
    <Animated.View style={[styles.wrapper, { opacity }]}>
      <LottieView
        ref={lottieRef}
        style={[styles.wrapper, mapServerStyles(serverStyles)]}
        source={lottieAnimation}
        autoPlay={autoPlay}
        loop={shouldLoop}
        onAnimationFinish={handleAnimationEnd}
      />
    </Animated.View>
  );
});

const LOTTIE_FILES_ASPECT_RATIO = 1.78;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    maxHeight: Style.DEVICE_WIDTH * LOTTIE_FILES_ASPECT_RATIO,
    alignSelf: "center",
  },
});

/**
 * avoids flashing assets before playing
 */
const useFadeIn = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: 1000,
    }).start();

    return opacity.stopAnimation;
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
