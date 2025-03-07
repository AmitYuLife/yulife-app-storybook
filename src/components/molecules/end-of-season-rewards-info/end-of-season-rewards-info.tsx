import { Box, Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { memo } from "react";

interface IProps {
  items: {
    icon: {
      uri?: string;
    };
    title: string;
    score: string;
  }[];
}

const EndOfSeasonRewardsInfo = ({ items }: IProps) => {
  return (
    <Box bg={Colours.neutral.white} p={16} gap={16} br={8}>
      {items.map(({ title, icon, score }) => (
        <Box key={title} flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box flexDirection="row" alignItems="center" gap={12} flex={0.8}>
            <Image source={icon} width={Style.adjust(32)} height={Style.adjust(32)} />
            <TextTemplate type="l2" numberOfLines={1}>
              {title}
            </TextTemplate>
          </Box>
          <Box alignItems="center">
            <TextTemplate type="b2b">{score}</TextTemplate>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default memo(EndOfSeasonRewardsInfo);
