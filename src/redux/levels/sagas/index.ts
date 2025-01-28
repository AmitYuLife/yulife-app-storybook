import { takeLatest, takeLeading } from "redux-saga/effects";
import {
  GET_USER_ACTIVE_CHALLENGE_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_START,
} from "../../user/user.actions";
import {
  CHALLENGE_END,
  CHALLENGE_END_FAIL,
  CHALLENGE_RESET,
  CHALLENGE_START_SUCCESS,
  CHALLENGE_SUBMIT_UNITY,
  FINISH_IN_APP_MEDIA_CHALLENGE,
  CHALLENGE_CANCEL,
  CHALLENGE_START,
  CHALLENGE_RESET_SUCCESS,
} from "../levels.actions";

import resetChallengeSaga from "./resetChallenge.saga";
import startChallengeIfActiveSaga from "./startChallengeIfActive.saga";
import startChallengeSuccessSaga from "./startChallengeSuccess.saga";
import submitUnitySaga from "./submitUnity.saga";
import endChallengeFailSaga from "./endChallengeFail.saga";
import endChallengeSaga from "./endChallenge.saga";
import finishInAppMediaChallengeSaga from "./finishInAppMediaChallenge.saga";
import cancelChallengeSaga from "./cancelChallenge.saga";
import startChallengeSaga from "./startChallenge.saga";
import resetChallengeSuccessSaga from "./resetChallengeSuccessSaga.saga";

export default [
  // startChallenges(),
  takeLatest(CHALLENGE_START_SUCCESS, startChallengeSuccessSaga),
  takeLatest([GET_USER_SUCCESS, LOGIN_USER_SUCCESS, GET_USER_ACTIVE_CHALLENGE_SUCCESS], startChallengeIfActiveSaga),
  takeLatest(CHALLENGE_RESET, resetChallengeSaga),
  takeLatest(CHALLENGE_END, endChallengeSaga),
  takeLatest(CHALLENGE_END_FAIL, endChallengeFailSaga),
  takeLatest(CHALLENGE_SUBMIT_UNITY, submitUnitySaga),
  takeLatest(CHALLENGE_RESET_SUCCESS, resetChallengeSuccessSaga),
  takeLeading(FINISH_IN_APP_MEDIA_CHALLENGE, finishInAppMediaChallengeSaga),
  takeLeading(CHALLENGE_START, startChallengeSaga),
  takeLeading([CHALLENGE_CANCEL, LOGOUT_START], cancelChallengeSaga),
];
