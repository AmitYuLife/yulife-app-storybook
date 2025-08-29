import { Image } from "@atoms";
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
import { StyleSheet } from "@styles";

interface IDecayingCoinProps {
  id: string;
  onFinish: (id: string) => void;
  scaleOnly?: boolean;
  scaleMultiplier?: number;
}

const DecayingCoin = ({ id, onFinish, scaleMultiplier = 1, scaleOnly }: IDecayingCoinProps) => {
  const velocityX = useSharedValue(random(-100, 100));
  const velocityY = useSharedValue(random(-800, -650));
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  useFrameCallback(() => {
    if (scaleOnly) {
      return;
    }

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
  // @ts-ignore - Wrong reanimated type for translate and scale
  const animatedStyle = useAnimatedStyle(() => {
    if (scaleOnly) {
      return {};
    }

    return {
      transform: [
        { translateX: withSpring(positionX.value) },
        { translateY: withTiming(positionY.value, { duration: 200, easing: Easing.out(Easing.quad) }) },
      ],
    };
  });

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
            withTiming(1 * scaleMultiplier, { duration: 0 }),
            withTiming(2 * scaleMultiplier, { duration: 200 }),
            withTiming(3 * scaleMultiplier, { duration: 400 })
          ),
        },
      ],
    };
  });

  const containerStyle = useMemo(() => {
    return [styles.coin, animatedStyle];
  }, [animatedStyle]);

  return (
    <Animated.View style={containerStyle} pointerEvents="none">
      <Animated.View style={scaleStyle}>
        <Image source={require("@assets/icons/yucoin.png")} suppressLoadingUi={true} width={16} height={16} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  coin: {
    position: "absolute",
  },
});

export default memo(DecayingCoin);
