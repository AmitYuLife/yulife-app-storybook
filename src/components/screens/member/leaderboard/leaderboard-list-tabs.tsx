import { Tabs } from "@organisms";
import { memo, useMemo } from "react";
import { View } from "react-native";
import { styles as leaderboardStyles } from "./leaderboard.screen";
import { ISocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.types";
import { Style } from "@styles";
import { BottomShadow } from "@atoms";

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
    <View>
      <View style={leaderboardStyles.tabs}>
        <Tabs list={list} isLoading={itemsIsLoading} initialLoading={!leaderboards?.length} defaultTab={selectedTab} />
        <BottomShadow />
      </View>
    </View>
  );
};

export default memo(LeaderboardTabs);
