import React from "react";
import { StyleSheet, View, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { FirstPlace, SecondPlace, ThirdPlace } from "../assets";
import { Style } from "@styles";

interface Props {
  rank: number;
  style?: TextStyle;
}

export function Rank({ rank, style }: Props) {
  const Component = rank <= 3 ? RankImage : RankText;

  return (
    <View style={styles.rankWrapper}>
      <Component rank={rank} style={style} />
    </View>
  );
}

function RankImage({ rank }: Props) {
  switch (rank) {
    case 1:
      return <FirstPlace />;
    case 2:
      return <SecondPlace />;
    case 3:
      return <ThirdPlace />;
    default:
      return null;
  }
}

function RankText({ rank, style }: Props) {
  return <Text style={StyleSheet.flatten([styles.text, styles.textRight, style])}>{rank}</Text>;
}

const styles = StyleSheet.create({
  rankWrapper: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: 58,
  } as ViewStyle,
  rankImage: {
    height: Style.adjust(33),
    width: Style.adjust(25),
  } as ImageStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(18),
  } as TextStyle,
  textRight: {
    textAlign: "right",
  } as TextStyle,
});
