export interface IQuestMapStore {
  seenQuestMapNewUserOnboardingAnimation: boolean;
  inventoryItemCount: number;
  streakSaverCount: number;
}

export type GetInventoryInfoSuccessPayload = { count: number; streakSaverCount: number };
