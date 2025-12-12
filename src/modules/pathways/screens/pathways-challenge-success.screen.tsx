import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { AnimatedPlusPoints, Button, CentredScreen } from "@molecules";
import { getTheme } from "@theme";
import { CHALLENGE_SUCCESS_SCREEN } from "@ids";
import { Style, StyleSheet } from "@styles";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { useSelector } from "react-redux";
import { memo } from "react";
import { PathwaysYuCoinConfetti } from "../components/pathways-yucoin-confetti/pathways-yucoin-confetti";

interface IProps {
  onPressCta: () => void;
  loading: boolean;
  reward: number;
}

const PathwayChallengeSuccessScreen = ({ reward, loading, onPressCta }: IProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { challengeSuccessScreen } = getTheme(currentLevel, yuniversalMap);

  return (
    <CentredScreen testID={CHALLENGE_SUCCESS_SCREEN} {...challengeSuccessScreen}>
      <Box flexDirection="column" justifyContent="space-between" alignItems="center">
        <Box flex={1} mt={155}>
          <Box mb={20}>
            <TextTemplate type="h1" color={challengeSuccessScreen.textStyle.color} textAlign="center">
              {t("screens.challenge_success.footer")}
            </TextTemplate>
          </Box>
          <Box alignItems="center" mb={48}>
            <AnimatedPlusPoints type="challenge-success" coins={reward} />
          </Box>
          <Box gap={48}>
            <PathwaysYuCoinConfetti />
          </Box>
        </Box>
        <Box alignSelf="stretch" px={16}>
          <Button
            translationKey="labels.cta.collect"
            isLoading={loading}
            onPress={onPressCta}
            size="Fill"
            wrapperStyle={styles.cta}
          />
        </Box>
      </Box>
    </CentredScreen>
  );
};

const styles = StyleSheet.create({
  cta: {
    marginBottom: Style.adjust(32),
  },
});

export default memo(PathwayChallengeSuccessScreen);
