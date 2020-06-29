import React from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { Style, Colours } from "@styles";

interface IProps {
  earnRate: number;
  isAlpha: boolean;
}

function CardText(props: IProps) {
  const { earnRate = 1, isAlpha } = props;
  const hasIncreasedRate = earnRate > 1;
  const name = isAlpha || earnRate < 2 ? "charms" : "power-ups";

  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([styles.text, styles.textBig, styles.textBold])}>
        {`Your earn rate is ${earnRate}x`}
      </Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.text}>{`The ${name} you own are giving`}</Text>
        {hasIncreasedRate ? <IncreaseRateText earnRate={earnRate} /> : <DefaultRateText earnRate={earnRate} />}
      </View>
    </View>
  );
}

export default CardText;

function IncreaseRateText({ earnRate }: { earnRate: IProps["earnRate"] }) {
  return (
    <>
      <View style={styles.flexRow}>
        <Text style={styles.text}>giving you a</Text>
        <Text style={StyleSheet.flatten([styles.text, styles.textBold])}>{` ${earnRate}x increase `}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.text}>on your YuCoin earn rate from{"\n"}all sources. Amazing!</Text>
      </View>
    </>
  );
}

function DefaultRateText({ earnRate }: { earnRate: IProps["earnRate"] }) {
  return (
    <>
      <View style={styles.flexRow}>
        <Text style={styles.text}>you a</Text>
        <Text style={StyleSheet.flatten([styles.text, styles.textBold])}>{` ${earnRate}x `}</Text>
        <Text style={styles.text}>YuCoin earn rate from</Text>
      </View>
      <Text style={styles.text}>all sources. Amazing!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    marginTop: Style.adjust(16),
  },
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(20),
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
  textBold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  flexRow: {
    flexDirection: "row",
  },
});
