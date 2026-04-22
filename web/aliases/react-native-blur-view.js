import React from "react";
import { View, StyleSheet } from "react-native";

export const BlurView = ({ children, style, ...props }) => (
  <View {...props} style={[styles.blur, style]}>
    {children}
  </View>
);

export const BlurTarget = ({ children, ...props }) => <View {...props}>{children}</View>;

const styles = StyleSheet.create({
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default { BlurView, BlurTarget };
