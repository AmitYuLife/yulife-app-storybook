import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Text } from "@atoms";
import { PowerCoin } from "@molecules";

export interface ISubHeadingProps {
  activeYuCoinPower: number;
  description: string;
}

export const ProductSubHeading = (props: ISubHeadingProps) => {
  const { activeYuCoinPower, description } = props;

  if (activeYuCoinPower) {
    return (
      <View style={activeStyles.wrapper}>
        <PowerCoin power={activeYuCoinPower} />
        <Text bold={true} style={activeStyles.text}>
          YuCoin Power
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.textWrapper}>
      <Text bold={true} style={styles.text}>
        {description}
      </Text>
    </View>
  );
};

const activeStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  text: {
    color: Colours.orange,
    marginLeft: Style.adjust(8),
    letterSpacing: 1,
    marginBottom: -1,
  } as TextStyle,
});

const styles = StyleSheet.create({
  textWrapper: {
    maxWidth: Style.adjust(160),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
    letterSpacing: 1,
    color: Colours.neutral.n400,
  } as TextStyle,
});
