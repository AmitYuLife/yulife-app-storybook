import React from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { Style, Colours } from "@styles";
import YuCoinIcon from "../yucoin.icon";

interface IProps {
  earnRate: number;
  isAlpha: boolean;
}

function CardText(props: IProps) {
  const { earnRate = 1, isAlpha } = props;
  const hasIncreasedRate = earnRate > 1;
  const name = isAlpha ? "Charms" : "Power-Ups";

  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([styles.text, styles.textBig, styles.textBold])}>
        {`Your Earn Rate: ${earnRate}x`}
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
        <Text style={styles.text}>you a</Text>
        <Text style={StyleSheet.flatten([styles.text, styles.textBold])}>{` ${earnRate}x increase `}</Text>
        <Text style={styles.text}>on your</Text>
      </View>
      <View style={styles.flexRow}>
        <YuCoinIcon style={{ color: "#FFF", marginRight: 5, top: 2 }} />
        <Text style={styles.text}>YuCoin Earn Rate from all</Text>
      </View>
      <Text style={styles.text}>sources, amazing!</Text>
    </>
  );
}

function DefaultRateText({ earnRate }: { earnRate: IProps["earnRate"] }) {
  return (
    <>
      <View style={styles.flexRow}>
        <Text style={styles.text}>you a</Text>
        <Text style={StyleSheet.flatten([styles.text, styles.textBold])}>{` ${earnRate}x `}</Text>
        <YuCoinIcon style={{ color: "#FFF", marginRight: 5, top: 2 }} />
        <Text style={styles.text}>YuCoin Earn Rate</Text>
      </View>
      <Text style={styles.text}>from all sources!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    flexDirection: "column",
    marginTop: 20,
    paddingLeft: Style.isWideScreen() ? 36 : 20,
  },
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontSize: 16,
    textAlign: "left",
    color: Colours.yuscreen.white,
  } as TextStyle,
  textBig: {
    fontSize: 24,
    lineHeight: 32,
    color: Colours.yuscreen.white,
  } as TextStyle,
  textBold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  flexRow: {
    flexDirection: "row",
  },
});
