import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";
import { SurgeRates } from "./surge-rates";
import { PrefixIcon } from "./prefix-icon";
import { StandardRates } from "./standard-rates";
import { Label } from "./label";
import { RATE_COLUMN_PAD } from "../table.styles";

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

  const surgeTextStyle = { color: totalEarnRate < 2 ? Colours.orange : Colours.neutral.n700 };
  const surgeImageStyle = { tintColor: totalEarnRate < 2 ? Colours.orange : Colours.neutral.n700 };

  return (
    <View style={styles.wrapper}>
      <View style={styles.flex}>
        <PrefixIcon icon={icon} />
        <Label label={label} />
      </View>
      <View style={styles.row}>
        <StandardRates
          standardValue={standardValue}
          surgeTextStyle={surgeTextStyle}
          surgeImageStyle={surgeImageStyle}
        />
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
    height: Style.adjust(48),
    justifyContent: "center",
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
