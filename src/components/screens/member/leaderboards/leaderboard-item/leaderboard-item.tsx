import { Text } from "@atoms/index";
import { numberWithCommas, padNum } from "@services/utils";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import styles from "./leaderboard-item.styles";

export interface ILeaderboardItemProps {
    coins: number;
    isCurrentUser: boolean;
    name: string;
    rank: number;
    steps: number;
}

export default function LeaderboardItem({ isCurrentUser, rank, name, steps, coins }: ILeaderboardItemProps) {
    const currentUserStyle = isCurrentUser ? styles.textHighlighted : {};
    const textStyle = StyleSheet.flatten([styles.text, currentUserStyle]);
    const textStyleRight = StyleSheet.flatten([styles.text, styles.textRight, currentUserStyle]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.rankWrapper}>
                <Text style={textStyleRight}>{padNum(rank)}</Text>
            </View>
            <View style={styles.nameWrapper}>
                <Text style={textStyle}>{name}</Text>
            </View>
            <View style={styles.yucoinWrapper}>
                <Text style={textStyleRight}>{numberWithCommas(coins)}</Text>
            </View>
            <View style={styles.stepsWrapper}>
                <Text style={textStyleRight}>{numberWithCommas(steps)}</Text>
            </View>
        </View>
    );
}
