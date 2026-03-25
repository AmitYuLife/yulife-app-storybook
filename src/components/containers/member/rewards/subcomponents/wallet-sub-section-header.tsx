import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { memo } from "react";

export type MobileGameUserWalletSubSectionHeader<T extends string> = {
  itemType: T;
  title: string;
  description?: string;
};

interface IWalletSubSectionHeaderProps {
  title: string;
  description?: string;
}

const WalletSubSectionHeader = ({ title, description }: IWalletSubSectionHeaderProps) => (
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

export default memo(WalletSubSectionHeader);
