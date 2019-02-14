import * as React from "react";
import { View } from "react-native";
import { renderProgressBar, renderProgressLabel } from "./progress-bar.helpers";
import styles from "./progress-bar.styles";

export type ProgressBarTypes = "black" | "ocean-white" | "ocean-black" | "desert-brown";

export interface IProps {
    amount: number;
    goals: number[];
    styleType?: ProgressBarTypes;
    type: "steps" | "minutes" | string;
}

export default function ProgressBar({ amount, goals, styleType, type }: IProps) {
    return (
        <View style={styles.container}>
            {renderProgressBar({ type, amount, goals, styleType })}
            <View style={styles.counterPosition}>{renderProgressLabel({ amount, type, styleType })}</View>
        </View>
    );
}
