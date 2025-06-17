import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Box, TextTemplate } from "@atoms";
import { AnimationHandle, Markdown, SmokingChips, TouchableOpacityWithDelay } from "@components/molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style, templateTextStyles, TOP_BAR } from "@styles";
import { SmokingMilestones, SmokingSponsorshipCard, SmokingTips } from "./subcomponents";
import {
  MOMENTS_TO_MONITOR,
  SMOKING_CONTAINER_SCROLL,
  SMOKING_HUB_CTA,
  SMOKING_HUB_OPT_OUT,
  SMOKING_HUB_REASONS,
} from "@ids";
import { t } from "@locale";
import { VoidFunction } from "@utils";
import { Button } from "@molecules";
import { useDistractionGame } from "@screens/member/smoking/smoking-hub/use-distraction-game";
import SmokingHubStatus, { HEADER_HEIGHT } from "./subcomponents/smoking-hub-status";
import { useTimeout } from "@hooks";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const SMOKING_BUTTON_CONTAINER_HEIGHT = 96;
const SMOKING_BUTTON_PADDING_TOP = 16;
const FOOTER_HEIGHT = SMOKING_BUTTON_CONTAINER_HEIGHT + SMOKING_BUTTON_PADDING_TOP;
const FOOTER_HIDE_BACKGROUND_HEIGHT = Style.adjust(1000);
const DEFAULT_BG_COLOR = Colours.pastelViolet;
const BACKGROUND_COLOR_FADE_THRESHOLD = HEADER_HEIGHT - 100;

type Props = {
  smokingState: HealthSmokingState;
  showOptOutOverlay: VoidFunction;
  editTriggers: VoidFunction;
  editReasons: VoidFunction;
  navigateToCommitmentScreen: VoidFunction;
  animationsEnabled: boolean;
  initialSmokingState: Partial<HealthSmokingState>;
};

const SmokingHubScreen = ({
  smokingState,
  showOptOutOverlay,
  editTriggers,
  editReasons,
  navigateToCommitmentScreen,
  animationsEnabled,
  initialSmokingState,
}: Props) => {
  const smokingHubStatusRef = useRef<AnimationHandle>();
  const horizontalNumberDisplayJumped = useRef<boolean>(false);
  const stateActive = useRef<boolean>(true);

  const distractionGameProps = useMemo(
    () => ({
      gameIntroModal: smokingState?.gameIntroModal,
      gameOptions: smokingState?.gameOptions,
    }),
    [smokingState?.gameIntroModal, smokingState?.gameOptions]
  );

  const { play: playDistractionGame } = useDistractionGame(distractionGameProps);

  useEffect(() => {
    if (initialSmokingState.currentStreak && !horizontalNumberDisplayJumped.current) {
      horizontalNumberDisplayJumped.current = true;
      smokingHubStatusRef.current?.jump(initialSmokingState.currentStreak);
    }
  }, [initialSmokingState.currentStreak]);

  useEffect(() => {
    // Recommited
    if (!stateActive.current && smokingState.isActive) {
      smokingHubStatusRef.current?.jump(smokingState.currentStreak);
    }

    stateActive.current = smokingState.isActive;
  }, [smokingState.currentStreak, smokingState.isActive]);

  const canAnimateHorizontalNumberDisplay =
    !initialSmokingState.updatedToday && smokingState.updatedToday && animationsEnabled;
  useTimeout(
    () => smokingHubStatusRef.current?.animate(smokingState.currentStreak),
    500,
    canAnimateHorizontalNumberDisplay
  );

  const onButtonPress = useCallback(() => {
    if (smokingState.isActive) {
      playDistractionGame();
      return;
    }

    navigateToCommitmentScreen();
  }, [navigateToCommitmentScreen, playDistractionGame, smokingState.isActive]);

  const scrollY = useSharedValue(0);
  const bgImageOpacity = useSharedValue(1);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const contentOffsetY = event.contentOffset.y;
    scrollY.value = contentOffsetY;
    bgImageOpacity.value = 1 - Math.max(Math.min(contentOffsetY / BACKGROUND_COLOR_FADE_THRESHOLD, 1), 0);
  });

  const topBackgroundColorStyles = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      scrollY.value,
      [0, BACKGROUND_COLOR_FADE_THRESHOLD],
      [smokingState.backgroundColour ?? DEFAULT_BG_COLOR, Colours.neutral.white]
    );

    return {
      backgroundColor: bgColor,
    };
  });

  return (
    <Box forceAnimated={true} flex={1} style={topBackgroundColorStyles}>
      <Box flex={1} alignItems="center" style={StyleSheet.absoluteFillObject}>
        <Animated.ScrollView
          testID={SMOKING_CONTAINER_SCROLL}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="never"
          onScroll={scrollHandler}
        >
          <GenericHeadingPad />

          <SmokingHubStatus
            ref={smokingHubStatusRef}
            initialSmokingStreak={initialSmokingState?.currentStreak}
            smokingState={smokingState}
            backgroundImageOpacity={bgImageOpacity}
          />

          <Box bg={Colours.neutral.white} pt={16} gap={40}>
            {!smokingState.tips?.length ? null : <SmokingTips tips={smokingState.tips} />}

            {smokingState.milestoneCarousel.length ? (
              <Box>
                <Box pl={24}>
                  <TextTemplate type="h3" textAlign="left">
                    {smokingState.journeySoFarHeading}
                  </TextTemplate>
                </Box>

                <SmokingMilestones milestones={smokingState.milestoneCarousel} />
              </Box>
            ) : null}

            {smokingState.triggers.length > 0 && smokingState.reasons.length > 0 ? (
              <Box ph={24} pv={12} gap={24}>
                {smokingState.triggers.length > 0 ? (
                  <Box gap={16} testID={MOMENTS_TO_MONITOR}>
                    <TextTemplate type="b1b" textAlign="left">
                      {t("screens.smoking_hub.moments_to_monitor")}
                    </TextTemplate>
                    <SmokingChips
                      values={smokingState.triggers.map((trigger) => trigger.label)}
                      backgroundColor={Colours.secondary.s10S3}
                      onPressEdit={editTriggers}
                    />
                  </Box>
                ) : null}
                {smokingState.reasons.length > 0 ? (
                  <Box gap={16} testID={SMOKING_HUB_REASONS}>
                    <TextTemplate type="b1b" textAlign="left">
                      {t("screens.smoking_hub.reasons")}
                    </TextTemplate>
                    <SmokingChips
                      values={smokingState.reasons.map((reason) => reason.label)}
                      backgroundColor={Colours.secondary.s10S1}
                      onPressEdit={editReasons}
                    />
                  </Box>
                ) : null}
              </Box>
            ) : null}

            {!smokingState.sponsorship || smokingState.currentStreak > smokingState.maxStreak ? null : (
              <SmokingSponsorshipCard
                title={smokingState.sponsorship.title}
                description={smokingState.sponsorship.description}
                cta={smokingState.sponsorship.cta}
                backgroundImage={smokingState.sponsorship.backgroundImage}
              />
            )}

            {!smokingState.optOutText ? null : (
              <TouchableOpacityWithDelay style={styles.footer} onPress={showOptOutOverlay} testID={SMOKING_HUB_OPT_OUT}>
                <Markdown text={smokingState.optOutText} markdownStyles={markdownStyles} />
              </TouchableOpacityWithDelay>
            )}

            <Box
              testID="bottom_scroll_padding"
              width={Style.DEVICE_WIDTH}
              height={SMOKING_BUTTON_CONTAINER_HEIGHT + FOOTER_HIDE_BACKGROUND_HEIGHT}
              mb={-FOOTER_HIDE_BACKGROUND_HEIGHT}
              bg={Colours.neutral.white}
            />
          </Box>
        </Animated.ScrollView>
      </Box>
      <Box
        bg={Colours.neutral.white}
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        pt={SMOKING_BUTTON_PADDING_TOP}
        h={FOOTER_HEIGHT}
        alignItems="center"
      >
        <Button testID={SMOKING_HUB_CTA} onPress={onButtonPress} translatedLabel={smokingState.headerButtonText} />
      </Box>
      <Box forceAnimated={true} h={TOP_BAR.TOP_BAR_WITH_PAD} style={topBackgroundColorStyles}>
        <GenericHeadingAbsolute
          onLeftIconPress={onClose}
          backgroundColor="transparent"
          logo="yulife"
          rightIcon="COINS"
          onRightIconPress={() =>
            Navigation.push(ROUTES.rewards, {
              component: {
                id: ROUTES.smoking,
                name: ROUTES.smoking,
              },
            })
          }
        />
      </Box>
    </Box>
  );
};

export default memo(SmokingHubScreen);

const onClose = () => {
  Navigation.popToRoot(ROUTES.smoking);
};

const styles = StyleSheet.create({
  scrollView: {
    width: Style.DEVICE_WIDTH,
  },
  footer: {
    paddingHorizontal: Style.adjust(24),
  },
});

const markdownStyles = {
  text: {
    textAlign: "center",
    ...templateTextStyles.l1,
  },
};
