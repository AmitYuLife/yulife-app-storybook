import { ILeaderboardRankItemProps, ILeaderboardHeaderProps } from "../items";

export enum LEADERBOARD_LEAN_ITEM {
  RANK_ITEM = "RANK_ITEM",
  HEADER = "HEADER",
}

export interface ILeaderboardRankItem {
  type: LEADERBOARD_LEAN_ITEM.RANK_ITEM;
  data: ILeaderboardRankItemProps;
}

export interface ILeaderboardHeader {
  type: LEADERBOARD_LEAN_ITEM.HEADER;
  data: ILeaderboardHeaderProps;
}

export type ILeaderboardListItem = ILeaderboardHeader | ILeaderboardRankItem;
