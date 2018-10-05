import { CreateActiveChallenge, GetCurrentUser, LoginUser, UpdateActiveChallenge } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
    CHALLENGE_END_SUCCESS,
    CHALLENGE_RESET_SUCCESS,
    CHALLENGE_START_SUCCESS,
    CHALLENGE_TIME_UP,
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
        chest: {
            type: "yucoin",
            value: null
        },
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
        timeUp: false,
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

        case CHALLENGE_TIME_UP:
            return challengeTimeUp(state);

        case CHALLENGE_RESET_SUCCESS:
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
        endDateTime: pathOr<string>(activeChallenge, "challenge.endDateTime", initialState.active.endDateTime),
        levelSlotId: pathOr<string>(activeChallenge, "challenge.levelSlotId", initialState.active.levelSlotId),
        milestones: pathOr<any[]>(activeChallenge, "levelSlot.milestones", initialState.active.milestones),
        rating: pathOr<number>(activeChallenge, "challenge.rating", initialState.active.rating),
        startDateTime: pathOr<string>(activeChallenge, "challenge.startDateTime", initialState.active.startDateTime),
        subtype: pathOr<string>(activeChallenge, "levelSlot.subtype", initialState.active.subtype),
        unit: pathOr<string>(activeChallenge, "levelSlot.unit", initialState.active.unit)
    },
    level: coinLedger.currentLevel,
    nextLevelAvailableAt: coinLedger.nextLevelAvailableAt || ""
});

const loginUserSuccess = (state: ILevelsStore, { loginUser }: LoginUser): ILevelsStore => ({
    ...state,
    level: pathOr<number>(loginUser, "user.coinLedger.currentLevel", initialState.level),
    nextLevelAvailableAt: pathOr<string>(
        loginUser,
        "user.coinLedger.nextLevelAvailableAt",
        initialState.nextLevelAvailableAt
    )
});

const challengeStartSuccess = (
    state: ILevelsStore,
    { createActiveChallenge: { challenge, levelSlot, chest } }: CreateActiveChallenge
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        chest: {
            type: pathOr<string>(chest, "type", initialState.active.chest.type),
            value: pathOr<number>(chest, "value", initialState.active.chest.value)
        },
        endDateTime: challenge.endDateTime,
        levelSlotId: challenge.levelSlotId,
        milestones: levelSlot.milestones,
        startDateTime: challenge.startDateTime,
        subtype: levelSlot.subtype,
        unit: levelSlot.unit
    }
});

const challengeUpdateSuccess = (
    state: ILevelsStore,
    { updateActiveChallenge: res }: UpdateActiveChallenge
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        coins: pathOr<number>(res, "challenge.yuCoinAwarded", initialState.active.coins),
        milestonesLog: pathOr<any[]>(res, "challenge.milestoneLog", initialState.active.milestonesLog),
        rating: pathOr<number>(res, "challenge.rating", initialState.active.rating),
        score: pathOr<number>(
            res,
            state.active.subtype === "meditation"
                ? "challenge.incomingData.meditation"
                : "challenge.incomingData.steps",
            initialState.active.score
        )
    }
});

const challengeEndSuccess = (
    state: ILevelsStore,
    { updateActiveChallenge: { challenge } }: UpdateActiveChallenge
): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        coins: pathOr<number>(challenge, "yuCoinAwarded", state.active.coins),
        milestonesLog: pathOr<any[]>(challenge, "milestoneLog", state.active.milestonesLog),
        rating: pathOr<number>(challenge, "rating", state.active.rating),
        score: pathOr<number>(
            challenge,
            state.active.subtype === "meditation" ? "incomingData.meditation" : "incomingData.steps",
            state.active.score
        ),
        status: (challenge.milestoneLog || []).length > 0 ? "success" : "failed",
        timeUp: false
    }
});

const challengeTimeUp = (state: ILevelsStore): ILevelsStore => ({
    ...state,
    active: {
        ...state.active,
        timeUp: true
    }
});

const challengeReset = (state: ILevelsStore): ILevelsStore => ({
    ...state,
    active: {
        ...initialState.active
    }
});
