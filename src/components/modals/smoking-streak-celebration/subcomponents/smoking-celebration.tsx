import { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
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
import { Spotlight, SpotlightProps, TipCard } from "@organisms";
import { Colours, Style, templateTextStyles } from "@styles";
import { Button, Markdown } from "@components/molecules";
import { VoidFunctionOrPromise } from "@utils";
import {
  CUSTOM_IMAGE_SIZE,
  DEFAULT_MAIN_IMAGE_SIZE,
  MAX_SIZE_GAPS_EXPECTED_HEIGHT,
  SPOTLIGHT_PROPS,
} from "./smoking-celebration-constants";
import { SmokingCelebrationDisplayProps } from "./smoking-celebration-types";
import { useSmokingCelebrationAnimations } from "./use-smoking-celebration-animations";

export type SmokingCelebrationProps = SmokingCelebrationDisplayProps & {
  onPress?: VoidFunctionOrPromise;
  minHeight?: number;
};

const SmokingCelebration = (props: SmokingCelebrationProps) => {
  const { minHeight, onPress } = props;
  const { displayProps, animatedStyles } = useSmokingCelebrationAnimations({
    smokingCelebrationProps: props,
  });

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

  const spotlightProps = useMemo(() => {
    return {
      ...SPOTLIGHT_PROPS,
      wrapperProps: {
        ...DEFAULT_MAIN_IMAGE_SIZE,
        justifyContent: "center",
        alignItems: "center",
      } as SpotlightProps["wrapperProps"],
    };
  }, []);

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
                    testID={SMOKING_CELEBRATION_DAYS}
                  >
                    {displayProps.daysHeading}
                  </TextTemplate>
                </Box>
              ) : null}

              {displayProps.yuCoin > 0 ? (
                <Box forceAnimated={true} style={animatedStyles.yuCoin}>
                  <Box flexDirection="row" justifyContent="center" alignItems="center">
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
                      testID={SMOKING_CELEBRATION_YUCOIN}
                    >
                      {displayProps.yuCoin}
                    </TextTemplate>
                    <Box mt={-1} ml={4}>
                      <YuCoinTopNavIcon />
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </Box>
          ) : null}

          <Spotlight {...spotlightProps}>
            <Box
              {...DEFAULT_MAIN_IMAGE_SIZE}
              testID={SMOKING_CELEBRATION_IMAGE_CONTAINER}
              justifyContent="center"
              alignItems="center"
            >
              {displayProps.image ? (
                <Image
                  source={displayProps.image}
                  width={Style.adjust(CUSTOM_IMAGE_SIZE.w)}
                  height={Style.adjust(CUSTOM_IMAGE_SIZE.h)}
                  testID={SMOKING_CELEBRATION_CUSTOM_IMAGE}
                  suppressLoadingUi={true}
                />
              ) : (
                <GenericYucoin width={DEFAULT_MAIN_IMAGE_SIZE.w} height={DEFAULT_MAIN_IMAGE_SIZE.h} margin={0} />
              )}
            </Box>
          </Spotlight>

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
});
const markdownStyles = StyleSheet.create({
  text: {
    ...templateTextStyles.b1b,
    color: Colours.neutral.white,
    textAlign: "center",
  },
});

export default memo(SmokingCelebration);
