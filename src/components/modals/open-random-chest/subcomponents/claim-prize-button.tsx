import { Button } from "@components/molecules";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

interface IClaimPrizeButtonProps {
  onPress: () => void;
  shouldShow?: boolean;
  isLoading: boolean;
}

const ClaimPrizeButton = ({ onPress, isLoading, shouldShow }: IClaimPrizeButtonProps) => (
  <View style={styles.container}>
    {shouldShow ? (
      <Animated.View exiting={FadeOutDown.duration(250)} entering={FadeInDown.duration(250)}>
        <Button
          onPress={onPress}
          isLoading={isLoading}
          testID="claimChestPrize"
          translationKey="modals.open_random_chest.claim_reward"
        />
      </Animated.View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: Style.adjust(100),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default memo(ClaimPrizeButton);
