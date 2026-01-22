import { Box } from "@atoms";
import { YuHeartIcon } from "@atoms/icon/yu-heart-icon";
import { memo, useEffect } from "react";
import { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

const HEART_SIZE = 16;
export const HEART_ANIMATION_DURATION = 1000;

const HeartParticle = () => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  useEffect(() => {
    translateY.value = withTiming(-40, { duration: HEART_ANIMATION_DURATION, easing: Easing.out(Easing.quad) });
    scale.value = withSequence(
      withTiming(1.3, { duration: 150 }),
      withTiming(0.5, { duration: HEART_ANIMATION_DURATION - 150 })
    );
    opacity.value = withSequence(
      withTiming(1, { duration: 100 }),
      withTiming(1, { duration: HEART_ANIMATION_DURATION - 300 }),
      withTiming(0, { duration: 200 })
    );
  }, [opacity, scale, translateY]);

  // @ts-expect-error - bad reanimated types
  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: 10,
      left: 20,
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    };
  });

  return (
    <Box style={animatedStyle} forceAnimated={true}>
      <YuHeartIcon width={HEART_SIZE} height={HEART_SIZE} colour="#FF6B8A" isFilled={true} />
    </Box>
  );
};

export default memo(HeartParticle);
