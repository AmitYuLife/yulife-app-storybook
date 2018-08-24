import * as React from "react";
import { SFC } from "react";
import { Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";

export interface IProps {
    lastUpdate?: string;
}

const DailyStepsOffline: SFC<IProps> = ({ lastUpdate }) => (
    <>
        <Text
            bold={true}
            style={styles.headingOffline}
        >
            {`You’re offline`}
        </Text>
        <Text style={styles.lastUpdate}>
            {`Your steps will update when next online Last update: ${lastUpdate || "unknown"}`}
        </Text>
    </>
);

export default DailyStepsOffline;
