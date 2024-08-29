export interface IRewardsTabStore {
  selectedSection: RewardsSection;
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
}
