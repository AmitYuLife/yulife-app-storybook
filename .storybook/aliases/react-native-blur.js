import React from "react";
import { StyleSheet, View } from "react-native";

const BlurView = () => <View style={styles.blur} />;

const BlurTarget = ({ children, style }) => <View style={style}>{children}</View>;

export { BlurView, BlurTarget };
export default { BlurView, BlurTarget };

const styles = StyleSheet.create({
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backdropFilter: "blur(5px)",
  },
});
