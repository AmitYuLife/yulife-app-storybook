import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { EARN_RATE_COLUMN_WIDTH, RATE_COLUMN_PAD } from "../table.styles";
import { Style, Colours } from "@styles";
import { TextWithBoldText } from "@components/molecules";

interface Props {
  earnRate: number;
}

export const SurgedHeader = ({ earnRate }: Props) => {
  return (
    <>
      <View style={styles.pad} />
      <View style={[styles.headerLabelWrapper, styles.marginRight]}>
        <TextWithBoldText
          value={`<bold>${earnRate}</bold>\nYuCoin\nPower`}
          style={StyleSheet.flatten([styles.headerLabel, styles.headerLabelHighlight])}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
