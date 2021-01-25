import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { GetCurrentUser, LoginUser, UpdateActiveChallenge } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
import { PEDOMETER_UPDATES_SUCCESS } from "../pedometer/pedometer.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS } from "../user/user.actions";
import {
  CHALLENGE_CANCEL,
  CHALLENGE_END_FAIL,
  CHALLENGE_END_SUCCESS,
  CHALLENGE_RESET,
  CHALLENGE_RESET_FAIL,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_START_SUCCESS,
  CHALLENGE_TIME_UP,
  CHALLENGE_UPDATE_SUCCESS,
  CHALLENGE_END,
} from "./levels.actions";
import { CHALLENGE_START_INITIAL_STEPS, ChallengeStartPayload } from "./levels.actions";
import { IActiveLevel } from "./levels.selectors";

export interface ILevelsStore {
  active: IActiveLevel;
  challengesDoneToday: number;
  level: number;
  nextLevelAvailableAt: string;
}

export const getInitialState = (): ILevelsStore => ({
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
});

const levelsReducer = (state: ILevelsStore = getInitialState(), action: SyncAction): ILevelsStore => {
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

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

export default levelsReducer;

const getUserSuccess = (state: ILevelsStore, data: GetCurrentUser): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    endDateTime: data?.getCurrentUser?.activeChallenge?.challenge?.endDateTime || "",
    levelSlotId: data?.getCurrentUser?.activeChallenge?.challenge?.levelSlotId || "",
    milestones: data?.getCurrentUser?.activeChallenge?.levelSlot?.milestones || [],
    rating: data?.getCurrentUser?.activeChallenge?.challenge?.rating || 0,
    startDateTime: data?.getCurrentUser?.activeChallenge?.challenge?.startDateTime || "",
    subtype: data?.getCurrentUser?.activeChallenge?.levelSlot?.subtype || "",
    unit: data?.getCurrentUser?.activeChallenge?.levelSlot?.unit || "",
  },
  challengesDoneToday: data?.getCurrentUser?.challengesDoneToday || 0,
  level: data?.getCurrentUser?.coinLedger?.currentLevel || 1,
  nextLevelAvailableAt: data?.getCurrentUser?.coinLedger?.nextLevelAvailableAt || "",
});

const loginUserSuccess = (state: ILevelsStore, data: LoginUser): ILevelsStore => ({
  ...state,
  challengesDoneToday: data?.loginUser?.user?.challengesDoneToday || 0,
  level: data?.loginUser?.user?.coinLedger?.currentLevel || 1,
  nextLevelAvailableAt: data?.loginUser?.user?.coinLedger?.nextLevelAvailableAt || "",
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
      type: chest?.type || "yucoin",
      value: chest?.value || null,
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
    coins: res?.challenge?.yuCoinAwarded || 0,
    isCompleted: (res?.challenge?.status || "") === "completed",
    milestonesLog: res?.challenge?.milestoneLog || [],
    rating: res?.challenge?.rating || 0,
    score:
      (state.active.subtype === "meditation"
        ? res?.challenge?.incomingData?.meditation
        : state.active.subtype === "cycling"
        ? res?.challenge?.incomingData?.distance
        : res?.challenge?.incomingData?.steps) || 0,
  },
});

const challengeEndSuccess = (state: ILevelsStore, res: UpdateActiveChallenge): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: res?.updateActiveChallenge?.challenge?.yuCoinAwarded || 0,
    level: res?.updateActiveChallenge?.challenge?.level || 1,
    isLoading: false,
    milestonesLog: res?.updateActiveChallenge?.challenge?.milestoneLog || [],
    rating: res?.updateActiveChallenge?.challenge?.rating || 0,
    score:
      (state.active.subtype === "meditation"
        ? res?.updateActiveChallenge?.challenge?.incomingData?.meditation
        : state.active.subtype === "cycling"
        ? res?.updateActiveChallenge?.challenge?.incomingData?.distance
        : res?.updateActiveChallenge?.challenge?.incomingData?.steps) || state.active.score,
    status: (res?.updateActiveChallenge?.challenge?.milestoneLog || []).length > 0 ? "success" : "failed",
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
    ...getInitialState().active,
    isLoading: false,
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
    state.active.subtype === "cycling" ||
    !state.active.levelSlotId ||
    moment().isAfter(moment(state.active.endDateTime))
  ) {
    return state;
  }

  const current = steps - state.active.initialPedometerResult;
  const score = Math.max(current, state.active.score);

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
