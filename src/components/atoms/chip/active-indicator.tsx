import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ActiveCheck } from "./svg/active-check";
import { Colours, Style } from "@styles";

interface Props {
  isActive: boolean;
}

export const ActiveIndicator = ({ isActive }: Props) => {
  if (!isActive) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.absoluteUpperRight}>
        <ActiveCheck />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colours.blue.up306,
  } as ViewStyle,
  absoluteUpperRight: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  } as ViewStyle,
});
