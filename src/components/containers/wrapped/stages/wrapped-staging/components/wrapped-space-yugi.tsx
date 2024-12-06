import { Box } from "@atoms";
import { memo } from "react";
import { Image } from "react-native";
import {
  Easing,
  SlideInLeft,
  SlideOutRight,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface ISpaceYugiProps {
  size: number;
}

const YUGI_ASPECT = 522 / 1170;
const YUGI_ASSET = require("../assets/space-yugi.webp");

const WrappedSpaceYugi = ({ size = 150 }: ISpaceYugiProps) => {
  // @ts-expect-error - reanimated type complains about multiple transforms(?)
  const containerStyle = useAnimatedStyle(() => {
    const easing = Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42));
    const duration = 5000;
    return {
      height: size,
      transform: [
        {
          translateX: withRepeat(
            withSequence(withTiming(0, { duration, easing }), withTiming(-15, { duration, easing })),
            -1,
            true
          ),
        },
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

  return (
    <Box entering={SlideInLeft.springify(15000)} exiting={SlideOutRight.springify(15000)}>
      <Box forceAnimated={true} style={containerStyle} w={size * YUGI_ASPECT}>
        <Box>
          <Image source={YUGI_ASSET} resizeMode="contain" style={{ width: size * YUGI_ASPECT, height: size }} />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(WrappedSpaceYugi);
