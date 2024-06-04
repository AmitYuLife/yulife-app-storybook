import { Colours, Style } from "@styles";
import { memo, useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { INITIAL_DELAY } from "./animation-constants";

type Props = { animate: boolean };

export const BorderOpacityAnimation = memo(({ animate }: Props) => {
  const borderOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!animate) {
      return;
    }

    const animateBorderShow = Animated.timing(borderOpacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    });
    const animateBorderHide = Animated.timing(borderOpacity, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
    });
    const animation = Animated.sequence([
      Animated.delay(INITIAL_DELAY),
      Animated.loop(Animated.sequence([animateBorderShow, Animated.delay(2000), animateBorderHide]), {
        iterations: 1,
      }),
    ]);

    if (animate) {
      animation.start();
    }

    return () => {
      if (animate) {
        animation.stop();
      }
    };
  }, [animate]);

  return (
    <View pointerEvents="none" style={styles.wrapper}>
      <Animated.View style={[styles.glow, { opacity: borderOpacity }]}></Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: Style.adjust(12),
    marginLeft: Style.adjust(12),
    marginRight: Style.adjust(12),
  },
  glow: {
    position: "absolute",
    top: Style.adjust(12),
    bottom: Style.adjust(12),
    left: Style.adjust(12),
    right: Style.adjust(12),
    borderWidth: 1,
    borderColor: Colours.products.fib.u100S4,
    borderRadius: Style.adjust(8),
  },
});
