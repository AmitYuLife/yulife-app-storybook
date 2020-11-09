import { Text } from "@atoms/index";
import { addCommasToNumber } from "@services/utils";
import { Style } from "@styles/index";
import moment from "moment";
import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import styles from "./weekly-graph-card.styles";
import { MAX_GRAPH_HEIGHT } from "./weekly-graph-card.styles";

interface IWeeklyValues {
  day: number;
  value: number;
}

interface IProps {
  title: string;
  titleColor: string;
  weeklyValue: IWeeklyValues[];
  unit: string;
  averageLineColor: string;
  graphColor: string;
  category: string;
}

const GRAPH_LIMITS: number[] = [
  2,
  4,
  8,
  10,
  20,
  40,
  80,
  100,
  200,
  400,
  800,
  1000,
  2000,
  4000,
  8000,
  16000,
  32000,
  640000,
];

const WeeklyGraphCard: SFC<IProps> = ({
  titleColor,
  title,
  weeklyValue,
  unit,
  graphColor,
  averageLineColor,
  category,
}) => {
  const maxValue = findMaxValue(weeklyValue);
  const graphLimit = findGraphLimit(maxValue.value);
  const averageValue = getAverage(weeklyValue, category);

  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([styles.title, { color: titleColor }])}>{title}</Text>
      <View style={styles.fullGraphWrapper}>
        <View style={styles.graphLimitValueWrapper}>
          <View style={{ marginLeft: Style.SCALE_UP_AND_DOWN(130) }}>
            <View style={styles.graphWrapper}>
              <View style={styles.topLineWrapper}>
                <Image style={styles.topLine} source={require("../../../../../../assets/stats/graph-line.png")} />
              </View>

              <View style={styles.middleLineWrapper}>
                <Image style={styles.middleLine} source={require("../../../../../../assets/stats/graph-line.png")} />
              </View>
              <View style={styles.bottomLineWrapper}>
                <View style={styles.bottomLine} />
              </View>

              <View style={styles.dataWrapper}>
                {weeklyValue.map((day, index) => (
                  <View key={`weekly-value-${index}`} style={styles.dayItemWrapper}>
                    <View
                      style={StyleSheet.flatten([
                        styles.dayValue,
                        {
                          backgroundColor: graphColor,
                          height: Style.SCALE_UP_AND_DOWN(MAX_GRAPH_HEIGHT * (day.value / graphLimit)),
                        },
                      ])}
                    />
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.weekWrapper}>
              <View style={styles.dayWrapper}>
                <Text style={styles.day}>m</Text>
              </View>

              <View style={styles.dayWrapper}>
                <Text style={styles.day}>t</Text>
              </View>

              <View style={styles.dayWrapper}>
                <Text style={styles.day}>w</Text>
              </View>

              <View style={styles.dayWrapper}>
                <Text style={styles.day}>t</Text>
              </View>

              <View style={styles.dayWrapper}>
                <Text style={styles.day}>f</Text>
              </View>

              <View style={styles.dayWrapper}>
                <Text style={styles.day}>s</Text>
              </View>

              <View style={styles.dayWrapper}>
                <Text style={styles.day}>s</Text>
              </View>
            </View>
          </View>

          <View style={styles.limitValueWrapper}>
            <View style={styles.texLineWrapper}>
              <Text style={styles.textLine}>{addCommasToNumber(graphLimit)}</Text>
            </View>
            <View style={styles.texLineWrapper}>
              <Text style={styles.textLine}>{addCommasToNumber(graphLimit / 2)}</Text>
            </View>

            <View style={styles.texLineWrapper}>
              <Text style={styles.textLine}>0</Text>
            </View>
          </View>
        </View>

        {averageValue > 0 ? (
          <>
            <View
              style={StyleSheet.flatten([
                styles.averageLine,
                {
                  backgroundColor: averageLineColor,
                  marginTop: Style.SCALE_UP_AND_DOWN(
                    23 + MAX_GRAPH_HEIGHT * ((graphLimit - averageValue) / graphLimit)
                  ),
                },
              ])}
            />

            <View
              style={StyleSheet.flatten([
                styles.averageValueWrapper,
                {
                  marginTop: Style.SCALE_UP_AND_DOWN(
                    MAX_GRAPH_HEIGHT * ((graphLimit - averageValue) / graphLimit) - (Style.isAndroid() ? 7 : 1)
                  ),
                },
              ])}
            >
              <Text style={styles.averageValue}>{addCommasToNumber(averageValue)}</Text>
              <View>
                <Text style={styles.unit}>{unit}</Text>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.noDataText}>No data</Text>
        )}
      </View>
    </View>
  );
};

function findMaxValue(weeklyValue: IWeeklyValues[]): IWeeklyValues {
  const max = weeklyValue.reduce((prev, current) => {
    return prev.value > current.value ? prev : current;
  });

  return max;
}

function findGraphLimit(maxValue: number) {
  let limit = 0;
  for (const element of GRAPH_LIMITS) {
    if (element >= maxValue) {
      limit = element;
      break;
    }
  }

  return limit;
}

function getAverage(weeklyValue: IWeeklyValues[], category: string): number {
  let sum = 0;
  for (const element of weeklyValue) {
    sum += element.value;
  }

  const toFixed = category === "cycling" ? 1 : 0;

  const average = parseFloat((sum / moment().isoWeekday()).toFixed(toFixed));

  return average;
}

export default WeeklyGraphCard;
