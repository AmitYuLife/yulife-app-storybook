import {
  LEADERBOARD_LIST_ITEM,
  ILeaderboardPad,
  ILeaderboardRankItem,
  ILeaderboardListItem,
  ILeaderboardPodium,
  IPadWithLoader,
} from "../leaderboard-content.types";
import { GetLeaderboard_getLeaderboard } from "@graphql/_core/schema";
import { Platform, Animated } from "react-native";
import { ILeaderboardRankItemProps } from "../../../items";
import { LEADERBOARD_ITEM_HEIGHT } from "../../../items/leaderboard-rank-item/subcomponents";
import { TOP_PADDING_HEIGHT } from "./constants";
import { PAGE_SIZE } from "../../active-leaderboard.container";
import deviceInfoModule from "react-native-device-info";

interface ResToListOutput {
  flatListData: ILeaderboardListItem[];
  floatingItemData: ILeaderboardRankItemProps;
  currentUserOffset: number;
}

interface ResToListArgs {
  leaderboardItems: GetLeaderboard_getLeaderboard[];
  currentUserId: string;
  leaderboardName: string;
  isRefetching: boolean;
  isLoading: boolean;
  scrollValue: Animated.Value;
  duelDialogId: string;
  setDuelDialogId: (value: string) => void;
  showDuels: boolean;
}

export const resToList = ({
  leaderboardItems,
  currentUserId,
  leaderboardName,
  isRefetching,
  scrollValue,
  isLoading,
  duelDialogId,
  setDuelDialogId,
  showDuels,
}: ResToListArgs): ResToListOutput => {
  if (!leaderboardItems.length || !currentUserId) {
    return { flatListData: [], floatingItemData: null, currentUserOffset: 0 };
  }

  const list = [] as ILeaderboardListItem[];

  const userIndex = leaderboardItems.findIndex(({ id }) => id === `lead_${currentUserId}`);
  const currentUserData: ILeaderboardRankItemProps = {
    isCurrentUser: true,
    name: "",
    rank: 0,
    score: 0,
    uri: null,
    id: "",
    firstName: "",
    lastName: "",
    duelDialogId,
    setDuelDialogId,
    showDuels,
    index: userIndex,
  };

  const user = leaderboardItems[userIndex];

  addTopPadding({ list, leaderboardName, leaderboardItems, isRefetching, scrollValue, isLoading });
  addFrontPageLabel(list, leaderboardItems.length);
  addRankItems(list, currentUserData, { leaderboardItems, currentUserId }, duelDialogId, setDuelDialogId, showDuels);
  addBottomPadding({ list, userInPage: user?.position < PAGE_SIZE });

  return {
    flatListData: list,
    floatingItemData: currentUserData,
    currentUserOffset: TOP_PADDING_HEIGHT + LEADERBOARD_ITEM_HEIGHT * userIndex,
  };
};

export function getUriSet(leaderboardItems: GetLeaderboard_getLeaderboard[]) {
  return Array.from({ length: 3 }).map((_, index) => leaderboardItems[index]?.avatarRemoteFiles?.pngFull);
}

interface AddTopPaddingArgs {
  scrollValue: Animated.Value;
  isRefetching: boolean;
  list: ILeaderboardListItem[];
  isLoading: boolean;
  leaderboardName: string;
  leaderboardItems: GetLeaderboard_getLeaderboard[];
}

function addTopPadding({
  isLoading,
  list,
  leaderboardName,
  leaderboardItems,
  isRefetching,
  scrollValue,
}: AddTopPaddingArgs) {
  if (Platform.OS === "ios") {
    const padding = {
      key: "TOP_PAD",
      type: LEADERBOARD_LIST_ITEM.PAD_WITH_LOADER,
      data: {
        height: TOP_PADDING_HEIGHT,
        isRefetching,
        scrollValue,
        isLoading,
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

function addFrontPageLabel(list: ILeaderboardListItem[], leaderboardItemsLength: number) {
  if (leaderboardItemsLength < 500) {
    return;
  }

  list.push({
    key: "FRONT_PAGE_LABEL",
    type: LEADERBOARD_LIST_ITEM.FRONT_PAGE_LABEL,
  } as ILeaderboardListItem);
}

interface AddRanksItemArgs {
  leaderboardItems: GetLeaderboard_getLeaderboard[];
  currentUserId: string;
}

function addRankItems(
  list: ILeaderboardListItem[],
  currentUserData: ILeaderboardRankItemProps,
  { leaderboardItems, currentUserId }: AddRanksItemArgs,
  duelDialogId: string,
  setDuelDialogId: React.Dispatch<React.SetStateAction<string>>,
  showDuels: boolean
) {
  for (let i = 0; i < leaderboardItems.length; i++) {
    const leaderboardItem = leaderboardItems[i];
    const isCurrentUser = leaderboardItem.id === `lead_${currentUserId}`;
    const data = {
      isCurrentUser,
      uri: leaderboardItem.avatarRemoteFiles?.pngMini,
      name: leaderboardItem.name,
      rank: leaderboardItem.position,
      score: leaderboardItem.steps,
      id: leaderboardItem.id,
      firstName: leaderboardItem.firstName,
      lastName: leaderboardItem.lastName,
      duelDialogId,
      setDuelDialogId,
      showDuels,
      index: i,
    };

    if (leaderboardItem.position < PAGE_SIZE) {
      list.push({
        key: leaderboardItem.id,
        type: LEADERBOARD_LIST_ITEM.RANK_ITEM,
        data,
      } as ILeaderboardRankItem);
    }

    if (isCurrentUser) {
      Object.assign(currentUserData, data);
    }
  }
}

interface AddBottomPadding {
  list: ILeaderboardListItem[];
  userInPage: boolean;
}

function addBottomPadding({ list, userInPage }: AddBottomPadding) {
  list.push({
    key: "BOTTOM_PADDING",
    type: LEADERBOARD_LIST_ITEM.PAD,
    data: {
      height: getBottomPadding({ list, userInPage }),
    },
  } as ILeaderboardPad);
}

function getBottomPadding({ list, userInPage }: AddBottomPadding) {
  if (list.length < PAGE_SIZE || userInPage) {
    if (Platform.OS === "ios" && deviceInfoModule.hasNotch()) {
      return 8;
    }

    return 0;
  }

  if (Platform.OS === "ios" && deviceInfoModule.hasNotch()) {
    return LEADERBOARD_ITEM_HEIGHT + 12;
  }

  return LEADERBOARD_ITEM_HEIGHT;
}
