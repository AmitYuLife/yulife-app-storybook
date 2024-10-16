import { memo, useEffect } from "react";
import Animated, { Easing, useSharedValue, withRepeat, withTiming, useAnimatedStyle } from "react-native-reanimated";
import Svg, { LinearGradient, G, Path, Defs, Stop } from "react-native-svg";

export const Rays = memo(({ color }: { color: string }) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 20_000,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  const glowStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotation.value}deg` }] }));

  return (
    <Animated.View style={glowStyle}>
      <Svg width={293} height={293} viewBox="0 0 293 293" fill="none">
        <G opacity={0.5}>
          <Path fill="url(#a)" d="M109.174 293.854h75.506l-37.753-146.898-37.753 146.898Z" />
          <Path fill="url(#b)" d="M0 184.68v-75.506l146.899 37.753L0 184.68Z" />
          <Path fill="url(#c)" d="M293.855 184.68v-75.506l-146.899 37.753 146.899 37.753Z" />
          <Path fill="url(#d)" d="m16.339 69.73 53.39-53.391 77.178 130.568L16.339 69.729Z" />
          <Path fill="url(#e)" d="m224.125 277.516 53.391-53.391-130.568-77.178 77.177 130.569Z" />
          <Path fill="url(#f)" d="m69.73 277.516-53.39-53.391 130.568-77.178L69.73 277.516Z" />
          <Path fill="url(#g)" d="m277.516 69.73-53.391-53.391-77.177 130.568 130.568-77.178Z" />
          <Path fill="url(#h)" d="M109.174 0h75.506l-37.753 146.899L109.174 0Z" />
        </G>
        <Defs>
          <LinearGradient id="a" x1={145.691} x2={150.914} y1={294.98} y2={145.68} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="b" x1={-1.125} x2={148.175} y1={148.163} y2={142.94} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="c" x1={294.98} x2={145.68} y1={148.163} y2={142.94} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="d" x1={41.364} x2={150.629} y1={43.113} y2={144.99} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="e" x1={250.742} x2={148.865} y1={252.49} y2={143.226} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="f" x1={43.113} x2={144.991} y1={252.49} y2={143.226} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="g" x1={252.491} x2={143.226} y1={43.113} y2={144.99} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
          <LinearGradient id="h" x1={145.691} x2={150.914} y1={-1.125} y2={148.175} gradientUnits="userSpaceOnUse">
            <Stop stopColor={color} stopOpacity={0} />
            <Stop offset={1} stopColor={color} />
          </LinearGradient>
        </Defs>
      </Svg>
    </Animated.View>
  );
});
