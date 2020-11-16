import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { EARN_RATE_COLUMN_WIDTH, RATE_COLUMN_PAD } from "../table.styles";
import { Style, Colours } from "@styles";
import { TextWithBoldText } from "@components/molecules";

interface IProps {
  earnRate: number;
  show: boolean;
}

export function TableHeader({ earnRate, show }: IProps) {
  if (!show) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.flex} />
      <View style={styles.headerLabelWrapper}>
        <TextWithBoldText value={"<bold>1</bold>\nYuCoin\nPower"} style={styles.headerLabel} />
      </View>
      <View style={styles.pad} />
      <View style={[styles.headerLabelWrapper, styles.marginRight]}>
        <TextWithBoldText
          value={`<bold>${earnRate}</bold>\nYuCoin\nPower`}
          style={StyleSheet.flatten([styles.headerLabel, styles.headerLabelHighlight])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 } as ViewStyle,
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
