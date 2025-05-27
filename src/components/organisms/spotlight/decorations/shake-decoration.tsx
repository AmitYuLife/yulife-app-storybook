import { memo, useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export type ShakeDecorationProps = {
  /**
   * Shake animation duration in milliseconds
   */
  shakeDuration?: number;

  /**
   * Shake animation interval in milliseconds, specifying how long to wait before starting another animation cycle
   */
  shakeInterval?: number;

  /**
   * Shake translation amplitude
   */
  shakeAmplitude?: number;

  /**
   * Shake rotation amplitude
   */
  rotationAmplitude?: number;

  style?: StyleProp<ViewStyle>;
};

type FullShakeDecorationProps = ShakeDecorationProps & {
  children: React.ReactNode;
};

const ShakeDecoration = ({
  children,
  shakeDuration = 300,
  shakeInterval = 2000,
  shakeAmplitude = 2,
  rotationAmplitude = 2,
  style,
}: FullShakeDecorationProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotateZ = useSharedValue(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const shake = () => {
      const step = shakeDuration / 6;

      translateX.value = withSequence(
        withTiming(-shakeAmplitude, { duration: step, easing: Easing.linear }),
        withTiming(shakeAmplitude, { duration: step * 2, easing: Easing.linear }),
        withTiming(-shakeAmplitude / 2, { duration: step, easing: Easing.linear }),
        withTiming(shakeAmplitude / 2, { duration: step, easing: Easing.linear }),
        withTiming(0, { duration: step, easing: Easing.linear })
      );

      translateY.value = withSequence(
        withTiming(-shakeAmplitude / 2, { duration: step, easing: Easing.linear }),
        withTiming(shakeAmplitude / 2, { duration: step * 2, easing: Easing.linear }),
        withTiming(-shakeAmplitude / 4, { duration: step, easing: Easing.linear }),
        withTiming(shakeAmplitude / 4, { duration: step, easing: Easing.linear }),
        withTiming(0, { duration: step, easing: Easing.linear })
      );

      rotateZ.value = withSequence(
        withTiming(-rotationAmplitude, { duration: step, easing: Easing.linear }),
        withTiming(rotationAmplitude, { duration: step * 2, easing: Easing.linear }),
        withTiming(-rotationAmplitude / 2, { duration: step, easing: Easing.linear }),
        withTiming(rotationAmplitude / 2, { duration: step, easing: Easing.linear }),
        withTiming(0, { duration: step, easing: Easing.linear })
      );

      timeoutId = setTimeout(shake, shakeInterval);
    };

    shake();

    return () => {
      cancelAnimation(translateX);
      cancelAnimation(translateY);
      cancelAnimation(rotateZ);
      clearTimeout(timeoutId);
    };
  }, [shakeAmplitude, shakeDuration, shakeInterval, rotationAmplitude]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong reanimated type
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotateZ.value}deg` },
      ],
    };
  });

  return <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>;
};

export default memo(ShakeDecoration);
