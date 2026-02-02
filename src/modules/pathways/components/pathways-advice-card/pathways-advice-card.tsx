import React, { memo } from "react";
import { Box, TextTemplate, Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { useSduiActionHandler } from "@components/containers/member/yu/hooks/useSduiActionHandler";
import { SduiAction } from "@graphql/__generated";
import { PATHWAYS_ADVICE_CARD, PATHWAYS_ADVICE_LABEL, PATHWAYS_ADVICE_TITLE } from "@ids";
import { Style } from "@styles";

interface PathwayAdviceCardProps {
  heading: string;
  label: string;
  image?: string;
  backgroundColor: string;
  shadowColor: string;
  width?: number;
  onPress: SduiAction;
}

const CARD_PADDING = 16;
const MIN_CARD_HEIGHT = 120;
const IMAGE_WIDTH = 120;

const PathwaysAdviceCard = ({
  heading,
  label,
  onPress: onPressProp,
  image,
  backgroundColor,
  shadowColor,
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
        minHeight={MIN_CARD_HEIGHT}
        shadowColor={shadowColor}
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={1}
        shadowRadius={0}
        borderColor={shadowColor}
        borderWidth={1}
      >
        <Box flex={1} p={CARD_PADDING}>
          <Box justifyContent="center" gap={8} mr={IMAGE_WIDTH + 20} testID={PATHWAYS_ADVICE_CARD}>
            <Box opacity={0.6}>
              <TextTemplate type="l2b" color="white" testID={PATHWAYS_ADVICE_TITLE(heading)}>
                {heading}
              </TextTemplate>
            </Box>
            <TextTemplate type="l1b" color="white" testID={PATHWAYS_ADVICE_LABEL(label)}>
              {label}
            </TextTemplate>
          </Box>
        </Box>

        <Box position="absolute" right={0} bottom={0}>
          <Image source={{ uri: image }} width={Style.adjust(IMAGE_WIDTH)} autoFlipForRTL={true} />
        </Box>
      </Box>
    </TouchableOpacityWithDelay>
  );
};

export default memo(PathwaysAdviceCard);
