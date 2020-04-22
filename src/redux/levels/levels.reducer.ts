import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { GetCurrentUser, LoginUser, UpdateActiveChallenge } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { PEDOMETER_UPDATES_SUCCESS } from "../pedometer/pedometer.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
  CHALLENGE_CANCEL,
  CHALLENGE_END,
  CHALLENGE_END_FAIL,
  CHALLENGE_END_SUCCESS,
  CHALLENGE_RESET,
  CHALLENGE_RESET_FAIL,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_START_SUCCESS,
  CHALLENGE_TIME_UP,
  CHALLENGE_UPDATE_SUCCESS,
} from "./levels.actions";
import { CHALLENGE_START_INITIAL_STEPS, ChallengeStartPayload } from "./levels.actions";
import { IActiveLevel } from "./levels.selectors";

export interface ILevelsStore {
  active: IActiveLevel;
  challengesDoneToday: number;
  level: number;
  nextLevelAvailableAt: string;
}

export const initialState: ILevelsStore = {
  active: {
    chest: {
      type: "yucoin",
      value: null,
    },
    coins: 0,
    endDateTime: "",
    initialPedometerResult: 0,
    isCompleted: false, // for meditation, when goal reached
    isLoading: false,
    level: null,
    levelSlotId: "",
    milestones: [],
    milestonesLog: [],
    rating: 0,
    score: 0,
    startDateTime: "",
    status: null,
    subtype: "",
    timeUp: false,
    unit: "",
  },
  challengesDoneToday: 0,
  level: 1,
  nextLevelAvailableAt: "",
};

const levelsReducer = (state: ILevelsStore = initialState, action: SyncAction): ILevelsStore => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case CHALLENGE_CANCEL:
      return isCancellingChallenge(state);

    case CHALLENGE_START_SUCCESS:
      return challengeStartSuccess(state, action.payload);

    case CHALLENGE_UPDATE_SUCCESS:
      return challengeUpdateSuccess(state, action.payload);

    case CHALLENGE_END:
    case CHALLENGE_RESET:
      return challengeLoading(state, true);

    case CHALLENGE_RESET_FAIL:
    case CHALLENGE_END_FAIL:
      return challengeLoading(state, false);

    case CHALLENGE_END_SUCCESS:
      return challengeEndSuccess(state, action.payload);

    case CHALLENGE_TIME_UP:
      return challengeTimeUp(state);

    case CHALLENGE_RESET_SUCCESS:
      return challengeResetSuccess(state);

    case CHALLENGE_RESET_FAIL:
      return challengeResetFail(state);

    case PEDOMETER_UPDATES_SUCCESS:
      return pedometerUpdate(state, action.payload);

    case CHALLENGE_START_INITIAL_STEPS:
      return { ...state, active: { ...state.active, initialPedometerResult: action.payload } };

    default:
      return state;
  }
};

export default levelsReducer;

const getUserSuccess = (state: ILevelsStore, data: GetCurrentUser): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    endDateTime: pathOr<string>(
      data,
      "getCurrentUser.activeChallenge.challenge.endDateTime",
      initialState.active.endDateTime
    ),
    levelSlotId: pathOr<string>(
      data,
      "getCurrentUser.activeChallenge.challenge.levelSlotId",
      initialState.active.levelSlotId
    ),
    milestones: pathOr<any[]>(
      data,
      "getCurrentUser.activeChallenge.levelSlot.milestones",
      initialState.active.milestones
    ),
    rating: pathOr<number>(data, "getCurrentUser.activeChallenge.challenge.rating", initialState.active.rating),
    startDateTime: pathOr<string>(
      data,
      "getCurrentUser.activeChallenge.challenge.startDateTime",
      initialState.active.startDateTime
    ),
    subtype: pathOr<string>(data, "getCurrentUser.activeChallenge.levelSlot.subtype", initialState.active.subtype),
    unit: pathOr<string>(data, "getCurrentUser.activeChallenge.levelSlot.unit", initialState.active.unit),
  },
  challengesDoneToday: pathOr<number>(data, "getCurrentUser.challengesDoneToday", 0),
  level: pathOr<number>(data, "getCurrentUser.coinLedger.currentLevel", 1),
  nextLevelAvailableAt: pathOr<string>(data, "getCurrentUser.coinLedger.nextLevelAvailableAt", ""),
});

const loginUserSuccess = (state: ILevelsStore, data: LoginUser): ILevelsStore => ({
  ...state,
  challengesDoneToday: pathOr<number>(data, "loginUser.user.challengesDoneToday", 0),
  level: pathOr<number>(data, "loginUser.user.coinLedger.currentLevel", initialState.level),
  nextLevelAvailableAt: pathOr<string>(
    data,
    "loginUser.user.coinLedger.nextLevelAvailableAt",
    initialState.nextLevelAvailableAt
  ),
});

const isCancellingChallenge = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: true,
  },
});

const challengeStartSuccess = (
  state: ILevelsStore,
  { createActiveChallenge: { challenge, levelSlot, chest } }: ChallengeStartPayload
): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    chest: {
      type: pathOr<string>(chest, "type", initialState.active.chest.type),
      value: pathOr<number>(chest, "value", initialState.active.chest.value),
    },
    endDateTime: challenge.endDateTime,
    level: challenge.level,
    levelSlotId: challenge.levelSlotId,
    milestones: levelSlot.milestones,
    startDateTime: challenge.startDateTime,
    subtype: levelSlot.subtype,
    unit: levelSlot.unit,
  },
});

const challengeUpdateSuccess = (
  state: ILevelsStore,
  { updateActiveChallenge: res }: UpdateActiveChallenge
): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: pathOr<number>(res, "challenge.yuCoinAwarded", initialState.active.coins),
    isCompleted: pathOr<string>(res, "challenge.status", "") === "completed",
    milestonesLog: pathOr<any[]>(res, "challenge.milestoneLog", initialState.active.milestonesLog),
    rating: pathOr<number>(res, "challenge.rating", initialState.active.rating),
    score: pathOr<number>(
      res,
      state.active.subtype === "meditation" ? "challenge.incomingData.meditation" : "challenge.incomingData.steps",
      initialState.active.score
    ),
  },
});

const challengeEndSuccess = (state: ILevelsStore, res: UpdateActiveChallenge): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: pathOr<number>(res, "updateActiveChallenge.challenge.yuCoinAwarded", state.active.coins),
    isLoading: false,
    milestonesLog: pathOr<any[]>(res, "updateActiveChallenge.challenge.milestoneLog", state.active.milestonesLog),
    rating: pathOr<number>(res, "updateActiveChallenge.challenge.rating", state.active.rating),
    score: pathOr<number>(
      res,
      state.active.subtype === "meditation"
        ? "updateActiveChallenge.challenge.incomingData.meditation"
        : "updateActiveChallenge.challenge.incomingData.steps",
      state.active.score
    ),
    status:
      pathOr<any[]>(res, "updateActiveChallenge.challenge.milestoneLog", state.active.milestonesLog).length > 0
        ? "success"
        : "failed",
    timeUp: false,
  },
});

const challengeTimeUp = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    timeUp: true,
  },
});

const challengeResetSuccess = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...initialState.active,
  },
});

const challengeResetFail = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
  },
});

const pedometerUpdate = (state: ILevelsStore, { steps }: PedometerResponse): ILevelsStore => {
  if (
    state.active.subtype === "meditation" ||
    !state.active.levelSlotId ||
    moment().isAfter(moment(state.active.endDateTime))
  ) {
    return state;
  }

  const current = steps - state.active.initialPedometerResult;
  const score = current > state.active.score ? current : state.active.score;

  return {
    ...state,
    active: {
      ...state.active,
      score,
    },
  };
};

const challengeLoading = (state: ILevelsStore, isLoading: boolean): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading,
  },
});
