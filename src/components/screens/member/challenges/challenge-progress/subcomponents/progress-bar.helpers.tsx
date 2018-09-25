import React, { SFC } from "react";
import { Text } from "react-native";
import { padNum } from "../../../../../../services/utils";
import Progress from "./progress";
import { IProps } from "./progress-bar";
import styles from "./progress-bar.styles";

export const renderProgressBar: SFC<IProps> = ({ type, amount, goals }) => {
    switch (goals.length) {
        case 1:
            return (
                <Progress
                    amount={amount}
                    goal={goals[0]}
                    type={type}
                />
            );

        case 2:
            return (
                <>
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[0]}
                    />
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[1]}
                        previousGoal={goals[0]}
                        width={50}
                    />
                </>
            );

        case 3:
            return (
                <>
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[0]}
                    />
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[1]}
                        previousGoal={goals[0]}
                        width={50}
                    />
                    <Progress
                        type={type}
                        amount={amount}
                        goal={goals[2]}
                        previousGoal={goals[1]}
                        width={50}
                    />
                </>
            );

        default:
            return null;
    }
};

export const renderProgressLabel = ({ amount, type }: Partial<IProps>): React.ReactNode => {
    switch (type) {
        case "steps":
            return (
                <Text style={styles.stepsText}>
                    {`${amount} ${type}`}
                </Text>
            );

        case "minutes":
            const { minutes, seconds } = displaySecondsAsMinutes(amount);

            return (
                <>
                    <Text style={styles.stepsText}>
                        {padNum(minutes)}
                    </Text>
                    <Text style={styles.timeLabel}>
                        Min
                    </Text>
                    <Text style={styles.stepsText}>
                        {padNum(seconds)}
                    </Text>
                    <Text style={styles.timeLabel}>
                        Sec
                    </Text>
                </>
            );

        default:
            return "No type!";
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
