import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import { JoinLeaderboard, ListItem } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { View } from "react-native";
import { styles as screenStyle } from "./leaderboard.screen";
interface IProps {
  itemsIsLoading: boolean;
  isLoading: boolean;
  hasConsent: boolean;
  hasLeaderboard: boolean;
  showYudokuEmptyMessage: boolean;
  onJoinLeaderboardPress: () => void;
}

const LeaderboardListFooterComponent = ({
  itemsIsLoading,
  isLoading,
  hasConsent,
  hasLeaderboard,
  onJoinLeaderboardPress,
  showYudokuEmptyMessage,
}: IProps) => {
  if (!hasLeaderboard) {
    return <MissingLeaderboard />;
  }

  if (itemsIsLoading || isLoading) {
    return <ListItemsLoading />;
  }

  if (!hasConsent) {
    return <JoinLeaderboard onPress={onJoinLeaderboardPress} />;
  }

  if (showYudokuEmptyMessage) {
    return <EmptyYudoku />;
  }
};

const EmptyYudoku = () => (
  <View style={styles.emptyYudoku}>
    <TextTemplate type="b2" textAlign="center">
      {t("sudoku.leaderboard.empty_description")}
    </TextTemplate>
  </View>
);

const MissingLeaderboard = () => (
  <View style={styles.emptyYudoku}>
    <TextTemplate type="b2" textAlign="center">
      {t("screens.leaderboard.list.empty_leaderboard")}
    </TextTemplate>
  </View>
);

const ListItemsLoading = () => (
  <>
    {Array.from({ length: 10 }).map((_, index) => (
      <View style={screenStyle.listWrapper} key={index}>
        <ListItem isLoading={true} position={index} type="leaderboard" name={null} uri={null} score={null} />
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  emptyYudoku: {
    paddingHorizontal: Style.adjust(53),
    marginTop: Style.adjust(130),
  },
});
export default memo(LeaderboardListFooterComponent);
