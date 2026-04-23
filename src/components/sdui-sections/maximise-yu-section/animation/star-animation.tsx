import { Colours } from "@styles";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import Svg, { Path } from "react-native-svg";
import { INITIAL_DELAY, PEAK_DELAY, RAMP_TIMING } from "./animation-constants";

const SCALE_START = 0;
const SCALE_END = 1;

interface Props {
  iterations: number;
}

export const StarAnimation = ({ iterations = 1 }: Props) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(SCALE_START)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.sequence([
      Animated.delay(INITIAL_DELAY),
      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.sequence([
              Animated.timing(scale, {
                toValue: SCALE_END,
                duration: RAMP_TIMING,
                useNativeDriver: true,
              }),
              Animated.delay(PEAK_DELAY),
              Animated.timing(scale, {
                toValue: SCALE_START,
                duration: RAMP_TIMING,
                useNativeDriver: true,
              }),
            ]),
          ]),
        ]),
        {
          iterations,
        }
      ),
    ]);

    animation.start();

    return animation.stop;
  }, [iterations]);

  return (
    <Animated.View pointerEvents="none" style={{ opacity, transformOrigin: "center", transform: [{ scale }] }}>
      <Svg width={12} height={12} viewBox="0 0 50 48">
        <Path
          d="M25.2761 0.72345L31.0647 18.7574L50.0093 24.6062L31.0647 29.9676L25.2761 48.0015L18.9612 29.9676L0.0166016 24.6062L18.9612 18.7574L25.2761 0.72345Z"
          fill={Colours.products.fib.u100S4}
        />
      </Svg>
    </Animated.View>
  );
};
