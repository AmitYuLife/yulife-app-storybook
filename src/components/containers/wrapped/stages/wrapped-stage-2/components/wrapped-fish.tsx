import { Box } from "@atoms";
import { memo } from "react";
import { Image, useWindowDimensions } from "react-native";
import {
  Easing,
  FadeOut,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface IWrappedFishProps {
  size?: number;
  delay?: number;
  duration?: number;
  invert?: boolean;
}

const FISH_ASSET = require("../assets/clownfish.webp");

// TODO: Advanced fish rigid body physics simulation
const WrappedFish = ({ size = 60, invert, delay = 0, duration = 10000 }: IWrappedFishProps) => {
  const { width } = useWindowDimensions();

  const containerStyle = useAnimatedStyle(() => {
    const easing = Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42));

    return {
      width: size,
      height: size,
      transform: [
        {
          translateY: withRepeat(
            withSequence(
              withTiming(0, { duration: duration * 0.4, easing }),
              withTiming(-30, { duration: duration * 0.4, easing })
            ),
            -1,
            true
          ),
        },
      ],
    };
  });

  const rotateContainerStyle = useAnimatedStyle(() => {
    const durationMultiplier = 0.15;

    return {
      width: size,
      height: size,
      transform: [
        {
          rotateZ: withRepeat(
            withSequence(
              withTiming("6deg", { duration: duration * durationMultiplier }),
              withTiming("-6deg", { duration: duration * durationMultiplier })
            ),
            -1,
            true
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
            withRepeat(
              withSequence(
                withTiming(-size, { duration: 0 }),
                withDelay(width, withTiming(width, { duration, easing: Easing.linear })),
                withTiming(-size, { duration: 0, easing: Easing.linear })
              ),
              -1,
              false
            )
          ),
        },
      ],
    };
  });

  return (
    <Box transform={[{ scaleX: invert ? -1 : 1 }]} exiting={FadeOut.duration(500)}>
      <Box style={containerStyle} forceAnimated={true}>
        <Box w="100%" h="100%" pointerEvents="none" style={fishStyles} forceAnimated={true}>
          <Box style={rotateContainerStyle} forceAnimated={true}>
            <Image style={{ width: size, height: size }} source={FISH_ASSET} resizeMode="contain" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(WrappedFish);
