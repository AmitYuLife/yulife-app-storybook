import React, { FC } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { Colours } from "@styles";
import { useLoadingAnimation } from "./useLoadingAnimation";

interface IProps {
  style: ViewStyle;
}

const SkeletonLoading: FC<IProps> = ({ style }) => {
  const loadingAnimation = useLoadingAnimation();

  return <Animated.View style={[styles.wrapper, loadingAnimation, style]} />;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.metallic.m100,
    borderRadius: 8,
  } as ViewStyle,
});

export default SkeletonLoading;
