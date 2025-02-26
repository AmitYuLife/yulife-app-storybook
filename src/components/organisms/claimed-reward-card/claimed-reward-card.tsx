import { Box, Image, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Style } from "@styles";
import { memo } from "react";

interface IClaimedRewardProps extends IBoxProps {
  image: string;
  title: string;
  value: string;
}

const ClaimedReward = ({ image, title, value, ...props }: IClaimedRewardProps) => {
  const maxWidth = Style.SCREEN_WIDTH / 3 - 10;
  return (
    <Box br={10} borderBottomWidth={4} borderColor="#DFD3FF" bg="white" w={115} maxWidth={maxWidth} {...props}>
      <Box borderWidth={1} borderTopRadius={12} borderColor="white" overflow="hidden" w="100%" height={90}>
        <Image source={{ uri: image }} width="100%" height={90} resizeMode="cover" />
      </Box>
      <Box py={10} justifyContent="center" alignItems="center">
        <Box>
          <TextTemplate type="b2b" textAlign="center">
            {title}
          </TextTemplate>
          <TextTemplate type="b2b" textAlign="center" color="#956AFF">
            {value}
          </TextTemplate>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ClaimedReward);
