import * as React from "react";
import { SFC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../../atoms";
import { LeaderboardTypes } from "../leaderboards.screen";
import styles from "./leaderboard-header.styles";

export interface IProps {
    type: LeaderboardTypes;
    onPressLeft: () => void;
    onPressRight: () => void;
}

const LeaderboardHeader: SFC<IProps> = ({ type, onPressLeft, onPressRight }) => (
    <View style={styles.wrapper}>
        <View style={[styles.arrowWrapper, styles.arrowLeft]}>
            <TouchableOpacity onPress={onPressLeft} style={styles.arrowButton}>
                <Text style={styles.arrowButtonText}>{"<"}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.rankWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>rank</Text>
        </View>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>name</Text>
        </View>
        <View style={styles.stepsWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>{type}</Text>
        </View>
        <View style={[styles.arrowWrapper, styles.arrowRight]}>
            <TouchableOpacity onPress={onPressRight} style={styles.arrowButton}>
                <Text style={styles.arrowButtonText}>{">"}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default LeaderboardHeader;
