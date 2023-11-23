import { Tabs } from "@organisms";
import { memo, useMemo } from "react";
import { View } from "react-native";
import { styles } from "./leaderboard.screen";
import { ISocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.reducer";
import { Style } from "@styles";

interface ITabsProps {
  itemsIsLoading: boolean;
  leaderboards: ISocialGroupLeaderboard[];
  activeLeaderboard: ISocialGroupLeaderboard;
  onSelect: (leaderboard: { leaderboardId: string; name: string }) => void;
}

const LeaderboardTabs = ({ leaderboards = [], activeLeaderboard, itemsIsLoading, onSelect }: ITabsProps) => {
  const list = useMemo(() => {
    const size = Style.adjust(24);

    return leaderboards.map((leaderboard) => {
      return {
        name: leaderboard.name,
        icons: {
          icon: leaderboard.icon,
          selectedIcon: leaderboard.selectedIcon,
          width: size,
          height: size,
        },
        onPress: () => {
          onSelect({ leaderboardId: leaderboard.leaderboardId, name: leaderboard.name });
        },
      };
    });
  }, [leaderboards, onSelect]);

  const selectedTab = useMemo(
    () => leaderboards.findIndex((leaderboard) => leaderboard.leaderboardId === activeLeaderboard?.leaderboardId),
    [leaderboards, activeLeaderboard]
  );

  return (
    <View style={styles.tabs}>
      <Tabs list={list} isLoading={itemsIsLoading} initialLoading={!leaderboards?.length} defaultTab={selectedTab} />
    </View>
  );
};

export default memo(LeaderboardTabs);
