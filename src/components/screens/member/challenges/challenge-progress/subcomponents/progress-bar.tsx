import React, { SFC } from "react";
import { View } from "react-native";
import { renderProgressBar, renderProgressLabel } from "./progress-bar.helpers";
import styles from "./progress-bar.styles";

export interface IProps {
    amount: number;
    goals: number[];
    styleType?: "black" | "ocean-white" | "ocean-black";
    type: "steps" | "minutes" | string;
}

const ProgressBar: SFC<IProps> = ({ amount, goals, styleType, type }) => (
    <View style={styles.container}>
        {renderProgressBar({ type, amount, goals, styleType })}
        <View style={styles.counterPosition}>
            {renderProgressLabel({ amount, type, styleType })}
        </View>
    </View>
);

export default ProgressBar;
