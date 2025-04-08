import { Box, TextTemplate } from "@atoms";
import { ReactNode, memo } from "react";

interface IRewardHeaderProps {
  children?: ReactNode;
}

const RewardSectionHeader = ({ children }: IRewardHeaderProps) => {
  return (
    <Box pb={16} pt={5} px={20}>
      <TextTemplate type="b1b">{children}</TextTemplate>
    </Box>
  );
};

export default memo(RewardSectionHeader);
