import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Pad, Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";

export interface IProps {
    coinsToday: number;
    hasWhiteText?: boolean;
    onCtaPress: () => void;
    steps: number;
}

const DailyStepsOnline: SFC<IProps> = ({ coinsToday, hasWhiteText, onCtaPress, steps }) => (
    <View style={styles.dailyStepsOnlineWrapper}>
        <Text style={hasWhiteText ? styles.whiteText : {}}>{steps} steps</Text>
        <Pad height={8} />
        <Text>
            <Text style={StyleSheet.flatten([styles.heading, hasWhiteText ? styles.whiteText : null])}>
                {`${coinsToday} `}
            </Text>
            <Text style={StyleSheet.flatten([styles.heading, hasWhiteText ? styles.whiteText : null])} bold={true}>
                yu
            </Text>
            <Text style={StyleSheet.flatten([styles.heading, hasWhiteText ? styles.whiteText : null])}>{`coin `}</Text>
            <Text style={StyleSheet.flatten([styles.heading, hasWhiteText ? styles.whiteText : null])}>today</Text>
        </Text>
        <Pad height={22} />
        <Button onPress={onCtaPress} type={Button.Types.PRIMARY_MEDIUM} label="earn more" />
    </View>
);

export default DailyStepsOnline;
