import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@atoms";
import styles from "./daily-steps.screen.styles";

export interface IProps {
  isLight?: boolean;
  lastUpdate?: string;
}

export default function DailyStepsOffline({ isLight = false, lastUpdate }: IProps) {
  const lightStyle = isLight ? styles.whiteText : {};

  return (
    <>
      <Text bold={true} style={StyleSheet.flatten([styles.headingOffline, lightStyle])}>
        {`you’re offline`}
      </Text>
      <Text style={StyleSheet.flatten([styles.lastUpdate, lightStyle])}>
        {`Your steps will update when next online Last update: ${lastUpdate || "unknown"}`}
      </Text>
    </>
  );
}
