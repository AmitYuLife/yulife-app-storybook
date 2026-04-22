import { Box, LevelLine, Stars, TextTemplate } from "@atoms";
import ChestAnimatedRaysBackground from "@components/modals/open-random-chest/subcomponents/chest-animated-rays-background";
import { CHALLENGE_SUCCESS_SCREEN } from "@ids";
import { t } from "@locale";
import { AnimatedPlusPoints, Button, CentredScreen } from "@molecules";
import { ItemDetailsReward } from "@organisms";
import { ControlledYuCoinCounter } from "@organisms/generic-heading";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ChallengeCompletionSummary } from "@redux/levels/levels.types";
import { DETOX_ENABLED } from "@services/socket";
import { Style, StyleSheet } from "@styles";
import { MIN_SAFE_BOTTOM_PADDING } from "@styles/safeAreaViewOffset";
import { getTheme } from "@theme";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import ChallengeStats from "./challenge-stats";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { useEffect, useMemo } from "react";

interface IProps {
  onPressCta: () => void;
  level?: number;
  rating?: number;
  reward: number;
  completionSummary?: ChallengeCompletionSummary | null;
}

const YUCOIN_SHADOW_ICON = require("@assets/icons/yucoin-shadow.webp");
const REWARD_IMAGE_SIZE_YUCOIN = 120;

const REWARD_SIZE = 190;
const STATS_WIDTH = Style.DEVICE_WIDTH * 0.85;

const ChallengeSuccessScreen = ({ level, rating, reward, onPressCta, completionSummary }: IProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const totalCoins = useSelector(getTotalCoins);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserDataStart({
        types: [AppDataType.coinLedger],
      })
    );
  }, [dispatch]);

  const { challengeSuccessScreen } = getTheme(currentLevel, yuniversalMap);

  const { bottom, top } = useSafeAreaInsets();

  // yuniversal looks good as is, other screens need a bit more bright rays
  const gradientStops = useMemo(() => {
    return !yuniversalMap
      ? [
          { color: "#FFFFFF", offset: 0, opacity: 0 },
          { color: "#FFFFFF", offset: 0.4 },
        ]
      : undefined;
  }, [yuniversalMap]);

  return (
    <CentredScreen testID={CHALLENGE_SUCCESS_SCREEN} {...challengeSuccessScreen}>
      <ControlledYuCoinCounter
        coins={totalCoins}
        backgroundColor="transparent"
        textStyle={challengeSuccessScreen.textStyle}
      />
      {DETOX_ENABLED ? null : (
        <ChestAnimatedRaysBackground raysStyles={{ marginTop: top + 20 }} gradientStops={gradientStops} />
      )}
      {level !== undefined && rating !== undefined ? (
        <Box
          position="absolute"
          top={top + Style.adjust(60)}
          width="100%"
          alignItems="center"
          disableAutoAdjust={true}
          collapsable={false}
        >
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
      <Box mt={top + Style.adjust(80)} disableAutoAdjust={true} collapsable={false}>
        <Box justifyContent="center" alignItems="center" pb={90} collapsable={false}>
          <Box justifyContent="center" alignItems="center" gap={50}>
            <Box>
              <ItemDetailsReward size={REWARD_SIZE} imageSize={REWARD_IMAGE_SIZE_YUCOIN} source={YUCOIN_SHADOW_ICON} />
            </Box>
            {reward > 0 ? (
              <Box
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top={-10}
                w={REWARD_SIZE}
                h={80}
                collapsable={false}
                zIndex={2}
              >
                <AnimatedPlusPoints type="challenge-success" coins={reward} textType="h3" style={styles.plusPoints} />
              </Box>
            ) : null}
          </Box>
          <Box mt={16}>
            <TextTemplate type="h2" color={challengeSuccessScreen.textStyle.color} textAlign="center">
              {t("screens.challenge_success.great_work")}
            </TextTemplate>
          </Box>

          <ChallengeStats width={STATS_WIDTH} completionSummary={completionSummary} />
        </Box>
      </Box>

      <Box
        position="absolute"
        bottom={0}
        width="100%"
        pb={Math.max(bottom, MIN_SAFE_BOTTOM_PADDING)}
        disableAutoAdjust={true}
      >
        <Button testID={"CHALLENGE_SUCCESS_CTA"} onPress={onPressCta} translationKey="labels.cta.continue" />
      </Box>
    </CentredScreen>
  );
};

export default ChallengeSuccessScreen;

const styles = StyleSheet.create({
  plusPoints: {
    position: "relative",
  },
});
