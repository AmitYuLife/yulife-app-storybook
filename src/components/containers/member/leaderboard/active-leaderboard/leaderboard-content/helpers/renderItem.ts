import { createElement } from "react";
import { ListRenderItemInfo } from "react-native";
import { ILeaderboardListItem, LEADERBOARD_LIST_ITEM } from "../leaderboard-content.types";
import { LeaderboardPad } from "../../../items/leaderboard-pad";
import { ListRankItem } from "../../../items/leaderboard-rank-item/list-rank-item";
import { PadWithLoader } from "../../../items/pad-with-loader";
import { LeaderboardPodium } from "../../leaderboard-podium";

export function renderItem({ item }: ListRenderItemInfo<ILeaderboardListItem>): React.ReactElement | null {
  switch (item.type) {
    case LEADERBOARD_LIST_ITEM.PAD:
      return createElement(LeaderboardPad, item.data);
    case LEADERBOARD_LIST_ITEM.RANK_ITEM:
      return createElement(ListRankItem, item.data);
    case LEADERBOARD_LIST_ITEM.PODIUM:
      return createElement(LeaderboardPodium, item.data);
    case LEADERBOARD_LIST_ITEM.PAD_WITH_LOADER:
      return createElement(PadWithLoader, item.data);
    default:
      return null;
  }
}
