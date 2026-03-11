import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { memo } from "react";

export type MobileGameUserWalletUsedSectionHeader = {
  item_type: "used-section-header";
  title: string;
  description?: string;
};

interface IWalletUsedSectionHeaderProps {
  title: string;
  description?: string;
}

const WalletUsedSectionHeader = ({ title, description }: IWalletUsedSectionHeaderProps) => (
  <Box flexDirection="column" mt={24} mb={16}>
    <TextTemplate color={Colours.neutral.n900} type="b1b">
      {title}
    </TextTemplate>
    {description ? (
      <TextTemplate color={Colours.neutral.n900} type="b2">
        {description}
      </TextTemplate>
    ) : null}
  </Box>
);

export default memo(WalletUsedSectionHeader);
