import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Pad, Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";

export interface IProps {
    coinsToday: number;
    isLight?: boolean;
    onCtaPress?: () => void;
    steps: number;
}

export default function DailyStepsOnline({ coinsToday, isLight, onCtaPress, steps }: IProps) {
    const whiteStyle = isLight ? styles.whiteText : {};
    const flattenStyle = StyleSheet.flatten([styles.heading, whiteStyle]);

    return (
        <View style={styles.dailyStepsOnlineWrapper}>
            <Text style={whiteStyle}>{steps} steps</Text>
            <Pad height={8} />
            <Text>
                <Text style={flattenStyle}>{`${coinsToday} `}</Text>
                <Text style={flattenStyle} bold={true}>
                    yu
                </Text>
                <Text style={flattenStyle}>{`coin `}</Text>
                <Text style={flattenStyle}>today</Text>
            </Text>
            <Pad height={22} />
            {!onCtaPress ? null : <Button onPress={onCtaPress} type={Button.Types.PRIMARY_MEDIUM} label="earn more" />}
        </View>
    );
}
