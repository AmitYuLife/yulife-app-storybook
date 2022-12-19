import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { LeaderboardPodium } from "../leaderboard-podium";
import { Caption } from "./caption";
import { CROP_AMOUNT } from "./styles";

interface Props {
  leaderboardName: string;
  setConsent: () => void;
}

export const LeaderboardConsentPrompt = (props: Props) => {
  const { leaderboardName, setConsent } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Caption setConsent={setConsent} />
      <View style={styles.absolute}>
        <LeaderboardPodium leaderboardName={leaderboardName} hideAvatars={true} cropAmount={CROP_AMOUNT} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  } as ViewStyle,
});
