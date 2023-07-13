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
  duelDialogId: string;
  setDuelDialogId: React.Dispatch<React.SetStateAction<string>>;
  showDuels: boolean;
}

export const resToList = ({
  leaderboardItems,
  onBack = () => null,
  duelDialogId,
  setDuelDialogId,
  showDuels,
}: IResToListArgs): ILeaderboardListItem[] => {
  if (!leaderboardItems.length) {
    return [];
  }

  const list = [] as ILeaderboardListItem[];

  addHeader(list, onBack);
  addRankItems(list, leaderboardItems, duelDialogId, setDuelDialogId, showDuels);

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

function addRankItems(
  list: ILeaderboardListItem[],
  leaderboardItems: IResToListArgs["leaderboardItems"],
  duelDialogId: string,
  setDuelDialogId: React.Dispatch<React.SetStateAction<string>>,
  showDuels: boolean
) {
  for (let i = 0; i < leaderboardItems.length; i++) {
    const leaderboardItem = leaderboardItems[i];
    const data = {
      isCurrentUser: leaderboardItem.isTarget,
      uri: leaderboardItem.avatarRemoteFiles?.pngMini,
      name: leaderboardItem.name,
      rank: leaderboardItem.position,
      score: leaderboardItem.value,
      id: leaderboardItem.id,
      firstName: leaderboardItem.firstName,
      lastName: leaderboardItem.lastName,
      duelDialogId,
      setDuelDialogId,
      showDuels,
      index: i,
    };

    list.push({
      key: leaderboardItem.id,
      type: LEADERBOARD_LEAN_ITEM.RANK_ITEM,
      data,
    } as ILeaderboardRankItem);
  }
}
