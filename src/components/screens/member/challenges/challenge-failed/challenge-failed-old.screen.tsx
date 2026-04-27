import { Box, LevelLine, Stars, TextTemplate } from "@atoms";
import { View } from "react-native";
import styles from "./challenge-failed-old.screen.styles";
import { Button, CentredScreen } from "@molecules";
import { t } from "@locale";
import { getTheme } from "@theme";
import { CHALLENGE_FAILED_SCREEEN } from "@ids";

interface IChallengeFailedOldScreenProps {
  level?: number;
  yuniversalMap?: number;
  loading: boolean;
  onPress: () => void;
}

const ChallengeFailedOldScreen = ({ level, yuniversalMap, onPress, loading }: IChallengeFailedOldScreenProps) => {
  const { challengeFailedScreen } = getTheme(level ?? 1, yuniversalMap);
  const textColor = challengeFailedScreen.textStyle.color;

  return (
    <CentredScreen {...challengeFailedScreen}>
      <View style={styles.ratingWrapper} testID={CHALLENGE_FAILED_SCREEEN}>
        <Stars />
        <Box flexDirection="row" alignItems="center" justifyContent="center" gap={8} mt={5} mb={24}>
          <LevelLine colour={challengeFailedScreen.lineColour} half="left" />
          <TextTemplate type="l1" color={textColor} textAlign="center">
            {yuniversalMap ? t("screens.challenge_failed.stage", { level }) : t("labels.level", { level })}
          </TextTemplate>
          <LevelLine colour={challengeFailedScreen.lineColour} half="right" />
        </Box>
      </View>
      <Box mt={6} mb={16}>
        <TextTemplate type="big40" color={textColor}>
          {t("screens.challenge_failed.heading")}
        </TextTemplate>
      </Box>
      <TextTemplate type="b1" color={textColor} lineHeight={24}>
        {t("screens.challenge_failed.footer")}
      </TextTemplate>
      <Button
        isLoading={loading}
        wrapperStyle={styles.cta}
        onPress={onPress}
        translationKey="labels.cta.got_it"
        size="Medium"
      />
    </CentredScreen>
  );
};

export default ChallengeFailedOldScreen;
