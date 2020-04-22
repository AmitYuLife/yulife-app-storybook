import { Button, Pad, Text } from "@atoms/index";
import { Counter } from "@molecules/index";
import * as React from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { displaySecondsAsMinutes, padNum } from "../../../../services/utils";
import styles from "./daily-steps.screen.styles";

export interface IProps {
  coinsToday: number;
  showCounter?: boolean;
  onCtaPress?: () => void;
  steps: number;
  textStyle?: TextStyle;
  mindfulSeconds?: number;
  isShowingPassiveMeditation?: boolean;
}

export default function DailyStepsOnline({
  coinsToday,
  showCounter = false,
  onCtaPress,
  steps,
  textStyle,
  mindfulSeconds,
  isShowingPassiveMeditation,
}: IProps) {
  const flattenStyle = StyleSheet.flatten([styles.heading, textStyle]);
  const counterType = steps === 1 ? "step" : "steps";
  const mindfulTotal = displaySecondsAsMinutes(mindfulSeconds);
  const mindfulTotalToDisplay =
    mindfulTotal.minutes === 1
      ? ` | ${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful min`
      : ` | ${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful mins`;

  return (
    <View style={styles.dailyStepsOnlineWrapper}>
      {showCounter ? (
        <View style={styles.counterWrapper}>
          <Counter value={steps} textStyle={textStyle} textAfterValue={counterType} />
          {isShowingPassiveMeditation && mindfulSeconds > 0 ? (
            <Text style={textStyle}>{mindfulSeconds ? mindfulTotalToDisplay : ""}</Text>
          ) : null}
        </View>
      ) : (
        <Text style={textStyle}>
          {steps} {counterType}
          {isShowingPassiveMeditation && mindfulSeconds > 0 ? mindfulTotalToDisplay : ""}
        </Text>
      )}
      <Pad height={8} />
      <Text>
        {showCounter ? (
          <Counter duration={1200} value={coinsToday} textStyle={flattenStyle} />
        ) : (
          <Text style={flattenStyle}>{coinsToday}</Text>
        )}
        <Text style={flattenStyle} bold={true}>
          {` yu`}
        </Text>
        <Text style={flattenStyle}>{`coin `}</Text>
        <Text style={flattenStyle}>today</Text>
      </Text>
      <Pad height={22} />
      {!onCtaPress ? null : <Button onPress={onCtaPress} type="PrimaryMedium" label="earn more" />}
    </View>
  );
}
