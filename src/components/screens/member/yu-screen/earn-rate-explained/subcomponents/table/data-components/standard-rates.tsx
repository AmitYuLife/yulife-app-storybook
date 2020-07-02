import React from "react";
import { TextStyle, View, StyleSheet, ImageStyle, ViewStyle } from "react-native";
import { Text } from "@atoms/index";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Style } from "@styles";
import { EARN_RATE_COLUMN_WIDTH } from "../table.styles";
import { YuCoinIcon } from "@atoms";

interface IRates {
  standardValue: EarnRateDetails_getEarnRateDetails["standardValue"];
  styleForAlphaColumn: TextStyle;
}

export function StandardRates({ standardValue, styleForAlphaColumn }: IRates) {
  return (
    <View style={styles.wrapper}>
      <Text bold style={styleForAlphaColumn}>
        {standardValue}
      </Text>
      <YuCoinIcon style={StyleSheet.flatten([styles.yucoin, styleForAlphaColumn] as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(48),
    width: EARN_RATE_COLUMN_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: Style.adjust(4),
  } as ViewStyle,
  yucoin: {
    marginRight: Style.adjust(8),
    marginLeft: Style.adjust(4),
    marginBottom: Style.adjust(2),
    tintColor: "#5A5A5C",
  } as ImageStyle,
});
