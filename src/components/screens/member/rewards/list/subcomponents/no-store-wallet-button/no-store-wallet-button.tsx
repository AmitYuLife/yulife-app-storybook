import { Box, TextTemplate } from "@atoms";
import { WalletIcon } from "@atoms/icon/wallet-icon";
import { ArrowButton, BoxOption } from "@components/molecules";
import { t } from "@locale";
import colours from "@styles/colours";
import { memo } from "react";

interface INoStoreWalletButtonProps {
  onPress?: () => void;
}

const NoStoreWalletButton = ({ onPress }: INoStoreWalletButtonProps) => {
  return (
    <Box px={20}>
      <BoxOption onPress={onPress} isSelected={false} selectedStyle={null} innerHeight={60}>
        <Box flexDirection="row" alignItems="center" h="100%" gap={20} px={20} justifyContent="space-between">
          <Box gap={20} flexDirection="row" alignItems="center">
            <WalletIcon size={22} />
            <TextTemplate type="b2b">{t("screens.rewards.storefront.wallet")}</TextTemplate>
          </Box>
          <ArrowButton color={colours.primary.p600} />
        </Box>
      </BoxOption>
    </Box>
  );
};

export default memo(NoStoreWalletButton);
