import { Image } from "@atoms";
import { Style } from "@styles";
import { memo, useEffect } from "react";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

interface IGlowingSpinnerProps {
  size: number;
  duration?: number;
}

const GlowingSpinner = ({ size = Style.adjust(150), duration = 10000 }: IGlowingSpinnerProps) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: duration,
        easing: Easing.linear,
      }),
      -1
    );
  }, [duration, rotation]);

  const glowStyle = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      position: "absolute",
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Animated.View style={glowStyle}>
      <Image source={require("./glow-rays.webp")} width={size} height={size} suppressLoadingUi={true} />
    </Animated.View>
  );
};

export default memo(GlowingSpinner);
