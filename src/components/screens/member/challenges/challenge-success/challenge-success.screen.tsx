import * as React from "react";
import { Image, View } from "react-native";
import { LevelLine, Stars, TextTemplate } from "@atoms";
import { t } from "@locale";
import { AnimatedPlusPoints, Button, CentredScreen } from "@molecules";
import { formatCyclingMetersToKmWithOneDecimal } from "../challenge-progress/subcomponents/progress-bar.helpers";
import styles, { SCORE_COLOR } from "./challenge-success.screen.styles";
import { getTheme } from "@theme";

interface IProps {
  onPressCta: () => void;
  level?: number;
  yuniversalMap?: number;
  rating: number;
  loading: boolean;
  reward: number;
  score: number;
  unit: "steps" | "minutes";
}

export default function ChallengeSuccessScreen(props: IProps) {
  const { level, yuniversalMap, onPressCta, rating, reward, score, unit, loading } = props;
  const { challengeSuccessScreen } = getTheme(level, yuniversalMap);

  return (
    <CentredScreen {...challengeSuccessScreen}>
      <View style={styles.ratingWrapper}>
        <Stars isLeftHighlighted={rating > 0} isMidHighlighted={rating > 1} isRightHighlighted={rating > 2} />
        <View style={styles.levelWrapper}>
          <View style={styles.levelLineWrapper}>
            <LevelLine colour={challengeSuccessScreen.lineColour} />
          </View>
          <View style={styles.level}>
            <TextTemplate type="l1" color={challengeSuccessScreen.textStyle.color} textAlign="center">
              {yuniversalMap
                ? t("screens.challenge_success.stage", { level })
                : t("screens.challenge_success.level", { level })}
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
          <TextTemplate type="h2" color={SCORE_COLOR} textAlign="center">
            {renderScore(score, unit)}
          </TextTemplate>
        </View>
      </View>

      <Button
        label={t("labels.cta.collect")}
        isLoading={loading}
        onPress={onPressCta}
        size="Small"
        wrapperStyle={styles.cta}
      />
    </CentredScreen>
  );
}

function renderScore(score: number, unit: string) {
  const unitTextPlural = unit === "minutes" ? t("time_units.minutes") : t("activity_types.steps.plural");
  const unitTextSingular = unit === "minutes" ? t("time_units.minute") : t("activity_types.steps.singular");


  const mins = Math.floor(score / 60);

  switch (unit) {
    case "minutes":
      return `${mins} ${mins === 1 ? unitTextSingular : unitTextPlural}`;
    case "meters":
      return formatCyclingMetersToKmWithOneDecimal(score);

    default:
      return `${score} ${unit}`;
  }
}
