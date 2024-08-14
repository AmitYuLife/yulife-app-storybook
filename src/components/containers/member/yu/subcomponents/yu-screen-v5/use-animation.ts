import { Style } from "@styles";
import { useRef, useEffect, useState } from "react";
import { Animated, Easing } from "react-native";
import { COLLAPSED_HEADER_HEIGHT, FULL_HEADER_HEIGHT, INITIAL_SCROLL } from "./yu-screen.styles";
import { DETOX_ENABLED } from "@services/socket";

const ANIMATION_DURATION = DETOX_ENABLED ? 0 : 400;

export function useAnimation(collapsed: boolean) {
  const gradientOpacity = useRef(new Animated.Value(0)).current;
  const yumojiOpacity = useRef(new Animated.Value(1)).current;
  const yumojiScale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const headerHeight = useRef(new Animated.Value(FULL_HEADER_HEIGHT - INITIAL_SCROLL)).current;
  const [headerIsChangingSize, setHeaderIsChangingSize] = useState(false);

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.sequence([
        Animated.delay(collapsed ? 100 : 0),
        Animated.timing(gradientOpacity, {
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
      Animated.timing(headerHeight, {
        toValue: collapsed ? COLLAPSED_HEADER_HEIGHT : FULL_HEADER_HEIGHT - INITIAL_SCROLL,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }),
    ]);

    setHeaderIsChangingSize(true);
    animation.start(() => setHeaderIsChangingSize(false));

    return animation.stop;
  }, [collapsed]);

  return {
    gradientOpacity,
    yumojiOpacity,
    yumojiScale,
    translateY,
    headerHeight,
    headerIsChangingSize,
  };
}
