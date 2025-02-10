import { useCallback, memo, useState } from "react";
import { GestureResponderEvent, LayoutChangeEvent, StyleSheet, View } from "react-native";
import { Image } from "@atoms";
import { Button } from "@molecules";
import { IButtonProps } from "@components/molecules/button/button";
import { Style } from "@styles";
// TODO: no imports from containers!
import { useBattlePassAnimationContext } from "@components/containers/battle-pass/battle-pass-animation.context";

type IBattlePassDonationBuyButtonProps = IButtonProps & {
  showAnimation?: boolean;
  x?: number;
};

const ICON_SIZE = 16;
const BattlePassDonationBuyButton = ({
  onPress: propsOnPress,
  x,
  showAnimation,
  ...props
}: IBattlePassDonationBuyButtonProps) => {
  const [width, setWidth] = useState<number>(0);
  const { addVelocityCoin } = useBattlePassAnimationContext();

  const onPress = useCallback(
    (event?: GestureResponderEvent) => {
      const yPosition = event?.nativeEvent.pageY;
      // If screen reader is enabled, we do not get nativeEvent returtned so we will skip the aniamtion
      if (showAnimation && yPosition) {
        addVelocityCoin({ x: x + width - Style.adjust(ICON_SIZE), y: yPosition - Style.adjust(25) });
      }

      propsOnPress?.();
    },
    [addVelocityCoin, propsOnPress, width, x, showAnimation]
  );

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width + event.nativeEvent.layout.x);
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Button
        size="Coin"
        delay={0}
        onPress={onPress}
        hitSlop={Style.adjust(20)}
        rightIcon={
          <Image
            suppressLoadingUi={true}
            source={require("@assets/icons/yucoin.png")}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        }
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -Style.adjust(32),
  },
});

export default memo(BattlePassDonationBuyButton);
