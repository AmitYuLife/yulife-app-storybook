import React from "react";
import { View, StyleSheet, ImageStyle, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Style, Colours } from "@styles";
import { EARN_RATE_COLUMN_WIDTH, ROW_HEIGHT } from "../table.styles";
import { YuCoinIcon } from "@atoms";

interface IRates {
  standardValue: EarnRateDetails_getEarnRateDetails["standardValue"];
}

export function StandardRates({ standardValue }: IRates) {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.text}>
        {standardValue}
      </Text>
      <YuCoinIcon style={styles.yucoin} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: ROW_HEIGHT,
    width: EARN_RATE_COLUMN_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: Style.adjust(4),
  } as ViewStyle,
  text: {
    color: Colours.neutral.n700,
  } as TextStyle,
  yucoin: {
    marginRight: Style.adjust(4),
    marginLeft: Style.adjust(4),
    marginBottom: Style.adjust(2),
    tintColor: Colours.neutral.n700,
  } as ImageStyle,
});
