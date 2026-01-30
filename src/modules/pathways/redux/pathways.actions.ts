import { createAction } from "@reduxjs/toolkit";

export const PATHWAY_CHALLENGE_STARTED = "PATHWAY_CHALLENGE_STARTED";
export const PATHWAY_CHALLENGE_ENDED = "PATHWAY_CHALLENGE_ENDED";
export const PATHWAY_CHALLENGE_CANCEL = "PATHWAY_CHALLENGE_CANCEL";

interface PathwayChallengeStartedPayload {
  pathwayChallengeId: string;
}

export const pathwayChallengeStarted = createAction<PathwayChallengeStartedPayload, typeof PATHWAY_CHALLENGE_STARTED>(
  PATHWAY_CHALLENGE_STARTED
);
export const pathwayChallengeEnded = createAction<void, typeof PATHWAY_CHALLENGE_ENDED>(PATHWAY_CHALLENGE_ENDED);
export const pathwayChallengeCancel = createAction<void, typeof PATHWAY_CHALLENGE_CANCEL>(PATHWAY_CHALLENGE_CANCEL);
