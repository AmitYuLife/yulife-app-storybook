import { LevelLine, Stars, Text } from "@atoms";
import * as React from "react";
import { View } from "react-native";
import styles from "./challenge-failed.screen.styles";
import { Button, CentredScreen } from "@molecules";
import { t } from "@locale";
import { getTheme } from "@theme";
import { CHALLENGE_FAILED_SCREEEN } from "@ids";

import { StyleSheet } from "@styles";
interface IProps {
  level?: number;
  yuniversalMap?: number;
  loading: boolean;
  onPress: () => void;
}

const ChallengeFailedScreen = ({ level, yuniversalMap, onPress, loading }: IProps) => {
  const { challengeFailedScreen } = getTheme(level, yuniversalMap);

  return (
    <CentredScreen {...challengeFailedScreen}>
      <View style={styles.ratingWrapper} testID={CHALLENGE_FAILED_SCREEEN}>
        <Stars />
        <View style={styles.levelWrapper}>
          <View style={styles.levelLineWrapper}>
            <LevelLine colour={challengeFailedScreen.lineColour} />
          </View>
          <Text style={StyleSheet.flatten([styles.level, challengeFailedScreen.textStyle])}>
            {yuniversalMap ? t("screens.challenge_failed.stage", { level }) : t("labels.level", { level })}
          </Text>
        </View>
      </View>
      <Text bold={true} style={StyleSheet.flatten([styles.heading, challengeFailedScreen.textStyle])}>
        {t("screens.challenge_failed.heading")}
      </Text>
      <Text style={StyleSheet.flatten([styles.secondaryText, challengeFailedScreen.textStyle])}>
        {t("screens.challenge_failed.footer")}
      </Text>
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

export default ChallengeFailedScreen;
