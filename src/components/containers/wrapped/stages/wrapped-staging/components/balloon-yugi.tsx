import { Box } from "@atoms";
import { Style } from "@styles";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { Easing, useAnimatedStyle, withRepeat, withSequence, withTiming } from "react-native-reanimated";

const YUGI_ASPECT = 1642 / 903;
const YUGI_SIZE = Style.DEVICE_WIDTH * 0.7;
const YUGI_ASSET = require("../assets/balloons.webp");

const WrappedSpaceYugi = () => {
  // @ts-expect-error - reanimated type complains about multiple transforms(?)
  const floatStyle = useAnimatedStyle(() => {
    const easing = Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42));
    const duration = 2500;
    return {
      left: 0,
      position: "absolute",
      height: YUGI_SIZE * YUGI_ASPECT,
      transform: [
        {
          translateX: withRepeat(
            withSequence(withTiming(0, { duration, easing }), withTiming(-YUGI_SIZE * 0.4, { duration, easing })),
            -1,
            true
          ),
        },
        {
          translateY: withSequence(
            withTiming(Style.DEVICE_HEIGHT, { duration: 0 }),
            withTiming(-Style.DEVICE_HEIGHT, { duration: 5000, easing: Easing.ease })
          ),
        },
      ],
    };
  });

  return (
    <Box w="100%" h="100%" position="absolute">
      <Box forceAnimated={true} style={floatStyle} w={YUGI_SIZE * YUGI_ASPECT}>
        <Box>
          <Image source={YUGI_ASSET} resizeMode="contain" style={styles.yugiStyles} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  yugiStyles: { width: YUGI_SIZE, height: YUGI_SIZE * YUGI_ASPECT },
});

export default memo(WrappedSpaceYugi);
