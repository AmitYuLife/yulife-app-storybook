import { Image } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { DecayingCoin } from "@components/molecules";
import { BUBBLE_CONTAINER_SIZE } from "../battle-pass-progress-bar.constants";

interface IBattlePassFlashCoinProps {
  step: number;
}

const BattlePassFlashCoin = ({ step }: IBattlePassFlashCoinProps) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const id = `${Math.random()}`;
    setCoins((prev) => [...prev, { id }]);
  }, [step]);

  const removeCoin = useCallback((id: string) => {
    setCoins((prev) => prev.filter((coin) => coin.id !== id));
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.decayingCoinContainer}>
        {coins.map(({ id }) => (
          <DecayingCoin scaleMultiplier={1.5} scaleOnly={true} key={id} id={id} onFinish={removeCoin} />
        ))}
      </View>
      <Image source={require("@assets/icons/yucoin.png")} {...styles.yucoinImage} suppressLoadingUi={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  yucoinImage: {
    width: BUBBLE_CONTAINER_SIZE - Style.adjust(5),
    height: BUBBLE_CONTAINER_SIZE - Style.adjust(5),
  },
  decayingCoinContainer: {
    alignItems: "center",
    position: "absolute",
    width: Style.adjust(55),
    height: Style.adjust(50),
    justifyContent: "center",
  },
});

export default memo(BattlePassFlashCoin);
