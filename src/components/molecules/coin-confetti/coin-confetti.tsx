import * as React from "react";
import { FC } from "react";
import { VIEW_CONFETTI_COIN } from "@ids";
import { Style } from "@styles";
import { Image, View } from "react-native";
import AnimatedPlusPoints from "../plus-points/animated-plus-points";
import PlusPoints from "../plus-points/plus-points";
import styles from "./coin-confetti.styles";

type AnimatedType = "collect-reward" | "challenge-success";

interface IProps {
  coins?: number;
  isExpanded?: boolean;
  animationType?: AnimatedType;
}

const CoinConfetti: FC<IProps> = ({ coins, isExpanded, animationType }) => (
  <View testID={VIEW_CONFETTI_COIN(coins)} style={styles.wrapper}>
    <Image source={require("../../../../assets/coin-confetti/coin.png")} style={styles.coinImage} />
    <View style={styles.confettiWrapper}>
      <Image style={styles.confetti} source={require("../../../../assets/coin-confetti/confetti.png")} />
    </View>
    <View style={[styles.coinWrapper, { top: Style.adjust(isExpanded ? -30 : -10) }]}>
      {!coins ? null : animationType ? (
        <AnimatedPlusPoints type={animationType} coins={coins} />
      ) : (
        <PlusPoints coins={coins} />
      )}
    </View>
  </View>
);

export default CoinConfetti;
