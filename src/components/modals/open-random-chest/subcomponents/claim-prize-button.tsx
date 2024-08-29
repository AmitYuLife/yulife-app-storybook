import { Button } from "@components/molecules";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

interface IClaimPrizeButtonProps {
  onPress: () => void;
  isLoading: boolean;
}

const ClaimPrizeButton = ({ onPress, isLoading }: IClaimPrizeButtonProps) => (
  <Animated.View exiting={FadeOutDown.duration(400)} entering={FadeInDown.duration(400)} style={styles.buttonContainer}>
    <Button
      onPress={onPress}
      isLoading={isLoading}
      testID="claimChestPrize"
      translationKey="modals.open_random_chest.claim_prize"
    />
  </Animated.View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: Style.adjust(150),
  },
});

export default memo(ClaimPrizeButton);
