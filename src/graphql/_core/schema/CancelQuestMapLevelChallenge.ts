/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CancelQuestMapLevelChallenge
// ====================================================

export interface CancelQuestMapLevelChallenge_cancelQuestMapLevelChallenge {
  levelSlotId: string | null;
  status: string | null;
}

export interface CancelQuestMapLevelChallenge {
  cancelQuestMapLevelChallenge: CancelQuestMapLevelChallenge_cancelQuestMapLevelChallenge | null;
}

export interface CancelQuestMapLevelChallengeVariables {
  levelSlotId: string;
  contentId?: string | null;
}
