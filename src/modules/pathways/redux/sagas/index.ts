import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "@redux/app/app.actions";
import { PATHWAY_CHALLENGE_CANCEL } from "../pathways.actions";
import { cancelPathwayChallengeSaga } from "./cancelPathwayChallenge.saga";
import { cancelPathwayChallengeIfActiveSaga } from "./cancelPathwayChallengeIfActive.saga";

export default [
  takeLatest(PATHWAY_CHALLENGE_CANCEL, cancelPathwayChallengeSaga),
  takeLatest(AUTHENTICATED, cancelPathwayChallengeIfActiveSaga),
];
