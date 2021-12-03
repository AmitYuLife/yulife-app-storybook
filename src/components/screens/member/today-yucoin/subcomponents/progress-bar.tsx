import React from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import Svg, { Rect } from "react-native-svg";
import Check from "../assets/check";

interface IProps {
  progressBarWidth?: number;
  milestoneLength?: number;
  progressBarMultiplier: number;
  isFilling: (i: number) => boolean;
  fillProgress: (i: number) => number;
}

export default function ProgressBar({
  progressBarWidth = 275,
  progressBarMultiplier,
  milestoneLength = 6,
  isFilling,
  fillProgress,
}: IProps) {
  return (
    <View style={styles.progressWrapper}>
      <Svg width={progressBarWidth} height="15" style={styles.svg}>
        <Rect y="4" width={progressBarWidth} height="4" fill="rgb(233,233,233)" />
        <Rect y="4" width={Math.floor(progressBarWidth * progressBarMultiplier)} height="4" fill="black" />
      </Svg>
      <View style={styles.checksWrapper}>
        {Array.from({ length: milestoneLength }).map((_, index) => (
          <View style={styles.checkWrapper} key={index}>
            <Check isFilling={isFilling(index)} fillProgress={fillProgress(index)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressWrapper: {
    alignItems: "flex-end",
    borderColor: "transparent",
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
  } as ViewStyle,
  checkWrapper: { flex: 1, alignItems: "flex-end" } as ViewStyle,
  checksWrapper: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    right: Platform.OS === "ios" ? -1 : 0,
    top: 9,
  } as ViewStyle,
  svg: {
    marginTop: 10,
  } as ViewStyle,
});
