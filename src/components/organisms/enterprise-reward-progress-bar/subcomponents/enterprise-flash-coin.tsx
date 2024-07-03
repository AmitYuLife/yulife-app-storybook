import { Image } from "@atoms";
import { Style } from "@styles";
import { memo, useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BUBBLE_CONTAINER } from "../enterprise-reward-progress-bar";
import { DecayingCoin } from "@components/molecules";

interface IEnterpriseFlashCoinProps {
  step: number;
}

const EnterpriseFlashCoin = ({ step }: IEnterpriseFlashCoinProps) => {
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
    width: BUBBLE_CONTAINER - Style.adjust(5),
    height: BUBBLE_CONTAINER - Style.adjust(5),
  },
  decayingCoinContainer: {
    alignItems: "center",
    position: "absolute",
    width: Style.adjust(55),
    height: Style.adjust(50),
    justifyContent: "center",
  },
});

export default memo(EnterpriseFlashCoin);
