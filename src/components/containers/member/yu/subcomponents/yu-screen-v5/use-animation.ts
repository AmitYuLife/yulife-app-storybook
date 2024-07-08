import { Style } from "@styles";
import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { FULL_HEADER_HEIGHT } from "./yu-screen.styles";
import { DETOX_ENABLED } from "@services/socket";

const ANIMATION_DURATION = DETOX_ENABLED ? 0 : 400;

export function useAnimation(collapsed: boolean) {
  const infoBarOpacity = useRef(new Animated.Value(0)).current;
  const yumojiOpacity = useRef(new Animated.Value(1)).current;
  const yumojiScale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.sequence([
        Animated.delay(collapsed ? 100 : 0),
        Animated.timing(infoBarOpacity, {
          toValue: collapsed ? 1 : 0,
          duration: collapsed ? ANIMATION_DURATION : 1,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
      Animated.sequence([
        Animated.delay(collapsed ? 0 : 150),
        Animated.parallel([
          Animated.timing(yumojiOpacity, {
            toValue: collapsed ? 0 : 1,
            duration: ANIMATION_DURATION / 2,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.timing(yumojiScale, {
            toValue: collapsed ? 0.5 : 1,
            duration: ANIMATION_DURATION / 2,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
      ]),
      Animated.timing(translateY, {
        toValue: collapsed ? Style.adjust(-FULL_HEADER_HEIGHT) : 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]);

    animation.start();

    return animation.stop;
  }, [collapsed]);

  return {
    infoBarOpacity,
    yumojiOpacity,
    yumojiScale,
    translateY,
  };
}
