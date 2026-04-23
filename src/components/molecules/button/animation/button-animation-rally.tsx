import { Style } from "@styles";
import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const TRANSLATE_X_START = -Style.DEVICE_WIDTH;
const TRANSLATE_X_END = Style.DEVICE_WIDTH;

interface Props {
  delay: number;
  delayBasis: number;
  duration: number;
}

export const ButtonAnimationRally = ({ delay, delayBasis, duration }: Props) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(TRANSLATE_X_START)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.sequence([
            Animated.timing(translateX, {
              toValue: TRANSLATE_X_START,
              duration,
              useNativeDriver: true,
              easing: Easing.ease,
            }),
            Animated.timing(translateX, {
              toValue: TRANSLATE_X_END,
              duration,
              useNativeDriver: true,
              easing: Easing.ease,
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
    <Animated.View style={{ opacity, transform: [{ translateX }] }}>
      <Svg width="100" height="100" viewBox="0 0 200 200">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="rgb(255,255,255)" stopOpacity="0" />
            <Stop offset="1" stopColor="rgb(255,255,255)" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Path opacity={0.3} d="M20 0 l120 0 l-20 200 l-120 0 Z" fill="url(#grad)" />
      </Svg>
    </Animated.View>
  );
};
