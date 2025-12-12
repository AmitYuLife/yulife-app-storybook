import React, { memo } from "react";
import { Box, TextTemplate, Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style } from "@styles";
import { useSduiActionHandler } from "@components/containers/member/yu/hooks/useSduiActionHandler";
import { SduiAction } from "@graphql/__generated";

interface PathwayAdviceCardProps {
  heading: string;
  label: string;
  image?: string;
  backgroundColor: string;
  shadowColor: string;
  width?: number;
  imageWidth?: number;
  onPress: SduiAction;
}

const CARD_PADDING = Style.adjust(16);

const PathwaysAdviceCard = ({
  heading,
  label,
  onPress: onPressProp,
  image,
  backgroundColor,
  shadowColor,
  imageWidth = 100,
}: PathwayAdviceCardProps) => {
  const onPress = useSduiActionHandler({
    onPress: onPressProp,
  });

  return (
    <TouchableOpacityWithDelay onPress={onPress}>
      <Box
        br={16}
        bg={backgroundColor}
        width={"100%"}
        shadowColor={shadowColor}
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={1}
        shadowRadius={0}
        borderColor={shadowColor}
        borderWidth={1}
      >
        <Box flex={1} p={CARD_PADDING}>
          <Box justifyContent="center" gap={8} mr={imageWidth + 20}>
            <Box opacity={0.6}>
              <TextTemplate type="l2b" color="white">
                {heading}
              </TextTemplate>
            </Box>
            <TextTemplate type="l1b" color="white">
              {label}
            </TextTemplate>
          </Box>
        </Box>

        <Box position="absolute" right={0} bottom={0}>
          <Image source={{ uri: image }} width={imageWidth} autoFlipForRTL={true} />
        </Box>
      </Box>
    </TouchableOpacityWithDelay>
  );
};

export default memo(PathwaysAdviceCard);
