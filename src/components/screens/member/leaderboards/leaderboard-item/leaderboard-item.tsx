import { Text } from "@atoms/index";
import { numberWithCommas, padNum } from "@services/utils";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LeaderboardTypes } from "../leaderboards.screen";
import styles from "./leaderboard-item.styles";

export interface ILeaderboardItemProps {
    coins: number;
    isCurrentUser: boolean;
    name: string;
    rank: number;
    steps: number;
    type: LeaderboardTypes;
}

export default function LeaderboardItem({ isCurrentUser, rank, name, steps, coins, type }: ILeaderboardItemProps) {
    const currentUserStyle = isCurrentUser ? styles.textHighlighted : {};
    const textStyleRightSmall = StyleSheet.flatten([styles.text, styles.textRight, styles.textSmall, currentUserStyle]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.rankWrapper}>
                <Text style={StyleSheet.flatten([styles.text, styles.textRight, currentUserStyle])}>
                    {padNum(rank, -3)}
                </Text>
            </View>
            <View style={styles.nameWrapper}>
                <Text style={StyleSheet.flatten([styles.text, currentUserStyle])}>{name}</Text>
            </View>
            <View style={styles.stepsWrapper}>
                <Text style={textStyleRightSmall}>{numberWithCommas(type === "yucoin" ? coins : steps)}</Text>
            </View>
        </View>
    );
}
