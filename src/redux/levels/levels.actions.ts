import {
  CreateActiveChallenge,
  SubmitUnityVariables,
  UpdateActiveChallenge_updateActiveChallenge_challenge as ActiveChallenge,
  UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge as QuestMapActiveChallenge,
} from "@graphql/_core/schema";

export const CHALLENGE_SUBMIT_UNITY = "CHALLENGE_SUBMIT_UNITY";

export const CHALLENGE_START_SUCCESS = "CHALLENGE_START_SUCCESS";
export const CHALLENGE_START_FAIL = "CHALLENGE_START_FAIL";
export const CHALLENGE_START_INITIAL_STEPS = "CHALLENGE_START_INITIAL_STEPS";
export const CHALLENGE_IS_ACTIVE = "CHALLENGE_IS_ACTIVE";

export const CHALLENGE_UPDATE_SUCCESS = "CHALLENGE_UPDATE_SUCCESS";
export const CHALLENGE_UPDATE_FAIL = "CHALLENGE_UPDATE_FAIL";

export const CHALLENGE_CONTINUE = "CHALLENGE_CONTINUE";

export const CHALLENGE_END = "CHALLENGE_END";
export const CHALLENGE_END_SUCCESS = "CHALLENGE_END_SUCCESS";
export const CHALLENGE_END_FAIL = "CHALLENGE_END_FAIL";

export const CHALLENGE_RESET = "CHALLENGE_RESET";
export const CHALLENGE_RESET_SUCCESS = "CHALLENGE_RESET_SUCCESS";
export const CHALLENGE_RESET_FAIL = "CHALLENGE_RESET_FAIL";

export const CHALLENGE_CANCEL = "CHALLENGE_CANCEL";
export const CHALLENGE_CANCEL_SUCCESS = "CHALLENGE_CANCEL_SUCCESS";
export const CHALLENGE_CANCEL_FAIL = "CHALLENGE_CANCEL_FAIL";

export const submitUnityAction = (payload: SubmitUnityVariables) => ({
  payload,
  type: CHALLENGE_SUBMIT_UNITY,
});

export type ChallengeStartPayload = CreateActiveChallenge & {
  levelSlotId: string;
  videoPlayerIsActive?: boolean;
  hideExternalLinks?: boolean;
  videoDuration?: number;
};
export type Challenge = ActiveChallenge | QuestMapActiveChallenge;
export const challengeStartSuccessAction = (payload: ChallengeStartPayload) => ({
  payload,
  type: CHALLENGE_START_SUCCESS,
});

export const pedometerStepsChallengeStarted = (payload: number) => ({
  payload,
  type: CHALLENGE_START_INITIAL_STEPS,
});

export const challengeUpdateSuccessAction = (payload: Challenge) => ({
  payload,
  type: CHALLENGE_UPDATE_SUCCESS,
});

export const challengeContinueAction = () => ({
  type: CHALLENGE_CONTINUE,
});

export const challengeEndAction = () => ({
  type: CHALLENGE_END,
});

export const challengeEndFailAction = () => ({
  type: CHALLENGE_END_FAIL,
});

export const challengeEndSuccessAction = (payload: Challenge) => ({
  payload,
  type: CHALLENGE_END_SUCCESS,
});

export const challengeResetAction = () => ({
  type: CHALLENGE_RESET,
});

export const challengeResetSuccessAction = () => ({
  type: CHALLENGE_RESET_SUCCESS,
});

export const challengeResetFailAction = () => ({
  type: CHALLENGE_RESET_FAIL,
});

export const challengeCancelAction = () => ({
  type: CHALLENGE_CANCEL,
});

export const challengeIsActive = () => ({
  type: CHALLENGE_IS_ACTIVE,
});
