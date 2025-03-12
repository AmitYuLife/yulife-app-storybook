import { Box, Image, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Style } from "@styles";
import { memo } from "react";

interface IClaimedRewardProps extends IBoxProps {
  image: string;
  title: string;
  value?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const ClaimedReward = ({ image, color, backgroundColor, borderColor, title, value, ...props }: IClaimedRewardProps) => {
  const maxWidth = Style.SCREEN_WIDTH / 3 - 10;
  return (
    <Box
      aspectRatio={5 / 7}
      br={20}
      borderBottomWidth={4}
      borderColor={borderColor}
      borderWidth={1}
      bg={backgroundColor}
      w={115}
      maxWidth={maxWidth}
      {...props}
    >
      <Box borderTopRadius={12} borderColor={borderColor} overflow="hidden" w="100%" px={5} pt={5}>
        <Image
          source={{ uri: image }}
          overflow="hidden"
          width="100%"
          resizeMode="cover"
          borderBottomRadius={0}
          borderTopRadius={15}
          br={0}
          height={80}
        />
      </Box>
      <Box py={0} flex={1} pt={0} justifyContent="center" alignItems="flex-end" flexDirection="row">
        <Box px={12} pb={15} justifyContent="center" flex={1} h="100%">
          <TextTemplate type="l1b" textAlign="center" color={color} numberOfLines={3}>
            {title}
          </TextTemplate>
          {value ? (
            <TextTemplate type="b2b" textAlign="center" color="#956AFF">
              {value}
            </TextTemplate>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ClaimedReward);
