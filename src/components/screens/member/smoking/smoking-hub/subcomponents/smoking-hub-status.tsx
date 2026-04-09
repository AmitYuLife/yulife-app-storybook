import { Ref, memo, useCallback, useImperativeHandle, useRef, useState } from "react";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { Colours, Style } from "@styles";
import { Box, Image, TextTemplate } from "@atoms";
import { AnimationHandle, HorizontalNumberDisplay, Yumoji } from "@molecules";
import SmokingStatsCard from "./smoking-stats-card/smoking-stats-card";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { SMOKING_HEADER_DAYS, YUMOJI_EQUIPMENT } from "@ids";
import { runOnJS, SharedValue, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { createDeferredPromise } from "@utils/promise";
import { templateTextStylesLineHeight } from "@styles/textStyles";

export const HEADER_HEIGHT = 370;
const HEADER_BUMP_HEIGHT = 40;
const HEADER_IMAGE_BOTTOM_OFFSET = -30;
const IMAGE_SCALE = 1.2;
const IMAGE_WIDTH = Style.DEVICE_WIDTH * IMAGE_SCALE;
const IMAGE_MARGIN_LEFT = `${(-(IMAGE_SCALE - 1) * 100) / 2}%`;
const SMOKING_STATS_CARD_WIDTH = 162;
const LEFT_DISPLAY_WIDTH = 500;
const LEFT_DISPLAY_PADDING_LEFT = 24;
const LEFT_DISPLAY_CALC_MARGIN_LEFT = LEFT_DISPLAY_WIDTH / 2 - SMOKING_STATS_CARD_WIDTH / 2 - LEFT_DISPLAY_PADDING_LEFT;
const HORIZONTAL_NUMBER_DISPLAY_OFFSET_LEFT = LEFT_DISPLAY_WIDTH / 2 - Style.DEVICE_WIDTH / 2;
const HORIZONTAL_NUMBER_DISPLAY_OFFSET_BOTTOM = -42;

const SIZE_MULTIPLIER = Style.DEVICE_WIDTH / 375;
const AVATAR_WIDTH = SIZE_MULTIPLIER * 145;
const AVATAR_HEIGHT = SIZE_MULTIPLIER * 300;
const EMPTY_MULTIPLIER = 0.95;

const FADE_DURATION = 500;

type SmokingHubStatusProps = {
  initialSmokingStreak: number;
  smokingState: HealthSmokingState;
  backgroundImageOpacity: SharedValue<number>;
  ref?: Ref<AnimationHandle>;
};

const SmokingHubStatus = ({
  initialSmokingStreak,
  smokingState,
  backgroundImageOpacity,
  ref,
}: SmokingHubStatusProps) => {
  const horizontalNumberDisplayRef = useRef<AnimationHandle>(null);
  const avatar = useSelector(getUserAvatar);

  const horizontalNumberDisplayOpacity = useSharedValue(smokingState.currentStreak <= smokingState.maxStreak ? 1 : 0);
  const currentStreakDisplayOpacity = useSharedValue(smokingState.currentStreak > smokingState.maxStreak ? 1 : 0);

  const displayedTarget = useRef<number>(initialSmokingStreak);
  const [staticStreakNumber, setStaticStreakNumber] = useState<number>(initialSmokingStreak);

  const [animateSmokingStats, setAnimateSmokingStats] = useState(false);
  const [smokingStreakStateForCards, setSmokingStreakStateForCards] = useState<HealthSmokingState>(smokingState);

  const updateSmokingStreakForCards = useCallback((newSmokingState: HealthSmokingState, animate = true) => {
    setAnimateSmokingStats(animate);
    setSmokingStreakStateForCards(newSmokingState);
  }, []);

  const updateStaticStreakNumber = useCallback((to: number) => {
    displayedTarget.current = to;
    setStaticStreakNumber(to);
  }, []);

  const animateStaticNumber = useCallback(
    async (to: number) => {
      if (displayedTarget.current === to) {
        return;
      }

      const { resolve, promise } = createDeferredPromise();

      currentStreakDisplayOpacity.value = withTiming(0, { duration: FADE_DURATION }, () => {
        runOnJS(updateStaticStreakNumber)(to);
        currentStreakDisplayOpacity.value = withDelay(
          200,
          withTiming(1, { duration: FADE_DURATION }, () => runOnJS(resolve)())
        );
      });

      return promise;
    },
    [currentStreakDisplayOpacity, updateStaticStreakNumber]
  );

  const animate = useCallback(
    async (to: number) => {
      const exceedsMaxStreak = to > smokingState.maxStreak;
      const targetTo = exceedsMaxStreak ? smokingState.maxStreak + 10 : to;
      const animationOptions = exceedsMaxStreak
        ? {
            durationStep2: 1000,
            durationStep3: 0,
          }
        : {};

      if (displayedTarget.current > smokingState.maxStreak) {
        await animateStaticNumber(to);
        updateSmokingStreakForCards(smokingState);
        return;
      }

      updateStaticStreakNumber(to);
      await horizontalNumberDisplayRef.current.animate(targetTo, animationOptions);

      if (to <= smokingState.maxStreak) {
        updateSmokingStreakForCards(smokingState);
        return;
      }

      const { resolve, promise } = createDeferredPromise();
      horizontalNumberDisplayOpacity.value = withTiming(0, { duration: 0 }, () => {
        currentStreakDisplayOpacity.value = withTiming(1, { duration: FADE_DURATION }, () => runOnJS(resolve)());
      });

      await promise;
      updateSmokingStreakForCards(smokingState);
    },
    [
      animateStaticNumber,
      currentStreakDisplayOpacity,
      horizontalNumberDisplayOpacity,
      smokingState,
      updateSmokingStreakForCards,
      updateStaticStreakNumber,
    ]
  );

  const jump = useCallback(
    async (to: number) => {
      horizontalNumberDisplayOpacity.value = 0;

      await horizontalNumberDisplayRef.current.jump(to);

      updateStaticStreakNumber(to);
      updateSmokingStreakForCards(smokingState, false);

      horizontalNumberDisplayOpacity.value = smokingState.currentStreak <= smokingState.maxStreak ? 1 : 0;
      currentStreakDisplayOpacity.value = smokingState.currentStreak > smokingState.maxStreak ? 1 : 0;
    },
    [
      currentStreakDisplayOpacity,
      horizontalNumberDisplayOpacity,
      smokingState,
      updateSmokingStreakForCards,
      updateStaticStreakNumber,
    ]
  );

  useImperativeHandle(ref, () => ({
    animate,
    jump,
  }));

  const horizontalNumberDisplayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: horizontalNumberDisplayOpacity.value,
  }));

  const currentStreakDisplayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: currentStreakDisplayOpacity.value,
  }));

  const imageContainerStyles = useAnimatedStyle(() => ({
    opacity: backgroundImageOpacity.value,
  }));

  return (
    <Box
      w={Style.DEVICE_WIDTH}
      disableAutoAdjust={true}
      h={Style.adjust(HEADER_HEIGHT)}
      overflow="hidden"
      testID={SMOKING_HEADER_DAYS(smokingState.currentStreak)}
    >
      {!smokingState.backgroundImage ? null : (
        <Box
          forceAnimated={true}
          style={imageContainerStyles}
          position="absolute"
          bottom={0}
          mb={HEADER_IMAGE_BOTTOM_OFFSET}
          ml={IMAGE_MARGIN_LEFT}
        >
          <Image source={{ uri: smokingState.backgroundImage.uri }} width={IMAGE_WIDTH} />
        </Box>
      )}

      <Box
        zIndex={1}
        position="absolute"
        left={-LEFT_DISPLAY_CALC_MARGIN_LEFT}
        gap={24}
        alignItems="center"
        justifyContent="center"
      >
        <Box alignItems="center" w={LEFT_DISPLAY_WIDTH}>
          {!smokingState.isActive ? (
            <Box w={SMOKING_STATS_CARD_WIDTH}>
              <TextTemplate type="h3" textAlign="center">
                {smokingState.heading}
              </TextTemplate>
            </Box>
          ) : (
            <Box justifyContent="center">
              <Box w={LEFT_DISPLAY_WIDTH} h={templateTextStylesLineHeight.big88}>
                <Box
                  forceAnimated={true}
                  style={horizontalNumberDisplayAnimatedStyle}
                  position="absolute"
                  bottom={HORIZONTAL_NUMBER_DISPLAY_OFFSET_BOTTOM}
                  left={HORIZONTAL_NUMBER_DISPLAY_OFFSET_LEFT}
                >
                  <HorizontalNumberDisplay
                    ref={horizontalNumberDisplayRef}
                    initialTarget={initialSmokingStreak ?? smokingState.currentStreak}
                    target={smokingState.currentStreak}
                    minNumber={1}
                    maxNumber={smokingState.maxStreak}
                    displayWidth={Style.DEVICE_WIDTH}
                    disableAutomaticScrolling={true}
                  />
                </Box>
                <Box
                  forceAnimated={true}
                  style={currentStreakDisplayAnimatedStyle}
                  position="absolute"
                  left={0}
                  right={0}
                  top={0}
                >
                  <TextTemplate type="big88" textAlign="center">
                    {staticStreakNumber}
                  </TextTemplate>
                </Box>
              </Box>
              <Box>
                <TextTemplate type="h3" textAlign="center">
                  {smokingState.heading}
                </TextTemplate>
              </Box>
            </Box>
          )}
        </Box>

        <SmokingStatsCard
          smokingState={smokingStreakStateForCards}
          width={SMOKING_STATS_CARD_WIDTH}
          animated={animateSmokingStats}
        />
      </Box>

      <Box zIndex={1} position="absolute" right={24}>
        <Yumoji
          emptyHeight={AVATAR_HEIGHT * EMPTY_MULTIPLIER}
          emptyWidth={AVATAR_WIDTH * EMPTY_MULTIPLIER}
          width={AVATAR_WIDTH}
          height={AVATAR_HEIGHT}
          testID={YUMOJI_EQUIPMENT}
          uri={avatar?.avatarRemoteFiles?.svgFull}
          emptyBodyColor={Colours.pastelViolet}
          suppressLoadingUi={true}
        />
      </Box>

      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        h={HEADER_BUMP_HEIGHT}
        bg={Colours.neutral.white}
        borderTopRadius={16}
      />
    </Box>
  );
};

export default memo(SmokingHubStatus);
