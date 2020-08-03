import React from "react";
import { View } from "react-native-animatable";
import { SkeletonHead } from "./assets/skeleton-head";
import { Style } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

interface Props {
  width: number;
}

export const SkeletonRow = ({ width = 105 }: Props) => {
  return (
    <View style={styles.wrapper}>
      <SkeletonHead />
      <View style={[styles.name, { width }]} />
      <View style={styles.score} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: Style.DEVICE_WIDTH,
    paddingLeft: 40,
    paddingRight: 30,
    marginBottom: 18,
  } as ViewStyle,
  name: {
    marginLeft: 16,
    backgroundColor: "#F8F8F9",
    height: 25,
    borderRadius: 27,
    overflow: "hidden",
  } as ViewStyle,
  score: {
    marginLeft: "auto",
    height: 25,
    width: 55,
    borderRadius: 27,
    backgroundColor: "#F8F8F9",
    overflow: "hidden",
  } as ViewStyle,
});
