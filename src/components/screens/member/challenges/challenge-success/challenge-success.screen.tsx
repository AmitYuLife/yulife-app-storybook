import { Box, LevelLine, Stars, TextTemplate } from "@atoms";
import { CHALLENGE_SUCCESS_CTA, CHALLENGE_SUCCESS_SCREEN } from "@ids";
import { t } from "@locale";
import { AnimatedPlusPoints, CentredScreen } from "@molecules";
import { ItemDetailsReward } from "@organisms";
import { ControlledYuCoinCounter } from "@organisms/generic-heading";
import BlurredRaysWrapper from "@organisms/blurred-rays-wrapper/blurred-rays-wrapper";
import RaysSpotlightFocal from "@organisms/rays/rays-spotlight-focal";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ChallengeCompletionSummary } from "@redux/levels/levels.types";
import { Style, StyleSheet } from "@styles";
import { getTheme } from "@theme";
import Hint from "@components/molecules/hint/hint";

import { FadeInDown } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import ChallengeStats from "./challenge-stats";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { MAX_EXTRA_CHALLENGES_HINT_LEVEL } from "@services/constants";

interface IProps {
  onPressCta: () => void;
  level?: number;
  rating?: number;
  reward: number;
  completionSummary?: ChallengeCompletionSummary | null;
}

const YUCOIN_SHADOW_ICON = require("@assets/icons/yucoin-shadow.webp");
const REWARD_IMAGE_SIZE = Style.adjust(140);
const REWARD_IMAGE_SIZE_YUCOIN = 90;
const ANIMATION_START_DELAY = 300;

const ChallengeSuccessScreen = ({ level, rating, reward, onPressCta, completionSummary }: IProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const totalCoins = useSelector(getTotalCoins);
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const showChallengesHint = currentLevel <= MAX_EXTRA_CHALLENGES_HINT_LEVEL;

  useEffect(() => {
    dispatch(
      getUserDataStart({
        types: [AppDataType.coinLedger],
      })
    );
  }, [dispatch]);

  const { challengeSuccessScreen } = getTheme(currentLevel, yuniversalMap);

  return (
    <CentredScreen testID={CHALLENGE_SUCCESS_SCREEN} {...challengeSuccessScreen}>
      <ControlledYuCoinCounter
        coins={totalCoins}
        backgroundColor="transparent"
        textStyle={challengeSuccessScreen.textStyle}
      />

      <BlurredRaysWrapper
        testID={CHALLENGE_SUCCESS_SCREEN}
        buttonLabel={t("labels.cta.continue")}
        buttonTestID={CHALLENGE_SUCCESS_CTA}
        onButtonPress={onPressCta}
        isLoading={false}
        isBlurred={false}
        backgroundColor="transparent"
        centerContent={false}
      >
        <Box
          alignItems="center"
          gap={Style.adjust(24)}
          h="100%"
          width="100%"
          pt={Platform.OS === "android" ? top + 45 : 45}
          disableAutoAdjust={true}
        >
          {level !== undefined && rating !== undefined ? (
            <Box width="100%" alignItems="center" disableAutoAdjust={true} collapsable={false}>
              <Stars
                isLeftHighlighted={rating > 0}
                isMidHighlighted={rating > 1}
                isRightHighlighted={rating > 2}
                scale={0.6}
              />
              <Box flexDirection="row" alignItems="center" justifyContent="center" gap={8}>
                <LevelLine colour={challengeSuccessScreen.lineColour} half="left" />
                <TextTemplate type="b2" color={challengeSuccessScreen.textStyle.color} textAlign="center">
                  {yuniversalMap ? t("screens.challenge_success.stage", { level }) : t("labels.level", { level })}
                </TextTemplate>
                <LevelLine colour={challengeSuccessScreen.lineColour} half="right" />
              </Box>
            </Box>
          ) : null}

          <Box entering={FadeInDown.delay(ANIMATION_START_DELAY).duration(600)}>
            <Box>
              <Box h={80} mb={-30}>
                {reward > 0 ? (
                  <AnimatedPlusPoints type="challenge-success" coins={reward} textType="h3" style={styles.plusPoints} />
                ) : null}
              </Box>
              <RaysSpotlightFocal style={styles.animatedImageWrapper}>
                <ItemDetailsReward
                  size={REWARD_IMAGE_SIZE}
                  imageSize={REWARD_IMAGE_SIZE_YUCOIN}
                  source={YUCOIN_SHADOW_ICON}
                  delay={ANIMATION_START_DELAY}
                />
              </RaysSpotlightFocal>
              <Box mt={20}>
                <TextTemplate type="h3" color={challengeSuccessScreen.textStyle.color} textAlign="center">
                  {t("screens.challenge_success.great_work")}
                </TextTemplate>
              </Box>
            </Box>
          </Box>

          <Box width="100%" ph={28} gap={40}>
            <ChallengeStats completionSummary={completionSummary} />
            {showChallengesHint ? (
              <Hint
                label={t("hints.unlock_more_challenges.title")}
                description={t("hints.unlock_more_challenges.description")}
                variant="challenges"
              />
            ) : null}
          </Box>
        </Box>
      </BlurredRaysWrapper>
    </CentredScreen>
  );
};

export default ChallengeSuccessScreen;

const styles = StyleSheet.create({
  animatedImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: REWARD_IMAGE_SIZE,
    height: REWARD_IMAGE_SIZE,
  },
  plusPoints: {
    position: "relative",
  },
});
