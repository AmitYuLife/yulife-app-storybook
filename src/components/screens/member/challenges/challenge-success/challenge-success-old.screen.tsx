import { Colours } from "@styles";
import { ScrollView } from "react-native";
import { LevelLine, Box, Stars, TextTemplate, RawImage } from "@atoms";
import { t } from "@locale";
import { AnimatedPlusPoints, Button, CentredScreen, YucoinPowerButtonMini } from "@molecules";
import { formatCyclingMetersToKmWithOneDecimal } from "../challenge-progress/subcomponents/progress-bar.helpers";
import { getTheme } from "@theme";
import { CHALLENGE_SUCCESS_SCREEN } from "@ids";
import { IActiveLevel } from "@redux/levels/levels.types";
import { Style, StyleSheet } from "@styles";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { useCallback } from "react";
import Hint from "@components/molecules/hint/hint";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { useSelector } from "react-redux";
import { MAX_EXTRA_CHALLENGES_HINT_LEVEL } from "@services/constants";

interface IChallengeSuccessOldScreenProps {
  onPressCta: () => void;
  level?: number;
  yuniversalMap?: number;
  rating: number;
  loading: boolean;
  reward: number;
  score: number;
  unit: IActiveLevel["unit"];
}

const ChallengeSuccessOldScreen = ({
  unit,
  level,
  score,
  rating,
  reward,
  loading,
  onPressCta,
  yuniversalMap,
}: IChallengeSuccessOldScreenProps) => {
  const dispatch = useDispatch();
  const { challengeSuccessScreen } = getTheme(level ?? 1, yuniversalMap);
  const currentLevel = useSelector(getCurrentLevel);
  const showChallengesHint = currentLevel <= MAX_EXTRA_CHALLENGES_HINT_LEVEL;

  const onPressYucoinPowerButton = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        location: "challenge_success",
        button_id: "yucoin_power_button",
      })
    );

    showYuCoinPowerExplainedOverlay();
  }, [dispatch]);

  return (
    <CentredScreen testID={CHALLENGE_SUCCESS_SCREEN} {...challengeSuccessScreen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Box alignItems="center">
          <Box alignItems="center" mt={40}>
            <Stars isLeftHighlighted={rating > 0} isMidHighlighted={rating > 1} isRightHighlighted={rating > 2} />
            <Box flexDirection="row" alignItems="center" justifyContent="center" gap={8} mt={5} mb={24}>
              <LevelLine colour={challengeSuccessScreen.lineColour} half="left" />
              <TextTemplate type="l1" color={challengeSuccessScreen.textStyle.color} textAlign="center">
                {yuniversalMap ? t("screens.challenge_success.stage", { level }) : t("labels.level", { level })}
              </TextTemplate>
              <LevelLine colour={challengeSuccessScreen.lineColour} half="right" />
            </Box>
          </Box>
          <Box alignItems="center" mb={16} mt={6}>
            <TextTemplate type="h1" color={challengeSuccessScreen.textStyle.color}>
              {t("screens.challenge_success.footer")}
            </TextTemplate>
          </Box>
          <Box alignItems="center">
            <Box alignItems="center" justifyContent="center" alignSelf="stretch" mb={8} h={60} collapsable={false}>
              <AnimatedPlusPoints type="challenge-success" coins={reward} style={styles.plusPoints} />
            </Box>
            <RawImage
              style={styles.successImage}
              source={require("@assets/challenge-success/challenge-success.webp")}
            />
            <Box position="absolute" left={0} right={0} bottom={23}>
              <TextTemplate type="h2" color={Colours.text.goldBrown} textAlign="center">
                {renderScore(score, unit)}
              </TextTemplate>
            </Box>
          </Box>
          {showChallengesHint ? (
            <Box ph={24} pt={48}>
              <Hint
                label={t("hints.unlock_more_challenges.title")}
                description={t("hints.unlock_more_challenges.description")}
                variant="challenges"
              />
            </Box>
          ) : null}
        </Box>
        <Box gap={22} alignSelf="stretch" ph={32} mt={24}>
          <YucoinPowerButtonMini onPress={onPressYucoinPowerButton} />
          <Button
            translationKey="labels.cta.collect"
            isLoading={loading}
            onPress={onPressCta}
            size="Fill"
            wrapperStyle={styles.cta}
          />
        </Box>
      </ScrollView>
    </CentredScreen>
  );
};

function renderScore(score: number, unit: IChallengeSuccessOldScreenProps["unit"]) {
  const unitTextPlural = unit === "minutes" ? t("time_units.minutes") : t("activity_types.steps.plural");
  const unitTextSingular = unit === "minutes" ? t("time_units.minute") : t("activity_types.steps.singular");

  const mins = Math.floor(score / 60);

  switch (unit) {
    case "minutes":
      return `${mins} ${mins === 1 ? unitTextSingular : unitTextPlural}`;
    case "meters":
      return formatCyclingMetersToKmWithOneDecimal(score);
    case "steps":
      return `${score} ${unitTextPlural}`;
    default:
      return `${score}`;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignSelf: "stretch",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  cta: {
    marginBottom: Style.adjust(32),
  },
  plusPoints: {
    position: "relative",
  },
  successImage: {
    width: Style.adjust(375),
    height: Style.adjust(182),
  },
});

export default ChallengeSuccessOldScreen;
