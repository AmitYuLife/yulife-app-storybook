import { takeLatest } from "redux-saga/effects";
import { GET_USER_SUCCESS } from "../../user/user.actions";
import { CHALLENGE_END, CHALLENGE_RESET, CHALLENGE_START_SUCCESS, CHALLENGE_SUBMIT_UNITY } from "../levels.actions";

import endChallengeSaga from "./endChallenge.saga";
import resetChallengeSaga from "./resetChallenge.saga";
import startChallengeIfActiveSaga from "./startChallengeIfActive.saga";
import startChallengeSuccessSaga from "./startChallengeSuccess.saga";
import submitUnitySaga from "./submitUnity.saga";

export default [
  // startChallenges(),
  takeLatest(CHALLENGE_START_SUCCESS, startChallengeSuccessSaga),
  takeLatest(GET_USER_SUCCESS, startChallengeIfActiveSaga),
  takeLatest(CHALLENGE_RESET, resetChallengeSaga),
  takeLatest(CHALLENGE_END, endChallengeSaga),
  takeLatest(CHALLENGE_SUBMIT_UNITY, submitUnitySaga),
];
