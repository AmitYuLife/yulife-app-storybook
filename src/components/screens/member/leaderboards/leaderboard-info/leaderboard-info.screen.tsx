import { GenericHeading, Text } from "@atoms/index";
import * as React from "react";
import { SafeAreaView } from "react-native";
import styles from "./leaderboard-info.styles";
import { LEADERBOARD_INFO } from "@ids";

interface IProps {
  componentId: string;
  onLeftIconPress?: () => void;
}

function LeaderboardInfoScreen({ onLeftIconPress }: IProps) {
  return (
    <SafeAreaView style={styles.wrapper} testID={LEADERBOARD_INFO}>
      <GenericHeading heading="About Leaderboards" onLeftIconPress={onLeftIconPress} />
      <Text style={styles.infoText}>
        The leaderboards are set to a 30 day rolling system. That means they show your step history for just the last 30
        days.
        {"\n"}
        {"\n"}
        To keep your steps up, aim to do as many or more steps than the previous month!
      </Text>
    </SafeAreaView>
  );
}

export default LeaderboardInfoScreen;
