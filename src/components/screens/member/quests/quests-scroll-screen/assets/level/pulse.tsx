import * as React from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";
import { CIRCLE_SIZE } from "./level.styles";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  interval: number;
  size: number;
  adjustYPosition?: boolean;
  pulseMaxSize: number;
  backgroundColor: string;
  style?: ViewStyle;
}

function _Pulse(props: IProps) {
  const anim = React.useRef(new Animated.Value(0));
  const { interval, pulseMaxSize, backgroundColor, size, style, adjustYPosition = true } = props;

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
        // TODO: Remove this once new quest map is enabled
        // It is only true for the old quest map
        adjustYPosition
          ? typeof style.bottom === "undefined"
            ? { top: (CIRCLE_SIZE - pulseMaxSize) / 2 }
            : { bottom: (CIRCLE_SIZE - pulseMaxSize) / 2 }
          : {},
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
          style,
        ])}
      />
    </View>
  );
}

const Pulse = React.memo(_Pulse);

export default Pulse;

const styles = StyleSheet.create({
  circleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
