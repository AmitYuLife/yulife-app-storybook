import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { FULL_SCREEN_SWIPER } from "@ids";

interface IProps {
  handleChangeActiveIndex: (num: number) => () => void;
  onlyAllowForward?: boolean;
}

export const LeftRightController = ({ handleChangeActiveIndex, onlyAllowForward }: IProps) => (
  <View pointerEvents="box-none" style={styles.wrapper}>
    <TouchableOpacityWithDelay
      style={[styles.controller, styles.left]}
      activeOpacity={0}
      onPress={handleChangeActiveIndex(onlyAllowForward ? 1 : -1)}
      testID={FULL_SCREEN_SWIPER("LEFT")}
    />
    <TouchableOpacityWithDelay
      style={[styles.controller, styles.right]}
      activeOpacity={0}
      onPress={handleChangeActiveIndex(1)}
      testID={FULL_SCREEN_SWIPER("RIGHT")}
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
