import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Close, Text } from "../../../../atoms";
import { data, getCardBackgroundColor, getImageAndStyle } from "./challenge-details.helpers";
import styles from "./challenge-details.styles";
import Milestones, { IMilestone, IMilestoneProps } from "./milestones";

interface IOwnProps {
  challengeType: string;
  currentWorld?: number;
  duration: string;
  isLoading?: boolean;
  error?: string;
  onPressClose: () => void;
  onPressCta: () => void;
  onPressSetUp?: () => void;
}

type Props = IOwnProps & IMilestoneProps;

function ChallengeDetailsScreen({
  challengeType,
  currentWorld = 0,
  duration,
  error = null,
  isLoading = false,
  milestones,
  onPressClose,
  onPressCta,
  onPressSetUp = null,
  unit,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Close onPress={onPressClose} />
      <Image {...getImageAndStyle(challengeType, currentWorld)} />
      <View
        style={StyleSheet.flatten([
          styles.contentWrapper,
          {
            backgroundColor: getCardBackgroundColor(currentWorld),
          },
        ])}
      >
        <Text bold={true} style={styles.heading}>
          {getChallengeDetailsTitle(challengeType, duration, milestones)}
        </Text>
        <Milestones milestones={milestones} unit={unit} />
      </View>
      <Button
        disabled={isLoading}
        isLoading={isLoading}
        label={isLoading ? data.loading : data.ctaLabel}
        onPress={onPressCta}
        type="Primary"
        wrapperStyle={styles.ctaButton}
      />
      {!onPressSetUp ? (
        <Text style={styles.footer}>{data.footer}</Text>
      ) : (
        <Button label={data.setUpLabel} onPress={onPressSetUp} type="Secondary" wrapperStyle={styles.setUp} />
      )}
      {!error ? null : <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const getChallengeDetailsTitle = (challengeType: string, duration: string, milestones: IMilestone[]): string => {
  if (challengeType === "cycling") {
    if (milestones.length > 1) {
      return `${challengeType} / ${(milestones[0].target / 1000).toFixed(0)}-${(
        milestones[milestones.length - 1].target / 1000
      ).toFixed(0)} km`;
    }

    return `${challengeType} / ${(milestones[0].target / 1000).toFixed(0)} km`;
  }

  return `${challengeType} / ${duration}`;
};

export default React.memo(ChallengeDetailsScreen);
