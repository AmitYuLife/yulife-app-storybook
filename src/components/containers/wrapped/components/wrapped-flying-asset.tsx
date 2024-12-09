import { Box } from "@atoms";
import { memo } from "react";
import { Image, ImageSourcePropType, useWindowDimensions } from "react-native";
import { Easing, FadeOut, useAnimatedStyle, withDelay, withSequence, withTiming } from "react-native-reanimated";

interface IWrappedFlyingAssetProps {
  size?: number;
  delay?: number;
  duration?: number;
  rotation?: string;
  translationFloat?: number;
  invert?: boolean;
  assetRotation?: string;
  asset: ImageSourcePropType;
}

const WrappedFlyingAsset = ({
  size = 100,
  asset,
  assetRotation = "10deg",
  rotation = "-20deg",
  translationFloat = -30,
  delay = 0,
  duration = 1600,
}: IWrappedFlyingAssetProps) => {
  const { width } = useWindowDimensions();

  const containerStyle = useAnimatedStyle(() => {
    const easing = Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42));

    return {
      width: size,
      height: size,
      transform: [
        {
          translateY: withSequence(
            withTiming(0, { duration: duration * 0.4, easing }),
            withTiming(translationFloat, { duration: duration * 0.4, easing })
          ),
        },
      ],
    };
  });

  const rotateContainerStyle = useAnimatedStyle(() => {
    const durationMultiplier = 1;
    return {
      width: size,
      height: size,
      transform: [
        {
          rotateZ: withSequence(
            withTiming("0deg"),
            withTiming(assetRotation, { duration: duration * durationMultiplier })
          ),
        },
      ],
    };
  });

  const fishStyles = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      transform: [
        {
          translateX: withDelay(
            delay,
            withSequence(
              withTiming(-size * 1.2, { duration: 0 }),
              withDelay(width, withTiming(width * 1.2, { duration, easing: Easing.linear })),
              withTiming(-size * 1.2, { duration: 0, easing: Easing.linear })
            )
          ),
        },
      ],
    };
  });

  return (
    <Box transform={[{ rotateZ: rotation }]} exiting={FadeOut.duration(500)}>
      <Box style={containerStyle} forceAnimated={true}>
        <Box w="100%" h="100%" pointerEvents="none" style={fishStyles} forceAnimated={true}>
          <Box style={rotateContainerStyle} forceAnimated={true}>
            <Image style={{ width: size, height: size }} source={asset} resizeMode="contain" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(WrappedFlyingAsset);
