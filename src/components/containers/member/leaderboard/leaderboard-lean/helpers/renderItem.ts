import { createElement } from "react";
import { ListRenderItemInfo } from "react-native";
import { LEADERBOARD_LEAN_ITEM } from "../leaderboard-lean.types";
import { ListRankItem, LeaderboardHeader } from "../../items";

export function renderItem({ item }: ListRenderItemInfo<any>): React.ReactElement | null {
  switch (item.type) {
    case LEADERBOARD_LEAN_ITEM.HEADER:
      return createElement(LeaderboardHeader, item.data);
    case LEADERBOARD_LEAN_ITEM.RANK_ITEM:
      return createElement(ListRankItem, item.data);
    default:
      return null;
  }
}
