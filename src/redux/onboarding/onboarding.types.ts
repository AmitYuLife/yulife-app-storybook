export interface IOnboardingStore {
  redeemedOnboarding: boolean;
  reward: number;
  isOnboarding: boolean;
  showIntro: boolean;
  showDuelsIntro: boolean;
  showReferralsBadge: boolean;
  hideDailyScreenInformationIcon: boolean;
}

export type IOnboardingGetUserSuccessPayload = {
  onboarding: Pick<IOnboardingStore, "redeemedOnboarding">;
};

export type SetRedeemedOnboardingPayload = { yuCoinAwarded: number };
export type SetOnboardingReferralsBadgePayload = { showReferralsBadge: boolean };
