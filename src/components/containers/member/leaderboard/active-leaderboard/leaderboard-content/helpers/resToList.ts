import {
  LEADERBOARD_LIST_ITEM,
  ILeaderboardPad,
  ILeaderboardRankItem,
  ILeaderboardListItem,
  ILeaderboardPodium,
  IPadWithLoader,
} from "../leaderboard-content.types";
import { GetLeaderboard_getLeaderboard } from "@graphql/_core/schema";
import { Animated, FlatList, Platform } from "react-native";
import { ILeaderboardRankItemProps } from "../items";
import { LEADERBOARD_ITEM_HEIGHT } from "../items/leaderboard-rank-item/subcomponents";
import { RefObject } from "react";
import { TOP_PADDING_HEIGHT } from "./constants";

interface IResToListRefs {
  scrollValue: Animated.Value;
  flatListRef: RefObject<FlatList>;
}

export const resToList = (
  leaderboardItems: GetLeaderboard_getLeaderboard[],
  currentUserId: string,
  refs: IResToListRefs,
  leaderboardName: string
): { flatListData: ILeaderboardListItem[]; floatingItemData: ILeaderboardRankItemProps; currentUserOffset: number } => {
  if (!leaderboardItems.length || !currentUserId) {
    return { flatListData: [], floatingItemData: null, currentUserOffset: 0 };
  }

  const list = [] as ILeaderboardListItem[];

  const currentUserData: ILeaderboardRankItemProps = {
    isCurrentUser: true,
    name: "",
    rank: 0,
    score: 0,
    uri: null,
  };

  addTopPadding(list, { leaderboardName, leaderboardItems });
  addRankItems(list, currentUserData, { leaderboardItems, currentUserId, refs });
  addBottomPadding(list);

  const userIndex = leaderboardItems.findIndex(({ id }) => id === `lead_${currentUserId}`);

  return {
    flatListData: list,
    floatingItemData: currentUserData,
    currentUserOffset: TOP_PADDING_HEIGHT + LEADERBOARD_ITEM_HEIGHT * userIndex,
  };
};

export function getUriSet(leaderboardItems: GetLeaderboard_getLeaderboard[]) {
  return Array.from({ length: 3 }).map((_, index) => leaderboardItems[index]?.avatarRemoteFiles?.pngFull);
}

function addTopPadding(
  list: ILeaderboardListItem[],
  { leaderboardName, leaderboardItems }: { leaderboardName: string; leaderboardItems: GetLeaderboard_getLeaderboard[] }
) {
  if (Platform.OS === "ios") {
    const padding = {
      key: "TOP_PAD",
      type: LEADERBOARD_LIST_ITEM.PAD_WITH_LOADER,
      data: {
        height: TOP_PADDING_HEIGHT,
      },
    } as IPadWithLoader;

    list.push(padding);
  }

  if (Platform.OS === "android") {
    const padding = {
      key: "PODIUM",
      type: LEADERBOARD_LIST_ITEM.PODIUM,
      data: {
        leaderboardName,
        uriSet: getUriSet(leaderboardItems),
      },
    } as ILeaderboardPodium;

    list.push(padding);
  }
}

interface AddRanksItemArgs {
  leaderboardItems: GetLeaderboard_getLeaderboard[];
  refs: IResToListRefs;
  currentUserId: string;
}

function addRankItems(
  list: ILeaderboardListItem[],
  currentUserData: ILeaderboardRankItemProps,
  { leaderboardItems, refs, currentUserId }: AddRanksItemArgs
) {
  for (let i = 0; i < leaderboardItems.length; i++) {
    const leaderboardItem = leaderboardItems[i];
    const isCurrentUser = leaderboardItem.id === `lead_${currentUserId}`;
    const data = {
      isCurrentUser,
      animatedOpacity: isCurrentUser ? refs.scrollValue : null,
      uri: leaderboardItem.avatarRemoteFiles?.pngMini,
      name: leaderboardItem.name,
      rank: i + 1,
      score: leaderboardItem.steps,
    };

    list.push({
      key: leaderboardItem.id,
      type: LEADERBOARD_LIST_ITEM.RANK_ITEM,
      data,
    } as ILeaderboardRankItem);

    if (isCurrentUser) {
      Object.assign(currentUserData, data);
    }
  }
}

function addBottomPadding(list: ILeaderboardListItem[]) {
  const SPACE_FOR_NAV_BAR = 20;

  list.push({
    key: "BOTTOM_PADDING",
    type: LEADERBOARD_LIST_ITEM.PAD,
    data: {
      height: SPACE_FOR_NAV_BAR,
    },
  } as ILeaderboardPad);
}
