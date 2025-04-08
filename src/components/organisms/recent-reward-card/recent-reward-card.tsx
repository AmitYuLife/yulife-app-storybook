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
      <BoxOption showShadow={true} br={Style.adjust(18)} innerHeight={Style.adjust(130)} onPress={onPress}>
        <Box alignItems="center" flexDirection="column" h="100%">
          <Box alignItems="center" flexDirection="column" w="100%" mb={-10}>
            <Image source={{ uri: imageUrl }} width={"100%"} height={90} resizeMode="cover" borderTopRadius={18} />
            {/* Hide a bit of the bottom of the image as some reward images have border radius in the images!! >_< */}
            <Box bottom={0} w="100%" position="absolute" bg="#FFFFFF" h={10} />
          </Box>
          <Box justifyContent="center" alignItems="center" pl={2} w="100%" flex={1}>
            <TextTemplate type="l1b" color="#5A5A5C" textAlign="center" numberOfLines={2}>
              {label}
            </TextTemplate>
          </Box>
        </Box>
      </BoxOption>
    </Box>
  );
};

export default memo(RecentRewardCard);
