import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { LeaderboardListItems } from "./subcomponents/leaderboard-list-item";
import { GenericHeadingAbsolute } from "@organisms";
import { TOP_BAR } from "@styles";
import { ILeaderboard } from "@redux/user/user.reducer";
import { t } from "@locale";

interface IProps {
  leaderboards: ILeaderboard[];
  activeLeaderboardId: string;
  onRefresh: () => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  onChangeActiveLeaderboard: (id: string, name: string, consent: boolean) => void;
  onChangeLeaderboardConsent: (id: string, consent: boolean, name: string) => void;
}

function LeaderboardOptionsScreen(props: IProps) {
  const {
    onLeftIconPress,
    onRightIconPress,
    leaderboards,
    onRefresh,
    onChangeActiveLeaderboard,
    onChangeLeaderboardConsent,
    activeLeaderboardId,
  } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.pad} />
      <LeaderboardListItems
        leaderboards={leaderboards}
        onRefresh={onRefresh}
        onPress={onChangeActiveLeaderboard}
        onChangeLeaderboardConsent={onChangeLeaderboardConsent}
        activeLeaderboardId={activeLeaderboardId}
      />
      <GenericHeadingAbsolute
        heading={t("screens.leaderboard.list.heading")}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
        rightIcon="PLUS"
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
