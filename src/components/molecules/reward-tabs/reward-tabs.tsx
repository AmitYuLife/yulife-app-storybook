import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import RewardTab from "./reward-tab/reward-tab";
import styles from "./reward-tabs.styles";

interface IProps {
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
    activeTabIndex: number;
}

const RewardTabs: SFC<IProps> = ({ onLeftTabPress, onRightTabPress, activeTabIndex }) => (
    <View style={styles.wrapper}>
        <View style={styles.bottomBorder} />
        <RewardTab isActive={activeTabIndex === 0} onPress={onLeftTabPress} label="rewards" />
        <View style={styles.dividerWrapper}>
            <View style={styles.divider} />
        </View>
        <RewardTab isActive={activeTabIndex === 1} onPress={onRightTabPress} isFlipped={true} label="purchased" />
    </View>
);

export default RewardTabs;
