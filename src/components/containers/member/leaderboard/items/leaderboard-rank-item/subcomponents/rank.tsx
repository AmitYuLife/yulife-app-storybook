import React from "react";
import { StyleSheet, View, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { FirstPlace, SecondPlace, ThirdPlace } from "../assets";
import { Style } from "@styles";

interface Props {
  rank: number;
  style?: TextStyle;
  size?: TextStyle;
}

export function Rank({ rank, style }: Props) {
  const Component = rank <= 3 ? RankImage : RankText;

  const size = getSize(rank.toString().length);

  return (
    <View style={styles.rankWrapper}>
      <Component size={size} rank={rank} style={style} />
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

function RankText({ rank, size, style }: Props) {
  return <Text style={StyleSheet.flatten([textStyles.textRight, size, style])}>{rank}</Text>;
}

const styles = StyleSheet.create({
  rankWrapper: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: 40,
    marginLeft: 20,
  } as ViewStyle,
  rankImage: {
    height: Style.adjust(33),
    width: Style.adjust(25),
  } as ImageStyle,
});

const textStyles = {
  textRight: {
    textAlign: "right",
  } as TextStyle,
  sizeDefault: {
    fontSize: Style.adjust(18),
  } as TextStyle,
  sizeSmall1: {
    fontSize: Style.adjust(17),
  } as TextStyle,
  sizeSmall2: {
    fontSize: Style.adjust(14),
  } as TextStyle,
  sizeSmall3: {
    fontSize: Style.adjust(12),
  } as TextStyle,
};

function getSize(length: number) {
  if (length > 4) {
    return textStyles.sizeSmall3;
  }

  if (length > 3) {
    return textStyles.sizeSmall2;
  }

  if (length > 2) {
    return textStyles.sizeSmall1;
  }

  return textStyles.sizeDefault;
}
