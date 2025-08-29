import { Colours, Style, StyleSheet } from "@styles";
import { memo, useEffect, useRef } from "react";
import { Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Props = {
  type: "idle" | "ease";
};

const GRADIENT = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ["#FFF69D", "#FFE559"],
};

export const GoldenAnimation = memo(({ type }: Props) => {
  const opacity = useRef(new Animated.Value(type === "idle" ? 1 : 0)).current;
  const shineOpacity = useRef(new Animated.Value(1)).current;
  const shinePosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateAppearDelay = Animated.delay(1000);
    const animateAppear = Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    });
    const animateAppearSequence = Animated.sequence([animateAppearDelay, animateAppear]);

    if (type === "ease") {
      animateAppearSequence.start();
    }

    const show = Animated.timing(shineOpacity, { toValue: 1, duration: 16, useNativeDriver: true });
    const forward = Animated.timing(shinePosition, { toValue: 200, duration: 1200, useNativeDriver: true });
    const hide = Animated.timing(shineOpacity, { toValue: 0, duration: 16, useNativeDriver: true });
    const backward = Animated.timing(shinePosition, { toValue: 0, duration: 16, useNativeDriver: true });
    const fullSequence = [show, forward, hide, backward, Animated.delay(1000)];
    const animateShinePositionBackAndForth = Animated.sequence([
      ...fullSequence,
      ...fullSequence,
      ...fullSequence,
      Animated.delay(1000),
    ]);
    const animatedLoop = Animated.loop(animateShinePositionBackAndForth);

    animatedLoop.start();

    return () => {
      if (type === "ease") {
        animateAppearSequence.stop();
      }

      animatedLoop.stop();
    };
  }, [type]);

  return (
    <Animated.View pointerEvents="none" style={[styles.wrapper, { opacity }]}>
      <LinearGradient
        style={styles.linearGradient}
        start={GRADIENT.start}
        end={GRADIENT.end}
        colors={GRADIENT.colors}
      />
      <Animated.View style={[styles.shine, { opacity: shineOpacity, transform: [{ translateX: shinePosition }] }]} />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "absolute",
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colours.products.fib.u100S4,
    overflow: "hidden",
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
    borderRadius: 8,
  },
  shine: {
    borderRadius: Style.adjust(16),
    height: Style.adjust(7),
    width: Style.adjust(32),
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});
