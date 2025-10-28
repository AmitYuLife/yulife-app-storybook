import { memo, ReactNode, useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { Colours } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

interface Props {
  children: ReactNode;
  animatePulse: boolean;
  pulseColor?: string;
  animationDurationMs?: number;
  pulseVerticalOffset?: number;
  pauseBetweenPulsesMs?: number;
}

const ButtonPulseAnimationWrapper = ({
  children,
  animatePulse,
  pulseColor = Colours.neutral.white,
  animationDurationMs = 500,
  pulseVerticalOffset = 0,
  pauseBetweenPulsesMs = 1800,
}: Props) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    if (DETOX_ENABLED || !animatePulse) {
      scale.setValue(1);
      opacity.setValue(0);
      return;
    }

    const pulseAnimation = Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1.25,
          duration: animationDurationMs,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: animationDurationMs,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(pauseBetweenPulsesMs),
    ]);

    const animation = Animated.sequence([Animated.delay(pauseBetweenPulsesMs), Animated.loop(pulseAnimation)]);

    animation.start();

    return () => {
      animation.stop();
    };
  }, [animatePulse, scale, opacity, animationDurationMs, pauseBetweenPulsesMs]);

  return (
    <View style={styles.container}>
      {animatePulse ? (
        <Animated.View
          style={[
            styles.pulse,
            {
              backgroundColor: pulseColor,
              transform: [{ scale }],
              opacity,
            },
            { bottom: Style.adjust(pulseVerticalOffset) },
          ]}
        />
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
  },
  pulse: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 48,
  },
});

export default memo(ButtonPulseAnimationWrapper);
