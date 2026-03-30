import { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import { clamp } from "lodash";
import {
  SMOKING_CELEBRATION_CTA,
  SMOKING_CELEBRATION_CUSTOM_IMAGE,
  SMOKING_CELEBRATION_DAYS,
  SMOKING_CELEBRATION_DESCRIPTION,
  SMOKING_CELEBRATION_IMAGE_CONTAINER,
  SMOKING_CELEBRATION_TIPS_CONTAINER,
  SMOKING_CELEBRATION_TITLE,
  SMOKING_CELEBRATION_YUCOIN,
} from "@ids";
import { Box, Image, TextTemplate } from "@atoms";
import { GenericYucoin } from "@atoms/yucoin-badge";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { TipCard } from "@organisms";
import { Colours, Style, templateTextMarkdownStyles, StyleSheet } from "@styles";
import { Button, Markdown } from "@components/molecules";
import { VoidFunctionOrPromise } from "@utils";
import {
  CUSTOM_IMAGE_SIZE,
  DEFAULT_MAIN_IMAGE_SIZE,
  ICON_Y_OFFSET,
  MAX_SIZE_GAPS_EXPECTED_HEIGHT,
} from "./smoking-celebration-constants";
import { SmokingCelebrationDisplayProps } from "./smoking-celebration-types";
import { useSmokingCelebrationAnimations } from "./use-smoking-celebration-animations";
import RaysSpotlightFocal from "@organisms/rays/rays-spotlight-focal";

export type SmokingCelebrationProps = SmokingCelebrationDisplayProps & {
  onPress?: VoidFunctionOrPromise;
  minHeight?: number;
};

const SmokingCelebration = (props: SmokingCelebrationProps) => {
  const { minHeight, onPress } = props;
  const { displayProps, animatedStyles } = useSmokingCelebrationAnimations({
    smokingCelebrationProps: props,
  });

  // TODO: wtf is this
  const calculateGap = useCallback(
    (min: number, max: number) => {
      if (!minHeight) {
        return max;
      }

      const ratio = minHeight / MAX_SIZE_GAPS_EXPECTED_HEIGHT;
      return clamp(Math.floor(ratio * max), min, max);
    },
    [minHeight]
  );

  const gaps = useMemo(
    () => ({
      contentMarginTop: calculateGap(20, 40),
      content: calculateGap(20, 100),
      texts: calculateGap(7, 10),
    }),
    [calculateGap]
  );

  return (
    <Box forceAnimated={true} pb={10} flex={1} style={animatedStyles.container}>
      <Box flex={1} ph={38} justifyContent="space-between" alignItems="center">
        <Box gap={gaps.content} mt={gaps.contentMarginTop} alignItems="center">
          {displayProps.title || displayProps.daysHeading || displayProps.yuCoin ? (
            <Box gap={gaps.texts}>
              {displayProps.title ? (
                <Box forceAnimated={true} style={animatedStyles.title}>
                  <TextTemplate
                    color={Colours.neutral.white}
                    type="h2"
                    textAlign="center"
                    testID={SMOKING_CELEBRATION_TITLE}
                  >
                    {displayProps.title}
                  </TextTemplate>
                </Box>
              ) : null}

              {displayProps.daysHeading ? (
                <Box forceAnimated={true} mt={displayProps.title ? 10 : 0} style={animatedStyles.days}>
                  <TextTemplate
                    color={Colours.neutral.white}
                    type="big64"
                    textAlign="center"
                    testID={SMOKING_CELEBRATION_DAYS(displayProps.daysHeading)}
                  >
                    {displayProps.daysHeading}
                  </TextTemplate>
                </Box>
              ) : null}

              <Box forceAnimated={true} style={animatedStyles.yuCoin}>
                <Box
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  opacity={displayProps.yuCoin ? 1 : 0}
                >
                  <TextTemplate
                    color={Colours.neutral.white}
                    type="h3"
                    textAlign="center"
                    lineHeight={Style.adjust(20)}
                  >
                    +
                  </TextTemplate>
                  <TextTemplate
                    color={Colours.neutral.white}
                    type="h3"
                    textAlign="center"
                    testID={SMOKING_CELEBRATION_YUCOIN(displayProps.yuCoin)}
                  >
                    {displayProps.yuCoin ?? 0}
                  </TextTemplate>
                  <Box mt={-1} ml={4}>
                    <YuCoinTopNavIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : null}

          <Box
            {...DEFAULT_MAIN_IMAGE_SIZE}
            mt={ICON_Y_OFFSET / 2}
            testID={SMOKING_CELEBRATION_IMAGE_CONTAINER}
            justifyContent="center"
            alignItems="center"
          >
            <RaysSpotlightFocal style={styles.focalImage}>
              {displayProps.image ? (
                <Image
                  source={displayProps.image}
                  width={Style.adjust(CUSTOM_IMAGE_SIZE.w)}
                  height={Style.adjust(CUSTOM_IMAGE_SIZE.h)}
                  testID={SMOKING_CELEBRATION_CUSTOM_IMAGE(displayProps.image.id)}
                  suppressLoadingUi={true}
                />
              ) : (
                <GenericYucoin width={DEFAULT_MAIN_IMAGE_SIZE.w} height={DEFAULT_MAIN_IMAGE_SIZE.h} margin={0} />
              )}
            </RaysSpotlightFocal>
          </Box>

          {displayProps.description ? (
            <Box>
              <Markdown
                testID={SMOKING_CELEBRATION_DESCRIPTION}
                text={displayProps.description}
                markdownStyles={markdownStyles}
              />
            </Box>
          ) : null}
        </Box>

        <Box gap={60} mt={30} alignItems="center">
          {displayProps.tips?.length ? (
            <Box gap={15} testID={SMOKING_CELEBRATION_TIPS_CONTAINER}>
              {[displayProps.tips[0]].map((tip) => (
                <View key={tip.id}>
                  <TipCard
                    id={tip.id}
                    title={tip.title}
                    description={tip.description}
                    icon={tip.icon}
                    cardStyle={styles.tipCardStyles}
                  />
                </View>
              ))}
            </Box>
          ) : null}

          <Button testID={SMOKING_CELEBRATION_CTA} translatedLabel={displayProps.ctaLabel} onPress={onPress} />
        </Box>
      </Box>
    </Box>
  );
};

const TIP_CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;
const styles = StyleSheet.create({
  tipCardStyles: {
    backgroundColor: Colours.neutral.white,
    width: TIP_CARD_WIDTH,
  },
  focalImage: {
    width: Style.adjust(DEFAULT_MAIN_IMAGE_SIZE.w),
    height: Style.adjust(DEFAULT_MAIN_IMAGE_SIZE.h),
    justifyContent: "center",
    alignItems: "center",
  },
});
const markdownStyles = StyleSheet.create({
  text: {
    ...templateTextMarkdownStyles.b1b,
    color: Colours.neutral.white,
    textAlign: "center",
  },
});

export default memo(SmokingCelebration);
