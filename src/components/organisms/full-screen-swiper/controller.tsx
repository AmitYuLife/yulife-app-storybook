import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { Style } from "@styles";

interface IProps {
  handleChangeActiveIndex: (num: number) => () => void;
}

export const Controller = ({ handleChangeActiveIndex }: IProps) => (
  <View pointerEvents="box-none" style={styles.wrapper}>
    <TouchableOpacity
      style={[styles.controller, styles.left]}
      activeOpacity={0}
      onPress={handleChangeActiveIndex(-1)}
    />
    <TouchableOpacity
      style={[styles.controller, styles.right]}
      activeOpacity={0}
      onPress={handleChangeActiveIndex(1)}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  controller: {
    width: Style.DEVICE_WIDTH / 3,
    height: Style.DEVICE_HEIGHT / 1.2,
    position: "absolute",
    top: 0,
    bottom: 0,
  } as ViewStyle,
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});
