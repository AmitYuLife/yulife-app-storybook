import { Box, Image } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import BoxOption from "../../molecules/box-option/box-option";
import { memo } from "react";
import { IBoxProps } from "@atoms/box/box.types";
import { Style } from "@styles";

interface IRecentRewardCardProps extends IBoxProps {
  onPress?: () => void;
  imageUrl: string;
}

const RecentRewardCard = ({ onPress, imageUrl, ...props }: IRecentRewardCardProps) => {
  return (
    <Box flexDirection="column" {...props}>
      <BoxOption showShadow={true} br={Style.adjust(10)} innerHeight={Style.adjust(86)} onPress={onPress}>
        <Box flexDirection="row" alignItems="center" p={7} pr={3}>
          <Image source={{ uri: imageUrl }} width={85} height={70} br={7} resizeMode="cover" />
          <Box flex={1} justifyContent="center" alignItems="center" pl={2} w="100%">
            <ChevronIcon size={24} />
          </Box>
        </Box>
      </BoxOption>
    </Box>
  );
};

export default memo(RecentRewardCard);
