import { Image } from "@atoms";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
  ZoomIn,
} from "react-native-reanimated";
import SpinningReward from "./spinning-reward";
import { DETOX_ENABLED } from "@services/socket";

export type SpinningRewardStage = "staging" | "ingest";

interface ISpinningCircleProps {
  images: ImageSource[];
  overlayImage: string;
  count?: number;
  overlaySize?: number;
  onFinish?: () => void;
  stage: SpinningRewardStage;
}

const ROTATE_TIME = 30000;

const SpinningRewards = ({
  images: propImages,
  overlaySize = 300,
  count = 8,
  stage,
  overlayImage,
  onFinish,
}: ISpinningCircleProps) => {
  const time = useSharedValue(0);
  const radius = useSharedValue(150);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const rotation = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (!DETOX_ENABLED) {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: ROTATE_TIME,
          easing: Easing.linear,
        }),
        -1
      );
    }
  }, [rotation]);

  const glowStyle = useAnimatedStyle(() => {
    return {
      width: overlaySize,
      height: overlaySize,
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    if (!DETOX_ENABLED) {
      time.value = withRepeat(withTiming(1, { duration: 10000, easing: Easing.linear }), -1, false);
    }
  }, [radius, time]);

  useEffect(() => {
    if (stage === "ingest") {
      radius.value = withSequence(
        withDelay(800, withTiming(170, { duration: 1000, easing: Easing.in(Easing.ease) })),
        withTiming(150, { duration: 600, easing: Easing.linear })
      );

      time.value = withTiming(6, { duration: 4000, easing: Easing.in(Easing.ease) });

      scale.value = withDelay(
        1500,
        withSequence(withTiming(1.05, { duration: 500 }), withTiming(0, { duration: 1300 }))
      );

      opacity.value = withDelay(2350, withTiming(0, { duration: 350 }));

      setTimeout(() => {
        onFinish();
      }, 3300);

      translateY.value = withDelay(1800, withTiming(100, { duration: 2000, easing: Easing.in(Easing.ease) }));
    }
  }, [onFinish, opacity, radius, scale, stage, time, translateY]);

  const [images, setImages] = useState<ImageSource[]>([]);

  useEffect(() => {
    if (propImages.length > 0) {
      const newImages = Array.from(Array(count)).map((_, index) => {
        return propImages.at(index % propImages.length);
      });

      setImages(newImages);
    }
  }, [count, propImages]);

  const overlayContainerStyle = useMemo(() => {
    return [{ width: overlaySize, height: overlaySize }, styles.overlayIconContainer];
  }, [overlaySize]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong types for reanimated
  const containerStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value, transform: [{ scale: scale.value }, { translateY: translateY.value }] };
  });

  return (
    <Animated.View>
      <Animated.View style={[styles.container, containerStyle]}>
        {images.map((image, index) => (
          <SpinningReward key={index} image={image} time={time} offset={index / count} radius={radius} index={index} />
        ))}

        <Animated.View entering={ZoomIn.duration(800).delay(100)}>
          <Animated.View style={glowStyle}>
            <Image
              source={require("../../atoms/glowing-spinner/glow-rays.webp")}
              suppressLoadingUi={true}
              width={overlaySize}
              height={overlaySize}
            />
          </Animated.View>

          <View style={overlayContainerStyle}>
            <Image source={{ uri: overlayImage }} width={overlaySize * 0.52} height={overlaySize * 0.52} />
          </View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(500),
    justifyContent: "center",
    alignItems: "center",
  },
  overlayIconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(SpinningRewards);
