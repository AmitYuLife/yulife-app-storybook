import { useEffect, useRef, memo, useMemo } from "react";
import { Circle, G } from "react-native-svg";
import { Animated, Easing } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import { range } from "lodash";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface IPulseProps {
  x?: number;
  y?: number;
  radius: number;
  innerRadius: number;
  opacity?: number;
  numberOfWaves?: number;
  duration?: number;
}

const Pulse = ({ x = 0, y = 0, radius, innerRadius, opacity = 1, numberOfWaves = 4, duration = 5000 }: IPulseProps) => {
  const animatedPulse = useRef(new Animated.Value(0)).current;

  const pulse = useMemo(
    () =>
      range(0, 1, 1 / numberOfWaves).map((progress) => {
        const inputRange = [0, 1 - progress, 1 - progress, 1];
        const startingRadius = innerRadius + progress * (radius - innerRadius);
        const startingOpacity = (1 - progress) * opacity;

        return {
          key: `pulse_${progress}`,
          r: animatedPulse.interpolate({
            inputRange,
            outputRange: [startingRadius, radius, innerRadius, startingRadius],
          }),
          opacity: animatedPulse.interpolate({
            inputRange,
            outputRange: [startingOpacity, 0, opacity, startingOpacity],
          }),
        };
      }),
    [animatedPulse, numberOfWaves, radius, innerRadius, opacity]
  );

  useEffect(() => {
    return () => {
      animatedPulse.stopAnimation();
    };
  }, []);

  useEffect(() => {
    if (!DETOX_ENABLED) {
      animatedPulse.stopAnimation();
      animatedPulse.setValue(0);
      Animated.loop(
        Animated.timing(animatedPulse, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start(() => animatedPulse.setValue(0));
    } else {
      animatedPulse.stopAnimation();
      animatedPulse.setValue(0);
    }
  }, [animatedPulse, duration]);

  return (
    <G x={x - radius} y={y - radius}>
      {pulse.map((props) => (
        <AnimatedCircle cx={radius} cy={radius} fill="none" stroke="white" {...props} key={props.key} />
      ))}
    </G>
  );
};

export default memo(Pulse);
