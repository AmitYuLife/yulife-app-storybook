import React from "react";
import { StyleSheet, ViewStyle, View, ImageStyle, TextStyle, Image } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";

interface Props {
  power: number;
}

export const PowerCoin = (props: Props) => {
  const { power } = props;

  if (!power) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require("./yuCoinPower.png")} />
      </View>
      <Text bold={true} style={StyleSheet.flatten([styles.text, { fontSize: getFontSize(power) }])}>
        {power}
      </Text>
    </View>
  );
};

const SIZE = Style.adjust(24);

const styles = StyleSheet.create({
  wrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    paddingLeft: 1,
  } as ViewStyle,
  image: {
    width: SIZE,
    height: SIZE,
  } as ImageStyle,
  imageWrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ImageStyle,
  text: {
    color: Colours.orange,
  } as TextStyle,
});

function getFontSize(power: number) {
  const length = power.toString().length;

  if (length < 2) {
    return Style.adjust(12);
  }

  if (length < 3) {
    return Style.adjust(10);
  }

  return Style.adjust(8);
}
