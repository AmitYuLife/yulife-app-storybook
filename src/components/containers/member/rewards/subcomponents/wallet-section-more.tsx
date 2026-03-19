import { Box, SkeletonLoading } from "@atoms";
import { SecondaryButton } from "@components/molecules";
import { t } from "@locale";
import { memo } from "react";

import { StyleSheet } from "@styles";
export type MobileGameUserWalletMoreAction = {
  item_type: "see_more";
  onPress: () => void;
};

const WalletSectionMore = ({ onPress }: MobileGameUserWalletMoreAction) => (
  <Box flexDirection="row" justifyContent="center" alignItems="center" mb={16}>
    <SecondaryButton
      onPress={onPress}
      translatedLabel={t("screens.rewards.wallet.cta.see_more")}
      testID="wallet-section-more-button"
    />
  </Box>
);

export const WalletSectionMoreLoading = memo(() => (
  <Box flexDirection="row" justifyContent="center" alignItems="center" mb={16}>
    <SkeletonLoading style={styles.skeleton} />
  </Box>
));

const styles = StyleSheet.create({
  skeleton: {
    width: 100,
    height: 40,
    borderRadius: 8,
  },
});

export default memo(WalletSectionMore);
