import { REHYDRATE } from "redux-persist";
import { POPUPTYPE } from "../../components/molecules";
import {
  GetCurrentUser,
  GetCurrentUser_getCurrentUser_connections,
  GetCurrentUser_getCurrentUser_leaderboards,
  GetCurrentUser_getCurrentUser_business,
  LoginUser,
  UpdateLeaderboardConsentVariables,
  UpdateMemberConsent,
  GetUserProfile_getUserProfile_surge_lottie,
  GetUserProfile_getUserProfile_events as Events,
  GetUserSurge_getUserSurge as IUserSurge,
  GetAdBanners_getAdBanners as AdBanners,
} from "@graphql/_core/schema";
import { MobileConsentInput } from "@graphql/_core/schema/globalTypes";
import { SyncAction } from "../_core/types";
import {
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  SET_SHOW_SURGE_INTRO,
  SET_USER_NO_ACCESS,
  UPDATE_CONNECTION_FAILED,
  UPDATE_CONNECTION_START,
  UPDATE_CONNECTION_SUCCESS,
  UPDATE_LEADERBOARD_CONSENT_FAILED,
  UPDATE_LEADERBOARD_CONSENT_START,
  UPDATE_LEADERBOARD_CONSENT_SUCCESS,
  UPDATE_LEADERBOARD_POPUP_VISIBILITY,
  // UPDATE_SURGE_POPUP_VISIBILITY,
  UPDATE_USER_CONSENT_SUCCESS,
  UPDATE_ACTIVE_LEADERBOARD_ID,
  LOGOUT_SUCCESS,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_EVENTS,
  UPDATE_USER_AVATAR,
  UPDATE_USER_SURGE,
  UPDATE_USER_GOAL,
  REMOVE_YUSCREEN_NOTIFICATIONS,
  ADD_AD_BANNERS_ON_USER_PROFILE_EVENTS,
} from "./user.actions";
import { AUTHENTICATED } from "@redux/app/app.actions";
import { reduceUserFeatures } from "./user.helpers";
import moment from "moment";
import { features } from "./features.data";

type FeatureKey = typeof features[number];

export type IFeature = Record<FeatureKey, boolean>;

export type ILeaderboard = GetCurrentUser_getCurrentUser_leaderboards & {
  isLoading?: boolean;
};

type Connection = GetCurrentUser_getCurrentUser_connections & { isLoading?: boolean };
type Business = (GetCurrentUser_getCurrentUser_business & { isLoading?: boolean }) | null;
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
  dateOfBirth: string;
  archived: boolean;
  connections: Connection[];
  consent: MobileConsentInput;
  membershipType: string;
  features: IFeature;
  leaderboards: ILeaderboard[];
  activeLeaderboardId: string;
  earnRate: number;
  popupVisibility: {
    /**
     *  Every time we'll add a new feature popup we'll add a new key here and mark it as true,
     *  then on the `REHYDRATE` action type we'll look if the persisted state has that key.
     *  If it does, it means there was no app update. If it doesn't, voila!
     *  The first time someone installs the app also will be handled, as the first state comes from `initialState`
     *  :thugmatt:
     */
    leaderboard: boolean;
  };
  surgeIntro: {
    visibility: boolean;
    activity: SurgeActivity;
    rate: number;
  };
  business: Business;
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
    hasYuScreenNotification: boolean;
    hasAdBanners: boolean;
  };
  events: Partial<Events>[];
}

export const getInitialState = (sessionCount: number = 0): IUserStore => ({
  sessionCount,
  id: "",
  archived: false,
  firstName: "",
  lastName: "",
  dateOfBirth: moment().subtract(30, "years").toISOString(), // Default to 30 years old
  membershipType: "",
  consent: {},
  features: {},
  connections: [],
  leaderboards: [],
  activeLeaderboardId: "",
  earnRate: 0,
  popupVisibility: {
    leaderboard: false,
  },
  //check if we still need this
  surgeIntro: {
    visibility: false,
    activity: null,
    rate: 1,
  },
  business: {
    businessAccountName: "",
    alpha: true,
    isGroup: false,
    isWellbeingAccess: false,
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
    hasYuScreenNotification: false,
    hasAdBanners: false,
  },
  events: [],
});

export const userReducer = (state: IUserStore = getInitialState(), action: SyncAction): IUserStore => {
  switch (action.type) {
    case UPDATE_ACTIVE_LEADERBOARD_ID:
      return { ...state, activeLeaderboardId: action.payload };
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

    case UPDATE_LEADERBOARD_CONSENT_START:
      return updateLeaderboardLoading(state, action.payload, true);

    case UPDATE_LEADERBOARD_CONSENT_SUCCESS:
    case UPDATE_LEADERBOARD_CONSENT_FAILED:
      return updateLeaderboardConsent(state, action.payload);

    case UPDATE_CONNECTION_START:
      return updateConnectionsLoading(state, action.payload, true);

    case UPDATE_CONNECTION_FAILED:
      return updateConnectionsLoading(state, action.payload, false);

    case UPDATE_CONNECTION_SUCCESS:
      return updateConnectionsSuccess(state, action.payload);

    case UPDATE_LEADERBOARD_POPUP_VISIBILITY:
      return updatePopupVisibility(state, action.payload, POPUPTYPE.LEADERBOARD);

    case UPDATE_USER_PROFILE:
      return updateUserProfile(state, action.payload);

    case UPDATE_USER_PROFILE_EVENTS:
      return updateUserProfileEvents(state, action.payload);

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

    case REMOVE_YUSCREEN_NOTIFICATIONS:
      return removeYuScreenNotifications(state);

    case ADD_AD_BANNERS_ON_USER_PROFILE_EVENTS:
      return addAdBannersOnUserProfileEvents(state, action.payload);

    case AUTHENTICATED:
      return {
        ...state,
        sessionCount: state.sessionCount + 1,
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

  if (!persistedState.business) {
    newState.business = {
      businessAccountName: "",
      alpha: true,
      isGroup: false,
      isWellbeingAccess: false,
    };
  }

  if (!persistedState.lastName || !persistedState.firstName) {
    newState.firstName = "";
    newState.lastName = "";
  }

  if (!persistedState.popupVisibility) {
    // leaderboards is the first popup
    newState.popupVisibility = { leaderboard: true };
    return newState;
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
      dateOfBirth,
      membershipType,
      leaderboards = [],
      mobileConsent,
      userFeatures = [],
      connections = [],
      business = {
        businessAccountName: "",
        alpha: true,
        isGroup: false,
        isWellbeingAccess: false,
      },
    },
  }: GetCurrentUser
): IUserStore => {
  const activeLeaderboardId = activeLeaderboardSafeguard(state.activeLeaderboardId, leaderboards);

  return {
    ...state,
    id,
    archived: false,
    firstName,
    lastName,
    dateOfBirth,
    connections,
    membershipType,
    consent: {
      ...mobileConsent,
    },
    features: userFeatures.reduce(reduceUserFeatures, {}),
    leaderboards,
    activeLeaderboardId,
    business,
  };
};

function activeLeaderboardSafeguard(
  activeLeaderboardId: string,
  leaderboards: GetCurrentUser_getCurrentUser_leaderboards[]
) {
  const activeLeaderboardExists =
    activeLeaderboardId && leaderboards.findIndex((item) => item.leaderboardId === activeLeaderboardId) !== -1;

  if (!activeLeaderboardExists) {
    return leaderboards[0]?.leaderboardId;
  }

  return activeLeaderboardId;
}

const loginUserSuccess = (
  state: IUserStore,
  {
    loginUser: {
      user: { firstName, lastName, dateOfBirth, leaderboards = [], mobileConsent, userFeatures = [], connections = [] },
    },
  }: LoginUser
): IUserStore => ({
  ...state,
  firstName,
  lastName,
  dateOfBirth,
  connections,
  consent: {
    ...mobileConsent,
  },
  features: userFeatures.reduce(reduceUserFeatures, {}),
  leaderboards,
});

const updateUserConsentSuccess = (state: IUserStore, { upsertMobileConsent }: UpdateMemberConsent): IUserStore => ({
  ...state,
  consent: {
    ...upsertMobileConsent,
  },
});

// Only updates loading states
const updateLeaderboardLoading = (
  state: IUserStore,
  payload: UpdateLeaderboardConsentVariables,
  isLoading: boolean
): IUserStore => ({
  ...state,
  leaderboards: state.leaderboards.map((leaderboard) => {
    if (leaderboard.leaderboardId === payload.leaderboardId) {
      return { ...leaderboard, isLoading };
    }

    return leaderboard;
  }),
});

const updateLeaderboardConsent = (state: IUserStore, payload: UpdateLeaderboardConsentVariables): IUserStore => ({
  ...state,
  leaderboards: state.leaderboards.map((leaderboard) => {
    if (leaderboard.leaderboardId === payload.leaderboardId) {
      return { ...leaderboard, isLoading: false, consent: payload.consent };
    }

    return leaderboard;
  }),
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

const updatePopupVisibility = (state: IUserStore, payload: boolean, type: POPUPTYPE): IUserStore => {
  switch (type) {
    case POPUPTYPE.LEADERBOARD:
      return {
        ...state,
        popupVisibility: {
          ...state.popupVisibility,
          leaderboard: payload,
        },
      };
    default:
      return state;
  }
};

const updateSurgeIntro = (state: IUserStore, surgeIntro: IUserStore["surgeIntro"]) => ({
  ...state,
  surgeIntro,
});

const updateUserProfile = (state: IUserStore, payload: Partial<IUserStore>) => ({
  ...state,
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
  endPointsVersion: {
    ...payload.endPointsVersion,
  },
  notification: {
    ...payload.notification,
  },
  events: payload.events,
});

const updateUserProfileEvents = (state: IUserStore, events: IUserStore["events"]) => ({
  ...state,
  events,
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

const removeYuScreenNotifications = (state: IUserStore) => ({
  ...state,
  notification: {
    ...state.notification,
    hasYuScreenNotification: false,
  },
});

const addAdBannersOnUserProfileEvents = (state: IUserStore, payload: AdBanners[]) => {
  const formatData = payload.map(({ id, imageUrl, navigateTo }) => ({
    id,
    imageUrl: imageUrl.uri,
    navigateTo,
  }));

  return {
    ...state,
    events: [...state.events, ...formatData],
  };
};
