import React from "react";
import { View, StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { ITableRowProps } from "./table.row";
import { Style, Colours } from "@styles";
import { EARN_RATE_COLUMN_WIDTH } from "../table.styles";
import { YuCoinIcon } from "@atoms";

type ISurgeRates = Pick<ITableRowProps, "totalEarnRate"> & {
  hide: boolean;
  standardValue: number;
};

export function SurgeRates({ hide, totalEarnRate, standardValue }: ISurgeRates) {
  if (hide) {
    return null;
  }

  const earnRate = totalEarnRate * standardValue;

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={StyleSheet.flatten([styles.earnRate, { fontSize: getFontSize(earnRate) }])}>
        {earnRate}
      </Text>
      <YuCoinIcon style={styles.yucoin} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(48),
    width: EARN_RATE_COLUMN_WIDTH,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  yucoin: {
    marginRight: Style.adjust(8),
    marginLeft: Style.adjust(4),
    marginBottom: Style.adjust(2),
  } as ImageStyle,
  earnRate: {
    color: Colours.orange,
    fontSize: Style.adjust(16),
  } as TextStyle,
});

function getFontSize(earnRate: number) {
  if (earnRate > 999) {
    return Style.adjust(12);
  }

  if (earnRate > 99) {
    return Style.adjust(13);
  }

  if (earnRate > 9) {
    return Style.adjust(14);
  }

  return Style.adjust(16);
}
