import { TextTemplate } from "@atoms";
import { Colours, StyleSheet } from "@styles";
import { random } from "lodash";
import { memo, useEffect, useMemo } from "react";
import Animated, {
  Easing,
  useFrameCallback,
  useSharedValue,
  withSequence,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface IDecayingCoinProps {
  id: string;
  minX: number;
  maxX: number;
  amount: number;
  onFinish: (id: string) => void;
}

const DecayingRewardText = ({ id, onFinish, amount, minX, maxX }: IDecayingCoinProps) => {
  const velocityX = useSharedValue(random(-100, 100));
  const velocityY = useSharedValue(random(400, 300));
  const positionX = useSharedValue(random(minX, maxX));
  const positionY = useSharedValue(0);

  useFrameCallback(() => {
    velocityX.value *= 0.1;
    velocityY.value *= 0.1;
    positionX.value += velocityX.value;
    positionY.value += velocityY.value;
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(id);
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [id, onFinish]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong reanimated type for multiple translates
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(positionX.value) },
        { translateY: withTiming(positionY.value, { duration: 200, easing: Easing.out(Easing.quad) }) },
      ],
    };
  });

  // We do this in two views because translate and scale can get weird when combined
  const scaleStyle = useAnimatedStyle(() => {
    return {
      opacity: withSequence(
        withTiming(1, { duration: 0 }),
        withTiming(1, { duration: 300 }),
        withTiming(0, { duration: 300 })
      ),
      transform: [
        {
          scale: withSequence(
            withTiming(1, { duration: 0 }),
            withTiming(1.5, { duration: 200 }),
            withTiming(1.2, { duration: 400 })
          ),
        },
      ],
    };
  });

  const containerStyle = useMemo(() => {
    return [styles.coin, animatedStyle];
  }, [animatedStyle]);

  return (
    <Animated.View style={containerStyle} pointerEvents="box-none">
      <Animated.View style={scaleStyle}>
        <TextTemplate type="l2b" color={Colours.primary.p400}>
          +{amount}
        </TextTemplate>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  coin: {
    position: "absolute",
  },
});

export default memo(DecayingRewardText);
