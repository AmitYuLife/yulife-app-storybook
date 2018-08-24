import * as React from "react";
import { SFC } from "react";
import { Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";
import { Platform } from "react-native";

const DailyStepsFitKitUnavailable: SFC<{}> = () => (
    <>
        <Text
            bold={true}
            style={styles.headingOffline}
        >
            {`device not supported`}
        </Text>
        <Text style={styles.lastUpdate}>
            {Platform.select({
                android: "your device requires Google Play Services in order to use this app.",
                ios: "your device requires Apple Healthkit in order to use this app.",
            })}
        </Text>
    </>
);

export default DailyStepsFitKitUnavailable;
