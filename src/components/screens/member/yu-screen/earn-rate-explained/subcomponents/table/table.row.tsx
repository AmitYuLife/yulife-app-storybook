import { Text } from "@atoms/index";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import YuCoinIcon from "../yucoin.icon";
import mainStyles from "../main.styles";
import styles from "./table.styles";

const GRAY_COLOR = "#686868";
interface IProps {
  data: EarnRateDetails_getEarnRateDetails;
  totalEarnRate: number;
  index: number;
  lastRow: number;
  hasProducts: boolean;
}

function TableRow(props: IProps) {
  const { index, data, totalEarnRate, lastRow, hasProducts } = props;
  const isLastRow = index === lastRow;

  return (
    <View
      key={`earn_rate_row_${index}`}
      style={StyleSheet.flatten([
        styles.tableRow,
        { flexDirection: "row" },
        isLastRow ? { width: "95%", alignSelf: "center" } : [styles.bottomSeparator, { marginBottom: 0 }],
      ])}
    >
      <View style={styles.icon}>
        <Image source={earnRateDetailIcon[data.icon] || earnRateDetailIcon.default} />
      </View>
      <View style={StyleSheet.flatten([styles.tableRow, styles.tableRowText])}>
        <Text style={StyleSheet.flatten([mainStyles.text, { marginLeft: 16, marginRight: 8 }])}>{data.label}</Text>
      </View>
      {!hasProducts ? null : (
        <View
          style={StyleSheet.flatten([
            styles.tableRow,
            styles.tableRowCentered,
            styles.tableRowGreyBackground,
            styles.yucoinIconWrapper,
            styles.explainedCoinRateWrapper,
            !isLastRow
              ? {}
              : {
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                },
          ])}
        >
          <YuCoinIcon style={{ marginHorizontal: 8, color: GRAY_COLOR, marginBottom: 2 }} />
          <Text
            style={StyleSheet.flatten([
              styles.explainedTextCoinRateFirstColumn,
              styles.boldText,
              { color: GRAY_COLOR },
            ])}
          >
            {totalEarnRate * data.standardValue}
          </Text>
        </View>
      )}
      <View
        style={StyleSheet.flatten([
          styles.tableRow,
          styles.tableRowCentered,
          styles.yucoinIconWrapper,
          styles.explainedCoinRateWrapper,
          styles.tableRowStandard,
          hasProducts ? null : { flex: 0.5, marginRight: 16 },
        ])}
      >
        <YuCoinIcon style={{ marginHorizontal: 8, color: GRAY_COLOR, marginBottom: 2 }} />
        <Text
          style={StyleSheet.flatten([
            styles.explainedTextCoinRateSecondColumn,
            !hasProducts ? [styles.boldText, { color: GRAY_COLOR }] : { marginRight: 8 },
          ])}
        >
          {data.standardValue}
        </Text>
      </View>
    </View>
  );
}

export default TableRow;

const earnRateDetailIcon: { [name: string]: any } = {
  steps: require("../../../../../../../../assets/stats/steps.png"),
  mindfulness: require("../../../../../../../../assets/stats/mindfulness.png"),
  challenges: require("../../../../../../../../assets/stats/challenges.png"),
  streaks: require("../../../../../../../../assets/stats/streaks.png"),
  chests: require("../../../../../../../../assets/stats/chests.png"),
  default: require("../../../../../../../../assets/stats/challenges.png"),
};
