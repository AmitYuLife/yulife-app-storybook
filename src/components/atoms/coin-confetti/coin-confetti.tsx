import * as React from "react";
import { SFC } from "react";
import {
    Image,
    StyleSheet,
    View
} from "react-native";
import { PlusPoints } from "..";
import styles from "./coin-confetti.styles";

interface IProps {
    coins?: number;
    isExpanded?: boolean;
}

const CoinConfetti: SFC<IProps> = ({
    coins,
    isExpanded
}) => (
    <View
        style={StyleSheet.flatten([
            styles.wrapper,
            isExpanded
                ? styles.wrapperExpanded
                : styles.null
        ])}
    >
        <Image source={require("../../../../assets/coin-confetti/coin.png")} />
        <View style={styles.confettiWrapper}>
            <Image
                style={StyleSheet.flatten([
                    styles.confetti,
                    isExpanded
                        ? styles.confettiExpanded
                        : null
                ])}
                source={require("../../../../assets/coin-confetti/confetti.png")}
            />
        </View>
        {!coins ? null : (
            <PlusPoints coins={coins} />
        )}
    </View>
);

export default CoinConfetti;
