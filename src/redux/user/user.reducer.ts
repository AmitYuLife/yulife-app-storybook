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
  LOGOUT,
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
type Business = (GetCurrentUser_getCurrentUser_business & { isLoading?: boolean }) | null;

export enum MembershipTypes {
  "YULIFE_LITE" = "Yulife Lite",
  "INSTANT_GROUP" = "Instant Group",
  "YULIFE_ALPHA" = "Yulife Alpha",
}

type SurgeActivity = "steps" | "meditation" | "all" | null;

export interface IUserStore {
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
}

export const getInitialState = (): IUserStore => ({
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
  popupVisibility: {
    leaderboard: false,
  },
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

    case SET_SHOW_SURGE_INTRO:
      return updateSurgeIntro(state, action.payload);

    case LOGOUT:
      return getInitialState();

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
  if (!persistedState.popupVisibility) {
    // leaderboards is the first popup
    return { ...persistedState, popupVisibility: { leaderboard: true } };
  }

  // const popupVisibilityKeys = Object.keys(persistedState.popupVisibility);

  // if (!popupVisibilityKeys.includes("surge")) {
  //     return { ...persistedState, popupVisibility: { ...persistedState.popupVisibility, surge: true } };
  // }
  if (!persistedState.surgeIntro) {
    return {
      ...persistedState,
      surgeIntro: {
        visibility: false,
        activity: null as SurgeActivity,
        rate: 1,
      },
    };
  }

  if (!persistedState.business) {
    return {
      ...persistedState,
      business: {
        businessAccountName: "",
        alpha: true,
        isGroup: false,
        isWellbeingAccess: false,
        isInstantGroup: false,
      },
    };
  }

  if (!persistedState.lastName || !persistedState.firstName) {
    return {
      ...persistedState,
      firstName: "",
      lastName: "",
    };
  }

  return persistedState;
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
