import { Box, Image, TextTemplate } from "@atoms";
import BoxOption from "../../molecules/box-option/box-option";
import { memo } from "react";
import { IBoxProps } from "@atoms/box/box.types";
import { Style } from "@styles";

interface IRecentRewardCardProps extends IBoxProps {
  onPress?: () => void;
  imageUrl: string;
  label: string;
}

const RecentRewardCard = ({ label, onPress, imageUrl, ...props }: IRecentRewardCardProps) => {
  return (
    <Box flexDirection="column" {...props}>
      <BoxOption showShadow={true} br={Style.adjust(15)} innerHeight={Style.adjust(150)} onPress={onPress}>
        <Box alignItems="center" flexDirection="column" h="100%">
          <Image source={{ uri: imageUrl }} width={"100%"} height={90} resizeMode="cover" borderTopRadius={20} />
          <Box justifyContent="center" alignItems="center" pl={2} w="100%" flex={1}>
            <TextTemplate type="l1b" color="#5A5A5C" textAlign="center" numberOfLines={3}>
              {label}
            </TextTemplate>
          </Box>
        </Box>
      </BoxOption>
    </Box>
  );
};

export default memo(RecentRewardCard);
