import { memo, useEffect } from "react";
import { Box } from "@atoms";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  interpolate,
  SharedValue,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { range } from "lodash";
import { Colours } from "@styles";

export type GlowDecorationProps = {
  rings?: number;
  radius?: number;
  color?: string;
  duration?: number;
};

type FullGlowDecorationProps = GlowDecorationProps & {
  contentWidth: number;
  contentHeight: number;
};

const GlowDecoration = ({
  contentWidth,
  contentHeight,
  rings = 5,
  radius = 100,
  color = Colours.yellow.y100,
  duration = 4000,
}: FullGlowDecorationProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration, easing: Easing.linear }), -1, false);
  }, [duration]);

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={StyleSheet.absoluteFillObject}
      w={contentWidth}
      h={contentHeight}
    >
      <Svg width={radius * 2} height={radius * 2}>
        {range(rings).map((_, i, arr) => (
          <GlowCircle key={i} radius={radius} color={color} offset={i / arr.length} progress={progress} />
        ))}
      </Svg>
    </Box>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type GlowCircleProps = {
  radius: number;
  color: string;
  offset: number;
  progress: SharedValue<number>;
};

const GlowCircle = ({ radius: radiusParam, color, progress, offset }: GlowCircleProps) => {
  const animatedProps = useAnimatedProps(() => {
    const localProgress = (progress.value + offset) % 1;
    const opacity = interpolate(localProgress, [0, 0.5, 0.9, 1], [0.8, 0.4, 0.15, 0]);
    const radius = interpolate(localProgress, [0, 1], [0, radiusParam]);

    return {
      r: radius,
      opacity,
    };
  });

  return <AnimatedCircle cx={radiusParam} cy={radiusParam} fill={color} animatedProps={animatedProps} />;
};

export default memo(GlowDecoration);
