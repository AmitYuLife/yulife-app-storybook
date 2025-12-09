import { Box, RawImage, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Colours } from "@styles";

interface IPathwaysReflectionRewardProps extends IBoxProps {
  yucoinAmount: number;
}

export const PathwaysReflectionReward = ({ yucoinAmount, ...props }: IPathwaysReflectionRewardProps) => {
  return (
    <Box gap={5} flexDirection="row" alignItems="center" justifyContent="center" {...props}>
      <TextTemplate type="l1b" color={Colours.neutral.white}>
        {yucoinAmount}
      </TextTemplate>
      <RawImage source={require("@assets/icons/yucoin.png")} w={15} h={15} contentFit="contain" />
    </Box>
  );
};
