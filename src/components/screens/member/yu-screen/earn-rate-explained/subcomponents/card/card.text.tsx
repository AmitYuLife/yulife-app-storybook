import React from "react";
import { View, StyleSheet, TextStyle, Platform, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { TextWithBoldText } from "@components/molecules";

interface IProps {
  earnRate: number;
  hasCharmsOnly: boolean;
}

function CardText(props: IProps) {
  const { earnRate = 1, hasCharmsOnly } = props;

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={StyleSheet.flatten([styles.text, styles.textBig])}>
        {`Your earn rate is ${earnRate}x`}
      </Text>
      <View style={styles.column}>
        <TextWithBoldText value={getCopy({ earnRate, hasCharmsOnly })} style={styles.text} />
      </View>
    </View>
  );
}

const defaultRateCopy = `giving\nyou a <bold>1x</bold> YuCoin earn rate from\nall sources. Amazing!`;
const getIncreasedRateCopy = (earnRate: number) =>
  `\ngiving you a <bold>${earnRate}x increase</bold> on\nyour YuCoin earn rate from all\nsources. Amazing!`;

function getCopy({ earnRate, hasCharmsOnly }: IProps) {
  const hasIncreasedRate = earnRate > 1;

  return `The ${hasCharmsOnly ? "charms" : "power-ups"} you own are ${
    hasIncreasedRate ? getIncreasedRateCopy(earnRate) : defaultRateCopy
  }`;
}

export default CardText;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    marginTop: Style.adjust(16),
  },
  text: {
    lineHeight: Platform.OS === "ios" ? Style.adjust(20) : Style.adjust(22),
    letterSpacing: 1,
    fontSize: Style.adjust(16),
    textAlign: "left",
    color: Colours.yuscreen.brown,
  } as TextStyle,
  textBig: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: 0.8,
    marginBottom: 4,
  } as TextStyle,
  flexRow: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  } as ViewStyle,
});
