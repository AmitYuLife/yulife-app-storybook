import {
  ILeaderboardListItem,
  ILeaderboardRankItem,
  ILeaderboardHeader,
  LEADERBOARD_LEAN_ITEM,
} from "../leaderboard-lean.types";
import { GetLeaderboard_getLeaderboard } from "@graphql/_core/schema";

interface IResToListArgs {
  leaderboardItems: GetLeaderboard_getLeaderboard[];
  onBack: () => void;
}

export const resToList = ({ leaderboardItems, onBack = () => null }: IResToListArgs): ILeaderboardListItem[] => {
  if (!leaderboardItems.length) {
    return [];
  }

  const list = [] as ILeaderboardListItem[];

  addHeader(list, onBack);
  addRankItems(list, leaderboardItems);

  return list;
};

function addHeader(list: ILeaderboardListItem[], onBack: () => void) {
  list.push({
    key: "HEADER",
    type: LEADERBOARD_LEAN_ITEM.HEADER,
    data: {
      onBack,
    },
  } as ILeaderboardHeader);
}

function addRankItems(list: ILeaderboardListItem[], leaderboardItems: IResToListArgs["leaderboardItems"]) {
  for (let i = 0; i < leaderboardItems.length; i++) {
    const leaderboardItem = leaderboardItems[i];
    const data = {
      isCurrentUser: leaderboardItem.isTarget,
      uri: leaderboardItem.avatarRemoteFiles?.pngMini,
      name: leaderboardItem.name,
      rank: leaderboardItem.position,
      score: leaderboardItem.steps,
    };

    list.push({
      key: leaderboardItem.id,
      type: LEADERBOARD_LEAN_ITEM.RANK_ITEM,
      data,
    } as ILeaderboardRankItem);
  }
}
