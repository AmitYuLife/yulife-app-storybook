import * as React from "react";
import { ScrollView } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "../../../../../graphql/_core/schema";
import { Button, Text } from "../../../../atoms";
import styles from "./leaderboard-consent.styles";

interface IProps {
  onAllowLeaderboard: () => void;
  isLoading: boolean;
  onPrivacyPolicyPress: () => void;
  onRefuseConsent: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
}

export default function LeaderboardConsent({ isLoading, onAllowLeaderboard, copy }: IProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.wrapper}
      contentContainerStyle={styles.contentWrapper}
    >
      <Text style={styles.heading} bold={true}>
        turn on leaderboard?
      </Text>
      <Text style={styles.subheading}>{copy.subheading}</Text>
      <Button
        wrapperStyle={styles.primaryButton}
        isLoading={isLoading}
        disabled={isLoading}
        label={copy.ctaLabel}
        onPress={onAllowLeaderboard}
        type="Primary"
      />
    </ScrollView>
  );
}
