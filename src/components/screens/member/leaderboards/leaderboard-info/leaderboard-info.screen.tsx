import { GenericHeading, Text } from "@atoms/index";
import * as React from "react";
import { SafeAreaView } from "react-native";
import styles from "./leaderboard-info.styles";

interface IProps {
  componentId: string;
  onLeftIconPress?: () => void;
}

function LeaderboardInfoScreen({ onLeftIconPress }: IProps) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading heading="About Leaderboards" onLeftIconPress={onLeftIconPress} />
      <Text style={styles.infoText}>
        The leaderboards are set to a 30 day rolling system. That means they show your step history for just the last 30
        days.
        {"\n"}
        {"\n"}
        To keep your steps up, aim to do more than you did 30 days ago!
      </Text>
    </SafeAreaView>
  );
}

export default LeaderboardInfoScreen;
