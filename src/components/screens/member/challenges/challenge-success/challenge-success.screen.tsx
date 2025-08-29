import * as React from "react";
import { Image, View } from "react-native";
import { LevelLine, Box, Stars, TextTemplate } from "@atoms";
import { t } from "@locale";
import { AnimatedPlusPoints, Button, CentredScreen, YucoinPowerButtonMini } from "@molecules";
import { formatCyclingMetersToKmWithOneDecimal } from "../challenge-progress/subcomponents/progress-bar.helpers";
import { getTheme } from "@theme";
import { CHALLENGE_SUCCESS_SCREEN } from "@ids";
import { IActiveLevel } from "@redux/levels/levels.types";
import { Style, StyleSheet } from "@styles";
import { commonStyles } from "../challenge-failed/challenge-failed.screen.styles";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { useCallback } from "react";
import Hint from "@components/molecules/hint/hint";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { useSelector } from "react-redux";
import { MAX_EXTRA_CHALLENGES_HINT_LEVEL } from "@services/constants";

interface IProps {
  onPressCta: () => void;
  level?: number;
  yuniversalMap?: number;
  rating: number;
  loading: boolean;
  reward: number;
  score: number;
  unit: IActiveLevel["unit"];
}

export default function ChallengeSuccessScreen({
  unit,
  level,
  score,
  rating,
  reward,
  loading,
  onPressCta,
  yuniversalMap,
}: IProps) {
  const dispatch = useDispatch();
  const { challengeSuccessScreen } = getTheme(level, yuniversalMap);
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
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.ratingWrapper}>
            <Stars isLeftHighlighted={rating > 0} isMidHighlighted={rating > 1} isRightHighlighted={rating > 2} />
            <View style={styles.levelWrapper}>
              <View style={styles.levelLineWrapper}>
                <LevelLine colour={challengeSuccessScreen.lineColour} />
              </View>
              <View style={styles.level}>
                <TextTemplate type="l1" color={challengeSuccessScreen.textStyle.color} textAlign="center">
                  {yuniversalMap ? t("screens.challenge_success.stage", { level }) : t("labels.level", { level })}
                </TextTemplate>
              </View>
            </View>
          </View>
          <View style={styles.heading}>
            <TextTemplate type="h1" color={challengeSuccessScreen.textStyle.color} textAlign="center">
              {t("screens.challenge_success.footer")}
            </TextTemplate>
          </View>
          <View>
            <View style={styles.plusPointsWrapper}>
              <AnimatedPlusPoints type="challenge-success" coins={reward} />
            </View>
            <Image source={require("@assets/challenge-success/challenge-success.png")} />
            <View style={styles.score}>
              <TextTemplate type="h2" color={styles.score.color} textAlign="center">
                {renderScore(score, unit)}
              </TextTemplate>
            </View>
          </View>
        </View>
        {showChallengesHint ? (
          <View style={styles.hintWrapper}>
            <Hint
              label={t("hints.unlock_more_challenges.title")}
              description={t("hints.unlock_more_challenges.description")}
              variant="challenges"
            />
          </View>
        ) : null}
        <Box gap={22} style={styles.ctaWrapper}>
          <YucoinPowerButtonMini onPress={onPressYucoinPowerButton} />
          <Button
            translationKey="labels.cta.collect"
            isLoading={loading}
            onPress={onPressCta}
            size="Fill"
            wrapperStyle={styles.cta}
          />
        </Box>
      </View>
    </CentredScreen>
  );
}

function renderScore(score: number, unit: IProps["unit"]) {
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
  ...commonStyles,
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topWrapper: {
    flex: 1,
  },
  cta: {
    marginBottom: Style.adjust(32),
  },
  ctaWrapper: {
    alignSelf: "stretch",
    paddingHorizontal: Style.adjust(32),
  },
  level: {
    textAlign: "center",
    color: "rgb(168, 105, 22)",
    fontSize: Style.adjust(14),
    marginTop: Style.adjust(-10),
  },
  plusPointsWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(48),
  },
  score: {
    start: 0,
    end: 0,
    textAlign: "center",
    position: "absolute",
    bottom: Style.adjust(24),
    fontSize: Style.adjust(25),
    color: "rgb(168, 105, 22)",
  },
  hintWrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingVertical: Style.adjust(48),
  },
});
