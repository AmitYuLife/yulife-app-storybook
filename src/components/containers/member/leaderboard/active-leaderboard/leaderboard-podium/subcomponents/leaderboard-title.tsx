import React from "react";
import { LeaderboardPressableTitle, LeaderboardPressableTitleProps } from "./pressable-title";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

type LeaderboardTitleProps = {
  onPressInfo: () => void;
} & LeaderboardPressableTitleProps;

export function LeaderboardTitle(props: LeaderboardTitleProps) {
  const { onPressInfo, onPressLabel, name } = props;
  return (
    <View style={styles.wrapper}>
      <LeaderboardPressableTitle name={name} onPressLabel={onPressLabel} onPressInfo={onPressInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    paddingTop: 16,
    left: Style.SCALE_UP_AND_DOWN(20),
    right: 0,
  } as ViewStyle,
});
