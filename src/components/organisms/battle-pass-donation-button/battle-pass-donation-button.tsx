import { useCallback, memo } from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Image } from "@atoms";
import { Button } from "@molecules";
import { IButtonProps } from "@components/molecules/button/button";
import { Style } from "@styles";
// TODO: no imports from containers!
import { useBattlePassAnimationContext } from "@components/containers/battle-pass/battle-pass-animation.context";

type IBattlePassDonationBuyButtonProps = IButtonProps & {
  showAnimation?: boolean;
};

const BattlePassDonationBuyButton = ({ onPress: propsOnPress, ...props }: IBattlePassDonationBuyButtonProps) => {
  const { addVelocityCoin } = useBattlePassAnimationContext();

  const onPress = useCallback(
    (event?: GestureResponderEvent) => {
      addVelocityCoin({ x: Style.DEVICE_WIDTH - Style.adjust(68), y: event.nativeEvent.pageY - Style.adjust(25) });
      propsOnPress?.();
    },
    [addVelocityCoin, propsOnPress]
  );

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: Style.adjust(32),
  },
});

export default memo(BattlePassDonationBuyButton);
