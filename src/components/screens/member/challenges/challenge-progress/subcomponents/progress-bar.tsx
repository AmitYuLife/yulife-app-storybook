import React, { SFC } from "react";
import { View } from "react-native";
import { renderProgressBar, renderProgressLabel } from "./progress-bar.helpers";
import styles from "./progress-bar.styles";

export interface IProps {
    amount: number;
    goals: number[];
    type: "steps" | "minutes" | string;
}

const ProgressBar: SFC<IProps> = ({ amount, goals, type }) => (
    <View style={styles.container}>
        {renderProgressBar({ type, amount, goals })}
        <View style={styles.counterPosition}>
            {renderProgressLabel({ amount, type })}
        </View>
    </View>
);

export default ProgressBar;
