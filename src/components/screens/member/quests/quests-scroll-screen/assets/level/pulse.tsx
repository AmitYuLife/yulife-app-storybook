import * as React from "react";
import { Animated, View } from "react-native";

import { StyleSheet } from "@styles";
interface IProps {
  size: number;
  pulseMaxSize: number;
  backgroundColor: string;
  opacity: Animated.Value;
  scale: Animated.AnimatedInterpolation<string | number>;
}

const _Pulse = (props: IProps) => {
  const { pulseMaxSize, backgroundColor, size, opacity, scale } = props;

  return (
    <View
      style={[
        styles.wrapper,
        {
          height: pulseMaxSize,
          width: pulseMaxSize,
        },
      ]}
    >
      <Animated.View
        style={{
          backgroundColor,
          borderRadius: 50,
          height: size,
          opacity,
          width: size,
          transformOrigin: "50% 50%",
          transform: [{ scale }],
        }}
      />
    </View>
  );
};

const Pulse = React.memo(_Pulse);

export default Pulse;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
