import React, { memo } from "react";
import { StyleSheet, View, Platform, ImageStyle, ViewStyle, TextStyle } from "react-native";
import { Text, YuCoinIcon } from "@atoms";
import { Colours, Style } from "@styles";
import { Package } from "../fib.browse.types";

interface Props {
  currentEarnRate: number;
  selectedPackage: Package;
}

export const Description = memo(({ currentEarnRate, selectedPackage }: Props) => {
  const { heading, earnRate, salaryPercentage } = selectedPackage;
  const newEarnRate = earnRate + currentEarnRate;

  return (
    <View style={styles.descriptionWrapper}>
      <Text bold style={styles.heading}>
        {heading}
      </Text>
      <Text style={[styles.text, styles.marginTop1]}>
        Pays a single cash sum based on <Text bold>{`${salaryPercentage}% `}</Text>of your salary.
      </Text>
      <View style={[styles.manualStructureWrapper, styles.marginTop2]}>
        <View style={styles.compoundInlineWrapper}>
          <YuCoinIcon style={styles.yucoin} />
          <Text style={styles.text}>YuCoin earn rate</Text>
        </View>
        <Text style={styles.text}>increased from</Text>
        <View style={styles.compoundInlineWrapper}>
          <Text style={styles.text}>{`${currentEarnRate}x to`}</Text>
          <Text style={styles.text} bold>
            {` ${newEarnRate}x`}
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  descriptionWrapper: {
    flex: 1,
    paddingRight: Style.adjust(20),
  } as TextStyle,
  heading: {
    textAlign: "left",
    paddingVertical: Style.adjust(8),
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
  } as TextStyle,
  text: {
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
  } as TextStyle,
  manualStructureWrapper: {
    flexWrap: "wrap",
  } as ViewStyle,
  compoundInlineWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  marginTop1: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  marginTop2: {
    marginTop: Style.adjust(18),
  } as ViewStyle,
  yucoin: {
    tintColor: Colours.yucoin.n800,
    marginRight: Style.adjust(4),
    width: Style.adjust(14),
    height: Style.adjust(14),
    marginBottom: Platform.select({ ios: Style.adjust(2), android: Style.adjust(-2) }),
  } as ImageStyle,
});
