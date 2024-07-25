import { takeLatest } from "redux-saga/effects";
import {
  QUERY_HEALTH_SMOKING_STATE,
  MUTATION_START_SMOKING_STREAK,
  MUTATION_UPDATE_SMOKING_STREAK,
} from "../health-smoking.actions";
import { queryHealthSmokingState } from "./queryHealthSmokingState.saga";
import { mutationStartSmokingStreak } from "./mutationStartSmokingStreak.saga";
import { mutationUpdateSmokingStreak } from "./mutationUpdateSmokingStreak.saga";

export default [
  takeLatest(QUERY_HEALTH_SMOKING_STATE, queryHealthSmokingState),
  takeLatest(MUTATION_UPDATE_SMOKING_STREAK, mutationUpdateSmokingStreak),
  takeLatest(MUTATION_START_SMOKING_STREAK, mutationStartSmokingStreak),
];
