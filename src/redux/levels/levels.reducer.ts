import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { addSecondsToChallengeEndDateTime, getCurrentPlanetByLevel, Planets } from "@utils";
import { SyncAction } from "../_core/types";
import { PEDOMETER_UPDATES_SUCCESS } from "../pedometer/pedometer.actions";
import {
  GET_USER_ACTIVE_CHALLENGE_SUCCESS,
  GET_USER_COIN_LEDGER_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from "../user/user.actions";
import {
  CHALLENGE_CANCEL,
  CHALLENGE_END_FAIL,
  CHALLENGE_END_SUCCESS,
  CHALLENGE_RESET,
  CHALLENGE_RESET_FAIL,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_START,
  CHALLENGE_START_SUCCESS,
  CHALLENGE_START_FAIL,
  CHALLENGE_UPDATE_SUCCESS,
  CHALLENGE_END,
  CHALLENGE_IS_ACTIVE,
  UPDATE_CHALLENGE_APP_BUTTON,
  CHALLENGE_NO_DATA_DEFER,
} from "./levels.actions";
import { CHALLENGE_START_INITIAL_STEPS } from "./levels.actions";
import {
  ActiveLevelState,
  IActiveLevel,
  ActiveLevelStatus,
  ChallengeUpdateSuccessPayload,
  ChallengeIncomingData,
  ChallengeEndSuccessPayload,
  UpdateChallengeAppButtonPayload,
  ChallengeStartPayload,
  ILevelGetUserSuccessDataPayload,
  GetActiveChallengeSuccessDataPayload,
  ILevelsStoreGetCoinLedger,
  ChallengeSourceType,
} from "./levels.types";

export interface ILevelsStore {
  active: IActiveLevel;
  challengesDoneToday: number;
  dailyChallengeAmountAvailable: number;
  level: number;
  yuniversalMap: number;
  yuniversalLevel: number;
  nextLevelAvailableAt: string;
  currentPlanet: string;
}

export const getInitialState = (): ILevelsStore => ({
  active: {
    chest: {
      type: "yucoin",
      value: null,
    },
    yuniversalChest: null,
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
    hideExternalLinks: true,
    appButton: null,
    levelState: null,
    createdBySource: null,
  },
  challengesDoneToday: 0,
  dailyChallengeAmountAvailable: 1,
  level: 1,
  yuniversalMap: 0,
  yuniversalLevel: 0,
  nextLevelAvailableAt: "",
  currentPlanet: Planets.EARTH,
});

const levelsReducer = (state: ILevelsStore = getInitialState(), action: SyncAction): ILevelsStore => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case CHALLENGE_CANCEL:
      return isCancellingChallenge(state);

    case CHALLENGE_START:
      return challengeStart(state);

    case CHALLENGE_START_SUCCESS:
      return challengeStartSuccess(state, action.payload);

    case CHALLENGE_START_FAIL:
      return challengeStartFail(state);

    case GET_USER_COIN_LEDGER_SUCCESS:
      return getCoinLedgerSuccess(state, action.payload);

    case GET_USER_ACTIVE_CHALLENGE_SUCCESS:
      return getActiveChallengeSuccess(state, action.payload);

    case CHALLENGE_IS_ACTIVE:
      return challengeActive(state);

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

    case UPDATE_CHALLENGE_APP_BUTTON:
      return updateChallengeAppButton(state, action.payload);

    case PEDOMETER_UPDATES_SUCCESS:
      return pedometerUpdate(state, action.payload);

    case CHALLENGE_START_INITIAL_STEPS:
      return { ...state, active: { ...state.active, initialPedometerResult: action.payload } };

    case CHALLENGE_NO_DATA_DEFER:
      return challengeEndDeferred(state);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

export default levelsReducer;

const getUserSuccess = (state: ILevelsStore, data: ILevelGetUserSuccessDataPayload): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    shouldEndOnLastGoalAchieved: data?.levels?.activeChallenge?.shouldEndOnLastGoalAchieved || false,
    fitKitTypes: data?.levels?.activeChallenge?.fitKitTypes || [],
    endDateTime: data?.levels?.activeChallenge?.endDateTime || "",
    levelSlotId: data?.levels?.activeChallenge?.levelSlotId || "",
    milestones: data?.levels?.activeChallenge?.milestones || [],
    rating: data?.levels?.activeChallenge?.rating || state.active.rating || 0,
    startDateTime: data?.levels?.activeChallenge?.startDateTime || "",
    subtype: data?.levels?.activeChallenge?.subtype || "",
    unit: data?.levels?.activeChallenge?.unit || state.active.unit || "",
    challengeIsActive: data?.levels?.activeChallenge?.challengeIsActive,
    createdBySource: data?.levels?.activeChallenge?.createdBySource,
    yuHealth: data?.levels?.activeChallenge?.yuHealth,
  },
  challengesDoneToday: data?.levels?.challengesDoneToday || 0,
  dailyChallengeAmountAvailable: data?.levels?.dailyChallengeAmountAvailable,
});

const loginUserSuccess = (state: ILevelsStore, data: ILevelGetUserSuccessDataPayload): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    shouldEndOnLastGoalAchieved: data?.levels?.activeChallenge?.shouldEndOnLastGoalAchieved || false,
    fitKitTypes: data?.levels?.activeChallenge?.fitKitTypes || [],
    yuHealth: data?.levels?.activeChallenge?.yuHealth,
    endDateTime: data?.levels?.activeChallenge?.endDateTime || "",
    levelSlotId: data?.levels?.activeChallenge?.levelSlotId || "",
    milestones: data?.levels?.activeChallenge?.milestones || [],
    rating: data?.levels?.activeChallenge?.rating || state.active.rating || 0,
    startDateTime: data?.levels?.activeChallenge?.startDateTime || "",
    subtype: data?.levels?.activeChallenge?.subtype || "",
    unit: data?.levels?.activeChallenge?.unit || state.active.unit || "",
    challengeIsActive: data?.levels?.activeChallenge?.challengeIsActive,
    createdBySource: data?.levels?.activeChallenge?.createdBySource,
  },
  challengesDoneToday: data?.levels?.challengesDoneToday || 0,
  dailyChallengeAmountAvailable: data?.levels?.dailyChallengeAmountAvailable,
});

const getCoinLedgerSuccess = (state: ILevelsStore, data: ILevelsStoreGetCoinLedger): ILevelsStore => ({
  ...state,
  level: data?.level || 1,
  yuniversalMap: data?.yuniversalMap || 0,
  yuniversalLevel: data?.yuniversalLevel || 0,
  nextLevelAvailableAt: data?.nextLevelAvailableAt || "",
  currentPlanet: getCurrentPlanetByLevel(data?.level || 1),
});

const getActiveChallengeSuccess = (state: ILevelsStore, data: GetActiveChallengeSuccessDataPayload): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    shouldEndOnLastGoalAchieved: data?.shouldEndOnLastGoalAchieved || false,
    fitKitTypes: data?.fitKitTypes || [],
    yuHealth: data?.yuHealth,
    endDateTime: data?.endDateTime || "",
    levelSlotId: data?.levelSlotId || "",
    milestones: data?.milestones || [],
    rating: data?.rating || state.active.rating || 0,
    startDateTime: data?.startDateTime || "",
    subtype: data?.subtype || "",
    unit: data?.unit || state.active.unit || "",
    challengeIsActive: data?.challengeIsActive,
    createdBySource: data?.createdBySource,
  },
});

const isCancellingChallenge = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: true,
    videoPlayerIsActive: false,
  },
});

const challengeActive = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    challengeIsActive: true,
    levelState: ActiveLevelState.CHALLENGE_ACTIVE,
  },
});

const challengeStartSuccess = (
  state: ILevelsStore,
  {
    createQuestMapLevelChallenge: { challenge, levelSlot, chest, yuniversalChest, hideExternalLinks },
    videoPlayerIsActive,
  }: ChallengeStartPayload
): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    chest: {
      type: chest?.type || "yucoin",
      value: chest?.value || null,
    },
    yuniversalChest,
    shouldEndOnLastGoalAchieved: levelSlot.shouldEndOnLastGoalAchieved || false,
    fitKitTypes: levelSlot.fitKitTypes,
    yuHealth: levelSlot.yuHealth,
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
    hideExternalLinks, // TODO: Delete this after our meditopia player goes live for everyone
    levelState: ActiveLevelState.START_CHALLENGE_SUCCEED,
    createdBySource: ChallengeSourceType.phone,
  },
});

const challengeStart = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: true,
    levelState: ActiveLevelState.STARTING_CHALLENGE,
  },
});

const challengeStartFail = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    levelState: ActiveLevelState.START_CHALLENGE_FAILED,
  },
});

const challengeUpdateSuccess = (state: ILevelsStore, data: ChallengeUpdateSuccessPayload): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: data?.coins || 0,
    isCompleted: data?.isCompleted,
    milestonesLog: data?.milestonesLog || [],
    rating: data?.rating || 0,
    score: getScore(data?.incomingData) || 0,
    isLoading: false,
  },
});

const challengeEndSuccess = (state: ILevelsStore, data: ChallengeEndSuccessPayload): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: data?.coins || state.active.coins,
    level: data?.level || state.active.level,
    isLoading: false,
    milestonesLog: data?.milestonesLog || state.active?.milestonesLog || [],
    rating: data?.rating || state.active.rating,
    score: getScore(data?.incomingData) || state.active.score,
    status:
      (data?.milestonesLog || state.active?.milestonesLog || []).length > 0
        ? ActiveLevelStatus.success
        : ActiveLevelStatus.failed,
    challengeIsActive: false,
    endDeferCount: 0,
    videoPlayerIsActive: false,
  },
});

const challengeResetSuccess = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...getInitialState().active,
    isLoading: false,
    videoPlayerIsActive: false,
    endDeferCount: 0,
  },
});

const challengeResetFail = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    challengeIsActive: false,
    endDeferCount: 0,
  },
});

const updateChallengeAppButton = (state: ILevelsStore, data: UpdateChallengeAppButtonPayload): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    appButton: {
      ...data.appButton,
    },
  },
});

const challengeEndDeferred = (state: ILevelsStore) => {
  return {
    ...state,
    active: {
      ...state.active,
      isLoading: false,
      endDeferCount: (state?.active.endDeferCount ?? 0) + 1,
    },
  };
};

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

const getScore = (data: ChallengeIncomingData) => {
  if (!data) {
    return 0;
  }

  return Math.max(...Object.values(data).map((i) => (typeof i === "number" ? i : 0)));
};
