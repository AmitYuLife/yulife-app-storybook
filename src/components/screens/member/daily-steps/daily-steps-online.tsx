import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Button, Pad, Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";

export interface IProps {
    coinsToday: number;
    onCtaPress: () => void;
    steps: number;
}

const DailyStepsOnline: SFC<IProps> = ({ coinsToday, onCtaPress, steps }) => (
    <View style={styles.dailyStepsOnlineWrapper}>
        <Text>{steps} steps</Text>
        <Pad height={8} />
        <Text>
            <Text
                style={styles.heading}
            >
                {`${coinsToday} `}
            </Text>
            <Text
                style={styles.heading}
                bold={true}
            >
                yu
            </Text>
            <Text
                style={styles.heading}
            >
                {`coin `}
            </Text>
            <Text
                style={styles.heading}
            >
                today
            </Text>
        </Text>
        <Pad height={22} />
        <Button
            onPress={onCtaPress}
            type={Button.Types.PRIMARY_MEDIUM}
            label="earn more"
        />
    </View>
);

export default DailyStepsOnline;
