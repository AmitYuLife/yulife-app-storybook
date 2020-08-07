import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "../../../styles";

interface IProgressBarProps {
  currentPosition: number;
  maxLength: number;
}

export default function ProgressBar(props: IProgressBarProps) {
  const { currentPosition, maxLength } = props;
  const borderRadius = currentPosition === maxLength ? 0 : 13;
  return (
    <View style={styles.wrapper}>
      <View
        style={StyleSheet.flatten([
          styles.progress,
          {
            width: (Style.DEVICE_WIDTH / maxLength) * currentPosition,
            borderBottomRightRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          },
        ])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    height: 6,
    backgroundColor: "#F8F8F8",
  } as ViewStyle,
  progress: {
    height: 6,
    backgroundColor: "#F572AB",
  } as ViewStyle,
});
