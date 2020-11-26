import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Style } from "@styles";
import { SurgeRates } from "./surge-rates";
import { PrefixIcon } from "./prefix-icon";
import { StandardRates } from "./standard-rates";
import { Label } from "./label";
import { RATE_COLUMN_PAD, SINGLE_COLUMN_MAX_WIDTH, ROW_HEIGHT } from "../table.styles";

export interface ITableRowProps {
  data: EarnRateDetails_getEarnRateDetails;
  totalEarnRate: number;
  hasProducts: boolean;
}

export function TableRow(props: ITableRowProps) {
  const {
    data: { standardValue, icon, label },
    totalEarnRate,
    hasProducts,
  } = props;

  const noEarnRateIncrease = totalEarnRate < 2;

  return (
    <View style={StyleSheet.flatten([styles.wrapper, noEarnRateIncrease && styles.noEarnRateIncrease])}>
      <View style={styles.flex}>
        <PrefixIcon icon={icon} />
        <Label label={label} />
      </View>
      <View style={styles.row}>
        <StandardRates standardValue={standardValue} />
        {!hasProducts ? null : <View style={styles.pad} />}
        <SurgeRates hide={!hasProducts} standardValue={standardValue} totalEarnRate={totalEarnRate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    height: ROW_HEIGHT,
    justifyContent: "center",
  } as ViewStyle,
  noEarnRateIncrease: {
    maxWidth: SINGLE_COLUMN_MAX_WIDTH,
  } as ViewStyle,
  flex: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: Style.adjust(20),
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  pad: {
    width: RATE_COLUMN_PAD,
  } as ViewStyle,
});
