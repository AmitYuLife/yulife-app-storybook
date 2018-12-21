import * as React from "react";
import { SFC } from "react";
import { StyleSheet } from "react-native";
import { Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";

export interface IProps {
    hasWhiteText?: boolean;
    lastUpdate?: string;
}

const DailyStepsOffline: SFC<IProps> = ({ hasWhiteText = false, lastUpdate }) => (
    <>
        <Text bold={true} style={StyleSheet.flatten([styles.headingOffline, hasWhiteText ? styles.whiteText : {}])}>
            {`you’re offline`}
        </Text>
        <Text style={StyleSheet.flatten([styles.lastUpdate, hasWhiteText ? styles.whiteText : {}])}>
            {`Your steps will update when next online Last update: ${lastUpdate || "unknown"}`}
        </Text>
    </>
);

export default DailyStepsOffline;
