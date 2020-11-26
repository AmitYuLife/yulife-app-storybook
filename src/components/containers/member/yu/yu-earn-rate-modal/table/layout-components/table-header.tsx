import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { EARN_RATE_COLUMN_WIDTH, RATE_COLUMN_PAD, SINGLE_COLUMN_MAX_WIDTH } from "../table.styles";
import { Style, Colours } from "@styles";
import { TextWithBoldText } from "@components/molecules";
import { SurgedHeader } from "./surged-header";

interface IProps {
  earnRate: number;
}

export function TableHeader({ earnRate }: IProps) {
  return (
    <View style={StyleSheet.flatten([styles.wrapper, earnRate < 2 && styles.noEarnRateIncrease])}>
      <View style={styles.flex} />
      <View style={styles.headerLabelWrapper}>
        <TextWithBoldText value={"<bold>1</bold>\nYuCoin\nPower"} style={styles.headerLabel} />
      </View>
      {earnRate < 2 ? null : <SurgedHeader earnRate={earnRate} />}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  noEarnRateIncrease: {
    maxWidth: SINGLE_COLUMN_MAX_WIDTH - 12,
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    paddingRight: 2,
  } as ViewStyle,
  headerLabelWrapper: {
    width: EARN_RATE_COLUMN_WIDTH,
    justifyContent: "center",
    paddingTop: Style.adjust(4),
    height: Style.adjust(48),
  } as ViewStyle,
  headerLabel: {
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(14),
    textAlign: "right",
    letterSpacing: 1,
  } as TextStyle,
  headerLabelHighlight: {
    color: Colours.orange,
  } as TextStyle,
  pad: {
    width: RATE_COLUMN_PAD,
  } as ViewStyle,
  marginRight: {
    marginRight: 6,
  } as ViewStyle,
});
