import {
    CreateActiveChallenge,
    CreateActiveChallengeVariables,
    UpdateActiveChallenge
} from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const CHALLENGE_START = "CHALLENGE_START";
export const CHALLENGE_START_SUCCESS = "CHALLENGE_START_SUCCESS";
export const CHALLENGE_UPDATE_SUCCESS = "CHALLENGE_UPDATE_SUCCESS";
export const CHALLENGE_CONTINUE = "CHALLENGE_CONTINUE";
export const CHALLENGE_TIME_UP = "CHALLENGE_TIME_UP";
export const CHALLENGE_END = "CHALLENGE_END";
export const CHALLENGE_END_SUCCESS = "CHALLENGE_END_SUCCESS";
export const CHALLENGE_RESET = "CHALLENGE_RESET";
export const CHALLENGE_RESET_SUCCESS = "CHALLENGE_RESET_SUCCESS";
export const CHALLENGE_CANCEL = "CHALLENGE_CANCEL";

export type ChallengeStartActionResult = SyncAction<CreateActiveChallengeVariables>;
export type ChallengeStartAction = (payload: CreateActiveChallengeVariables) => ChallengeStartActionResult;
export const challengeStartAction: ChallengeStartAction = (payload) => ({
    payload,
    type: CHALLENGE_START
});

export type ChallengeStartPayload = CreateActiveChallenge & { initialPedometerResult: number };
export type ChallengeStartSuccessActionResult = SyncAction<ChallengeStartPayload>;
export type ChallengeStartSuccessAction = (payload: ChallengeStartPayload) => ChallengeStartSuccessActionResult;
export const challengeStartSuccessAction: ChallengeStartSuccessAction = (payload) => ({
    payload,
    type: CHALLENGE_START_SUCCESS
});

export type ChallengeUpdateSuccessActionResult = SyncAction<UpdateActiveChallenge>;
export type ChallengeUpdateSuccessAction = (payload: UpdateActiveChallenge) => ChallengeUpdateSuccessActionResult;
export const challengeUpdateSuccessAction: ChallengeUpdateSuccessAction = (payload) => ({
    payload,
    type: CHALLENGE_UPDATE_SUCCESS
});

export type ChallengeTimeUpAction = () => SyncAction;
export const challengeTimeUpAction: ChallengeTimeUpAction = () => ({
    type: CHALLENGE_TIME_UP
});

export type ChallengeContinueAction = () => SyncAction;
export const challengeContinueAction: ChallengeContinueAction = () => ({
    type: CHALLENGE_CONTINUE
});

export type ChallengeEndAction = () => SyncAction;
export const challengeEndAction: ChallengeEndAction = () => ({
    type: CHALLENGE_END
});

export type ChallengeEndSuccessActionResult = SyncAction<UpdateActiveChallenge>;
export type ChallengeEndSuccessAction = (payload: UpdateActiveChallenge) => ChallengeEndSuccessActionResult;
export const challengeEndSuccessAction: ChallengeEndSuccessAction = (payload) => ({
    payload,
    type: CHALLENGE_END_SUCCESS
});

export type ChallengeResetAction = () => SyncAction;
export const challengeResetAction: ChallengeResetAction = () => ({
    type: CHALLENGE_RESET
});

export type ChallengeResetSuccessAction = () => SyncAction;
export const challengeResetSuccessAction: ChallengeResetSuccessAction = () => ({
    type: CHALLENGE_RESET_SUCCESS
});

export type ChallengeCancelAction = () => SyncAction;
export const challengeCancelAction: ChallengeCancelAction = () => ({
    type: CHALLENGE_CANCEL
});
