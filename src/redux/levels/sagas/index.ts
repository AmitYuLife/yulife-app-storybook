import { takeLatest, takeLeading } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist";
import {
  GET_USER_ACTIVE_CHALLENGE_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_START,
} from "../../user/user.actions";
import {
  CHALLENGE_END,
  CHALLENGE_END_FAIL,
  CHALLENGE_START_SUCCESS,
  CHALLENGE_SUBMIT_UNITY,
  FINISH_IN_APP_MEDIA_CHALLENGE,
  CHALLENGE_CANCEL,
  CHALLENGE_START,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_RESET,
  CHALLENGE_RESET_FAIL,
  CHALLENGE_END_SUCCESS,
} from "../levels.actions";
import { UPDATE_CURRENT_DATE } from "../../device/device.actions";

import startChallengeIfActiveSaga from "./startChallengeIfActive.saga";
import startChallengeSuccessSaga from "./startChallengeSuccess.saga";
import submitUnitySaga from "./submitUnity.saga";
import endChallengeFailSaga from "./endChallengeFail.saga";
import endChallengeSaga from "./endChallenge.saga";
import finishInAppMediaChallengeSaga from "./finishInAppMediaChallenge.saga";
import cancelChallengeSaga from "./cancelChallenge.saga";
import startChallengeSaga from "./startChallenge.saga";
import resetChallengeSuccessSaga from "./resetChallengeSuccessSaga.saga";
import addModalsToQueueAfterChallengeCompleted from "./addModalsToQueueAfterChallengeCompleted.saga";
import { AUTHENTICATED, UPDATE_APP_STATE } from "@redux/app/app.actions";
import stopForegroundPedometerSaga from "./stopForegroundPedometer.saga";
import {
  refetchQuestMapDocumentForCacheUpdate,
  refetchQuestMapIfLevelChangedOnColdStart,
} from "./refetchQuestMapDocumentForCacheUpdate";

export default [
  // startChallenges(),
  takeLatest(CHALLENGE_START_SUCCESS, startChallengeSuccessSaga),
  takeLatest([GET_USER_SUCCESS, LOGIN_USER_SUCCESS, GET_USER_ACTIVE_CHALLENGE_SUCCESS], startChallengeIfActiveSaga),
  takeLatest(CHALLENGE_END_FAIL, endChallengeFailSaga),
  takeLatest(CHALLENGE_SUBMIT_UNITY, submitUnitySaga),
  takeLatest(CHALLENGE_RESET_SUCCESS, resetChallengeSuccessSaga),
  takeLeading(CHALLENGE_END, endChallengeSaga),
  takeLeading(FINISH_IN_APP_MEDIA_CHALLENGE, finishInAppMediaChallengeSaga),
  takeLeading(CHALLENGE_START, startChallengeSaga),
  takeLeading([CHALLENGE_CANCEL, LOGOUT_START], cancelChallengeSaga),
  takeLatest(CHALLENGE_RESET, addModalsToQueueAfterChallengeCompleted),
  takeLatest([AUTHENTICATED, UPDATE_APP_STATE], stopForegroundPedometerSaga),
  takeLatest(
    [CHALLENGE_RESET_SUCCESS, CHALLENGE_RESET_FAIL, LOGIN_USER_SUCCESS, UPDATE_CURRENT_DATE, CHALLENGE_END_SUCCESS],
    refetchQuestMapDocumentForCacheUpdate
  ),
  takeLatest(REHYDRATE, refetchQuestMapIfLevelChangedOnColdStart),
];
