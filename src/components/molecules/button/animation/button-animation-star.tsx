import { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import Svg, { Path } from "react-native-svg";

const SCALE_START = 0.5;
const SCALE_END = 1;
const TRANSLATE_X_START = 0;
const TRANSLATE_X_END = 0;
const TRANSLATE_Y_START = 0;
const TRANSLATE_Y_END = -2;

interface Props {
  delay: number;
  delayBasis: number;
  duration: number;
}

export const ButtonAnimationStar = ({ delay, delayBasis, duration }: Props) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(TRANSLATE_X_START)).current;
  const translateY = useRef(new Animated.Value(TRANSLATE_Y_START)).current;
  const scale = useRef(new Animated.Value(SCALE_START)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.sequence([
            Animated.timing(scale, {
              toValue: SCALE_START,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(scale, {
              toValue: SCALE_END,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(scale, {
              toValue: SCALE_START,
              duration,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(translateX, {
              toValue: TRANSLATE_X_START,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(translateX, {
              toValue: TRANSLATE_X_END,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(translateX, {
              toValue: TRANSLATE_X_START,
              duration,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(translateY, {
              toValue: TRANSLATE_Y_START,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: TRANSLATE_Y_END,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: TRANSLATE_Y_START,
              duration,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(opacity, {
              toValue: 0,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 1,
              duration,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration,
              useNativeDriver: true,
            }),
          ]),
        ]),
        Animated.delay(delayBasis - delay),
      ])
    );

    animation.start();

    return animation.stop;
  }, []);

  return (
    <Animated.View style={{ opacity, transformOrigin: "top", transform: [{ scale }, { translateX }, { translateY }] }}>
      <Svg width="10" height="10" viewBox="0 0 50 48">
        <Path
          d="M25.2761 0.72345L31.0647 18.7574L50.0093 24.6062L31.0647 29.9676L25.2761 48.0015L18.9612 29.9676L0.0166016 24.6062L18.9612 18.7574L25.2761 0.72345Z"
          fill="white"
        />
      </Svg>
    </Animated.View>
  );
};
