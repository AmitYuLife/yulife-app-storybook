import { Button, Pad, Text } from "@atoms/index";
import { Counter } from "@molecules/index";
import * as React from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { getTime } from "../../../../services/utils";
import styles from "./daily-steps.screen.styles";

export interface IProps {
    coinsToday: number;
    showCounter?: boolean;
    onCtaPress?: () => void;
    steps: number;
    textStyle?: TextStyle;
    mindfulSeconds?: number;
}

export default function DailyStepsOnline({
    coinsToday,
    showCounter = false,
    onCtaPress,
    steps,
    textStyle,
    mindfulSeconds = 0
}: IProps) {
    const flattenStyle = StyleSheet.flatten([styles.heading, textStyle]);
    const counterType = steps === 1 ? "step" : "steps";
    const mindfulTotal = getTime(mindfulSeconds);

    return (
        <View style={styles.dailyStepsOnlineWrapper}>
            {showCounter ? (
                <View style={styles.counterWrapper}>
                    <Counter value={steps} textStyle={textStyle} textAfterValue={counterType} />
                    {mindfulSeconds ? (
                        <Text style={textStyle}>{mindfulSeconds ? ` | ${mindfulTotal} mindful mins` : ""}</Text>
                    ) : null}
                </View>
            ) : (
                <Text style={textStyle}>
                    {steps} {counterType}
                    {mindfulSeconds ? ` | ${mindfulTotal} mindful mins` : ""}
                </Text>
            )}
            <Pad height={8} />
            <Text>
                {showCounter ? (
                    <Counter duration={1200} value={coinsToday} textStyle={flattenStyle} />
                ) : (
                    <Text style={flattenStyle}>{coinsToday}</Text>
                )}
                <Text style={flattenStyle} bold={true}>
                    {` yu`}
                </Text>
                <Text style={flattenStyle}>{`coin `}</Text>
                <Text style={flattenStyle}>today</Text>
            </Text>
            <Pad height={22} />
            {!onCtaPress ? null : <Button onPress={onCtaPress} type={Button.Types.PRIMARY_MEDIUM} label="earn more" />}
        </View>
    );
}
