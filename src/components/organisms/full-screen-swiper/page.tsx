import React, { memo, MutableRefObject, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

export interface IPageItem {
  id: string;
  isActive?: boolean;
  heading: string;
  paragraph: string;
  styles?: Array<{ property: string; value: string }>;
  backgroundImage: {
    uri: string;
  };
  lottie?: {
    jsonUri: string;
    aspectRatio: number;
  };
}

export const Page = (props: IPageItem) => {
  const { heading, paragraph } = props;
  return (
    <View style={styles.wrapper}>
      <Background {...props} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TextTemplate color={Colours.neutral.white} type="h1">
            {heading}
          </TextTemplate>
        </View>
        {!paragraph ? null : (
          <View style={styles.paragraph}>
            <TextTemplate color={Colours.neutral.white} type="b2">
              {paragraph}
            </TextTemplate>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  lottieWrapper: {
    width: Style.DEVICE_WIDTH,
    alignSelf: "center",
  },
  container: {
    marginHorizontal: Style.adjust(32),
  },
  header: {
    marginTop: Style.adjust(80),
  },
  paragraph: {
    marginTop: Style.adjust(8),
  },
  image: {
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});

const Background = (props: IPageItem) => {
  const { backgroundImage, lottie, isActive } = props;

  if (lottie) {
    return (
      <LottieBackground
        uri={lottie.jsonUri}
        shouldPlay={isActive}
        shouldUseFadeIn={true}
        aspectRatio={lottie.aspectRatio}
      />
    );
  }

  if (backgroundImage) {
    return (
      <View style={styles.image}>
        <Image source={{ uri: backgroundImage.uri }} width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT} />
      </View>
    );
  }

  return null;
};

type LottieBackgroundProps = {
  uri: string;
  shouldPlay: boolean;
  shouldUseFadeIn: boolean;
  aspectRatio: number;
};

const LottieBackground = memo((props: LottieBackgroundProps) => {
  const lottieRef = useRef<LottieView>(null);
  const isUnmounted = useRef(false);
  const [lottieAnimation, setLottieAnimation] = useState(null);
  const { uri, shouldPlay, shouldUseFadeIn, aspectRatio } = props;
  const { opacity } = useFadeIn(shouldUseFadeIn);
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

  if (!lottieAnimation) {
    return null;
  }

  return (
    <Animated.View style={[styles.lottieWrapper, { opacity, height: Style.DEVICE_WIDTH * (1 / aspectRatio) }]}>
      <LottieView ref={lottieRef} style={styles.lottieWrapper} source={lottieAnimation} loop={false} />
    </Animated.View>
  );
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
