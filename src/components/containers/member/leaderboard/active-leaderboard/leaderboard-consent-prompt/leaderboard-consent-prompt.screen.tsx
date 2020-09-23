import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { LeaderboardPodium } from "../leaderboard-podium";
import { Caption } from "./caption";
import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@graphql/_core/schema";
import { CROP_AMOUNT } from "./styles";

interface Props {
  leaderboardName: string;
  setConsent: () => void;
  consentCopy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
}

export const LeaderboardConsentPrompt = (props: Props) => {
  const { leaderboardName, setConsent, consentCopy } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Caption copy={consentCopy} setConsent={setConsent} />
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
