import { useState, useCallback, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "@atoms";
import { Button, DecayingCoin } from "@molecules";
import { IButtonProps } from "@components/molecules/button/button";
import { Style } from "@styles";

type IImpactBuyButtonProps = IButtonProps & {
  showAnimation?: boolean;
};

const ImpactBuyButton = ({ onPress: propsOnPress, showAnimation, ...props }: IImpactBuyButtonProps) => {
  const [coins, setCoins] = useState([]);

  const onPress = useCallback(() => {
    propsOnPress?.();

    if (!showAnimation) {
      return;
    }

    const id = `${Math.random()}`;
    setCoins((prev) => [...prev, { id }]);
  }, [propsOnPress, showAnimation]);

  const removeCoin = useCallback((id: string) => {
    setCoins((prev) => prev.filter((coin) => coin.id !== id));
  }, []);

  return (
    <>
      <Button
        size="Coin"
        delay={0}
        onPress={onPress}
        hitSlop={Style.adjust(20)}
        rightIcon={
          <Image suppressLoadingUi={true} source={require("@assets/icons/yucoin.png")} width={16} height={16} />
        }
        {...props}
      />

      <View style={styles.decayCoinContainer}>
        {coins.map(({ id }) => (
          <DecayingCoin key={id} id={id} onFinish={removeCoin} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  decayCoinContainer: {
    left: Style.adjust(45),
    top: -Style.adjust(45),
  },
});

export default memo(ImpactBuyButton);
