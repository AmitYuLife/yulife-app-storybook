import { REHYDRATE } from "redux-persist";
import {
  GetCurrentUser,
  GetCurrentUser_getCurrentUser_connections,
  GetCurrentUser_getCurrentUser_leaderboards,
  LoginUser,
  UpdateMemberConsent,
  GetUserProfile_getUserProfile,
  GetUserProfile_getUserProfile_surge_lottie,
  GetUserProfile_getUserProfile_events as Events,
  GetUserSurge_getUserSurge as IUserSurge,
  MarkMobileNotificationsAsViewedByTypeVariables,
} from "@graphql/_core/schema";
import { MobileConsentInput, MobileTabs } from "@graphql/_core/schema/globalTypes";
import { SyncAction } from "../_core/types";
import {
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  SET_SHOW_SURGE_INTRO,
  SET_USER_NO_ACCESS,
  UPDATE_CONNECTION_FAILED,
  UPDATE_CONNECTION_START,
  UPDATE_CONNECTION_SUCCESS,
  UPDATE_USER_CONSENT_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_EVENTS,
  UPDATE_USER_AVATAR,
  UPDATE_USER_SURGE,
  UPDATE_USER_GOAL,
  REMOVE_USER_PROFILE_EVENT,
  MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE,
  GET_USER_SESSION_SUCCESS,
} from "./user.actions";
import { reduceUserFeatures } from "./user.helpers";
import moment from "moment";
import { features } from "./features.data";

type FeatureKey = typeof features[number];

export type IFeature = Record<FeatureKey, boolean>;

export type ILeaderboard = GetCurrentUser_getCurrentUser_leaderboards & {
  isLoading?: boolean;
};

type Connection = GetCurrentUser_getCurrentUser_connections & { isLoading?: boolean };
type SurgeLottie = GetUserProfile_getUserProfile_surge_lottie;

export enum MembershipTypes {
  "YULIFE_LITE" = "Yulife Lite",
  "INSTANT_GROUP" = "Instant Group",
  "YULIFE_ALPHA" = "Yulife Alpha",
}

type SurgeActivity = "steps" | "meditation" | "all" | null;

export interface IUserStore {
  sessionCount: number;
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  businessAccountId: string;
  archived: boolean;
  connections: Connection[];
  consent: MobileConsentInput;
  features: IFeature;
  earnRate: number;
  blackListedNavBarTabs: string[];
  surgeIntro: {
    visibility: boolean;
    activity: SurgeActivity;
    rate: number;
  };
  surge: {
    endDateTime: string;
    multiplier: string;
    title: string;
    description: string;
    lottie: SurgeLottie;
  };
  avatar: {
    isAvatarCreated: boolean;
    avatarRemoteFiles: {
      svgFull: string;
      pngFull: string;
      pngMini: string;
    };
  };
  passiveChallengesLastUpdate: {
    cycling: string;
    meditation: string;
    steps: string;
  };
  passiveHourlyActivityLastUpdate: {
    steps: string;
  };
  endPointsVersion: {
    getMobileCopy: string;
    getMobileAssets: string;
  };
  notification: {
    hasMobileWhatsNewModal: boolean;
    hasDuels: boolean;
    hasPendingForm: boolean;
    hasAppReview: boolean;
    hasDailyScreenCustomIcon: boolean;
    hasAdBanners: boolean;
  };
  events: Partial<Events>[];
  tabNotifications: MobileTabs[];
  sessionTimestamp: number;
}

export const getInitialState = (sessionCount: number = 0): IUserStore => ({
  sessionCount,
  id: "",
  archived: false,
  firstName: "",
  lastName: "",
  fullName: "",
  businessAccountId: "",
  dateOfBirth: moment().subtract(30, "years").toISOString(), // Default to 30 years old
  consent: {},
  features: {},
  connections: [],
  blackListedNavBarTabs: [],
  earnRate: 0,
  //check if we still need this
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
    hasDailyScreenCustomIcon: false,
    hasAdBanners: false,
  },
  events: [],
  tabNotifications: [],
  sessionTimestamp: 0,
});

export const userReducer = (state: IUserStore = getInitialState(), action: SyncAction): IUserStore => {
  switch (action.type) {
    case SET_USER_NO_ACCESS:
      return { ...state, archived: true };

    case REHYDRATE:
      // the first time app opens there is no data in the persisted state
      if (action.payload && action.payload.user) {
        return updatePersistedState(action.payload.user);
      }

      return state;

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case UPDATE_USER_CONSENT_SUCCESS:
      return updateUserConsentSuccess(state, action.payload);

    case UPDATE_CONNECTION_START:
      return updateConnectionsLoading(state, action.payload, true);

    case UPDATE_CONNECTION_FAILED:
      return updateConnectionsLoading(state, action.payload, false);

    case UPDATE_CONNECTION_SUCCESS:
      return updateConnectionsSuccess(state, action.payload);

    case UPDATE_USER_PROFILE:
      return updateUserProfile(state, action.payload);

    case UPDATE_USER_PROFILE_EVENTS:
      return updateUserProfileEvents(state, action.payload);

    case REMOVE_USER_PROFILE_EVENT:
      return removeUserProfileEvent(state, action.payload);

    case UPDATE_USER_GOAL:
      return updateUserGoal(state, action.payload);

    case UPDATE_USER_AVATAR:
      return { ...state, avatar: { ...state.avatar, avatarRemoteFiles: { ...action.payload } } };

    case UPDATE_USER_SURGE:
      return updateUserSurge(state, action.payload);

    case SET_SHOW_SURGE_INTRO:
      return updateSurgeIntro(state, action.payload);

    case LOGOUT_SUCCESS:
      return getInitialState(state.sessionCount);

    case MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE:
      return markNotificationsAsViewedByType(state, action.payload);

    case GET_USER_SESSION_SUCCESS:
      return {
        ...state,
        sessionCount: state.sessionCount + 1,
        sessionTimestamp: Date.now(),
      };
    default:
      return state;
  }
};

export default userReducer;

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

const getUserSuccess = (
  state: IUserStore,
  {
    getCurrentUser: {
      id,
      firstName,
      lastName,
      fullName,
      dateOfBirth,
      mobileConsent,
      userFeatures = [],
      connections = [],
      businessAccountId,
    },
  }: GetCurrentUser
): IUserStore => {
  return {
    ...state,
    id,
    archived: false,
    firstName,
    lastName,
    fullName,
    dateOfBirth,
    connections,
    businessAccountId,
    consent: {
      ...mobileConsent,
    },
    features: userFeatures.reduce(reduceUserFeatures, {}),
  };
};

const loginUserSuccess = (
  state: IUserStore,
  {
    loginUser: {
      user: {
        id,
        firstName,
        lastName,
        fullName,
        dateOfBirth,
        mobileConsent,
        userFeatures = [],
        connections = [],
        businessAccountId,
      },
    },
  }: LoginUser
): IUserStore => {
  return {
    ...state,
    id,
    firstName,
    lastName,
    fullName,
    dateOfBirth,
    connections,
    consent: {
      ...mobileConsent,
    },
    features: userFeatures.reduce(reduceUserFeatures, {}),
    businessAccountId,
  };
};

const updateUserConsentSuccess = (state: IUserStore, { upsertMobileConsent }: UpdateMemberConsent): IUserStore => ({
  ...state,
  consent: {
    ...upsertMobileConsent,
  },
});

// Only updates loading states
const updateConnectionsLoading = (state: IUserStore, payload: { name: string }, isLoading: boolean): IUserStore => ({
  ...state,
  connections: state.connections.map((connection) => {
    if (connection.name === payload.name) {
      return { ...connection, isLoading };
    }

    return connection;
  }),
});

const updateConnectionsSuccess = (state: IUserStore, payload: { name: string; isConnected: boolean }): IUserStore => ({
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

const updateUserProfile = (state: IUserStore, payload: GetUserProfile_getUserProfile) => ({
  ...state,
  blackListedNavBarTabs: payload.gameSettings?.blackListedNavBarTabs || state.blackListedNavBarTabs || [],
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
  events: payload.events,
  tabNotifications: payload.tabNotifications,
});

const updateUserProfileEvents = (state: IUserStore, events: IUserStore["events"]) => ({
  ...state,
  events,
});

const removeUserProfileEvent = (state: IUserStore, id: string) => ({
  ...state,
  events: state.events.filter((event) => event.id !== id),
});

const updateUserGoal = (state: IUserStore, payload: Events): IUserStore => ({
  ...state,
  events: state.events.map((event) => {
    if (event.id === payload.id) {
      return { ...event, ...payload };
    }

    return event;
  }),
});

const updateUserSurge = (state: IUserStore, payload: IUserSurge) => ({
  ...state,
  surge: {
    ...payload,
  },
});

const markNotificationsAsViewedByType = (
  state: IUserStore,
  payload: MarkMobileNotificationsAsViewedByTypeVariables
) => ({
  ...state,
  tabNotifications: state.tabNotifications.filter((it) => it !== payload.type),
});
