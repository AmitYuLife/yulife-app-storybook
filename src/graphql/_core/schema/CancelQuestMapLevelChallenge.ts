/* tslint:disable */

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
  /**
   * contentId is deprecated starting with 3.108 client version
   */
  cancelQuestMapLevelChallenge: CancelQuestMapLevelChallenge_cancelQuestMapLevelChallenge | null;
}

export interface CancelQuestMapLevelChallengeVariables {
  levelSlotId: string;
  contentId?: string | null;
}
