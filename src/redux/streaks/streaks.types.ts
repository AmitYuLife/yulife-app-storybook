export interface IStreaksStore {
  id: string;
  isAvailable: boolean;
  isRedeemed: boolean;
  maxStreak: number;
  nextStreakAvailableAt: string;
  streak: number;
  streakAwardId: string;
  type: string;
  value: number;
  canUseStreakSaver: boolean;
  availableStreakSavers: number;
}

export type IStreaksGetUserSuccessPayload = {
  activeStreak: Omit<IStreaksStore, "isAvailable" | "isRedeemed">;
};
