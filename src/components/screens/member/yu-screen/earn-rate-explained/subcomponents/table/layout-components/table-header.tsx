import { Text } from "@atoms/index";
import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { EARN_RATE_COLUMN_WIDTH, RATE_COLUMN_PAD } from "../table.styles";
import { Style, Colours } from "@styles";

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
        <Text style={styles.headerLabel} bold={true}>
          Standard 1x
        </Text>
        <Text style={styles.headerLabel}>earn rate</Text>
      </View>
      <View style={styles.pad} />
      <View style={[styles.headerLabelWrapper, styles.marginRight]}>
        <Text style={[styles.headerLabel, styles.headerLabelHighlight]} bold={true}>
          {`Your ${earnRate}x`}
        </Text>
        <Text style={[styles.headerLabel, styles.headerLabelHighlight]}>earn rate</Text>
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
  } as ViewStyle,
  headerLabelWrapper: {
    width: EARN_RATE_COLUMN_WIDTH,
    justifyContent: "center",
    paddingTop: Style.adjust(4),
    paddingLeft: Style.adjust(4),
    height: Style.adjust(48),
  } as ViewStyle,
  headerLabel: {
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(12),
    textAlign: "center",
    letterSpacing: 1,
  } as TextStyle,
  headerLabelHighlight: {
    color: Colours.yuscreen.brown,
  } as TextStyle,
  pad: {
    width: RATE_COLUMN_PAD,
  } as ViewStyle,
  marginRight: {
    marginRight: 1,
  } as ViewStyle,
});
