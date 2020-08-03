import { ILeaderboardRankItemProps, ILeaderboardPadProps } from "./items";
import { ILeaderboardPodiumProps } from "../leaderboard-podium/leaderboard-podium";
import { IPadWithLoaderProps } from "./items/pad-with-loader";

export enum LEADERBOARD_LIST_ITEM {
  RANK_ITEM = "RANK_ITEM",
  PAD = "PAD",
  PODIUM = "PODIUM",
  PAD_WITH_LOADER = "PAD_WITH_LOADER",
}

export interface ILeaderboardPad {
  type: LEADERBOARD_LIST_ITEM.PAD;
  data: ILeaderboardPadProps;
}

export interface ILeaderboardRankItem {
  type: LEADERBOARD_LIST_ITEM.RANK_ITEM;
  data: ILeaderboardRankItemProps;
}

export interface ILeaderboardPodium {
  type: LEADERBOARD_LIST_ITEM.PODIUM;
  data: ILeaderboardPodiumProps;
}

export interface IPadWithLoader {
  type: LEADERBOARD_LIST_ITEM.PAD_WITH_LOADER;
  data: IPadWithLoaderProps;
}

export type ILeaderboardListItem = ILeaderboardPad | ILeaderboardRankItem | ILeaderboardPodium | IPadWithLoader;
