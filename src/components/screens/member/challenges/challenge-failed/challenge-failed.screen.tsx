import { Box, LevelLine, Stars, TextTemplate } from "@atoms";
import { CHALLENGE_FAILED_SCREEEN } from "@ids";
import { t } from "@locale";
import { Button, CentredScreen } from "@molecules";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { MIN_SAFE_BOTTOM_PADDING } from "@styles/safeAreaViewOffset";
import { getTheme } from "@theme";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

interface IChallengeFailedScreenProps {
  level: number;
  loading: boolean;
  onPress: () => void;
}

const ChallengeFailedScreen = ({ level, onPress, loading }: IChallengeFailedScreenProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { top, bottom } = useSafeAreaInsets();

  const { challengeFailedScreen } = getTheme(currentLevel, yuniversalMap);
  const textColor = challengeFailedScreen.textStyle.color;

  return (
    <CentredScreen testID={CHALLENGE_FAILED_SCREEEN} {...challengeFailedScreen}>
      <Box
        alignItems="center"
        h="100%"
        width="100%"
        pt={Platform.OS === "android" ? top + 45 : 45}
        ph={32}
        disableAutoAdjust={true}
      >
        <Box width="100%" alignItems="center" disableAutoAdjust={true}>
          <Stars scale={0.6} />
          <Box flexDirection="row" alignItems="center" justifyContent="center" gap={8}>
            <LevelLine colour={challengeFailedScreen.lineColour} half="left" />
            <TextTemplate type="b2" color={textColor} textAlign="center">
              {yuniversalMap ? t("screens.challenge_failed.stage", { level }) : t("labels.level", { level })}
            </TextTemplate>
            <LevelLine colour={challengeFailedScreen.lineColour} half="right" />
          </Box>
        </Box>

        <Box mt={36} alignItems="center" gap={7}>
          <TextTemplate type="h3" color={textColor} textAlign="center">
            {t("screens.challenge_failed.heading")}
          </TextTemplate>
          <TextTemplate type="b2" color={textColor} textAlign="center">
            {t("screens.challenge_failed.footer")}
          </TextTemplate>
        </Box>

        <Box flex={1} alignSelf="stretch" justifyContent="flex-end" pb={Math.max(bottom, MIN_SAFE_BOTTOM_PADDING)}>
          <Button translationKey="labels.cta.back_to_quests" isLoading={loading} onPress={onPress} size="Fill" />
        </Box>
      </Box>
    </CentredScreen>
  );
};

export default ChallengeFailedScreen;
