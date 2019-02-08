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
    return (
        <View style={styles.wrapper}>
            <View style={styles.rankWrapper}>
                <Text
                    style={StyleSheet.flatten([
                        styles.text,
                        styles.textRight,
                        isCurrentUser ? styles.textHighlighted : {}
                    ])}
                >
                    {padNum(rank)}
                </Text>
            </View>
            <View style={styles.nameWrapper}>
                <Text style={StyleSheet.flatten([styles.text, isCurrentUser ? styles.textHighlighted : {}])}>
                    {name}
                </Text>
            </View>
            <View style={styles.yucoinWrapper}>
                <Text
                    style={StyleSheet.flatten([
                        styles.textOpenSans,
                        styles.textRight,
                        isCurrentUser ? styles.textHighlightedOpenSans : {}
                    ])}
                >
                    {numberWithCommas(coins)}
                </Text>
            </View>
            <View style={styles.stepsWrapper}>
                <Text
                    style={StyleSheet.flatten([
                        styles.textOpenSans,
                        styles.textRight,
                        isCurrentUser ? styles.textHighlightedOpenSans : {}
                    ])}
                >
                    {numberWithCommas(steps)}
                </Text>
            </View>
        </View>
    );
}
