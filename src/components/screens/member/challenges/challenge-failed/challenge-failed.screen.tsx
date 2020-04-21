import { Button, CentredScreen, LevelLine, Stars, Text } from "@atoms/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_challenges_failed } from "../../../../../graphql/_core/schema";
import styles from "./challenge-failed.screen.styles";

interface IProps {
  level?: number;
  onPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_challenges_failed;
}

export default function ChallengeFailedScreen({ level, onPress, copy }: IProps) {
  const { backgroundImage, backgroundStyle } = getStyle(level);
  return (
    <CentredScreen style={StyleSheet.flatten([styles.wrapper, backgroundStyle]) as any} footerImage={backgroundImage}>
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
      <Button wrapperStyle={styles.cta} onPress={onPress} label={copy.ctaLabel} type="PrimaryMedium" />
    </CentredScreen>
  );
}

function getStyle(currentLevel: number): any {
  switch (getCurrentWorld(currentLevel)) {
    case 3:
      return {
        backgroundImage: "challenge_mountain",
        backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" }
      };
    case 2:
      return {
        backgroundImage: "challenge_failed_desert",
        backgroundStyle: { backgroundColor: "#fffbcd" }
      };
    case 1:
      return {
        backgroundImage: "challenge_failed_ocean",
        backgroundStyle: null
      };
    case 0:
    default:
      return {
        backgroundImage: "challenge_failed_forest",
        backgroundStyle: null
      };
  }
}
