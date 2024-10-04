export interface IRewardsTabStore {
  selectedSection: RewardsSection;
  isInitialised: boolean;
  settings: {
    hasVoucherStore: boolean;
    hasDonationBattlepass: boolean;
    hasUnlockableBattlepassVouchers: boolean;
  };
}

export enum RewardsSection {
  Store = "store",
  Donations = "donations",
  Premium = "premium",
  Unavailable = "unavailable"
}
