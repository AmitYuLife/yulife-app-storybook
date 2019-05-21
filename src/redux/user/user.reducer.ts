import {
    GetCurrentUser,
    GetCurrentUser_getCurrentUser_connections,
    GetCurrentUser_getCurrentUser_leaderboards,
    LoginUser,
    MobileConsentInput,
    UpdateLeaderboardConsentVariables,
    UpdateMemberConsent
} from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
import {
    GET_USER_SUCCESS,
    LOGIN_USER_SUCCESS,
    SET_USER_NO_ACCESS,
    UPDATE_CONNECTION_FAILED,
    UPDATE_CONNECTION_START,
    UPDATE_CONNECTION_SUCCESS,
    UPDATE_LEADERBOARD_CONSENT_FAILED,
    UPDATE_LEADERBOARD_CONSENT_START,
    UPDATE_LEADERBOARD_CONSENT_SUCCESS,
    UPDATE_USER_CONSENT_SUCCESS
} from "./user.actions";
import { reduceUserFeatures } from "./user.helpers";

interface IFeature {
    [x: string]: boolean;
}

type Leaderboard = GetCurrentUser_getCurrentUser_leaderboards & {
    isLoading?: boolean;
};

type Connection = GetCurrentUser_getCurrentUser_connections & { isLoading?: boolean };

export interface IUserStore {
    archived: boolean;
    connections: Connection[];
    consent: MobileConsentInput;
    features: IFeature;
    leaderboards: Leaderboard[];
}

export const initialState: IUserStore = {
    archived: false,
    connections: [],
    consent: {},
    features: {},
    leaderboards: []
};

export const userReducer = (state: IUserStore = initialState, action: SyncAction): IUserStore => {
    switch (action.type) {
        case SET_USER_NO_ACCESS:
            return { ...state, archived: true };

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
            return updateLeaderboardLoading(state, action.payload, false);

        case UPDATE_CONNECTION_START:
            return updateConnectionsLoading(state, action.payload, true);

        case UPDATE_CONNECTION_SUCCESS:
        case UPDATE_CONNECTION_FAILED:
            return updateConnectionsLoading(state, action.payload, false);

        default:
            return state;
    }
};

export default userReducer;

const getUserSuccess = (
    state: IUserStore,
    { getCurrentUser: { leaderboards = [], mobileConsent, userFeatures = [], connections = [] } }: GetCurrentUser
): IUserStore => ({
    ...state,
    archived: false,
    connections,
    consent: {
        ...mobileConsent
    },
    features: userFeatures.reduce(reduceUserFeatures, {}),
    leaderboards
});

const loginUserSuccess = (
    state: IUserStore,
    {
        loginUser: {
            user: { leaderboards = [], mobileConsent, userFeatures = [], connections = [] }
        }
    }: LoginUser
): IUserStore => ({
    ...state,
    connections,
    consent: {
        ...mobileConsent
    },
    features: userFeatures.reduce(reduceUserFeatures, {}),
    leaderboards
});

const updateUserConsentSuccess = (state: IUserStore, { upsertMobileConsent }: UpdateMemberConsent): IUserStore => ({
    ...state,
    consent: {
        ...upsertMobileConsent
    }
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
    })
});

// Only updates loading states
const updateConnectionsLoading = (state: IUserStore, payload: any, isLoading: boolean): IUserStore => ({
    ...state,
    connections: state.connections.map((connection) => {
        if (connection.name === payload.name) {
            return { ...connection, isLoading };
        }
        return connection;
    })
});
