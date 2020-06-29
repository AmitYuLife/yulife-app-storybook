import React from "react";
import { View, StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { Text } from "@atoms/index";
import { ITableRowProps } from "./table.row";
import { Style, Colours } from "@styles";
import { EARN_RATE_COLUMN_WIDTH } from "../table.styles";
import { YuCoinIcon } from "../..";

type ISurgeRates = Pick<ITableRowProps, "totalEarnRate"> & {
  hide: boolean;
  standardValue: number;
};

export function SurgeRates({ hide, totalEarnRate, standardValue }: ISurgeRates) {
  if (hide) {
    return null;
  }
  return (
    <View style={styles.wrapper}>
      <Text bold style={{ color: Colours.yuscreen.brown }}>
        {totalEarnRate * standardValue}
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
    marginRight: 2,
  } as ViewStyle,
  yucoin: {
    marginRight: Style.adjust(8),
    marginLeft: Style.adjust(4),
    marginBottom: Style.adjust(2),
  } as ImageStyle,
});
