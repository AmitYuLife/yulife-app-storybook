import {
  setUserNoAccessAction,
  getUserSuccess as getUserSuccessAction,
  loginUserSuccess as loginUserSuccessAction,
  updateConnectionStart,
  updateConnectionFailed,
  updateConnectionSuccess as updateConnectionSuccessAction,
  updateUserProfile as updateUserProfileAction,
  updateUserProfileEvents as updateUserProfileEventsAction,
  updateUserProfileHeroCards as updateUserProfileHeroCardsAction,
  removeUserProfileEvent as removeUserProfileEventAction,
  updateUserGoal as updateUserGoalAction,
  updateUserAvatarRemoteFiles,
  updateUserSurge as updateUserSurgeAction,
  setShowSurgeIntro as setShowSurgeIntroAction,
  logOutSuccess,
  markNotificationsAsViewedByType as markNotificationsAsViewedByTypeAction,
  getUserFeaturesSuccess as getUserFeaturesSuccessAction,
  getUserConnectionsSuccess as getUserConnectionsSuccessAction,
  getUserSessionSuccess,
} from "./user.actions";
import { reduceUserFeatures } from "./user.helpers";
import {
  Events,
  IUserGetUserSuccessPayload,
  MarkNotificationsAsViewedByTypePayload,
  SurgeActivity,
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
  earnRate: 0,
  //TODO: check if we still need this
  surgeIntro: {
    visibility: false,
    activity: null,
    rate: 1,
  },
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
    hasAdBanners: false,
  },
  events: [],
  heroCards: [],
  tabNotifications: [],
  sessionTimestamp: 0,
  supportConfig: {
    supportLevel: null,
  },
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
  builder.addCase(updateUserProfileEventsAction, (state, action) => updateUserProfileEvents(state, action.payload));

  builder.addCase(updateUserProfileHeroCardsAction, (state, action) =>
    updateUserProfileHeroCards(state, action.payload)
  );
  builder.addCase(removeUserProfileEventAction, (state, action) => removeUserProfileEvent(state, action.payload));
  builder.addCase(updateUserGoalAction, (state, action) => updateUserGoal(state, action.payload));
  builder.addCase(updateUserAvatarRemoteFiles, (state, action) => ({
    ...state,
    avatar: { ...state.avatar, avatarRemoteFiles: { ...action.payload } },
  }));
  builder.addCase(updateUserSurgeAction, (state, action) => updateUserSurge(state, action.payload));
  builder.addCase(setShowSurgeIntroAction, (state, action) => updateSurgeIntro(state, action.payload));
  builder.addCase(logOutSuccess, (state) => getInitialState(state.sessionCount));
  builder.addCase(markNotificationsAsViewedByTypeAction, (state, action) =>
    markNotificationsAsViewedByType(state, action.payload)
  );
  builder.addCase(getUserFeaturesSuccessAction, (state, action) => getUserFeaturesSuccess(state, action.payload));
  builder.addCase(getUserConnectionsSuccessAction, (state, action) => getUserConnectionsSuccess(state, action.payload));
  builder.addCase(getUserSessionSuccess, (state) => ({
    ...state,
    sessionCount: state.sessionCount + 1,
    sessionTimestamp: Date.now(),
  }));
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

  if (!persistedState.surgeIntro) {
    newState.surgeIntro = {
      visibility: false,
      activity: null as SurgeActivity,
      rate: 1,
    };
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
    features: (res?.user?.userFeatures || []).reduce(reduceUserFeatures, {}),
  };
};

const loginUserSuccess = (state: IUserStore, res: IUserGetUserSuccessPayload): IUserStore => {
  return {
    ...state,
    id: res?.user?.id,
    firstName: res?.user?.firstName,
    lastName: res?.user?.lastName,
    fullName: res?.user?.fullName,
    features: (res?.user?.userFeatures || []).reduce(reduceUserFeatures, {}),
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

const updateSurgeIntro = (state: IUserStore, surgeIntro: IUserStore["surgeIntro"]) => ({
  ...state,
  surgeIntro,
});

const updateUserProfile = (state: IUserStore, payload: IUpdateUserProfilePayload) => ({
  ...state,
  blackListedNavBarTabs: payload.blackListedNavBarTabs || state.blackListedNavBarTabs || [],
  earnRate: payload.earnRate,
  surge: {
    ...payload.surge,
  },
  avatar: {
    ...payload.avatar,
  },
  passiveChallengesLastUpdate: {
    ...payload.passiveChallengesLastUpdate,
  },
  passiveHourlyActivityLastUpdate: {
    ...payload.passiveHourlyActivityLastUpdate,
  },
  endPointsVersion: {
    ...payload.endPointsVersion,
  },
  notification: {
    ...payload.notification,
  },
  supportConfig: {
    supportLevel: payload.supportConfig?.supportLevel || state.supportConfig?.supportLevel,
  },
  events: payload.events,
  heroCards: payload.heroCards,
  tabNotifications: payload.tabNotifications,
});

const updateUserProfileEvents = (state: IUserStore, events: IUserStore["events"]) => ({
  ...state,
  events,
});

const updateUserProfileHeroCards = (state: IUserStore, heroCards: IUserStore["heroCards"]) => ({
  ...state,
  heroCards,
});

const removeUserProfileEvent = (state: IUserStore, id: string) => ({
  ...state,
  events: state.events.filter((event) => event.id !== id),
});

const updateUserGoal = (state: IUserStore, payload: Partial<Events>): IUserStore => ({
  ...state,
  events: state.events.map((event) => {
    if (event.id === payload.id) {
      return { ...event, ...payload };
    }

    return event;
  }),
});

const updateUserSurge = (state: IUserStore, payload: UserSurge) => ({
  ...state,
  surge: {
    ...payload,
  },
});

const markNotificationsAsViewedByType = (state: IUserStore, payload: MarkNotificationsAsViewedByTypePayload) => ({
  ...state,
  tabNotifications: state.tabNotifications.filter((it) => it !== payload.type),
});

const getUserFeaturesSuccess = (state: IUserStore, payload: GetUserFeaturesPayload) => ({
  ...state,
  features: (payload.features || []).reduce(reduceUserFeatures, {}),
});

const getUserConnectionsSuccess = (state: IUserStore, payload: GetUserConnectionsPayload) => ({
  ...state,
  connections: payload.connections || [],
});

export default userReducer;
