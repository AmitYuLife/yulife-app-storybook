import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../../atoms";
import assets from "./assets";
import styles from "./leaderboard-header.styles";

export interface IProps {
    onCoinPress: () => void;
    sortBy: string;
    onStepsPress: () => void;
}

const LeaderboardHeader: SFC<IProps> = ({ onCoinPress, onStepsPress, sortBy }) => (
    <View style={styles.wrapper}>
        <View style={styles.rankWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>rank</Text>
        </View>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>name</Text>
        </View>
        <TouchableOpacity style={styles.yucoinWrapper} onPress={onCoinPress}>
            {sortBy === "coins" ? (
                <View style={styles.arrowWrapper}>
                    <Image style={styles.arrow} source={assets.arrow} />
                </View>
            ) : null}
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>yucoin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stepsWrapper} onPress={onStepsPress}>
            {sortBy === "steps" ? (
                <View style={styles.arrowWrapper}>
                    <Image style={styles.arrow} source={assets.arrow} />
                </View>
            ) : null}
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>steps</Text>
        </TouchableOpacity>
    </View>
);

export default LeaderboardHeader;
