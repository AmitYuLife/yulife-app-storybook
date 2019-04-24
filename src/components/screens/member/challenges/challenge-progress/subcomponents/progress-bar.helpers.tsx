import { Counter } from "@molecules/index";
import React, { SFC } from "react";
import { StyleSheet, Text } from "react-native";
import { padNum } from "../../../../../../services/utils";
import Progress from "./progress";
import { IProps } from "./progress-bar";
import styles from "./progress-bar.styles";

export const renderProgressBar: SFC<IProps> = ({ amount, goals, styleType, type }) => {
    switch (goals.length) {
        case 1:
            return <Progress amount={amount} goal={goals[0]} styleType={styleType} type={type} />;

        case 2:
            return (
                <>
                    <Progress type={type} amount={amount} goal={goals[0]} styleType={styleType} />
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[1]}
                        styleType={styleType}
                        previousGoal={goals[0]}
                        width={50}
                    />
                </>
            );

        case 3:
            return (
                <>
                    <Progress type={type} amount={amount} goal={goals[0]} styleType={styleType} />
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[1]}
                        styleType={styleType}
                        previousGoal={goals[0]}
                        width={50}
                    />
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[2]}
                        styleType={styleType}
                        previousGoal={goals[1]}
                        width={50}
                    />
                </>
            );

        default:
            return null;
    }
};

export const renderProgressLabel = ({
    amount,
    showCounter,
    styleType = "black",
    type
}: Partial<IProps>): React.ReactNode => {
    const textColorStyle = getProgressLabelTextColor(styleType);

    const typeText = type === "steps" && amount === 1 ? "step" : type;
    switch (type) {
        case "steps":
            return showCounter ? (
                <Counter
                    value={amount}
                    textStyle={StyleSheet.flatten([styles.stepsText, textColorStyle])}
                    textAfterValue={typeText}
                />
            ) : (
                <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>{`${amount} ${typeText}`}</Text>
            );

        case "minutes":
            const { minutes, seconds } = displaySecondsAsMinutes(amount);

            return (
                <>
                    <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>{padNum(minutes)}</Text>
                    <Text style={StyleSheet.flatten([styles.timeLabel, textColorStyle])}>min</Text>
                    <Text style={StyleSheet.flatten([styles.stepsText, textColorStyle])}>{padNum(seconds)}</Text>
                    <Text style={StyleSheet.flatten([styles.timeLabel, textColorStyle])}>sec</Text>
                </>
            );

        default:
            return null;
    }
};

const displaySecondsAsMinutes = (amount: number): { minutes: number; seconds: number } => {
    const minutes = Math.floor(amount / 60);
    const seconds = amount % 60;

    return {
        minutes,
        seconds
    };
};

const getProgressLabelTextColor = (styleType: IProps["styleType"]) => {
    switch (styleType) {
        case "ocean-white":
            return styles.stepsTextWhite;
        case "ocean-black":
        case "black":
        default:
            return styles.stepsTextBlack;
    }
};
