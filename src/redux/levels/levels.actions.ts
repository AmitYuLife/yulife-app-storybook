import { createAction } from "@reduxjs/toolkit";
import {
  CreateQuestMapLevelChallenge,
  SubmitUnityVariables,
  UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge as QuestMapActiveChallenge,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButton,
  CreateQuestMapLevelChallengeVariables,
} from "@graphql/_core/schema";

import { MediaFragment } from "@graphql/__generated";

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

export const UPDATE_CHALLENGE_APP_BUTTON = "UPDATE_CHALLENGE_APP_BUTTON";

export type ChallengeStartPayload = CreateQuestMapLevelChallenge & {
  levelSlotId: string;
  videoPlayerIsActive?: boolean;
  videoDuration?: number;
};

type ChallengeStartActionPayload = {
  levelSlotId: string;
  challengeStartSuccessPayload?: Record<string, string | boolean | number>;
  createQuestMapLevelChallengeVariables: CreateQuestMapLevelChallengeVariables;
};

export const submitUnityAction = createAction<SubmitUnityVariables>(CHALLENGE_SUBMIT_UNITY);

export const challengeStartSuccessAction = createAction<ChallengeStartPayload>(CHALLENGE_START_SUCCESS);

export const pedometerStepsChallengeStarted = createAction<number>(CHALLENGE_START_INITIAL_STEPS);

export const challengeUpdateSuccessAction = createAction<QuestMapActiveChallenge>(CHALLENGE_UPDATE_SUCCESS);

export const challengeContinueAction = createAction(CHALLENGE_CONTINUE);

export const challengeEndAction = createAction(CHALLENGE_END, function prepare(payload?: { skipDefer?: boolean }) {
  return {
    payload,
  };
});

export const challengeEndFailAction = createAction(CHALLENGE_END_FAIL);

export const challengeEndSuccessAction = createAction<QuestMapActiveChallenge>(CHALLENGE_END_SUCCESS);

export const challengeNoDataDeferAction = createAction(CHALLENGE_NO_DATA_DEFER);

export const challengeResetAction = createAction(CHALLENGE_RESET);

export const challengeResetSuccessAction = createAction<{ subtype: string }>(CHALLENGE_RESET_SUCCESS);

export const challengeResetFailAction = createAction(CHALLENGE_RESET_FAIL);

export const challengeCancelAction = createAction(CHALLENGE_CANCEL);

export const challengeIsActive = createAction(CHALLENGE_IS_ACTIVE);

export const updateChallengeAppButton = createAction<Partial<IButton>>(UPDATE_CHALLENGE_APP_BUTTON);

export const finishInAppMediaChallengeAction = createAction<{ video: MediaFragment; eventType: string }>(
  FINISH_IN_APP_MEDIA_CHALLENGE
);

export const challengeStartAction = createAction<ChallengeStartActionPayload>(CHALLENGE_START);

export const challengeStartFailedAction = createAction(CHALLENGE_START_FAIL);
