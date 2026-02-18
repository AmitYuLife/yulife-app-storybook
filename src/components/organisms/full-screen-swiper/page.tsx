import React, { memo, MutableRefObject, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import type Lottie from "lottie-react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { useGetLottieJson } from "@hooks";
import { LottieView } from "@molecules";
import media from "@styles/media";
import { SMOKING_STORY_SCREEN } from "@ids";

export interface IPageItem {
  id: string;
  isActive?: boolean;
  heading: string;
  paragraph: string;
  styles?: Array<{ property: string; value: string }>;
  textColor?: string;
  backgroundImage?: {
    uri?: string;
  };
  lottie?: {
    jsonUri: string;
    aspectRatio: number;
  };
  image?: {
    uri: string;
  };
}

const IMAGE_WIDTH = media.select(
  [{ condition: Style.DEVICE_HEIGHT <= media.DEVICES.Pixel2.height, value: Style.adjust(200) }],
  Style.adjust(248)
);

export const Page = (props: IPageItem) => {
  const { heading, paragraph, textColor, image } = props;

  return (
    <View style={styles.wrapper}>
      <Background {...props} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TextTemplate color={textColor || Colours.neutral.white} type="h1" testID={SMOKING_STORY_SCREEN(heading)}>
            {heading}
          </TextTemplate>
        </View>
        {!paragraph ? null : (
          <View style={styles.paragraph}>
            <TextTemplate color={textColor || Colours.neutral.white} type="b2">
              {paragraph}
            </TextTemplate>
          </View>
        )}
        {!image ? null : (
          <View style={styles.imageWrapper}>
            <Image source={image} suppressLoadingUi={true} width={IMAGE_WIDTH} />
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
  backgroundImage: {
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  imageWrapper: {
    alignItems: "center",
    marginTop: media.select(
      [{ condition: Style.DEVICE_HEIGHT <= media.DEVICES.Pixel2.height, value: Style.adjust(12) }],
      Style.adjust(48)
    ),
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
      <View style={styles.backgroundImage}>
        <Image
          resizeMode="cover"
          source={{ uri: backgroundImage.uri }}
          width={Style.DEVICE_WIDTH}
          height={Style.DEVICE_HEIGHT}
        />
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
  const lottieRef = useRef<Lottie>(null);
  const { uri, shouldPlay, shouldUseFadeIn, aspectRatio } = props;
  const { opacity } = useFadeIn(shouldUseFadeIn);
  const { uri: lottieUri } = useGetLottieJson(uri);
  usePlayControl(lottieRef, shouldPlay);

  if (!lottieUri) {
    return null;
  }

  return (
    <Animated.View style={[styles.lottieWrapper, { opacity, height: Style.DEVICE_WIDTH / aspectRatio }]}>
      <LottieView
        ref={lottieRef}
        style={[styles.lottieWrapper, { height: Style.DEVICE_WIDTH / aspectRatio }]}
        source={lottieUri}
        loop={false}
      />
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
