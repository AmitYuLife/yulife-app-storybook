import { Text } from "@atoms/index";
import { addCommasToNumber } from "@services/utils";
import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "../../../../../styles";
import styles from "./comparison-card.styles";
import { MAX_GRAPH_WIDTH } from "./comparison-card.styles";
import { CHALLENGE_HISTORY_LAST_WEEK, CHALLENGE_HISTORY_THIS_WEEK } from "@ids";

interface IProps {
  title: string;
  titleColor: string;
  firstTitle: string;
  firstTitleColor: string;
  firstValue: number;
  secondTitle: string;
  secondTitleColor: string;
  secondValue: number;
}

const ComparisonCard: SFC<IProps> = ({
  titleColor,
  title,
  firstTitle,
  firstTitleColor,
  firstValue,
  secondTitle,
  secondTitleColor,
  secondValue,
}) => {
  const maxValue = firstValue > secondValue ? firstValue : secondValue;
  const firstGraphWidth = MAX_GRAPH_WIDTH * (firstValue / maxValue);
  const secondGraphWidth = MAX_GRAPH_WIDTH * (secondValue / maxValue);

  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([styles.title, { color: titleColor }])}>{title}</Text>
      <Text style={StyleSheet.flatten([styles.firstElementTitle, { color: firstTitleColor }])}>{firstTitle}</Text>

      <View style={styles.firstElementWrapper}>
        <View
          style={StyleSheet.flatten([
            styles.valueGraph,
            {
              width: firstGraphWidth > 0 ? Style.SCALE_UP_AND_DOWN(firstGraphWidth) : 0,
              backgroundColor: firstTitleColor,
            },
          ])}
        />

        <Text
          style={StyleSheet.flatten([
            styles.valueText,
            { marginLeft: Style.SCALE_UP_AND_DOWN(firstValue > 0 ? 6 : 0), color: firstTitleColor },
          ])}
          testID={CHALLENGE_HISTORY_THIS_WEEK(firstValue)}
        >
          {addCommasToNumber(firstValue)}
        </Text>
      </View>

      <Text style={StyleSheet.flatten([styles.firstElementTitle, { color: secondTitleColor }])}>{secondTitle}</Text>

      <View style={styles.firstElementWrapper}>
        <View
          style={StyleSheet.flatten([
            styles.valueGraph,
            {
              width: secondGraphWidth > 0 ? Style.SCALE_UP_AND_DOWN(secondGraphWidth) : 0,
              backgroundColor: secondTitleColor,
            },
          ])}
        />

        <Text
          style={StyleSheet.flatten([
            styles.valueText,
            { marginLeft: Style.SCALE_UP_AND_DOWN(secondValue > 0 ? 6 : 0), color: secondTitleColor },
          ])}
          testID={CHALLENGE_HISTORY_LAST_WEEK(secondValue)}
        >
          {addCommasToNumber(secondValue)}
        </Text>
      </View>
    </View>
  );
};

export default ComparisonCard;
