import { useState, useCallback, memo } from "react";
import { GestureResponderEvent, LayoutChangeEvent, StyleSheet, View } from "react-native";
import { Image } from "@atoms";
import { Button } from "@molecules";
import { IButtonProps } from "@components/molecules/button/button";
import { Style } from "@styles";
import { useBattlePassAnimationContext } from "@components/containers/battlePass/battlePass-animation.context";

type IBattlePassDonationBuyButtonProps = IButtonProps & {
  showAnimation?: boolean;
};

const BattlePassDonationBuyButton = ({ onPress: propsOnPress, ...props }: IBattlePassDonationBuyButtonProps) => {
  const [xOffset, setXOffset] = useState<number>(0);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setXOffset(event.nativeEvent.layout.x + event.nativeEvent.layout.width - Style.adjust(35));
  }, []);

  const { addVelocityCoin } = useBattlePassAnimationContext();

  const onPress = useCallback(
    (event?: GestureResponderEvent) => {
      addVelocityCoin({ x: xOffset, y: event.nativeEvent.pageY - Style.adjust(25) });
      propsOnPress?.();
    },
    [addVelocityCoin, propsOnPress, xOffset]
  );

  return (
    <View onLayout={onLayout} style={styles.container}>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: Style.adjust(10),
    paddingRight: Style.adjust(20),
    alignItems: "center",
  },
});

export default memo(BattlePassDonationBuyButton);
