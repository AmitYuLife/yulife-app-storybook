import {
  setUserNoAccessAction,
  getUserSuccess as getUserSuccessAction,
  loginUserSuccess as loginUserSuccessAction,
  updateConnectionStart,
  updateConnectionFailed,
  updateConnectionSuccess as updateConnectionSuccessAction,
  updateUserProfile as updateUserProfileAction,
  updateUserProfileHeroCards as updateUserProfileHeroCardsAction,
  updateUserProfileDataSaverMode as updateUserProfileDataSaverModeAction,
  updateUserAvatarRemoteFiles,
  updateUserSurge as updateUserSurgeAction,
  logOutSuccess,
  getUserFeaturesSuccess as getUserFeaturesSuccessAction,
  getUserConnectionsSuccess as getUserConnectionsSuccessAction,
  updateUserPassiveChallengeSessionId as updateUserPassiveChallengeSessionIdAction,
  getUserSessionSuccess,
} from "./user.actions";
import { reduceUserFeatures } from "./user.helpers";
import { UserFeatures } from "@redux/_core/types";
import {
  IUserGetUserSuccessPayload,
  IFeature,
  UserSurge,
  UserConnection,
  IUpdateUserProfilePayload,
  GetUserFeaturesPayload,
  GetUserConnectionsPayload,
  Connections,
  IUserStore,
} from "./user.types";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

export const getInitialState = (sessionCount: number = 0): IUserStore => ({
  sessionCount,
  id: "",
  archived: false,
  firstName: "",
  lastName: "",
  fullName: "",
  features: {},
  connections: [],
  blackListedNavBarTabs: [],
  enabledHealthProviders: [],
  earnRate: 0,
  surge: {
    endDateTime: "",
    multiplier: "",
    title: "",
    description: "",
    lottie: null,
  },
  avatar: {
    isAvatarCreated: false,
    avatarRemoteFiles: {
      svgFull: "",
      pngFull: "",
      pngMini: "",
    },
  },
  passiveChallengesLastUpdate: {
    sessionId: undefined,
    cycling: "",
    meditation: "",
    steps: "",
  },
  passiveHourlyActivityLastUpdate: {
    steps: "",
  },
  endPointsVersion: {
    getMobileCopy: "",
    getMobileAssets: "",
  },
  notification: {
    hasMobileWhatsNewModal: false,
    hasDuels: false,
    hasPendingForm: false,
    hasAppReview: false,
  },
  heroCards: [],
  sessionTimestamp: 0,
  supportConfig: {
    supportLevel: null,
  },
  dataSaverModeEnabled: false,
});

const userReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(setUserNoAccessAction, (state) => ({ ...state, archived: true }));
  builder.addCase(rehydrateAction, (state, action) => {
    // the first time app opens there is no data in the persisted state
    if (action.payload && action.payload.user) {
      return updatePersistedState(action.payload.user);
    }

    return state;
  });
  builder.addCase(getUserSuccessAction, (state, action) => getUserSuccess(state, action.payload));
  builder.addCase(loginUserSuccessAction, (state, action) => loginUserSuccess(state, action.payload));
  builder.addCase(updateConnectionStart, (state, action) => updateConnectionsLoading(state, action.payload, true));
  builder.addCase(updateConnectionFailed, (state, action) => updateConnectionsLoading(state, action.payload, false));
  builder.addCase(updateConnectionSuccessAction, (state, action) => updateConnectionsSuccess(state, action.payload));
  builder.addCase(updateUserProfileAction, (state, action) => updateUserProfile(state, action.payload));

  builder.addCase(updateUserProfileHeroCardsAction, (state, action) =>
    updateUserProfileHeroCards(state, action.payload)
  );
  builder.addCase(updateUserAvatarRemoteFiles, (state, action) => ({
    ...state,
    avatar: { ...state.avatar, avatarRemoteFiles: { ...action.payload } },
  }));
  builder.addCase(updateUserSurgeAction, (state, action) => updateUserSurge(state, action.payload));
  builder.addCase(logOutSuccess, (state) => getInitialState(state.sessionCount));
  builder.addCase(getUserFeaturesSuccessAction, (state, action) => getUserFeaturesSuccess(state, action.payload));
  builder.addCase(getUserConnectionsSuccessAction, (state, action) => getUserConnectionsSuccess(state, action.payload));
  builder.addCase(getUserSessionSuccess, (state) => ({
    ...state,
    sessionCount: state.sessionCount + 1,
    sessionTimestamp: Date.now(),
  }));
  builder.addCase(updateUserProfileDataSaverModeAction, (state, action) =>
    updateUserProfileDataSaverMode(state, action.payload)
  );
  builder.addCase(updateUserPassiveChallengeSessionIdAction, (state, action) =>
    updateUserPassiveChallengeSessionId(state, action.payload)
  );
  builder.addDefaultCase((state) => state);
});

/**
 * Every time we add new keys to the reducer, they're not in the persisted object for all the previous version
 * So we'll need to update it accordingly
 * @param persistedState
 */
const updatePersistedState = (persistedState: IUserStore) => {
  const newState = { ...persistedState };

  if (typeof persistedState.sessionCount === "undefined") {
    newState.sessionCount = 0;
  }

  if (!persistedState.lastName || !persistedState.firstName || !persistedState.fullName) {
    newState.firstName = "";
    newState.lastName = "";
    newState.fullName = "";
  }

  if (!persistedState.surge) {
    newState.surge = {
      endDateTime: "",
      multiplier: "",
      title: "",
      description: "",
      lottie: null,
    };
  }

  if (!persistedState.avatar) {
    newState.avatar = {
      isAvatarCreated: false,
      avatarRemoteFiles: {
        svgFull: "",
        pngFull: "",
        pngMini: "",
      },
    };
  }

  if (!persistedState.passiveChallengesLastUpdate) {
    newState.passiveChallengesLastUpdate = {
      sessionId: undefined,
      cycling: "",
      meditation: "",
      steps: "",
    };
  }

  if (!persistedState.passiveHourlyActivityLastUpdate) {
    newState.passiveHourlyActivityLastUpdate = {
      steps: "",
    };
  }

  if (!persistedState.endPointsVersion) {
    newState.endPointsVersion = {
      getMobileCopy: "",
      getMobileAssets: "",
    };
  }

  return newState;
};

const getUserSuccess = (state: IUserStore, res: IUserGetUserSuccessPayload): IUserStore => {
  return {
    ...state,
    id: res?.user?.id,
    archived: false,
    firstName: res?.user?.firstName,
    lastName: res?.user?.lastName,
    fullName: res?.user?.fullName,
    features: (res?.user?.userFeatures || []).reduce<IFeature>(
      reduceUserFeatures as (acc: IFeature, item: UserFeatures) => IFeature,
      {}
    ),
  };
};

const loginUserSuccess = (state: IUserStore, res: IUserGetUserSuccessPayload): IUserStore => {
  return {
    ...state,
    id: res?.user?.id,
    firstName: res?.user?.firstName,
    lastName: res?.user?.lastName,
    fullName: res?.user?.fullName,
    features: (res?.user?.userFeatures || []).reduce<IFeature>(
      reduceUserFeatures as (acc: IFeature, item: UserFeatures) => IFeature,
      {}
    ),
  };
};

// Only updates loading states
const updateConnectionsLoading = (state: IUserStore, payload: Connections, isLoading: boolean): IUserStore => ({
  ...state,
  connections: state.connections.map((connection) => {
    if (connection.name === payload.name) {
      return { ...connection, isLoading };
    }

    return connection;
  }),
});

const updateConnectionsSuccess = (state: IUserStore, payload: UserConnection): IUserStore => ({
  ...state,
  connections: state.connections.map((connection) => {
    if (connection.name === payload.name) {
      return { ...connection, isLoading: false, isConnected: payload.isConnected };
    }

    return connection;
  }),
});

const updateUserProfile = (state: IUserStore, payload: IUpdateUserProfilePayload): IUserStore => ({
  ...state,
  blackListedNavBarTabs: payload.blackListedNavBarTabs || state.blackListedNavBarTabs || [],
  earnRate: payload.earnRate ?? state.earnRate,
  surge: payload.surge ? { ...payload.surge } : state.surge,
  avatar: payload.avatar ? { ...payload.avatar } : state.avatar,
  passiveChallengesLastUpdate: payload.passiveChallengesLastUpdate
    ? { ...payload.passiveChallengesLastUpdate }
    : state.passiveChallengesLastUpdate,
  passiveHourlyActivityLastUpdate: payload.passiveHourlyActivityLastUpdate
    ? { ...payload.passiveHourlyActivityLastUpdate }
    : state.passiveHourlyActivityLastUpdate,
  endPointsVersion: payload.endPointsVersion ? { ...payload.endPointsVersion } : state.endPointsVersion,
  notification: payload.notification ? { ...payload.notification } : state.notification,
  supportConfig: {
    supportLevel: payload.supportConfig?.supportLevel ?? state.supportConfig?.supportLevel ?? null,
  },
  heroCards: payload.heroCards ?? state.heroCards,
  enabledHealthProviders: payload.enabledHealthProviders ?? state.enabledHealthProviders,
});

const updateUserProfileHeroCards = (state: IUserStore, heroCards: IUserStore["heroCards"]) => ({
  ...state,
  heroCards,
});

const updateUserSurge = (state: IUserStore, payload: UserSurge) => ({
  ...state,
  surge: {
    ...payload,
  },
});

const getUserFeaturesSuccess = (state: IUserStore, payload: GetUserFeaturesPayload): IUserStore => ({
  ...state,
  features: (payload.features || []).reduce<IFeature>(
    reduceUserFeatures as (acc: IFeature, item: UserFeatures) => IFeature,
    {}
  ),
});

const getUserConnectionsSuccess = (state: IUserStore, payload: GetUserConnectionsPayload) => ({
  ...state,
  connections: payload.connections || [],
});

const updateUserProfileDataSaverMode = (state: IUserStore, payload: boolean) => ({
  ...state,
  dataSaverModeEnabled: payload,
});

const updateUserPassiveChallengeSessionId = (state: IUserStore, payload: string | undefined) => ({
  ...state,
  passiveChallengesLastUpdate: {
    ...state.passiveChallengesLastUpdate,
    sessionId: payload,
  },
});

export default userReducer;
