import { REHYDRATE } from "redux-persist";
import { SyncAction } from "@redux/_core/types";
import {
  SearchLeaderboardUser as SearchItem,
  ISocialGroup,
  IGetSocialGroupsSuccessPayload,
} from "./leaderboards.types";
import {
  ADD_RECENT_SEARCH_ITEM,
  UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS,
  UPDATE_ACTIVE_SOCIAL_GROUP_ID,
  UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID,
  CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY,
  UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS,
} from "./leaderboards.actions";
import { LOGOUT_SUCCESS } from "@redux/user/user.actions";

const MAX_SEARCH_ITEMS = 50;

export interface ILeaderboardsStore {
  socialGroups: ISocialGroup[];
  activeSocialGroupId: string;
  activeLeaderboardId: string;
  recentSearch: SearchItem[];
}

export const getInitialState = (): ILeaderboardsStore => ({
  socialGroups: [],
  recentSearch: [],
  activeSocialGroupId: null,
  activeLeaderboardId: null,
});

const leaderboardReducer = (state: ILeaderboardsStore = getInitialState(), action: SyncAction): ILeaderboardsStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.leaderboard) {
        return action.payload.leaderboard;
      }

      return state;

    case ADD_RECENT_SEARCH_ITEM:
      return addRecent(state, action.payload);

    case UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS:
      return updateSocialGroupLeaderboardsSuccess(state, action.payload);

    case UPDATE_ACTIVE_SOCIAL_GROUP_ID:
      return updateActiveSocialGroupId(state, action.payload);

    case UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID:
      return updateActiveSocialGroupLeaderboardId(state, action.payload);

    case UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS:
      return updateSocialGroupLeaderboardConsents(state, action.payload);

    case CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY:
      return clearSocialGroupLeaderboardRecentSearchHistory(state);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

export default leaderboardReducer;

const addRecent = (state: ILeaderboardsStore, { item: searchItem }: { item: SearchItem }) => {
  const filteredSearchItems = state?.recentSearch ? state.recentSearch.filter((item) => item.id !== searchItem.id) : [];
  if (filteredSearchItems.length > MAX_SEARCH_ITEMS) {
    return { ...state, recentSearch: [searchItem, ...filteredSearchItems.slice(0, MAX_SEARCH_ITEMS)] };
  }

  return { ...state, recentSearch: [searchItem, ...filteredSearchItems] };
};

const updateSocialGroupLeaderboardsSuccess = (
  state: ILeaderboardsStore,
  { socialGroups: socialGroupsData }: IGetSocialGroupsSuccessPayload
): ILeaderboardsStore => {
  const activeLeaderboardConfigId = state.socialGroups
    ?.find((socialGroup) => socialGroup.socialGroupId === state.activeSocialGroupId)
    ?.leaderboards?.find((leaderboard) => leaderboard.leaderboardId === state.activeLeaderboardId)?.leaderboardConfigId;

  const selectedSocialGroup =
    socialGroupsData?.find((socialGroup) => socialGroup.socialGroupId === state.activeSocialGroupId) ||
    socialGroupsData[0];
  const selectedLeaderboard =
    selectedSocialGroup?.leaderboards?.find((leaderboard) => leaderboard.leaderboardId === state.activeLeaderboardId) ||
    selectedSocialGroup?.leaderboards?.find(
      (leaderboard) => leaderboard.leaderboardConfigId === activeLeaderboardConfigId
    ) ||
    selectedSocialGroup?.leaderboards?.[0];

  const socialGroups: ISocialGroup[] = socialGroupsData;

  return {
    ...state,
    socialGroups,
    activeSocialGroupId: selectedSocialGroup?.socialGroupId || null,
    activeLeaderboardId: selectedLeaderboard?.leaderboardId || null,
  };
};

const updateActiveSocialGroupId = (state: ILeaderboardsStore, socialGroupId: string) => {
  if (socialGroupId === state.activeSocialGroupId) {
    return state;
  }

  const activeLeaderboardConfigId = state.socialGroups
    ?.find((socialGroup) => socialGroup.socialGroupId === state.activeSocialGroupId)
    ?.leaderboards?.find((leaderboard) => leaderboard.leaderboardId === state.activeLeaderboardId)?.leaderboardConfigId;

  const selectedSocialGroup = state.socialGroups?.find((socialGroup) => socialGroup.socialGroupId === socialGroupId);
  const selectedLeaderboard =
    selectedSocialGroup?.leaderboards?.find(
      (leaderboard) => leaderboard.leaderboardConfigId === activeLeaderboardConfigId
    ) || selectedSocialGroup?.leaderboards?.[0];

  return {
    ...state,
    activeSocialGroupId: selectedSocialGroup?.socialGroupId || null,
    activeLeaderboardId: selectedLeaderboard?.leaderboardId || null,
  };
};

const updateActiveSocialGroupLeaderboardId = (state: ILeaderboardsStore, leaderboardId: string) => {
  if (leaderboardId === state.activeLeaderboardId) {
    return state;
  }

  const selectedSocialGroup = state.socialGroups?.find(
    (socialGroup) => socialGroup.socialGroupId === state.activeSocialGroupId
  );
  const selectedLeaderboard = selectedSocialGroup?.leaderboards?.find(
    (leaderboard) => leaderboard.leaderboardId === leaderboardId
  );

  return {
    ...state,
    activeLeaderboardId: selectedLeaderboard?.leaderboardId || null,
  };
};

export interface IUpdateSocialGroupLeaderboardConsent {
  socialGroupId: string;
  leaderboards: {
    leaderboardId: string;
    consent: boolean;
  }[];
}

const updateSocialGroupLeaderboardConsents = (
  state: ILeaderboardsStore,
  payload: IUpdateSocialGroupLeaderboardConsent
) => {
  const { socialGroupId, leaderboards } = payload;
  const leaderboardMap = new Map(leaderboards.map((leaderboard) => [leaderboard.leaderboardId, leaderboard.consent]));
  const selectedSocialGroupIndex = state.socialGroups.findIndex(
    (socialGroup) => socialGroup.socialGroupId === socialGroupId
  );

  const leaderboardsConsentUpdated = state.socialGroups[selectedSocialGroupIndex]?.leaderboards.map((leaderboard) => {
    if (leaderboardMap.has(leaderboard.leaderboardId)) {
      return {
        ...leaderboard,
        consent: leaderboardMap.get(leaderboard.leaderboardId),
      };
    }

    return leaderboard;
  });

  const updatedSocialGroup = [
    {
      ...state.socialGroups[selectedSocialGroupIndex],
      leaderboards: [...leaderboardsConsentUpdated],
    },
  ];

  const filterSocialGroups = state.socialGroups.filter(
    (social) => social.socialGroupId !== state.socialGroups[selectedSocialGroupIndex].socialGroupId
  );

  return {
    ...state,
    socialGroups: [...filterSocialGroups, ...updatedSocialGroup],
  };
};

const clearSocialGroupLeaderboardRecentSearchHistory = (state: ILeaderboardsStore): ILeaderboardsStore => {
  return {
    ...state,
    recentSearch: [],
  };
};
