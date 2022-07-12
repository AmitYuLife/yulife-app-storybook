import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { addSecondsToChallengeEndDateTime } from "@utils";
import { GetCurrentUser, LoginUser } from "@graphql/_core/schema";
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
  CHALLENGE_UPDATE_SUCCESS,
  CHALLENGE_END,
  CHALLENGE_IS_ACTIVE,
} from "./levels.actions";
import { CHALLENGE_START_INITIAL_STEPS, ChallengeStartPayload, Challenge } from "./levels.actions";
import { IActiveLevel } from "./levels.selectors";

export interface ILevelsStore {
  active: IActiveLevel;
  challengesDoneToday: number;
  level: number;
  yuniversalMap: number;
  yuniversalLevel: number;
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
    shouldEndOnLastGoalAchieved: false,
    isCompleted: false, // for meditation, when goal reached
    isLoading: false,
    level: null,
    levelSlotId: "",
    fitKitTypes: [],
    milestones: [],
    milestonesLog: [],
    rating: 0,
    score: 0,
    startDateTime: "",
    status: null,
    subtype: "",
    unit: "",
    challengeIsActive: false,
    videoPlayerIsActive: false,
  },
  challengesDoneToday: 0,
  level: 1,
  yuniversalMap: 0,
  yuniversalLevel: 0,
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

    case CHALLENGE_IS_ACTIVE:
      return { ...state, active: { ...state.active, challengeIsActive: true } };

    case CHALLENGE_UPDATE_SUCCESS:
      return challengeUpdateSuccess(state, action.payload);

    case CHALLENGE_END:
    case CHALLENGE_RESET:
      return challengeLoading(state, true);

    case CHALLENGE_END_FAIL:
      return challengeLoading(state, false);

    case CHALLENGE_END_SUCCESS:
      return challengeEndSuccess(state, action.payload);

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
    shouldEndOnLastGoalAchieved: data?.getCurrentUser?.activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
    fitKitTypes: data?.getCurrentUser?.activeChallenge?.levelSlot?.fitKitTypes || [],
    endDateTime: data?.getCurrentUser?.activeChallenge?.challenge?.endDateTime || "",
    levelSlotId: data?.getCurrentUser?.activeChallenge?.challenge?.levelSlotId || "",
    milestones: data?.getCurrentUser?.activeChallenge?.levelSlot?.milestones || [],
    rating: data?.getCurrentUser?.activeChallenge?.challenge?.rating || state.active.rating || 0,
    startDateTime: data?.getCurrentUser?.activeChallenge?.challenge?.startDateTime || "",
    subtype: data?.getCurrentUser?.activeChallenge?.levelSlot?.subtype || "",
    unit: data?.getCurrentUser?.activeChallenge?.levelSlot?.unit || state.active.unit || "",
    challengeIsActive: false,
  },
  challengesDoneToday: data?.getCurrentUser?.challengesDoneToday || 0,
  level: data?.getCurrentUser?.coinLedger?.currentLevel || 1,
  yuniversalMap: data?.getCurrentUser?.coinLedger?.yuniversalMap || 0,
  yuniversalLevel: data?.getCurrentUser?.coinLedger?.yuniversalLevel || 0,
  nextLevelAvailableAt: data?.getCurrentUser?.coinLedger?.nextLevelAvailableAt || "",
});

const loginUserSuccess = (state: ILevelsStore, data: LoginUser): ILevelsStore => ({
  ...state,
  challengesDoneToday: data?.loginUser?.user?.challengesDoneToday || 0,
  level: data?.loginUser?.user?.coinLedger?.currentLevel || 1,
  yuniversalMap: data?.loginUser?.user?.coinLedger?.yuniversalMap || 0,
  yuniversalLevel: data?.loginUser?.user?.coinLedger?.yuniversalLevel || 0,
  nextLevelAvailableAt: data?.loginUser?.user?.coinLedger?.nextLevelAvailableAt || "",
});

const isCancellingChallenge = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: true,
    videoPlayerIsActive: false,
  },
});

const challengeStartSuccess = (
  state: ILevelsStore,
  { createActiveChallenge: { challenge, levelSlot, chest }, videoPlayerIsActive }: ChallengeStartPayload
): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    chest: {
      type: chest?.type || "yucoin",
      value: chest?.value || null,
    },
    shouldEndOnLastGoalAchieved: levelSlot.shouldEndOnLastGoalAchieved,
    fitKitTypes: levelSlot.fitKitTypes,
    endDateTime: addSecondsToChallengeEndDateTime(challenge.endDateTime),
    level: challenge.level,
    levelSlotId: challenge.levelSlotId,
    milestones: levelSlot.milestones,
    startDateTime: challenge.startDateTime,
    subtype: levelSlot.subtype,
    unit: levelSlot.unit,
    score: 0,
    isLoading: false,
    videoPlayerIsActive,
  },
});

const challengeUpdateSuccess = (state: ILevelsStore, challenge: Challenge): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: challenge?.yuCoinAwarded || 0,
    isCompleted: (challenge?.status || "") === "completed",
    milestonesLog: challenge?.milestoneLog || [],
    rating: challenge?.rating || 0,
    score: getScore(challenge?.incomingData) || 0,
    isLoading: false,
  },
});

const challengeEndSuccess = (state: ILevelsStore, challenge: Challenge): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: challenge?.yuCoinAwarded || state.active.coins,
    level: challenge?.level || state.active.level,
    isLoading: false,
    milestonesLog: challenge?.milestoneLog || state.active.milestonesLog,
    rating: challenge?.rating || state.active.rating,
    score: getScore(challenge?.incomingData) || state.active.score,
    status: (challenge?.milestoneLog || state.active.milestonesLog).length > 0 ? "success" : "failed",
    challengeIsActive: false,
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
    challengeIsActive: false,
  },
});

const pedometerUpdate = (state: ILevelsStore, { steps }: PedometerResponse): ILevelsStore => {
  if (
    state.active.shouldEndOnLastGoalAchieved ||
    !state.active.levelSlotId ||
    moment().isAfter(moment(state.active.endDateTime))
  ) {
    return state;
  }

  const current = state.active.initialPedometerResult !== null ? steps - state.active.initialPedometerResult : 0;
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

const getScore = (data: Challenge["incomingData"]) => {
  if (!data) {
    return 0;
  }

  return Math.max(...Object.values(data).map((i) => (typeof i === "number" ? i : 0)));
};
