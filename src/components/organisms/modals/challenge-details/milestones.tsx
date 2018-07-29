import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Text } from "../../../atoms";
import styles from "./challenge-details.styles";

interface IMilestone {
    target: number;
    reward: number;
}

export interface IProps {
    milestones: IMilestone[];
    unit: string;
}

const Milestones: SFC<IProps> = ({ milestones, unit }) => (
    <View>
        {milestones.map(({ target, reward }, index) => (
            <View key={index} style={styles.row}>
                <View style={styles.targetWrapper}>
                    <Text>{`${target} ${unit}`}</Text>
                </View>
                {Array.from({ length: index + 1 }).map(
                    (_, i) => (
                        <Image
                            key={i}
                            source={require("./assets/star.png")}
                            style={styles.starImage}
                        />
                    )
                )}
                <View style={styles.rewardWrapper}>
                    <Text>{`${reward} x`}</Text>
                </View>
                <Image
                    style={styles.yucoinImage}
                    source={require("./assets/yucoin.png")}
                />
            </View>
        ))}
    </View>
);

export default Milestones;
