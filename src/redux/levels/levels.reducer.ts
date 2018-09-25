import { CreateActiveChallenge, GetCurrentUser, LoginUser, UpdateActiveChallenge } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
    CHALLENGE_END_SUCCESS,
    CHALLENGE_RESET,
    CHALLENGE_START_SUCCESS,
    CHALLENGE_UPDATE_SUCCESS
} from "./levels.actions";
import { IActiveLevel } from "./levels.selectors";

export interface ILevelsStore {
    active: IActiveLevel;
    level: number;
    nextLevelAvailableAt: string;
}

export const initialState: ILevelsStore = {
    active: {
        coins: 0,
        endDateTime: "",
        levelSlotId: "",
        milestones: [],
        milestonesLog: [],
        rating: 0,
        score: 0,
        startDateTime: "",
        status: null,
        subtype: "",
        unit: ""
    },
    level: 1,
    nextLevelAvailableAt: ""
};

const userReducer = (state: ILevelsStore = initialState, action: SyncAction): ILevelsStore => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        case CHALLENGE_START_SUCCESS:
            return challengeStartSuccess(state, action.payload);

        case CHALLENGE_UPDATE_SUCCESS:
            return challengeUpdateSuccess(state, action.payload);

        case CHALLENGE_END_SUCCESS:
            return challengeEndSuccess(state, action.payload);

        case CHALLENGE_RESET:
            return challengeReset(state);

        default:
            return state;
    }
};

export default userReducer;

const getUserSuccess = (
    state: ILevelsStore,
    { getCurrentUser: { coinLedger, activeChallenge } }: GetCurrentUser
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        endDateTime: pathOr(activeChallenge, "challenge.endDateTime", initialState.active.endDateTime) as string,
        levelSlotId: pathOr(activeChallenge, "challenge.levelSlotId", initialState.active.levelSlotId) as string,
        milestones: pathOr(activeChallenge, "levelSlot.milestones", initialState.active.milestones) as any[],
        rating: pathOr(activeChallenge, "challenge.rating", initialState.active.rating) as number,
        startDateTime: pathOr(activeChallenge, "challenge.startDateTime", initialState.active.startDateTime) as string,
        subtype: pathOr(activeChallenge, "levelSlot.subtype", initialState.active.subtype) as string,
        unit: pathOr(activeChallenge, "levelSlot.unit", initialState.active.unit) as string
    },
    level: coinLedger.currentLevel,
    nextLevelAvailableAt: coinLedger.nextLevelAvailableAt
});

const loginUserSuccess = (
    state: ILevelsStore,
    {
        loginUser: {
            user: { coinLedger }
        }
    }: LoginUser
): ILevelsStore => ({
    ...state,
    level: coinLedger.currentLevel,
    nextLevelAvailableAt: coinLedger.nextLevelAvailableAt
});

const challengeStartSuccess = (
    state: ILevelsStore,
    { createActiveChallenge: { challenge, levelSlot, nextLevelAvailableAt } }: CreateActiveChallenge
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        endDateTime: challenge.endDateTime,
        levelSlotId: challenge.levelSlotId,
        milestones: levelSlot.milestones,
        startDateTime: challenge.startDateTime,
        subtype: levelSlot.subtype,
        unit: levelSlot.unit
    },
    nextLevelAvailableAt
});

const challengeUpdateSuccess = (
    state: ILevelsStore,
    { updateActiveChallenge: { challenge } }: UpdateActiveChallenge
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        coins: pathOr(challenge, "yuCoinAwarded", initialState.active.coins) as number,
        milestonesLog: pathOr(challenge, "milestoneLog", initialState.active.milestonesLog) as any[],
        rating: pathOr(challenge, "rating", initialState.active.rating) as number,
        score: pathOr(challenge, "incomingData.steps", initialState.active.score) as number
    }
});

const challengeEndSuccess = (
    state: ILevelsStore,
    { updateActiveChallenge: { challenge } }: UpdateActiveChallenge
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        coins: pathOr(challenge, "yuCoinAwarded", initialState.active.coins) as number,
        milestonesLog: pathOr(challenge, "milestoneLog", initialState.active.milestonesLog) as any[],
        rating: pathOr(challenge, "rating", initialState.active.rating) as number,
        score: pathOr(challenge, "incomingData.steps", initialState.active.score) as number,
        status: (challenge.milestoneLog || []).length > 0 ? "success" : "failed"
    }
});

const challengeReset = (state: ILevelsStore): ILevelsStore => ({
    ...state,
    active: {
        ...initialState.active
    }
});
