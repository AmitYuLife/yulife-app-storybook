import { createAction } from "@reduxjs/toolkit";
import {
  ChallengeEndSuccessPayload,
  ChallengeStartActionPayload,
  ChallengeStartPayload,
  ChallengeSubmissionStatus,
  ChallengeUpdateSuccessPayload,
  FinishInAppMediaChallengeActionPayload,
  GetDailyChallengeAmountAvailablePayload,
  UpdateChallengeAppButtonPayload,
} from "./levels.types";

export const CHALLENGE_SUBMIT_UNITY = "CHALLENGE_SUBMIT_UNITY";

export const CHALLENGE_START = "CHALLENGE_START";
export const CHALLENGE_START_SUCCESS = "CHALLENGE_START_SUCCESS";
export const CHALLENGE_START_FAIL = "CHALLENGE_START_FAIL";
export const FINISH_IN_APP_MEDIA_CHALLENGE = "FINISH_IN_APP_MEDIA_CHALLENGE";
export const CHALLENGE_START_INITIAL_STEPS = "CHALLENGE_START_INITIAL_STEPS";
export const CHALLENGE_IS_ACTIVE = "CHALLENGE_IS_ACTIVE";

export const CHALLENGE_UPDATE_SUCCESS = "CHALLENGE_UPDATE_SUCCESS";
export const CHALLENGE_UPDATE_FAIL = "CHALLENGE_UPDATE_FAIL";

export const CHALLENGE_CONTINUE = "CHALLENGE_CONTINUE";

export const CHALLENGE_END = "CHALLENGE_END";
export const CHALLENGE_END_SUCCESS = "CHALLENGE_END_SUCCESS";
export const CHALLENGE_END_FAIL = "CHALLENGE_END_FAIL";

export const CHALLENGE_NO_DATA_DEFER = "CHALLENGE_NO_DATA_DEFER";

export const CHALLENGE_RESET = "CHALLENGE_RESET";
export const CHALLENGE_RESET_SUCCESS = "CHALLENGE_RESET_SUCCESS";
export const CHALLENGE_RESET_FAIL = "CHALLENGE_RESET_FAIL";

export const CHALLENGE_CANCEL = "CHALLENGE_CANCEL";
export const CHALLENGE_CANCEL_SUCCESS = "CHALLENGE_CANCEL_SUCCESS";
export const CHALLENGE_CANCEL_FAIL = "CHALLENGE_CANCEL_FAIL";

export const GET_DAILY_CHALLENGE_AMOUNT_AVAILABLE_SUCCESS = "GET_DAILY_CHALLENGE_AMOUNT_AVAILABLE_SUCCESS";

export const UPDATE_CHALLENGE_APP_BUTTON = "UPDATE_CHALLENGE_APP_BUTTON";
export const SET_CHALLENGE_SUBMISSION_STATUS = "SET_CHALLENGE_SUBMISSION_STATUS";

export const CLEAR_CHALLENGE_START_ERROR = "CLEAR_CHALLENGE_START_ERROR";

export const submitUnityAction = createAction<{ levelId: string }, typeof CHALLENGE_SUBMIT_UNITY>(
  CHALLENGE_SUBMIT_UNITY
);

export const challengeStartSuccessAction = createAction<ChallengeStartPayload, typeof CHALLENGE_START_SUCCESS>(
  CHALLENGE_START_SUCCESS
);

export const pedometerStepsChallengeStarted = createAction<number, typeof CHALLENGE_START_INITIAL_STEPS>(
  CHALLENGE_START_INITIAL_STEPS
);

export const challengeUpdateSuccessAction = createAction<
  ChallengeUpdateSuccessPayload,
  typeof CHALLENGE_UPDATE_SUCCESS
>(CHALLENGE_UPDATE_SUCCESS);

export const challengeContinueAction = createAction(CHALLENGE_CONTINUE);

/**
 * @param payload.location used for debugging purposes. For tracking the location of the caller
 */
export const challengeEndAction = createAction(
  CHALLENGE_END,
  function prepare(payload?: { skipDefer?: boolean; location?: string }) {
    return {
      payload,
    };
  }
);

export const challengeEndFailAction = createAction(CHALLENGE_END_FAIL);

export const challengeEndSuccessAction = createAction<ChallengeEndSuccessPayload, typeof CHALLENGE_END_SUCCESS>(
  CHALLENGE_END_SUCCESS
);

export const challengeNoDataDeferAction = createAction(CHALLENGE_NO_DATA_DEFER);

export const challengeResetAction = createAction(CHALLENGE_RESET);

export const challengeResetSuccessAction = createAction<{ subtype: string }, typeof CHALLENGE_RESET_SUCCESS>(
  CHALLENGE_RESET_SUCCESS
);

export const challengeResetFailAction = createAction(CHALLENGE_RESET_FAIL);

export const challengeCancelAction = createAction(CHALLENGE_CANCEL);

export const challengeIsActive = createAction(CHALLENGE_IS_ACTIVE);

export const updateChallengeAppButton = createAction<
  UpdateChallengeAppButtonPayload,
  typeof UPDATE_CHALLENGE_APP_BUTTON
>(UPDATE_CHALLENGE_APP_BUTTON);

export const finishInAppMediaChallengeAction = createAction<
  FinishInAppMediaChallengeActionPayload,
  typeof FINISH_IN_APP_MEDIA_CHALLENGE
>(FINISH_IN_APP_MEDIA_CHALLENGE);

export const challengeStartAction = createAction<ChallengeStartActionPayload, typeof CHALLENGE_START>(CHALLENGE_START);

export const challengeStartFailedAction = createAction<{ error: string }, typeof CHALLENGE_START_FAIL>(
  CHALLENGE_START_FAIL
);

export const clearChallengeStartErrorAction = createAction(CLEAR_CHALLENGE_START_ERROR);

export const getDailyChallengeAmountAvailableActionSuccess = createAction<
  GetDailyChallengeAmountAvailablePayload,
  typeof GET_DAILY_CHALLENGE_AMOUNT_AVAILABLE_SUCCESS
>(GET_DAILY_CHALLENGE_AMOUNT_AVAILABLE_SUCCESS);

export const setChallengeSubmissionStatus = createAction<
  ChallengeSubmissionStatus,
  typeof SET_CHALLENGE_SUBMISSION_STATUS
>(SET_CHALLENGE_SUBMISSION_STATUS);
