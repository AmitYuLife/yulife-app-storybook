import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { padNum } from "../../../../../services/utils";
import { Text } from "../../../../atoms";
import styles from "./leaderboard-item.styles";

export interface ILeaderboardItemProps {
    coins: number;
    isCurrentUser: boolean;
    name: string;
    rank: number;
    steps: number;
}

const LeaderboardItem: SFC<ILeaderboardItemProps> = ({ isCurrentUser, rank, name, steps, coins }) => (
    <View style={styles.wrapper}>
        <View style={styles.rankWrapper}>
            <Text
                style={StyleSheet.flatten([styles.text, styles.textRight, isCurrentUser ? styles.textHighlighted : {}])}
            >
                {padNum(rank)}
            </Text>
        </View>
        <View style={styles.nameWrapper}>
            <Text style={StyleSheet.flatten([styles.text, isCurrentUser ? styles.textHighlighted : {}])}>{name}</Text>
        </View>
        <View style={styles.yucoinWrapper}>
            <Text
                style={StyleSheet.flatten([
                    styles.text,
                    styles.textSmall,
                    styles.textRight,
                    isCurrentUser ? styles.textHighlighted : {}
                ])}
            >
                {coins}
            </Text>
        </View>
        <View style={styles.stepsWrapper}>
            <Text
                style={StyleSheet.flatten([
                    styles.text,
                    styles.textSmall,
                    styles.textRight,
                    isCurrentUser ? styles.textHighlighted : {}
                ])}
            >
                {steps}
            </Text>
        </View>
    </View>
);

export default LeaderboardItem;
