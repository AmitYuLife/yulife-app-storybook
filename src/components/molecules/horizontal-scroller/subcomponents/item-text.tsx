import React, { memo, ReactChild } from "react";
import { Animated, TextStyle } from "react-native";
import { Text } from "@atoms";
import styles from "../horizontal-scroller.styles";

interface Props {
  children: ReactChild;
  translateY: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  active?: boolean;
  style?: TextStyle;
}

export const ItemText = memo(({ children, opacity, translateY, active, style }: Props) => {
  const wrapperStyle = active ? styles.itemLabelActiveWrapper : styles.itemWrapper;
  const labelStyle = [active ? styles.itemLabelActive : styles.itemLabel, style];
  return (
    <Animated.View
      style={[
        wrapperStyle,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Text bold style={labelStyle}>
        {children}
      </Text>
    </Animated.View>
  );
});
