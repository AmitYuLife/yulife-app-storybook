import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { padNum } from "../../../../../services/utils";
import { Text } from "../../../../atoms";
import styles from "./leaderboard-item.styles";

export interface ILeaderboardItemProps {
    coins: number;
    name: string;
    rank: number;
    steps: number;
}

const LeaderboardItem: SFC<ILeaderboardItemProps> = ({ rank, name, steps, coins }) => (
    <View style={styles.wrapper}>
        <View style={styles.rankWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>{padNum(rank)}</Text>
        </View>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.yucoinWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textSmall, styles.textRight])}>{coins}</Text>
        </View>
        <View style={styles.stepsWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textSmall, styles.textRight])}>{steps}</Text>
        </View>
    </View>
);

export default LeaderboardItem;
