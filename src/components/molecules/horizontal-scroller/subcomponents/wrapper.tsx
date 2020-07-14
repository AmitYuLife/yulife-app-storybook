import React, { memo, ReactChild } from "react";
import { Animated } from "react-native";
import styles from "../horizontal-scroller.styles";

interface Props {
  children: ReactChild | ReactChild[];
  scale: any;
}

export const Wrapper = memo(({ children, scale }: Props) => (
  <Animated.View style={[styles.itemWrapper, { transform: [{ scale }] }]}>{children}</Animated.View>
));
