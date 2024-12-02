import { createReducer } from "@reduxjs/toolkit";
import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { addSecondsToChallengeEndDateTime, getCurrentPlanetByLevel, Planets } from "@utils";
import { updatePedometerSuccessAction } from "../pedometer/pedometer.actions";
import {
  getUserActiveChallengeSuccess,
  getUserCoinLedgerSuccess,
  getUserSuccess as getUserSuccessAction,
  loginUserSuccess as loginUserSuccessAction,
  logOutSuccess,
} from "../user/user.actions";
import {
  updateChallengeAppButton as updateChallengeAppButtonAction,
  setChallengeSubmissionStatus as setChallengeSubmissionStatusAction,
  challengeCancelAction,
  challengeStartSuccessAction,
  challengeStartFailedAction,
  challengeIsActive,
  challengeUpdateSuccessAction,
  challengeEndAction,
  challengeResetAction,
  challengeEndFailAction,
  challengeEndSuccessAction,
  challengeResetSuccessAction,
  challengeResetFailAction,
  pedometerStepsChallengeStarted,
  challengeNoDataDeferAction,
  getDailyChallengeAmountAvailableActionSuccess,
  challengeStartAction,
  clearChallengeStartErrorAction,
  getChallengesDoneTodayActionSuccess,
} from "./levels.actions";
import {
  ActiveLevelState,
  ILevelsStore,
  ActiveLevelStatus,
  ChallengeUpdateSuccessPayload,
  ChallengeIncomingData,
  ChallengeEndSuccessPayload,
  UpdateChallengeAppButtonPayload,
  ChallengeStartPayload,
  GetActiveChallengeSuccessDataPayload,
  ILevelsStoreGetCoinLedger,
  ChallengeSourceType,
  GetDailyChallengeAmountAvailablePayload,
  ChallengeSubmissionStatus,
  GetChallengesDoneTodayPayload,
} from "./levels.types";

export const getInitialState = (): ILevelsStore => ({
  active: {
    id: null,
    chest: {
      type: "yucoin",
      value: null,
    },
    levelSlotTemplateId: null,
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
    challengeSubmissionStatus: null,
    submissionErrorCount: 0,
    createChallengeError: "",
  },
  challengeFinishedResult: null,
  challengesDoneToday: 0,
  dailyChallengeAmountAvailable: 1,
  dailyChallengeAmountAvailableWithUnactivatedPowerUps: 0,
  level: 1,
  yuniversalMap: 0,
  yuniversalLevel: 0,
  nextLevelAvailableAt: "",
  currentPlanet: Planets.EARTH,
  staleTimestamp: undefined,
});

const levelsReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(getUserSuccessAction, (state) => getUserSuccess(state));
  builder.addCase(loginUserSuccessAction, (state) => loginUserSuccess(state));
  builder.addCase(challengeCancelAction, (state) => isCancellingChallenge(state));
  builder.addCase(challengeStartAction, (state) => challengeStart(state));
  builder.addCase(challengeStartSuccessAction, (state, action) =>
    validateActiveChallengeUpdate(state, challengeStartSuccess(state, action.payload))
  );
  builder.addCase(challengeStartFailedAction, (state, action) => challengeStartFail(state, action.payload));
  builder.addCase(getUserCoinLedgerSuccess, (state, action) => getCoinLedgerSuccess(state, action.payload));
  builder.addCase(getUserActiveChallengeSuccess, (state, action) =>
    validateActiveChallengeUpdate(state, getActiveChallengeSuccess(state, action.payload))
  );
  builder.addCase(challengeIsActive, (state) => challengeActive(state));
  builder.addCase(challengeUpdateSuccessAction, (state, action) => challengeUpdateSuccess(state, action.payload));
  builder.addCase(challengeEndAction, (state) => challengeLoading(state, true));
  builder.addCase(challengeResetAction, (state) => challengeLoading(state, true));
  builder.addCase(challengeEndFailAction, (state) => challengeLoading(state, false));
  builder.addCase(challengeEndSuccessAction, (state, action) => challengeEndSuccess(state, action.payload));
  builder.addCase(challengeResetSuccessAction, (state) => challengeResetSuccess(state));
  builder.addCase(challengeResetFailAction, (state) => challengeResetFail(state));
  builder.addCase(updateChallengeAppButtonAction, (state, action) => updateChallengeAppButton(state, action.payload));
  builder.addCase(updatePedometerSuccessAction, (state, action) => pedometerUpdate(state, action.payload));
  builder.addCase(pedometerStepsChallengeStarted, (state, action) => ({
    ...state,
    active: { ...state.active, initialPedometerResult: action.payload },
  }));
  builder.addCase(challengeNoDataDeferAction, (state) => challengeEndDeferred(state));
  builder.addCase(getDailyChallengeAmountAvailableActionSuccess, (state, action) =>
    getDailyChallengeAmountAvailable(state, action.payload)
  );
  builder.addCase(setChallengeSubmissionStatusAction, (state, action) =>
    setChallengeSubmissionStatus(state, action.payload)
  );
  builder.addCase(clearChallengeStartErrorAction, (state) => clearChallengeStartError(state));
  builder.addCase(getChallengesDoneTodayActionSuccess, (state, action) =>
    getChallengesDoneToday(state, action.payload)
  );

  builder.addCase(logOutSuccess, (state) => {
    const cleanState = getInitialState();

    return {
      ...cleanState,
      active: {
        ...cleanState.active,
        // keep the initial pedometer result in case the user logs in again
        initialPedometerResult: state.active?.initialPedometerResult || 0,
      },
    };
  });

  builder.addDefaultCase((state) => state);
});

const getUserSuccess = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    createChallengeError: "",
    levelState: state.active.levelState === ActiveLevelState.START_CHALLENGE_FAILED ? null : state.active.levelState,
  },
});

const loginUserSuccess = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    createChallengeError: "",
  },
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
  staleTimestamp: data.staleTimestamp,
  active: {
    ...state.active,
    isLoading: false,
    shouldEndOnLastGoalAchieved: data?.shouldEndOnLastGoalAchieved || false,
    fitKitTypes: data?.fitKitTypes || [],
    yuHealth: data?.yuHealth,
    endDateTime: data?.endDateTime || "",
    level: data?.level,
    yuniversalMap: data?.yuniversalMap,
    levelSlotId: data?.levelSlotId || "",
    levelSlotTemplateId: data?.levelSlotTemplateId || "",
    milestones: data?.milestones || [],
    rating: data?.rating || state.active.rating || 0,
    startDateTime: data?.startDateTime || "",
    subtype: data?.subtype || "",
    unit: data?.unit || state.active.unit || "",
    challengeIsActive: data?.challengeIsActive,
    createdBySource: data?.createdBySource,
    id: data?.id || null,
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
    staleTimestamp,
  }: ChallengeStartPayload
): ILevelsStore => ({
  ...state,
  staleTimestamp,
  active: {
    ...state.active,
    chest: {
      type: chest?.type || "yucoin",
      value: chest?.value || null,
    },
    createChallengeError: "",
    id: challenge.id,
    yuniversalChest,
    shouldEndOnLastGoalAchieved: levelSlot.shouldEndOnLastGoalAchieved || false,
    fitKitTypes: levelSlot.fitKitTypes,
    yuHealth: levelSlot.yuHealth,
    endDateTime: addSecondsToChallengeEndDateTime(challenge.endDateTime),
    level: challenge.level,
    yuniversalMap: challenge.yuniversalMap,
    levelSlotId: challenge.levelSlotId,
    levelSlotTemplateId: challenge.levelSlotTemplateId,
    milestones: levelSlot.milestones,
    startDateTime: challenge.startDateTime,
    subtype: levelSlot.subtype,
    unit: levelSlot.unit,
    score: 0,
    isLoading: false,
    videoPlayerIsActive,
    hideExternalLinks, // TODO: Delete this after our meditopia player goes live for everyone
    levelState: ActiveLevelState.START_CHALLENGE_SUCCEED,
    createdBySource: ChallengeSourceType.Phone,
  },
});

const challengeStart = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: true,
    levelState: ActiveLevelState.STARTING_CHALLENGE,
    createChallengeError: "",
  },
});

const challengeStartFail = (state: ILevelsStore, payload: { error: string }): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    isLoading: false,
    levelState: ActiveLevelState.START_CHALLENGE_FAILED,
    createChallengeError: payload.error,
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
    yuniversalMap: state.active.yuniversalMap || state.yuniversalMap,
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
    id: null,
    levelSlotTemplateId: null,
    challengeSubmissionStatus: ChallengeSubmissionStatus.Success,
    submissionErrorCount: 0,
    createChallengeError: "",
  },
  challengeFinishedResult: {
    unit: state.active.unit,
    coins: data?.coins || state.active.coins,
    level: data?.level || state.active.level,
    rating: data?.rating || state.active.rating,
    score: getScore(data?.incomingData) || state.active.score,
    status:
      (data?.milestonesLog || state.active?.milestonesLog || []).length > 0
        ? ActiveLevelStatus.success
        : ActiveLevelStatus.failed,
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
  challengeFinishedResult: null,
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
  const activeChallengeId = state.active.levelSlotId || state.active.id;

  if (
    state.active.shouldEndOnLastGoalAchieved ||
    !activeChallengeId ||
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

const getDailyChallengeAmountAvailable = (
  state: ILevelsStore,
  payload: GetDailyChallengeAmountAvailablePayload
): ILevelsStore => ({
  ...state,
  dailyChallengeAmountAvailable: payload.dailyChallengeAmountAvailable,
  dailyChallengeAmountAvailableWithUnactivatedPowerUps: payload.dailyChallengeAmountAvailableWithUnactivatedPowerUps,
});

const setChallengeSubmissionStatus = (state: ILevelsStore, challengeSubmissionStatus: ChallengeSubmissionStatus) => {
  const errorCount = state.active?.submissionErrorCount || 0;
  const submissionErrorCount =
    challengeSubmissionStatus === ChallengeSubmissionStatus.Error ? errorCount + 1 : errorCount;
  return {
    ...state,
    active: {
      ...state.active,
      challengeSubmissionStatus,
      submissionErrorCount,
    },
  };
};

const clearChallengeStartError = (state: ILevelsStore): ILevelsStore => ({
  ...state,
  active: {
    ...state.active,
    createChallengeError: "",
    levelState: state.active.levelState === ActiveLevelState.START_CHALLENGE_FAILED ? null : state.active.levelState,
  },
});

const getChallengesDoneToday = (state: ILevelsStore, payload: GetChallengesDoneTodayPayload): ILevelsStore => ({
  ...state,
  challengesDoneToday: payload.challengesDoneToday,
});

const validateActiveChallengeUpdate = (state: ILevelsStore, updatedState: ILevelsStore): ILevelsStore => {
  if (
    state.staleTimestamp &&
    updatedState.staleTimestamp &&
    moment(state.staleTimestamp).isAfter(moment(updatedState.staleTimestamp))
  ) {
    return state;
  }

  return updatedState;
};

export default levelsReducer;
