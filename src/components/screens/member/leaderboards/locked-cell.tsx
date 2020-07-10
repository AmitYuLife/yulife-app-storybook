import React, { ComponentProps } from "react";
import { Animated, ViewStyle } from "react-native";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import { transformAvatar } from "../yu-screen/avatar-builder/avatar-builder.helper";
import { Style } from "@styles/index";

interface Props {
  leaderboardItem: Partial<ComponentProps<typeof LeaderboardItem>>;
  leaderboardItemIndex: number;
  floatingItemAnimatedOpacity: number;
  onPress: () => void;
  sortBy: string;
  show: boolean;
}

export function LockedCell({
  leaderboardItem,
  leaderboardItemIndex,
  floatingItemAnimatedOpacity,
  sortBy,
  onPress,
  show,
}: Props) {
  if (!show) {
    return null;
  }
  return (
    <Animated.View
      style={
        {
          position: "absolute",
          bottom: Style.adjust(84 + (Style.isAnyIphoneX() ? 16 : 0)),
          opacity: floatingItemAnimatedOpacity,
        } as ViewStyle
      }
    >
      <LeaderboardItem
        {...leaderboardItem}
        isLockedCell={true}
        avatar={transformAvatar(leaderboardItem?.avatar as any)}
        sortBy={sortBy}
        rank={leaderboardItemIndex + 1}
        onPress={onPress}
      />
    </Animated.View>
  );
}
