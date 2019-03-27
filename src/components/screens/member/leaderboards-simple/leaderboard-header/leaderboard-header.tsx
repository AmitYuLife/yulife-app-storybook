import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../../atoms";
import styles from "./leaderboard-header.styles";

const LeaderboardHeader: SFC<{}> = () => (
    <View style={styles.wrapper}>
        <View style={styles.rankWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>rank</Text>
        </View>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>name</Text>
        </View>
        <View style={styles.stepsWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>steps</Text>
        </View>
    </View>
);

export default LeaderboardHeader;
