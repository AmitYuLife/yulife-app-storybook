import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Text } from "../../../../atoms";
import styles from "./challenge-details.styles";

export interface IMilestone {
    target: number;
    reward: number;
}

export interface IMilestoneProps {
    milestones: IMilestone[];
    unit: string;
}

const getTargetByUnit = (target: number, unit: string) => {
    switch (unit) {
        case "minutes":
            return Math.floor(target / 60);

        default:
            return target;
    }
};

const translateUnit = (unit: string) => {
    switch (unit) {
        case "minutes":
            return "mins";

        default:
            return unit;
    }
};

const Milestones: SFC<IMilestoneProps> = ({ milestones, unit }) => (
    <>
        {milestones.map(({ target, reward }, index) => (
            <View key={index} style={styles.row}>
                <View style={styles.targetWrapper}>
                    <Text>{`${getTargetByUnit(target, unit)} ${translateUnit(unit)}`}</Text>
                </View>
                {Array.from({ length: milestones.length === 1 ? 3 : index + 1 }).map((_, i) => (
                    <Image
                        key={i}
                        source={require("../../../../../../assets/challenge-details/star.png")}
                        style={styles.starImage}
                    />
                ))}
                <View style={styles.rewardWrapper}>
                    <Text>{`${reward} x`}</Text>
                </View>
                <Image
                    style={styles.yucoinImage}
                    source={require("../../../../../../assets/challenge-details/yucoin.png")}
                />
            </View>
        ))}
    </>
);

export default Milestones;
