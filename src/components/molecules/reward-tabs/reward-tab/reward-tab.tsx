import * as React from "react";
import { SFC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colours } from "../../../../styles";
import { Text } from "../../../atoms";
import Coupon from "../assets/coupon";
import styles from "./reward-tab.styles";

interface IProps {
    label: "rewards" | "purchased";
    isFlipped?: boolean;
    isActive?: boolean;
    onPress: () => void;
}

const RewardTab: SFC<IProps> = ({ isFlipped, isActive, label, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={StyleSheet.flatten([styles.wrapper, isFlipped ? styles.flipped : null, isActive ? styles.active : null])}
    >
        <View style={isFlipped ? styles.couponWrapperFlipped : styles.couponWrapper}>
            <Coupon
                fill={isActive ? Colours.rewardsTabs.active : Colours.rewardsTabs.inactive}
                hasCheckmark={label === "purchased"}
            />
        </View>
        <Text style={isActive ? styles.textActive : styles.text}>{label || ""}</Text>
    </TouchableOpacity>
);

export default RewardTab;
