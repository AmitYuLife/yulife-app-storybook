import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { LevelLine, Stars, Text } from "@atoms";
import { AnimatedPlusPoints, Button, CentredScreen } from "@molecules";
import { getChallengeSuccessCopy } from "@redux/copy/copy.selectors";
import { formatCyclingMetersToKmWithOneDecimal } from "../challenge-progress/subcomponents/progress-bar.helpers";
import Assets from "./assets";
import { getStyle } from "./challenge-success.helpers";
import styles from "./challenge-success.screen.styles";

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
  const { backgroundImage, backgroundStyle, textStyle, lineColour = "rgb(251, 207, 39)" } = getStyle(
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
          <Text style={StyleSheet.flatten([styles.level, textStyle])}>{`level ${level}`}</Text>
        </View>
      </View>

      <Text bold={true} style={StyleSheet.flatten([styles.heading, textStyle])}>
        {copy.footer}
      </Text>
      <View>
        <View style={styles.plusPointsWrapper}>
          <AnimatedPlusPoints type="challenge-success" coins={reward} />
        </View>
        <Image source={Assets.challengeSuccess} />
        <Text bold={true} style={styles.score}>
          {renderScore(score, unit)}
        </Text>
      </View>

      <Button label={copy.ctaLabel} isLoading={loading} onPress={onPressCta} size="Small" wrapperStyle={styles.cta} />
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
