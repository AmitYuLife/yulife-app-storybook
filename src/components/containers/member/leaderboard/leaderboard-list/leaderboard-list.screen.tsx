import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { LeaderboardListItems } from "./subcomponents/leaderboard-list-item";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import { IRightIcon } from "@atoms/generic-heading/generic-heading.types";
import { TOP_BAR } from "@styles";
import { ILeaderboard } from "@redux/user/user.reducer";

interface IProps {
  leaderboards: ILeaderboard[];
  activeLeaderboardId: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  onChangeActiveLeaderboard: (id: string) => void;
  onChangeLeaderboardConsent: (leaderboardId: string, consent: boolean) => void;
}

const RIGHT_ICON: IRightIcon = { icon: "PLUS" };

function LeaderboardOptionsScreen(props: IProps) {
  const {
    onLeftIconPress,
    onRightIconPress,
    leaderboards,
    onChangeActiveLeaderboard,
    onChangeLeaderboardConsent,
    activeLeaderboardId,
  } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.pad} />
      <LeaderboardListItems
        leaderboards={leaderboards}
        onPress={onChangeActiveLeaderboard}
        onChangeLeaderboardConsent={onChangeLeaderboardConsent}
        activeLeaderboardId={activeLeaderboardId}
      />
      <GenericHeadingAbsolute
        heading="Leaderboards"
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        rightIcon={RIGHT_ICON}
      />
    </View>
  );
}

export default LeaderboardOptionsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  pad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
    backgroundColor: "red",
  } as ViewStyle,
});
