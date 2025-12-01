import { Box, Image, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { t } from "@locale";
import { memo, useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

const AdviceEmptySection = () => {
  const [bubbleContainerWidth, setBubbleContainerWidth] = useState(0);

  const onBubbleContainerLayout = useCallback((event: LayoutChangeEvent) => {
    setBubbleContainerWidth(event.nativeEvent.layout.width);
  }, []);

  return (
    <Box position="relative" pt={20}>
      <Box justifyContent="center" alignItems="center">
        <Box bg={"#07F"} pv={10} ph={16} br={16} maxWidth={160} onLayout={onBubbleContainerLayout}>
          <TextTemplate type="l1b" color={Colours.neutral.white} textAlign="center">
            {t("screens.pathways.advice_empty_section.title")}
          </TextTemplate>
        </Box>
      </Box>
      <Box h={158} />
      <Box
        position="absolute"
        bottom={5}
        left={bubbleContainerWidth}
        right={0}
        justifyContent="center"
        alignItems="center"
      >
        <Image source={require("@assets/pathways/sea-otter-with-caret.webp")} width={172} autoFlipForRTL={true} />
      </Box>
    </Box>
  );
};

export default memo(AdviceEmptySection);
