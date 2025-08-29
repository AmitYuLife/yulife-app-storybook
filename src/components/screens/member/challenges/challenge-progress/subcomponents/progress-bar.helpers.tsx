import { Counter } from "@molecules/index";
import * as React from "react";
// eslint-disable-next-line no-restricted-imports
import { Text } from "react-native";
import { displaySecondsAsMinutes, padNum } from "@utils";
import { IProps } from "./progress-bar";
import styles from "./progress-bar.styles";
import { t } from "@locale";

import { StyleSheet } from "@styles";
export const renderProgressLabel = ({ amount, styleType, type }: Partial<IProps>) => {
  const textColorStyle = { color: styleType.progressTextColor };
  const { minutes, seconds } = displaySecondsAsMinutes(amount);

  const typeText =
    type === "steps" && amount === 1 ? t("activity_types.steps.singular") : t("activity_types.steps.plural");

  switch (type) {
    case "steps":
    case "calories":
      return (
        <Counter
          value={amount}
          textStyle={StyleSheet.flatten([styles.stepsText, textColorStyle])}
          textAfterValue={typeText}
        />
      );

    case "minutes":
      if (amount === 0) {
        return null;
      }

      return (
        <>
          <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>{padNum(minutes)}</Text>
          <Text style={StyleSheet.flatten([styles.timeLabel, textColorStyle])}>min</Text>
          <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>{padNum(seconds)}</Text>
          <Text style={StyleSheet.flatten([styles.timeLabel, textColorStyle])}>sec</Text>
        </>
      );
    case "meters":
      return (
        <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>
          {formatCyclingMetersToKmWithOneDecimal(amount)}
        </Text>
      );

    default:
      return null;
  }
};

export const formatCyclingMetersToKmWithOneDecimal = (meters: number): string => {
  return `${(meters / 1000).toFixed(1)} km`;
};
