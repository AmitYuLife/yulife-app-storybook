import React from "react";
import { View, StyleSheet, ImageStyle, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Style, Colours } from "@styles";
import { EARN_RATE_COLUMN_WIDTH } from "../table.styles";
import { YuCoinIcon } from "@atoms";

interface IRates {
  standardValue: EarnRateDetails_getEarnRateDetails["standardValue"];
  surgeTextStyle: TextStyle;
  surgeImageStyle: ImageStyle;
}

export function StandardRates({ standardValue, surgeTextStyle, surgeImageStyle }: IRates) {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={surgeTextStyle}>
        {standardValue}
      </Text>
      <YuCoinIcon style={StyleSheet.flatten([styles.yucoin, surgeImageStyle])} />
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
    marginRight: Style.adjust(4),
    marginLeft: Style.adjust(4),
    marginBottom: Style.adjust(2),
    tintColor: Colours.neutral.n800,
  } as ImageStyle,
});
