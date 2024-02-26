import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { addSecondsToChallengeEndDateTime, getCurrentPlanetByLevel, Planets } from "@utils";
import {
  GetCurrentUser,
  LoginUser,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButton,
  UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge as QuestMapActiveChallenge,
  GetUserCoinLedger_coinLedger,
  GetUserActiveChallenge_getUserActiveChallenge,
} from "@graphql/_core/schema";
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
import { CHALLENGE_START_INITIAL_STEPS, ChallengeStartPayload } from "./levels.actions";
import { ActiveLevelState, IActiveLevel, ActiveLevelStatus } from "./levels.types";
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
    challengeIsActive: !!data?.getCurrentUser?.activeChallenge?.challenge?.id,
    yuHealth: data.getCurrentUser?.activeChallenge?.levelSlot?.yuHealth,
  },
  challengesDoneToday: data?.getCurrentUser?.challengesDoneToday || 0,
  dailyChallengeAmountAvailable: data?.getCurrentUser?.dailyChallengeAmountAvailable,
});

const loginUserSuccess = (state: ILevelsStore, data: LoginUser): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    shouldEndOnLastGoalAchieved: data?.loginUser?.user?.activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
    fitKitTypes: data?.loginUser?.user?.activeChallenge?.levelSlot?.fitKitTypes || [],
    yuHealth: data?.loginUser?.user?.activeChallenge?.levelSlot?.yuHealth,
    endDateTime: data?.loginUser?.user?.activeChallenge?.challenge?.endDateTime || "",
    levelSlotId: data?.loginUser?.user?.activeChallenge?.challenge?.levelSlotId || "",
    milestones: data?.loginUser?.user?.activeChallenge?.levelSlot?.milestones || [],
    rating: data?.loginUser?.user?.activeChallenge?.challenge?.rating || state.active.rating || 0,
    startDateTime: data?.loginUser?.user?.activeChallenge?.challenge?.startDateTime || "",
    subtype: data?.loginUser?.user?.activeChallenge?.levelSlot?.subtype || "",
    unit: data?.loginUser?.user?.activeChallenge?.levelSlot?.unit || state.active.unit || "",
    challengeIsActive: !!data?.loginUser?.user?.activeChallenge?.challenge?.id,
  },
  challengesDoneToday: data?.loginUser?.user?.challengesDoneToday || 0,
  dailyChallengeAmountAvailable: data?.loginUser?.user?.dailyChallengeAmountAvailable,
});

const getCoinLedgerSuccess = (state: ILevelsStore, data: GetUserCoinLedger_coinLedger): ILevelsStore => ({
  ...state,
  level: data?.currentLevel || 1,
  yuniversalMap: data?.yuniversalMap || 0,
  yuniversalLevel: data?.yuniversalLevel || 0,
  nextLevelAvailableAt: data?.nextLevelAvailableAt || "",
  currentPlanet: getCurrentPlanetByLevel(data?.currentLevel || 1),
});

const getActiveChallengeSuccess = (
  state: ILevelsStore,
  data: GetUserActiveChallenge_getUserActiveChallenge
): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    shouldEndOnLastGoalAchieved: data?.levelSlot?.shouldEndOnLastGoalAchieved,
    fitKitTypes: data?.levelSlot?.fitKitTypes || [],
    yuHealth: data?.levelSlot?.yuHealth,
    endDateTime: data?.challenge?.endDateTime || "",
    levelSlotId: data?.challenge?.levelSlotId || "",
    milestones: data?.levelSlot?.milestones || [],
    rating: data?.challenge?.rating || state.active.rating || 0,
    startDateTime: data?.challenge?.startDateTime || "",
    subtype: data?.levelSlot?.subtype || "",
    unit: data?.levelSlot?.unit || state.active.unit || "",
    challengeIsActive: !!data?.challenge?.id,
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
    hideExternalLinks, // TODO: Delete this after our meditopia player goes live for everyone
    levelState: ActiveLevelState.START_CHALLENGE_SUCCEED,
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

const challengeUpdateSuccess = (state: ILevelsStore, challenge: QuestMapActiveChallenge): ILevelsStore => ({
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

const challengeEndSuccess = (state: ILevelsStore, challenge: QuestMapActiveChallenge): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    coins: challenge?.yuCoinAwarded || state.active.coins,
    level: challenge?.level || state.active.level,
    isLoading: false,
    milestonesLog: challenge?.milestoneLog || state.active?.milestonesLog || [],
    rating: challenge?.rating || state.active.rating,
    score: getScore(challenge?.incomingData) || state.active.score,
    status:
      (challenge?.milestoneLog || state.active?.milestonesLog || []).length > 0
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

const updateChallengeAppButton = (state: ILevelsStore, button: IButton): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    appButton: {
      ...button,
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

const getScore = (data: QuestMapActiveChallenge["incomingData"]) => {
  if (!data) {
    return 0;
  }

  return Math.max(...Object.values(data).map((i) => (typeof i === "number" ? i : 0)));
};
