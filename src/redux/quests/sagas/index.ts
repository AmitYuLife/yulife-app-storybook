import { CHALLENGE_END_SUCCESS } from "@redux/levels/levels.actions";
import { takeLatest } from "redux-saga/effects";
import setQuestsChallengePrompt from "./setQuestsChallengePrompt";

export default [takeLatest(CHALLENGE_END_SUCCESS, setQuestsChallengePrompt)];
