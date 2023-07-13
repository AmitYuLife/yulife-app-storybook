import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { LeaderboardPodium } from "../leaderboard-podium";
import { Caption } from "./caption";
import { CROP_AMOUNT } from "./styles";

interface Props {
  setConsent: () => void;
}

export const LeaderboardConsentPrompt = (props: Props) => {
  const { setConsent } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Caption setConsent={setConsent} />
      <View style={styles.absolute}>
        <LeaderboardPodium hideAvatars={true} cropAmount={CROP_AMOUNT} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  } as ViewStyle,
});
