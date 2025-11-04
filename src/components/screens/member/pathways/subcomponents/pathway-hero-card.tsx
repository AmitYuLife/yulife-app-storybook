import React, { memo } from "react";
import { Box, TextTemplate, Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style } from "@styles";
import { useSduiActionHandler } from "@components/containers/member/yu/hooks/useSduiActionHandler";
import { SduiAction } from "@graphql/__generated";

interface PathwayHeroCardProps {
  heading: string;
  label: string;
  image?: string;
  backgroundColor: string;
  width?: number;
  imageWidth?: number;
  onPress: SduiAction;
}

const CARD_PADDING = Style.adjust(16);

export const PATHWAY_HERO_CARD_HEIGHT = 152;
export const PATHWAY_HERO_CARD_WIDTH = Style.DEVICE_WIDTH - Style.adjust(64);

const PathwayHeroCard = ({
  heading,
  label,
  onPress: onPressProp,
  image,
  backgroundColor,
  width = PATHWAY_HERO_CARD_WIDTH,
  imageWidth = PATHWAY_HERO_CARD_WIDTH / 3,
}: PathwayHeroCardProps) => {
  const onPress = useSduiActionHandler({
    onPress: onPressProp,
  });

  return (
    <TouchableOpacityWithDelay onPress={onPress}>
      <Box br={16} overflow="hidden" bg={backgroundColor} width={width} height={PATHWAY_HERO_CARD_HEIGHT}>
        <Box flex={1} p={CARD_PADDING}>
          <Box maxWidth={width - imageWidth - CARD_PADDING} justifyContent="center" gap={Style.adjust(8)}>
            <TextTemplate type="b1b" color="white" lineHeight={Style.adjust(20)}>
              {heading}
            </TextTemplate>
            <TextTemplate type="b2" color="white" lineHeight={Style.adjust(24)} numberOfLines={4}>
              {label}
            </TextTemplate>
          </Box>
        </Box>

        <Box position="absolute" right={0} bottom={0}>
          <Image source={{ uri: image }} width={imageWidth} />
        </Box>
      </Box>
    </TouchableOpacityWithDelay>
  );
};

export default memo(PathwayHeroCard);
