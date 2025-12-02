import { Colours, Style, StyleSheet } from "@styles";
import { memo, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { INITIAL_DELAY, PEAK_DELAY } from "./animation-constants";

type Props = {
  animate: boolean;
};

export const GlowScaleAnimation = memo(({ animate }: Props) => {
  const glowScaleX = useRef(new Animated.Value(1)).current;
  const glowScaleY = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!animate) {
      return;
    }

    const animateGlowScaleXUp = Animated.timing(glowScaleX, { toValue: 1.05, useNativeDriver: true, duration: 1000 });
    const animateGlowScaleXDown = Animated.timing(glowScaleX, { toValue: 1, useNativeDriver: true, duration: 1000 });
    const animateGlowScaleYUp = Animated.timing(glowScaleY, { toValue: 1.1, useNativeDriver: true, duration: 1000 });
    const animateGlowScaleYDown = Animated.timing(glowScaleY, { toValue: 1, useNativeDriver: true, duration: 1000 });

    const animateGlowScaleUp = Animated.parallel([animateGlowScaleXUp, animateGlowScaleYUp]);
    const animateGlowScaleDown = Animated.parallel([animateGlowScaleXDown, animateGlowScaleYDown]);
    const animation = Animated.sequence([
      Animated.delay(INITIAL_DELAY),
      Animated.loop(Animated.sequence([animateGlowScaleUp, Animated.delay(PEAK_DELAY), animateGlowScaleDown]), {
        iterations: 2,
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
      <Animated.View style={[styles.glow, { transform: [{ scaleX: glowScaleX }, { scaleY: glowScaleY }] }]} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
    marginTop: Style.adjust(12),
    marginStart: Style.adjust(12),
    marginEnd: Style.adjust(12),
  },
  glow: {
    position: "absolute",
    top: Style.adjust(12),
    bottom: Style.adjust(12),
    start: Style.adjust(12),
    end: Style.adjust(12),
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.products.fib.u100S4,
    opacity: 0.3,
  },
});
