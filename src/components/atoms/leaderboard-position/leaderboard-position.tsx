import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { padNum } from "../../../services/utils";
import { Colours } from "../../../styles";
import assets from "./assets";
import { getPositionName } from "./leaderboard-position.helpers";
import styles from "./leaderboard-position.styles";

interface IProps {
  name: string;
  position: number;
}

const LeaderBoardPosition: SFC<IProps> = ({ name, position }) => {
  const positionName = getPositionName(position);

  if (!positionName) {
    return null;
  }

  const color = Colours.leaderboards[positionName];

  return (
    <View style={StyleSheet.flatten([styles.wrapper, styles[positionName]])}>
      <Text style={StyleSheet.flatten([styles.base, styles.position, { color }])}>{padNum(position)}</Text>
      <Image style={styles.image} source={assets[positionName]} />
      <Text style={StyleSheet.flatten([styles.base, styles.name, { color }])}>{name}</Text>
    </View>
  );
};

export default LeaderBoardPosition;
