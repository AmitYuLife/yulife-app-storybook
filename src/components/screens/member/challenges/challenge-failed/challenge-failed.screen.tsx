import { LevelLine, Stars, Text } from "@atoms";
import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { getChallengeFailedCopy } from "@redux/copy/copy.selectors";
import styles from "./challenge-failed.screen.styles";
import { CenteredScreenImages } from "@molecules/centred-screen/centred-screen";
import { Button, CentredScreen } from "@molecules";

interface IProps {
  level?: number;
  loading: boolean;
  onPress: () => void;
  currentWorld: number;
}

export default function ChallengeFailedScreen({ level, onPress, loading, currentWorld }: IProps) {
  const copy = useSelector(getChallengeFailedCopy);
  const { backgroundImage, backgroundStyle } = getStyle(currentWorld);

  return (
    <CentredScreen
      style={StyleSheet.flatten([styles.wrapper, backgroundStyle]) as ViewStyle}
      footerImage={backgroundImage as CenteredScreenImages}
    >
      <View style={styles.ratingWrapper}>
        <Stars />
        <View style={styles.levelWrapper}>
          <View style={styles.levelLineWrapper}>
            <LevelLine colour="rgb(226, 226, 226)" />
          </View>
          <Text style={styles.level}>{`level ${level}`}</Text>
        </View>
      </View>
      <Text bold={true} style={styles.heading}>
        {copy.heading}
      </Text>
      <Text style={styles.secondaryText}>{copy.footer}</Text>
      <Button isLoading={loading} wrapperStyle={styles.cta} onPress={onPress} label={copy.ctaLabel} size="Medium" />
    </CentredScreen>
  );
}

function getStyle(currentWorld: number) {
  switch (currentWorld) {
    case 3:
      return {
        backgroundImage: "challenge_mountain",
        backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" },
      };
    case 2:
      return {
        backgroundImage: "challenge_failed_desert",
        backgroundStyle: { backgroundColor: "#fffbcd" },
      };
    case 1:
      return {
        backgroundImage: "challenge_failed_ocean",
        backgroundStyle: null,
      };
    case 0:
    default:
      return {
        backgroundImage: "challenge_failed_forest",
        backgroundStyle: null,
      };
  }
}
