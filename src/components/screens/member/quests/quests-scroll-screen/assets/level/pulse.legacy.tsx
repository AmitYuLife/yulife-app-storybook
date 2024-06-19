import { DETOX_ENABLED } from "@services/socket";
import React from "react";
import { memo } from "react";
import { Animated, Easing, View, StyleSheet } from "react-native";

interface IProps {
  interval: number;
  size: number;
  pulseMaxSize: number;
  backgroundColor: string;
}

export const PulseLegacy = memo((props: IProps) => {
  const anim = React.useRef(new Animated.Value(0));
  const { interval, pulseMaxSize, backgroundColor, size } = props;

  React.useEffect(() => {
    if (!DETOX_ENABLED) {
      const animation = Animated.loop(
        Animated.sequence(
          [1, 0].map((toValue) =>
            Animated.timing(anim.current, {
              duration: interval,
              easing: Easing.in((n: number) => n),
              toValue,
              useNativeDriver: true,
            })
          )
        )
      );

      animation.start();

      return () => {
        animation.stop();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const interpolation = {
    inputRange: [0, 1],
    outputRange: [1, pulseMaxSize / size],
  };

  return (
    <View
      style={[
        styles.circleWrapper,
        {
          height: pulseMaxSize,
          marginLeft: -pulseMaxSize / 2,
          width: pulseMaxSize,
        },
      ]}
    >
      <Animated.View
        style={StyleSheet.flatten([
          {
            backgroundColor,
            borderRadius: 999,
            height: size,
            opacity: 0.2,
            width: size,
            transform: [{ scale: anim.current.interpolate(interpolation) }],
          },
        ])}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  circleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
