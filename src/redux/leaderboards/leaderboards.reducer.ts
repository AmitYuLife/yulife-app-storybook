import { ILeaderboardsStore, ISocialGroup, IGetSocialGroupsSuccessPayload } from "./leaderboards.types";
import {
  addLeaderboardRecentSearch,
  updateSocialGroupLeaderboardsSuccess as updateSocialGroupLeaderboardsSuccessAction,
  updateActiveSocialGroupId as updateActiveSocialGroupIdAction,
  updateActiveSocialGroupLeaderboardId as updateActiveSocialGroupLeaderboardIdAction,
  updateSocialGroupLeaderboardConsents as updateSocialGroupLeaderboardConsentsAction,
  clearSocialGroupLeaderboardRecentSearchHistory as clearSocialGroupLeaderboardRecentSearchHistoryAction,
} from "./leaderboards.actions";
import { logOutSuccess } from "@redux/user/user.actions";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";
import { UserSearchItem } from "@redux/_core/types";

const MAX_SEARCH_ITEMS = 50;

export const getInitialState = (): ILeaderboardsStore => ({
  socialGroups: [],
  recentSearch: [],
  activeSocialGroupId: null,
  activeLeaderboardId: null,
});

const leaderboardReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => {
    if (action.payload && action.payload.leaderboard) {
      return action.payload.leaderboard;
    }

    return state;
  });

  builder.addCase(addLeaderboardRecentSearch, (state, action) => addRecent(state, action.payload));
  builder.addCase(updateSocialGroupLeaderboardsSuccessAction, (state, action) =>
    updateSocialGroupLeaderboardsSuccess(state, action.payload)
  );
  builder.addCase(updateActiveSocialGroupIdAction, (state, action) => updateActiveSocialGroupId(state, action.payload));
  builder.addCase(updateActiveSocialGroupLeaderboardIdAction, (state, action) =>
    updateActiveSocialGroupLeaderboardId(state, action.payload)
  );
  builder.addCase(updateSocialGroupLeaderboardConsentsAction, (state, action) =>
    updateSocialGroupLeaderboardConsents(state, action.payload)
  );
  builder.addCase(clearSocialGroupLeaderboardRecentSearchHistoryAction, (state) =>
    clearSocialGroupLeaderboardRecentSearchHistory(state)
  );
  builder.addCase(logOutSuccess, getInitialState);
  builder.addDefaultCase((state) => state);
});

const addRecent = (state: ILeaderboardsStore, { item: searchItem }: { item: UserSearchItem }) => {
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

export default leaderboardReducer;
