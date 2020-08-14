import * as React from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { CIRCLE_SIZE } from "./level.styles";

interface IProps {
  interval: number;
  size: number;
  pulseMaxSize: number;
  backgroundColor: string;
  style?: any;
}

function _Pulse(props: IProps) {
  const anim = React.useRef(new Animated.Value(0));
  const { interval, pulseMaxSize, backgroundColor, size, style } = props;

  React.useEffect(() => {
    Animated.loop(
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
    ).start();
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
        typeof style.bottom === "undefined"
          ? { top: (CIRCLE_SIZE - pulseMaxSize) / 2 }
          : { bottom: (CIRCLE_SIZE - pulseMaxSize) / 2 },
      ]}
    >
      <Animated.View
        style={[
          {
            backgroundColor,
            borderRadius: 999,
            height: size,
            opacity: 0.2,
            width: size,
            transform: [{ scale: anim.current.interpolate(interpolation) }],
          },
          style,
        ]}
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
