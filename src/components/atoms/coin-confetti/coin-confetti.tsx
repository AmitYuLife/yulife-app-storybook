import { VIEW_CONFETTI_COIN } from "@ids";
import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import AnimatedPlusPoints from "../plus-points/animated-plus-points";
import PlusPoints from "../plus-points/plus-points";
import styles from "./coin-confetti.styles";

type AnimatedType = "collect-reward" | "challenge-success";

interface IProps {
    coins?: number;
    isExpanded?: boolean;
    animationType?: AnimatedType;
}

const CoinConfetti: SFC<IProps> = ({ coins, isExpanded, animationType }) => (
    <View
        testID={VIEW_CONFETTI_COIN(coins)}
        style={StyleSheet.flatten([styles.wrapper, isExpanded ? styles.wrapperExpanded : styles.null])}
    >
        <Image source={require("../../../../assets/coin-confetti/coin.png")} />
        <View style={styles.confettiWrapper}>
            <Image
                style={StyleSheet.flatten([styles.confetti, isExpanded ? styles.confettiExpanded : null])}
                source={require("../../../../assets/coin-confetti/confetti.png")}
            />
        </View>
        {!coins ? null : animationType ? (
            <AnimatedPlusPoints type={animationType} coins={coins} />
        ) : (
            <PlusPoints coins={coins} />
        )}
    </View>
);

export default CoinConfetti;
