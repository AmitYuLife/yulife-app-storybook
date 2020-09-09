import { ILeaderboardListItem, LEADERBOARD_LIST_ITEM } from "../leaderboard-content.types";
import { TOP_PADDING_HEIGHT } from "./constants";
import { LEADERBOARD_ITEM_HEIGHT } from "../../../items/leaderboard-rank-item/subcomponents";

export function getItemLayout(
  data: Array<ILeaderboardListItem> | null | undefined,
  index: number
): { length: number; offset: number; index: number } {
  let length = 0;
  const offset = TOP_PADDING_HEIGHT + LEADERBOARD_ITEM_HEIGHT * index;

  if (!data) {
    return { length, offset, index };
  }

  const item: ILeaderboardListItem = data[index];

  length = getLength(item);

  return { length, offset, index };
}

function getLength(item: ILeaderboardListItem) {
  switch (item.type) {
    case LEADERBOARD_LIST_ITEM.PAD:
      return item.data.height;
    case LEADERBOARD_LIST_ITEM.RANK_ITEM:
      return LEADERBOARD_ITEM_HEIGHT;
    default:
      return 0;
  }
}
