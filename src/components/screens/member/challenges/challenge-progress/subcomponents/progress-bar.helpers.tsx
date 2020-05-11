import { Counter } from "@molecules/index";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { displaySecondsAsMinutes, padNum } from "@services/utils";
import { IProps } from "./progress-bar";
import styles from "./progress-bar.styles";

export const renderProgressLabel = ({ amount, showCounter, styleType = "black", type }: Partial<IProps>) => {
  const textColorStyle = getProgressLabelTextColor(styleType);
  const { minutes, seconds } = displaySecondsAsMinutes(amount);

  const typeText = type === "steps" && amount === 1 ? "step" : type;
  switch (type) {
    case "steps":
      return showCounter ? (
        <Counter
          value={amount}
          textStyle={StyleSheet.flatten([styles.stepsText, textColorStyle])}
          textAfterValue={typeText}
        />
      ) : (
        <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>{`${amount} ${typeText}`}</Text>
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

const getProgressLabelTextColor = (styleType: IProps["styleType"]) => {
  switch (styleType) {
    case "ocean-white":
    case "forest-white":
      return styles.stepsTextWhite;
    case "ocean-black":
    case "black":
    default:
      return styles.stepsTextBlack;
  }
};
