import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { LevelLine, Stars, TextTemplate } from "@atoms";
import { AnimatedPlusPoints, Button, CentredScreen } from "@molecules";
import { getChallengeSuccessCopy } from "@redux/copy/copy.selectors";
import { formatCyclingMetersToKmWithOneDecimal } from "../challenge-progress/subcomponents/progress-bar.helpers";
import Assets from "./assets";
import { getStyle } from "./challenge-success.helpers";
import styles, { LINE_COLOR, SCORE_COLOR } from "./challenge-success.screen.styles";
import { t } from "@locale";

interface IProps {
  onPressCta: () => void;
  level?: number;
  yuniversalMap?: number;
  rating: number;
  loading: boolean;
  reward: number;
  score: number;
  unit: "steps" | "minutes";
  currentWorld: number;
}

export default function ChallengeSuccessScreen({
  level,
  yuniversalMap,
  onPressCta,
  rating,
  reward,
  score,
  unit,
  loading,
  currentWorld,
}: IProps) {
  const copy = useSelector(getChallengeSuccessCopy);
  const { backgroundImage, backgroundStyle, textStyle, lineColour = LINE_COLOR } = getStyle(
    currentWorld,
    yuniversalMap
  );

  return (
    <CentredScreen style={StyleSheet.flatten([styles.wrapper, backgroundStyle])} footerImage={backgroundImage}>
      <View style={styles.ratingWrapper}>
        <Stars isLeftHighlighted={rating > 0} isMidHighlighted={rating > 1} isRightHighlighted={rating > 2} />
        <View style={styles.levelWrapper}>
          <View style={styles.levelLineWrapper}>
            <LevelLine colour={lineColour} />
          </View>
          <View style={styles.level}>
            <TextTemplate type="l1" color={textStyle?.color} textAlign="center">
              {yuniversalMap
                ? t("screens.challenge_success.stage", { level })
                : t("screens.challenge_success.level", { level })}
            </TextTemplate>
          </View>
        </View>
      </View>
      <View style={styles.heading}>
        <TextTemplate type="h1" color={textStyle?.color} textAlign="center">
          {copy.footer}
        </TextTemplate>
      </View>
      <View>
        <View style={styles.plusPointsWrapper}>
          <AnimatedPlusPoints type="challenge-success" coins={reward} />
        </View>
        <Image source={Assets.challengeSuccess} />
        <View style={styles.score}>
          <TextTemplate type="h2" color={SCORE_COLOR} textAlign="center">
            {renderScore(score, unit)}
          </TextTemplate>
        </View>
      </View>

      <Button
        label={t("screens.challenge_success.cta_label")}
        isLoading={loading}
        onPress={onPressCta}
        size="Small"
        wrapperStyle={styles.cta}
      />
    </CentredScreen>
  );
}

function renderScore(score: number, unit: string) {
  const mins = Math.floor(score / 60);

  switch (unit) {
    case "minutes":
      return `${mins} ${mins === 1 ? "minute" : unit}`;
    case "meters":
      return formatCyclingMetersToKmWithOneDecimal(score);

    default:
      return `${score} ${unit}`;
  }
}
