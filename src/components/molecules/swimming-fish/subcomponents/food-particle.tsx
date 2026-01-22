import { Box } from "@atoms";
import { memo } from "react";
import { useAnimatedStyle, withRepeat, withSequence, withTiming } from "react-native-reanimated";

const FOOD_SIZE = 12;

interface IFoodParticleProps {
  x: number;
  y: number;
}

const FoodParticle = ({ x, y }: IFoodParticleProps) => {
  // @ts-expect-error - bad reanimated types
  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      left: x - FOOD_SIZE / 2,
      top: y - FOOD_SIZE / 2,
      width: FOOD_SIZE,
      height: FOOD_SIZE,
      borderRadius: FOOD_SIZE / 2,
      backgroundColor: "#FFB347",
      transform: [
        {
          scale: withRepeat(
            withSequence(withTiming(1.2, { duration: 300 }), withTiming(0.8, { duration: 300 })),
            -1,
            true
          ),
        },
        {
          translateY: withRepeat(
            withSequence(withTiming(-5, { duration: 400 }), withTiming(5, { duration: 400 })),
            -1,
            true
          ),
        },
      ],
    };
  });

  return <Box style={animatedStyle} forceAnimated={true} />;
};

export default memo(FoodParticle);
