import { Text } from "@atoms/index";
import { numberWithCommas } from "@services/utils";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import assets from "../assets";
import styles from "./leaderboard-item.styles";

export interface ILeaderboardItemProps {
    coins: number;
    isCurrentUser: boolean;
    name: string;
    rank: number;
    steps: number;
    sortBy: string;
}

export default function LeaderboardItem({ isCurrentUser, rank, name, steps, coins, sortBy }: ILeaderboardItemProps) {
    const currentUserStyle = isCurrentUser ? styles.textHighlighted : {};
    const textStyleRightSmall = StyleSheet.flatten([styles.text, styles.textRight, styles.textSmall, currentUserStyle]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.borderWrapper}>
                <View style={styles.rankWrapper}>
                    {rank <= 3 ? (
                        renderRankImage(rank)
                    ) : (
                        <Text style={StyleSheet.flatten([styles.text, styles.textRight, currentUserStyle])}>
                            {rank}
                        </Text>
                    )}
                </View>
                <View style={styles.nameWrapper}>
                    <Text style={StyleSheet.flatten([styles.text, currentUserStyle])}>{name}</Text>
                </View>
                <View style={styles.stepsWrapper}>
                    <Text style={textStyleRightSmall}>{getDataByCategory(sortBy, steps, coins)}</Text>
                </View>
            </View>
        </View>
    );
}

function getDataByCategory(sortBy: string, steps: number, coins: number) {
    // todo fix data of mindful mins
    switch (sortBy) {
        case "coins":
            return numberWithCommas(coins);
        case "steps":
        default:
            return numberWithCommas(steps);
    }
}

function renderRankImage(rank: number) {
    let source;
    switch (rank) {
        case 1:
            source = assets.first;
            break;
        case 2:
            source = assets.second;
            break;
        case 3:
        default:
            source = assets.third;
            break;
    }
    return (
        <View>
            <Image style={styles.rankImage} source={source} />
        </View>
    );
}
